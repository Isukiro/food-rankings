/* ==========================================================================
 * Sage — your food guide. A mini chat assistant for The Global Food Encyclopedia.
 * Fully offline: rule-based intents answered from the site's own FOODS database.
 * No network calls, no external dependencies, no globals touched (one IIFE).
 * Null-safe: works even if FOODS failed to load (food intents degrade gracefully).
 * ========================================================================== */
(function () {
  'use strict';

  /* Prevent double-injection if the script tag is ever included twice. */
  if (typeof window !== 'undefined' && window.__sageLoaded) return;
  if (typeof window !== 'undefined') window.__sageLoaded = true;

  /* ------------------------------ pure helpers ------------------------------ */

  function foods() {
    return (typeof FOODS !== 'undefined' && Array.isArray(FOODS)) ? FOODS : [];
  }

  function esc(s) {
    return String(s === null || s === undefined ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* Normalize for fuzzy matching: lowercase, strip accents + punctuation. */
  function norm(s) {
    return String(s || '').toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }

  function singular(w) {
    if (/ies$/.test(w)) return w.replace(/ies$/, 'y');
    if (/ses$/.test(w) || /xes$/.test(w) || /ches$/.test(w) || /shes$/.test(w)) return w.replace(/es$/, '');
    if (/s$/.test(w) && w.length > 3) return w.replace(/s$/, '');
    return w;
  }

  /* Score mapping — duplicated locally (spec: 10-(r-1)*0.035 / 3.5-(r-1)*0.025). */
  function scoreOf(f) {
    if (!f) return null;
    if (f.bestRank) return Math.round((10 - (f.bestRank - 1) * 0.035) * 10) / 10;
    if (f.worstRank) return Math.round((3.5 - (f.worstRank - 1) * 0.025) * 10) / 10;
    return null;
  }

  function tierOf(score) {
    if (score === null || score === undefined) return '–';
    if (score >= 9.5) return 'S';
    if (score >= 8.5) return 'A';
    if (score >= 7.5) return 'B';
    if (score >= 5.0) return 'C';
    if (score >= 2.5) return 'D';
    return 'F';
  }

  function starsOf(score) {
    if (score === null || score === undefined) return '☆☆☆☆☆';
    var full = Math.max(0, Math.min(5, Math.round(score / 2)));
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  }

  function rankBadge(f) {
    var s = scoreOf(f), t = tierOf(s);
    if (f.bestRank) return '★ #' + f.bestRank + ' Best in the World · ' + s.toFixed(1) + '/10 · ' + t + '-tier';
    if (f.worstRank) return '#' + f.worstRank + ' Worst in the World · ' + s.toFixed(1) + '/10 · ' + t + '-tier';
    return 'Unranked — no official score';
  }

  /* Common shorthand aliases → real dish names (only used if the dish exists). */
  var ALIASES = {
    'ramen': 'Tonkotsu Ramen',
    'pizza': 'Pizza Napoletana',
    'tacos': 'Taco al Pastor',
    'taco': 'Taco al Pastor',
    'pho': 'Pho',
    'sushi': 'Sushi',
    'burger': 'Cheeseburger',
    'curry': 'Phanaeng Curry',
    'kimchi': 'Kimchi',
    'dumpling': 'Xiaolongbao'
  };

  function byName(name) {
    var n = norm(name);
    return foods().find(function (f) { return norm(f.name) === n; }) || null;
  }

  /* Fuzzy food finder: alias → exact → starts-with → whole-word includes → includes. */
  function findFood(query) {
    var q = norm(query);
    if (!q) return null;
    var list = foods();
    if (!list.length) return null;

    if (ALIASES[q]) {
      var aliased = byName(ALIASES[q]);
      if (aliased) return aliased;
    }
    var sq = singular(q);
    var exact = list.find(function (f) { return norm(f.name) === q || norm(f.name) === sq; });
    if (exact) return exact;

    var starts = list.filter(function (f) { return norm(f.name).indexOf(q) === 0; });
    if (starts.length) {
      starts.sort(function (a, b) { return a.name.length - b.name.length; });
      return starts[0];
    }
    var wordHit = list.filter(function (f) {
      return new RegExp('(^|[\\s-])' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([\\s-]|$)').test(norm(f.name));
    });
    if (wordHit.length) {
      wordHit.sort(function (a, b) { return a.name.length - b.name.length; });
      return wordHit[0];
    }
    var incl = list.filter(function (f) { return norm(f.name).indexOf(q) !== -1; });
    if (incl.length) {
      incl.sort(function (a, b) {
        var ia = norm(a.name).indexOf(q), ib = norm(b.name).indexOf(q);
        return (ia - ib) || (a.name.length - b.name.length);
      });
      return incl[0];
    }
    return null;
  }

  function foodCardHTML(f) {
    var s = scoreOf(f);
    return '<div class="sage-foodcard">'
      + '<div class="sage-foodhead"><span class="sage-emoji">' + f.emoji + '</span>'
      + '<div><div class="sage-foodname">' + esc(f.name) + '</div>'
      + '<div class="sage-foodmeta">' + esc(f.origin) + ' · ' + esc(f.region) + ' · ' + esc(f.category) + '</div></div></div>'
      + '<p class="sage-def">' + esc(f.definition) + '</p>'
      + '<div class="sage-rankline">' + esc(rankBadge(f)) + (s !== null ? ' <span class="sage-stars">' + starsOf(s) + '</span>' : '') + '</div>'
      + '<p class="sage-research"><strong>Why:</strong> ' + esc(f.research) + '</p>'
      + '</div>';
  }

  /* ------------------------------ intent engine ------------------------------ */
  /* answerFor(text) -> { html, chips } — pure, DOM-free, unit-testable. */

  var OPEN_CHIPS = ['Tell me about tacos', 'Best desserts?', 'Compare ramen vs pho', 'How are foods scored?'];

  var CATEGORIES = ['Main', 'Soup', 'Street Food', 'Snack', 'Dessert', 'Candy', 'Breakfast', 'Drink', 'Side', 'Seafood'];
  var REGIONS = ['Europe', 'Asia', 'Middle East', 'Africa', 'Americas', 'Oceania'];

  function matchCategory(tl) {
    for (var i = 0; i < CATEGORIES.length; i++) {
      var c = CATEGORIES[i], n = norm(c);
      if (tl.indexOf(n) !== -1 || tl.indexOf(singular(n)) !== -1) return c;
    }
    return null;
  }

  function matchRegion(tl) {
    for (var i = 0; i < REGIONS.length; i++) {
      var r = REGIONS[i], n = norm(r);
      if (tl.indexOf(n) !== -1) return r;
      if (n === 'americas' && /\b(america|latin america|usa|mexico|brazil)\b/.test(tl)) return r;
      if (n === 'asia' && /\b(asian|japan|china|thailand|korea|india)\b/.test(tl)) return r;
      if (n === 'europe' && /\b(european|italy|france|spain)\b/.test(tl)) return r;
    }
    return null;
  }

  function needsDB() {
    if (!foods().length) {
      return { html: '<p>My food database didn\u2019t load on this page, so I can\u2019t look that up right now. Try the <strong>Home</strong> or <strong>Rankings</strong> page where the full database is available — I can still explain scoring, tiers, and how the site works!</p>', chips: ['How are foods scored?', 'What do tiers mean?'] };
    }
    return null;
  }

  function intentGreeting(tl) {
    return { html: '<p>Hey there! I\u2019m <strong>Sage</strong> 🧑‍🍳, your food guide. Ask me about any dish, who\u2019s topping the rankings, or how this whole site works.</p>', chips: OPEN_CHIPS };
  }

  function intentHelp() {
    return {
      html: '<p>Here\u2019s what I can do:</p><ul class="sage-list">'
        + '<li>🔍 <strong>Food facts</strong> — “tell me about kimchi”, “what is hákarl?”</li>'
        + '<li>🏆 <strong>Rankings</strong> — “best desserts”, “top 5 snacks”, “worst soups”</li>'
        + '<li>⚖️ <strong>Compare</strong> — “compare ramen vs pho”, “pizza or tacos?”</li>'
        + '<li>🤔 <strong>Why ranked?</strong> — “why is lechona ranked #1?”</li>'
        + '<li>🍽️ <strong>Recommendations</strong> — “recommend something spicy”, “I\u2019m hungry”</li>'
        + '<li>📏 <strong>Methodology</strong> — “how are foods scored?”, “what do tiers mean?”</li>'
        + '<li>🧭 <strong>Site help</strong> — voting, comparing, themes, cookbook, submitting a pick</li>'
        + '</ul>',
      chips: OPEN_CHIPS
    };
  }

  function intentSiteHelp(tl) {
    if (/\b(vote|voting|rate|rating|stars)\b/.test(tl)) {
      return { html: '<p>To vote: open the <strong>Rankings</strong> page, find any dish, and click the stars under it (1–5). Your rating is saved in <em>this browser</em> and shown as the dish\u2019s community score. Go on — crown your own champion. 👑</p>', chips: ['How are foods scored?', 'Best desserts?'] };
    }
    if (/\bcompar/.test(tl)) {
      return { html: '<p>To compare foods: on the <strong>Rankings</strong> page, tick the compare boxes on up to 3 dishes, then hit <strong>Compare</strong> for a side-by-side table of origin, score, tier, and pros &amp; cons. Or just ask me — try “compare ramen vs pho”.</p>', chips: ['Compare ramen vs pho', 'Pizza or tacos?'] };
    }
    if (/\b(tour|tutorial|how (does|do).*(work|site)|guide me)\b/.test(tl)) {
      return { html: '<p>The guided tour walks you through search, rankings, filters, voting and comparing in about 60 seconds. Click <strong>“Take the tour”</strong> in the nav bar (or the button on the homepage) any time to replay it.</p>', chips: ['What can you do?', 'Tell me about tacos'] };
    }
    if (/\b(theme|color|colour|dark mode|light mode|customiz)\b/.test(tl)) {
      return { html: '<p>Click the <strong>⚙️</strong> button in the nav bar to restyle the whole site — Ocean Blue, Forest Green, Royal Plum, Crimson Night, a light Parchment theme, or your own custom colors. Your choice is remembered.</p>', chips: ['What can you do?'] };
    }
    if (/\b(cookbook|bookmark|save|favour|favorite|heart)\b/.test(tl)) {
      return { html: '<p>Tap the <strong>🤍 heart</strong> on any food card to save it to your <strong>Cookbook</strong> page — your personal shortlist, kept in this browser.</p>', chips: ['Recommend something sweet', 'Best snacks?'] };
    }
    if (/\b(submit|suggest.*(pick|food|dish)|add.*food|contact)\b/.test(tl)) {
      return { html: '<p>Know a dish that deserves ranking? Head to the <strong>Contact</strong> page and use the <strong>Submit a Pick</strong> form — your suggestion goes straight to the editor.</p>', chips: ['What can you do?'] };
    }
    if (/\b(search|find|look for)\b/.test(tl)) {
      return { html: '<p>The homepage has the big search bar — type any craving (“dumpling”, “chocolate”, “Japan”) and filter by category or region. Or skip the typing and just ask me: “tell me about tacos”.</p>', chips: ['Tell me about tacos', 'Best desserts?'] };
    }
    return null;
  }

  function intentMethodology(tl) {
    if (/\btiers?\b/.test(tl)) return intentTiers();
    if (/\bscor/.test(tl)) {
      return {
        html: '<p><strong>How scoring works:</strong> the official scores come from real global rankings — TasteAtlas\u2019s <em>100 Best Dishes (2025)</em> and <em>100 Worst Rated Foods (2026)</em> — mapped onto a 10-point scale. #1 best → <strong>10.0/10</strong>, #100 best → <strong>6.5/10</strong>; #1 worst → <strong>3.5/10</strong>, #100 worst → <strong>1.0/10</strong>. Dishes with no official rank get no score — we never invent numbers. Community star votes (saved in your browser) are separate.</p>',
        chips: ['What do tiers mean?', 'Why is lechona ranked #1?']
      };
    }
    return null;
  }

  function intentTiers() {
    return {
      html: '<p><strong>Tiers</strong> are just score brackets, like a report card:</p><ul class="sage-list">'
        + '<li><strong>S</strong> — 9.5+ (legends)</li>'
        + '<li><strong>A</strong> — 8.5+ (elite)</li>'
        + '<li><strong>B</strong> — 7.5+ (excellent)</li>'
        + '<li><strong>C</strong> — 5.0+ (solid)</li>'
        + '<li><strong>D</strong> — 2.5+ (rough)</li>'
        + '<li><strong>F</strong> — below 2.5 (approach with caution ⚠️)</li>'
        + '</ul><p>Unranked dishes show “–” instead of a tier.</p>',
      chips: ['How are foods scored?', 'Worst foods?']
    };
  }

  function intentWhoDecides() {
    return {
      html: '<p>The official rankings are decided by <strong>TasteAtlas\u2019s global voters</strong> — hundreds of thousands of food ratings from around the world (the 2025 best-dishes list and the 2026 worst-rated list). Our editor\u2019s picks and reviews are personal opinions, clearly labeled as such. And your star votes? Those decide the community score, one browser at a time.</p>',
      chips: ['How are foods scored?', 'How do I vote?']
    };
  }

  function intentRankQuery(tl) {
    var m = tl.match(/\b(best|top|worst)\b/);
    if (!m) return null;
    /* avoid hijacking "best desserts?"-style only; require it to look like a ranking ask */
    var kind = m[1] === 'worst' ? 'worst' : 'best';
    var nMatch = tl.match(/\btop\s+(\d{1,2})\b/);
    var n = nMatch ? Math.max(1, Math.min(10, parseInt(nMatch[1], 10))) : 5;
    var cat = matchCategory(tl);
    var region = matchRegion(tl);
    /* require a real target: a category, region, "foods"-ish word, or an explicit top-N */
    if (!cat && !region && nMatch === null && !/\b(food|dish|meal|cuisine|everything|all)\b/.test(tl)) return null;

    var db = needsDB(); if (db) return db;
    var pool = foods().filter(function (f) { return kind === 'best' ? f.bestRank : f.worstRank; });
    if (cat) pool = pool.filter(function (f) { return f.category === cat; });
    if (region) pool = pool.filter(function (f) { return f.region === region; });
    pool.sort(function (a, b) { return (kind === 'best' ? a.bestRank - b.bestRank : a.worstRank - b.worstRank); });
    if (!pool.length) {
      return { html: '<p>No officially ranked dishes found' + (cat ? ' in <strong>' + esc(cat) + '</strong>' : '') + (region ? ' from <strong>' + esc(region) + '</strong>' : '') + ' — the published lists only cover certain dishes. Try “best foods” for the overall top ' + n + '.</p>', chips: ['Best foods?', 'Best desserts?'] };
    }
    var label = (kind === 'best' ? 'Best' : 'Worst') + (cat ? ' ' + cat.toLowerCase() : region ? ' from ' + region : ' foods');
    var items = pool.slice(0, n).map(function (f) {
      var r = kind === 'best' ? f.bestRank : f.worstRank;
      var s = scoreOf(f);
      return '<li><strong>#' + r + '</strong> ' + f.emoji + ' <strong>' + esc(f.name) + '</strong>'
        + ' <span class="sage-dim">(' + esc(f.origin) + ' · ' + s.toFixed(1) + '/10 · ' + tierOf(s) + '-tier)</span></li>';
    }).join('');
    return {
      html: '<p>Top ' + Math.min(n, pool.length) + ' ' + esc(label) + ':</p><ol class="sage-list sage-ranked">' + items + '</ol>'
        + '<p class="sage-dim">Full Top 100s live on the <strong>Rankings</strong> page.</p>',
      chips: [kind === 'best' ? 'Worst foods?' : 'Best foods?', 'Why is ' + pool[0].name.toLowerCase() + ' ranked #' + (kind === 'best' ? pool[0].bestRank : pool[0].worstRank) + '?']
    };
  }

  function intentWhyRanked(tl, raw) {
    var m = raw.match(/why\s+(?:is|was)\s+(.+?)\s+ranked/i);
    if (!m) return null;
    var db = needsDB(); if (db) return db;
    var f = findFood(m[1].replace(/[#?]$/, '').trim());
    if (!f) return { html: '<p>Hmm, I couldn\u2019t find a dish matching “' + esc(m[1]) + '”. Check the spelling or try the search bar on the homepage.</p>', chips: OPEN_CHIPS };
    var s = scoreOf(f);
    if (f.bestRank || f.worstRank) {
      return {
        html: '<p><strong>' + esc(f.name) + '</strong> sits at <strong>' + esc(rankBadge(f)) + '</strong>.</p>'
          + '<p>' + esc(f.research) + '</p>',
        chips: ['Tell me about ' + f.name, 'Best ' + f.category.toLowerCase() + '?']
      };
    }
    return {
      html: '<p><strong>' + esc(f.name) + '</strong> isn\u2019t on the official ranked lists, so it has no rank to explain — but here\u2019s the story:</p>'
        + '<p>' + esc(f.research) + '</p>',
      chips: ['Best ' + f.category.toLowerCase() + '?', 'Recommend something ' + (f.category === 'Dessert' || f.category === 'Candy' ? 'sweet' : 'similar')]
    };
  }

  function verdictLine(a, b) {
    var sa = scoreOf(a), sb = scoreOf(b);
    if (sa !== null && sb !== null) {
      if (sa === sb) return 'Dead heat — officially inseparable.';
      var w = sa > sb ? a : b, l = sa > sb ? b : a;
      return '<strong>' + esc(w.name) + '</strong> wins officially (' + Math.max(sa, sb).toFixed(1) + ' vs ' + Math.min(sa, sb).toFixed(1) + ').';
    }
    if (sa !== null) return '<strong>' + esc(a.name) + '</strong> is officially ranked ' + (a.bestRank ? '★ #' + a.bestRank + ' Best' : '#' + a.worstRank + ' Worst') + '; ' + esc(b.name) + ' is unranked.';
    if (sb !== null) return '<strong>' + esc(b.name) + '</strong> is officially ranked ' + (b.bestRank ? '★ #' + b.bestRank + ' Best' : '#' + b.worstRank + ' Worst') + '; ' + esc(a.name) + ' is unranked.';
    return 'Neither is officially ranked — taste is personal. 🌍';
  }

  function compareHTML(a, b) {
    function row(label, va, vb) {
      return '<tr><th>' + label + '</th><td>' + va + '</td><td>' + vb + '</td></tr>';
    }
    function cellScore(f) {
      var s = scoreOf(f);
      return s === null ? '–' : s.toFixed(1) + '/10 (' + tierOf(s) + ')';
    }
    return '<table class="sage-compare"><tr><th></th><th>' + a.emoji + ' ' + esc(a.name) + '</th><th>' + b.emoji + ' ' + esc(b.name) + '</th></tr>'
      + row('Origin', esc(a.origin), esc(b.origin))
      + row('Category', esc(a.category), esc(b.category))
      + row('Score', cellScore(a), cellScore(b))
      + row('Rank', esc(a.bestRank ? '★ #' + a.bestRank + ' Best' : a.worstRank ? '#' + a.worstRank + ' Worst' : 'Unranked'),
                    esc(b.bestRank ? '★ #' + b.bestRank + ' Best' : b.worstRank ? '#' + b.worstRank + ' Worst' : 'Unranked'))
      + '</table><p class="sage-verdict">' + verdictLine(a, b) + '</p>';
  }

  function intentCompare(tl, raw) {
    var parts = null;
    var m = raw.match(/^\s*compare\s+(.+?)\s+and\s+(.+?)\s*$/i);
    if (m) parts = [m[1], m[2]];
    else {
      var t2 = tl.replace(/^compare\s+/, '');
      m = t2.match(/(.+?)\s+(?:vs\.?|versus)\s+(.+)/);
      if (m) parts = [m[1], m[2]];
      else {
        m = t2.match(/(.+?)\s+or\s+(.+)/);
        /* "or" split only for plain A-or-B asks — not ranking/lookup questions */
        if (m && !/\b(best|top|worst|tell me about|what is|what's|why)\b/.test(t2)) parts = [m[1], m[2]];
      }
    }
    if (!parts) return null;
    var db = needsDB(); if (db) return db;
    var a = findFood(parts[0]), b = findFood(parts[1]);
    if (!a || !b) {
      var missing = !a ? parts[0].trim() : parts[1].trim();
      return { html: '<p>I couldn\u2019t find “' + esc(missing) + '” in the database. Try two dishes I know, like “compare ramen vs pho”.</p>', chips: ['Compare ramen vs pho', 'Pizza or tacos?'] };
    }
    if (norm(a.name) === norm(b.name)) {
      return { html: '<p>That\u2019s the same dish twice — ' + a.emoji + ' <strong>' + esc(a.name) + '</strong> vs itself. It wins by default. 🏆</p>', chips: ['Compare ramen vs pho'] };
    }
    return { html: '<p>Head to head:</p>' + compareHTML(a, b), chips: ['Why is ' + a.name.toLowerCase() + ' ranked?', 'Recommend something'] };
  }

  var TASTE_POOLS = {
    spicy: { label: 'spicy', re: /chil[il]|spicy|pepper|jalape|habanero|sriracha|sambal|wasabi|hot sauce|curry/i },
    sweet: { label: 'sweet', re: /sweet|sugar|chocolate|honey|caramel|dessert/i, cats: ['Dessert', 'Candy'] },
    crunchy: { label: 'crunchy', re: /crisp|crunch|crackl|fried|crust/i }
  };

  function intentRecommend(tl) {
    var db = needsDB(); if (db) return db;
    var taste = null;
    Object.keys(TASTE_POOLS).forEach(function (k) {
      if (new RegExp('\\b' + k + '\\b').test(tl)) taste = k;
    });
    var list = foods();
    var picks;
    if (taste) {
      var pool = TASTE_POOLS[taste];
      picks = list.filter(function (f) {
        var hay = f.definition + ' ' + f.research;
        return pool.re.test(hay) || (pool.cats && pool.cats.indexOf(f.category) !== -1);
      });
      picks.sort(function (a, b) { return (a.bestRank || 999) - (b.bestRank || 999); });
      picks = picks.slice(0, 3);
      if (!picks.length) return { html: '<p>Nothing in the database screams “' + taste + '” yet — try “recommend something sweet” or “I\u2019m hungry”.</p>', chips: ['Recommend something sweet', 'I\u2019m hungry'] };
      return {
        html: '<p>Something <strong>' + taste + '</strong>, coming right up:</p><ul class="sage-list">'
          + picks.map(function (f) {
            var s = scoreOf(f);
            return '<li>' + f.emoji + ' <strong>' + esc(f.name) + '</strong> <span class="sage-dim">(' + esc(f.origin) + (s !== null ? ' · ' + s.toFixed(1) + '/10' : '') + ')</span><br><span class="sage-dim">' + esc(f.definition) + '</span></li>';
          }).join('') + '</ul>',
        chips: ['Tell me about ' + picks[0].name.toLowerCase(), 'Recommend something sweet']
      };
    }
    /* generic hunger / recommendation */
    picks = list.filter(function (f) { return f.bestRank; })
      .sort(function (a, b) { return a.bestRank - b.bestRank; }).slice(0, 3);
    return {
      html: '<p>If I had to feed you right now, I\u2019d go with:</p><ul class="sage-list">'
        + picks.map(function (f) {
          return '<li>' + f.emoji + ' <strong>' + esc(f.name) + '</strong> <span class="sage-dim">(★ #' + f.bestRank + ' Best in the World · ' + esc(f.origin) + ')</span><br><span class="sage-dim">' + esc(f.definition) + '</span></li>';
        }).join('') + '</ul><p class="sage-dim">Want a mood instead? Try “something spicy”, “something sweet”, or “something crunchy”.</p>',
      chips: ['Something spicy', 'Something sweet', 'Something crunchy']
    };
  }

  function intentLookup(tl, raw) {
    var m = raw.match(/^(?:what\s+is|what'?s|tell\s+me\s+about|describe|info\s+(?:on|about)|about)\s+(.+?)\s*\??$/i);
    if (!m) return null;
    var db = needsDB(); if (db) return db;
    var f = findFood(m[1]);
    if (!f) {
      return { html: '<p>I couldn\u2019t find “' + esc(m[1]) + '” in the encyclopedia. Check the spelling, or try the search bar on the homepage — it searches definitions and origins too.</p>', chips: OPEN_CHIPS };
    }
    var chips = ['Best ' + f.category.toLowerCase() + '?'];
    if (f.bestRank || f.worstRank) chips.unshift('Why is ' + f.name.toLowerCase() + ' ranked?');
    return { html: foodCardHTML(f), chips: chips };
  }

  function intentShortLookup(tl) {
    if (tl.split(/\s+/).length > 3) return null;
    var db = needsDB(); if (db) return db;
    var f = findFood(tl);
    if (!f) return null;
    return { html: foodCardHTML(f), chips: ['Best ' + f.category.toLowerCase() + '?'] };
  }

  function answerFor(rawText) {
    var raw = String(rawText || '').trim();
    if (!raw) return { html: '<p>Ask me about any food — e.g. “tell me about tacos” — or tap a suggestion below. 👇</p>', chips: OPEN_CHIPS };
    var tl = norm(raw);

    /* strip a leading greeting and keep going ("hi, tell me about tacos") */
    var greeted = false;
    var gm = tl.match(/^(hi+|hello|hey|yo|sup|hiya|greetings|good\s(morning|afternoon|evening|day))\b[,\s]*/);
    if (gm) { greeted = true; tl = tl.slice(gm[0].length).trim(); raw = raw.slice(gm[0].length).trim(); }
    if (!tl) return intentGreeting(tl);

    var r;
    if (/\b(what can you do|help|capabilit|commands|how (do|can) you)\b/.test(tl)) r = intentHelp();
    else if ((r = intentCompare(tl, raw))) {}
    else if (/\bwho\b.*\b(decide|rank|choose|vote)/.test(tl) || /\bwho decides/.test(tl)) r = intentWhoDecides();
    else if ((r = intentSiteHelp(tl))) {}
    else if (/\btiers?\b/.test(tl) && /\b(mean|what|explain)/.test(tl)) r = intentTiers();
    else if ((r = intentMethodology(tl))) {}
    else if (/why\s+(is|was)\b/.test(tl) && /\branked\b/.test(tl) && (r = intentWhyRanked(tl, raw))) {}
    else if (/\b(best|top|worst)\b/.test(tl) && (r = intentRankQuery(tl))) {}
    else if (/\b(recommend|suggest|hungry|starving|craving)\b/.test(tl) || /\bsomething\s+(spicy|sweet|crunchy)\b/.test(tl)) r = intentRecommend(tl);
    else if ((r = intentLookup(tl, raw))) {}
    else if ((r = intentShortLookup(tl))) {}
    else r = { html: '<p>Hmm, I didn\u2019t quite catch that. I\u2019m best with food questions — try one of these:</p>', chips: ['Tell me about kimchi', 'Top 5 snacks?', 'Something crunchy'] };

    if (greeted && r && !/greet/i.test(r.html)) r.html = '<p>Hey! 👋</p>' + r.html;
    return r;
  }

  /* ------------------------------ DOM wiring ------------------------------ */

  function mount() {
    if (typeof document === 'undefined') return;
    if (document.getElementById('sage-fab')) return; /* already mounted */

    var fab = document.createElement('button');
    fab.id = 'sage-fab';
    fab.type = 'button';
    fab.setAttribute('aria-label', 'Chat with Sage, your food guide');
    fab.innerHTML = '🧑‍🍳';
    document.body.appendChild(fab);

    var panel = document.createElement('div');
    panel.id = 'sage-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Sage, your food guide');
    panel.innerHTML =
      '<div class="sage-header"><span class="sage-title">🧑‍🍳 Sage <span class="sage-sub">· your food guide</span></span>'
      + '<button type="button" id="sage-close" aria-label="Close chat">✕</button></div>'
      + '<div class="sage-msgs" id="sage-msgs" aria-live="polite"></div>'
      + '<div class="sage-chips" id="sage-chips"></div>'
      + '<form class="sage-form" id="sage-form"><input id="sage-input" type="text" placeholder="Ask about any food…" autocomplete="off" aria-label="Message Sage">'
      + '<button type="submit" aria-label="Send">➤</button></form>';
    document.body.appendChild(panel);

    var msgs = panel.querySelector('#sage-msgs');
    var chipsEl = panel.querySelector('#sage-chips');
    var form = panel.querySelector('#sage-form');
    var input = panel.querySelector('#sage-input');
    var opened = false;

    function scrollDown() { msgs.scrollTop = msgs.scrollHeight; }

    function addMsg(who, html) {
      var d = document.createElement('div');
      d.className = 'sage-msg sage-' + who;
      d.innerHTML = html;
      msgs.appendChild(d);
      scrollDown();
      return d;
    }

    function renderChips(chips) {
      chipsEl.innerHTML = '';
      (chips || []).forEach(function (c) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'sage-chip';
        b.textContent = c;
        b.addEventListener('click', function () { send(c); });
        chipsEl.appendChild(b);
      });
    }

    function send(text) {
      var t = String(text || '').trim();
      if (!t) return;
      addMsg('user', esc(t));
      renderChips([]);
      var typing = addMsg('bot', '<span class="sage-typing"><span></span><span></span><span></span></span>');
      setTimeout(function () {
        var ans;
        try { ans = answerFor(t); }
        catch (e) { ans = { html: '<p>Something hiccuped in my kitchen — try asking again?</p>', chips: OPEN_CHIPS }; }
        typing.innerHTML = ans.html;
        renderChips(ans.chips);
        scrollDown();
      }, 600);
    }

    fab.addEventListener('click', function () {
      opened = !opened;
      panel.classList.toggle('open', opened);
      fab.classList.toggle('open', opened);
      if (opened) {
        if (!msgs.children.length) {
          addMsg('bot', '<p>Hey! I\u2019m <strong>Sage</strong> 🧑‍🍳 — I know all 1,203 foods in this encyclopedia. Ask me anything, or start here:</p>');
          renderChips(OPEN_CHIPS);
        }
        setTimeout(function () { input.focus(); }, 150);
      }
    });
    panel.querySelector('#sage-close').addEventListener('click', function () {
      opened = false;
      panel.classList.remove('open');
      fab.classList.remove('open');
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      send(input.value);
      input.value = '';
    });

    /* Public opener: nav links, hero buttons, etc. call window.openSage(). */
    function openSage() {
      if (!opened) fab.click();
      else { try { input.focus(); } catch (e) {} }
    }
    if (typeof window !== 'undefined') window.openSage = openSage;

    /* "Ask Sage" nav link (present in the site nav on every page). */
    var navLink = document.getElementById('sage-nav-link');
    if (navLink) {
      navLink.addEventListener('click', function (e) {
        e.preventDefault();
        openSage();
      });
    }

    /* One-time nudge so first-time visitors discover Sage. */
    try {
      if (!localStorage.getItem('sage_nudged')) {
        setTimeout(function () {
          if (opened || document.getElementById('sage-tip')) return;
          fab.classList.add('sage-nudge');
          var tip = document.createElement('div');
          tip.id = 'sage-tip';
          tip.setAttribute('role', 'status');
          tip.innerHTML = '👋 <strong>Meet Sage</strong> — your AI food guide.<br>Ask me about any dish!';
          document.body.appendChild(tip);
          var dismiss = function () {
            if (tip.parentNode) tip.parentNode.removeChild(tip);
            fab.classList.remove('sage-nudge');
            try { localStorage.setItem('sage_nudged', '1'); } catch (e2) {}
          };
          tip.addEventListener('click', dismiss);
          fab.addEventListener('click', dismiss, { once: true });
          setTimeout(dismiss, 14000);
        }, 2600);
      }
    } catch (e) { /* storage unavailable; skip nudge */ }
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', mount);
    } else {
      mount();
    }
  }

  /* Export pure functions for node-based testing (no browser globals touched). */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      scoreOf: scoreOf, tierOf: tierOf, starsOf: starsOf,
      findFood: findFood, answerFor: answerFor, foodCardHTML: foodCardHTML,
      compareHTML: compareHTML, norm: norm
    };
  }
})();
