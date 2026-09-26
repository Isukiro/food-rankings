/* rankings.js — feature module for rankings.html
 *
 * Scoring (per spec):
 *   best  rank r -> Math.round((10-(r-1)*0.035)*10)/10
 *   worst rank r -> Math.round((3.5-(r-1)*0.025)*10)/10
 *   unranked     -> null
 * Tiers: S>=9.5, A>=8.5, B>=7.5, C>=5.0, D>=2.5, F<2.5, null->"–"
 * Stars: Math.round(score/2) of 5, rendered as ★/☆.
 *
 * Depends on: data/foods.js (FOODS). Optionally data/pros-cons.js (PROS_CONS)
 * and data/photos.js (PHOTOS); both are guarded with typeof so the page
 * still works if either file is missing.
 */

'use strict';

/* ---------------- scoring ---------------- */

function scoreOf(food, tab) {
  var r = tab === 'worst' ? food.worstRank : food.bestRank;
  if (r === null || r === undefined) return null;
  var raw = tab === 'worst' ? 3.5 - (r - 1) * 0.025 : 10 - (r - 1) * 0.035;
  return Math.round(raw * 10) / 10;
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
  if (score === null || score === undefined) return null;
  var full = Math.max(0, Math.min(5, Math.round(score / 2)));
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

/* ---------------- helpers ---------------- */

function esc(s) {
  return String(s === null || s === undefined ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function $(id) { return document.getElementById(id); }

/* Flavor tag pills for a dish (from tastes.js, guarded — skipped silently
 * if the tastes data isn't loaded). Wrapped in a link to the flavor map. */
function flavorPillsHTML(name) {
  var t = (window.FOOD_TASTES || {})[name];
  if (!t || !t.tags || !t.tags.length) return '';
  var pills = t.tags.slice(0, 4).map(function (tag) {
    return '<span class="flavor-pill">' + esc(tag) + '</span>';
  }).join('');
  return '<span class="flavor-label">Flavors</span>' + pills;
}

function flavorLineHTML(name) {
  var pills = flavorPillsHTML(name);
  return pills
    ? '<a class="flavor-line" href="map.html" title="See it on the Flavor Map">' + pills + '</a>'
    : '';
}

function getVotes() {
  try {
    return JSON.parse(localStorage.getItem('fr_votes') || '{}') || {};
  } catch (e) {
    return {};
  }
}

function setVote(name, stars) {
  var votes = getVotes();
  votes[name] = stars;
  try {
    localStorage.setItem('fr_votes', JSON.stringify(votes));
  } catch (e) { /* private mode: voting just won't persist */ }
}

/* ---------------- state + URL sync ---------------- */

var DEFAULTS = { tab: 'best', sort: 'score', category: 'all', region: 'all', tier: 'all', q: '', view: 'ranked', catView: 'Dessert' };
var state = Object.assign({}, DEFAULTS);
var compareSet = []; // food names, max 3

/* ---------------- dad-proofing: pagination + view density ---------------- */
var PAGE_SIZE = 25;
state.page = 1;
state.rankview = 'comfortable';
try {
  var _savedView = window.localStorage.getItem('fr_rankview');
  if (_savedView === 'compact' || _savedView === 'comfortable') state.rankview = _savedView;
} catch (e) { /* private mode: density just won't persist */ }

/* Filter/tab/sort/search changes always jump back to page 1. */
function refresh() {
  state.page = 1;
  writeStateToURL();
  render();
}

function scrollLeaderboard() {
  try { $('leaderboard').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  catch (e) { /* noop */ }
}

function readStateFromURL() {
  var p = new URLSearchParams(window.location.search);
  var tab = p.get('tab');
  state.tab = tab === 'worst' ? 'worst' : 'best';
  var sort = p.get('sort');
  state.sort = sort === 'name' || sort === 'region' ? sort : 'score';
  state.region = p.get('region') || 'all';
  state.tier = p.get('tier') || 'all';
  state.q = p.get('q') || '';
  // Category view: ?view=category&category=X (category doubles as the viewed category)
  state.view = p.get('view') === 'category' ? 'category' : 'ranked';
  if (state.view === 'category') {
    state.catView = validCategory(p.get('category')) || 'Dessert';
  } else {
    state.category = p.get('category') || 'all';
  }
}

// The 10 category names, computed live from FOODS so the view always matches the data.
var categoryList = null;
function allCategories() {
  if (!categoryList) categoryList = uniqueValues('category');
  return categoryList;
}

function validCategory(v) {
  if (!v || typeof FOODS === 'undefined') return null;
  return allCategories().indexOf(v) !== -1 ? v : null;
}

function writeStateToURL() {
  var p = new URLSearchParams();
  if (state.view === 'category') {
    p.set('view', 'category');
    p.set('category', state.catView);
    if (state.sort !== 'score') p.set('sort', state.sort);
    if (state.region !== 'all') p.set('region', state.region);
    if (state.q) p.set('q', state.q);
  } else {
    p.set('tab', state.tab);
    if (state.sort !== 'score') p.set('sort', state.sort);
    if (state.category !== 'all') p.set('category', state.category);
    if (state.region !== 'all') p.set('region', state.region);
    if (state.tier !== 'all') p.set('tier', state.tier);
    if (state.q) p.set('q', state.q);
  }
  history.replaceState(null, '', window.location.pathname + '?' + p.toString());
}

/* ---------------- data ---------------- */

function rankedFoods(tab) {
  if (typeof FOODS === 'undefined') return [];
  var out = [];
  for (var i = 0; i < FOODS.length; i++) {
    var f = FOODS[i];
    var score = scoreOf(f, tab);
    if (score === null) continue; // rankings tabs show ranked dishes only
    out.push({
      name: f.name, origin: f.origin, region: f.region, category: f.category,
      emoji: f.emoji, definition: f.definition, research: f.research,
      rank: tab === 'worst' ? f.worstRank : f.bestRank,
      score: score, tier: tierOf(score), stars: starsOf(score)
    });
  }
  return out;
}

function uniqueValues(key) {
  var seen = {}, out = [];
  for (var i = 0; i < FOODS.length; i++) {
    var v = FOODS[i][key];
    if (v && !seen[v]) { seen[v] = true; out.push(v); }
  }
  return out.sort(function (a, b) { return a.localeCompare(b); });
}

function applyFilters(list) {
  var q = state.q.trim().toLowerCase();
  return list.filter(function (f) {
    if (state.category !== 'all' && f.category !== state.category) return false;
    if (state.region !== 'all' && f.region !== state.region) return false;
    if (state.tier !== 'all' && f.tier !== state.tier) return false;
    if (q) {
      var hay = (f.name + ' ' + f.origin + ' ' + f.category + ' ' + f.region).toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  });
}

function applySort(list) {
  var arr = list.slice();
  if (state.sort === 'name') {
    arr.sort(function (a, b) { return a.name.localeCompare(b.name); });
  } else if (state.sort === 'region') {
    arr.sort(function (a, b) {
      return a.region.localeCompare(b.region) || a.name.localeCompare(b.name);
    });
  } else {
    arr.sort(function (a, b) { return a.rank - b.rank; });
  }
  return arr;
}

/* ---------------- render: chips ---------------- */

function renderChips(containerId, values, current, onPick) {
  var box = $(containerId);
  box.innerHTML = '';
  var all = ['all'].concat(values);
  all.forEach(function (v) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (v === current ? ' active' : '');
    b.textContent = v === 'all' ? 'All' : v;
    b.setAttribute('aria-pressed', v === current ? 'true' : 'false');
    b.addEventListener('click', function () { onPick(v); });
    box.appendChild(b);
  });
}

function tiersPresent(list) {
  var order = ['S', 'A', 'B', 'C', 'D', 'F'], seen = {};
  list.forEach(function (f) { seen[f.tier] = true; });
  return order.filter(function (t) { return seen[t]; });
}

/* ---------------- render: category view ---------------- */

function catRowFood(food, badgeTab) {
  var rank = badgeTab === 'worst' ? food.worstRank : food.bestRank;
  var score = scoreOf(food, badgeTab);
  return {
    name: food.name, origin: food.origin, region: food.region, category: food.category,
    emoji: food.emoji, definition: food.definition, research: food.research,
    rank: rank, score: score, tier: tierOf(score), stars: starsOf(score), badgeTab: badgeTab
  };
}

// Ranked dishes in one category, ordered by true global rank:
// best-ranked ascending first, then worst-ranked ascending.
function categoryRankedFoods(cat) {
  var best = [], worst = [];
  for (var i = 0; i < FOODS.length; i++) {
    var f = FOODS[i];
    if (f.category !== cat) continue;
    if (f.bestRank !== null && f.bestRank !== undefined) best.push(catRowFood(f, 'best'));
    else if (f.worstRank !== null && f.worstRank !== undefined) worst.push(catRowFood(f, 'worst'));
  }
  best.sort(function (a, b) { return a.rank - b.rank; });
  worst.sort(function (a, b) { return a.rank - b.rank; });
  return best.concat(worst);
}

function categoryUnrankedFoods(cat) {
  var out = [];
  for (var i = 0; i < FOODS.length; i++) {
    var f = FOODS[i];
    if (f.category !== cat) continue;
    if ((f.bestRank === null || f.bestRank === undefined) &&
        (f.worstRank === null || f.worstRank === undefined)) out.push(f);
  }
  return out;
}

// Region + search filters apply to both category-view sections; tier does not.
function catViewFilter(list) {
  var q = state.q.trim().toLowerCase();
  return list.filter(function (f) {
    if (state.region !== 'all' && f.region !== state.region) return false;
    if (q) {
      var hay = (f.name + ' ' + f.origin + ' ' + f.category + ' ' + f.region).toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  });
}

function unrankedCardHTML(f) {
  var html = '<article class="unranked-card" data-food-name="' + esc(f.name) + '">';
  html += '<div class="unranked-emoji" aria-hidden="true">' + esc(f.emoji) + '</div>';
  html += '<h3>' + esc(f.name) + '</h3>';
  html += '<p class="unranked-sub">' + esc(f.origin) + ' · ' + esc(f.region) + '</p>';
  html += '<span class="unranked-tag">Unranked</span>';
  html += flavorLineHTML(f.name);
  if (f.definition) html += '<p class="unranked-def">' + esc(f.definition) + '</p>';
  html += '</article>';
  return html;
}

function renderCategoryView() {
  var cat = state.catView;
  var ranked = catViewFilter(categoryRankedFoods(cat));
  var unranked = catViewFilter(categoryUnrankedFoods(cat));
  // Unranked dishes are never scored: sort only by name/region here.
  var shown = state.sort === 'score' ? unranked : applySort(unranked);

  $('resultCount').textContent = ranked.length + ' ranked · ' + unranked.length +
    ' more dishes in ' + cat;

  var board = $('leaderboard');
  var html = '<h2 class="cat-section-title">Top Ranked in ' + esc(cat) + '</h2>' +
    '<p class="rank-note">Ranks shown are each dish\'s true global rank — not re-numbered per category.</p>';
  var filtersActive = state.region !== 'all' || state.q.trim() !== '';
  if (ranked.length === 0) {
    html += '<div class="empty">' + (filtersActive
      ? 'No ranked ' + esc(cat) + ' dishes match your filters.'
      : 'No ranked dishes in this category yet — explore the full collection below.') + '</div>';
  } else {
    html += ranked.map(rowHTML).join('');
  }
  board.innerHTML = html;

  var wrap = $('unrankedWrap');
  if (shown.length === 0) {
    wrap.hidden = true;
  } else {
    wrap.hidden = false;
    $('unrankedTitle').textContent = 'More ' + cat + ' dishes';
    $('unrankedGrid').innerHTML = shown.map(unrankedCardHTML).join('');
  }
}

/* ---------------- render: leaderboard ---------------- */

function photoFor(name) {
  if (typeof PHOTOS !== 'undefined' && PHOTOS && PHOTOS[name]) return PHOTOS[name];
  return null;
}

function prosConsFor(name) {
  if (typeof PROS_CONS !== 'undefined' && PROS_CONS && PROS_CONS[name]) return PROS_CONS[name];
  return null;
}

function voteHTML(name) {
  var votes = getVotes();
  var mine = votes[name];
  var btns = '';
  for (var s = 1; s <= 5; s++) {
    btns += '<button type="button" class="vote-star" data-name="' + esc(name) +
      '" data-stars="' + s + '" aria-label="Rate ' + s + ' out of 5 stars"' +
      (mine && s <= mine ? ' data-on="1"' : '') + '>★</button>';
  }
  var status = mine
    ? '<span class="vote-status">Community: ' + esc(starsOf(mine)) +
      ' <em>(your vote, saved on this device — tap a star to change it)</em></span>'
    : '<span class="vote-status">Tap a star to rate this dish:</span>';
  return '<div class="vote-row">' + status + '<span class="vote-stars">' + btns + '</span></div>';
}

function rowHTMLCompact(f) {
  /* Dense one-line-ish row for fast scanning: no photo, definition, research,
   * pros/cons, flavor line, or voting stars. Compare checkboxes keep working. */
  var s = (typeof f.score === 'number') ? f.score.toFixed(1) : '\u2013';
  var html = '<article class="leader-row leader-compact" data-name="' + esc(f.name) +
    '" data-food-name="' + esc(f.name) + '">';
  html += '<div class="leader-rank">#' + f.rank + '</div>';
  html += '<div class="leader-main">';
  html += '<div class="leader-name">' + esc(f.emoji + ' ' + f.name) + '</div>';
  html += '<div class="leader-sub">' + esc(f.origin) + ' \u00b7 ' + esc(f.category) + '</div>';
  html += '<div class="leader-meta">';
  html += '<span class="score-line">' + s + '/10</span>';
  html += '<span class="tier-badge tier-' + f.tier + '" title="Tier ' + f.tier + '">' + f.tier + '</span>';
  html += '<label class="compare-check"><input type="checkbox" class="compare-box" data-name="' +
    esc(f.name) + '"' + (compareSet.indexOf(f.name) !== -1 ? ' checked' : '') + '> Compare</label>';
  html += '</div></div></article>';
  return html;
}

function rowHTML(f) {
  if (state.rankview === 'compact') return rowHTMLCompact(f);
  var pc = prosConsFor(f.name);
  var photo = photoFor(f.name);
  // Category view rows carry badgeTab ('best'|'worst') and show the dish's
  // TRUE global badge; ranked tabs keep their original "#N Best"/"#N Worst" text.
  var btab = f.badgeTab || state.tab;
  var badgeCls = btab === 'worst' ? 'rank-badge worst' : 'rank-badge best';
  var badgeTxt = f.badgeTab
    ? (btab === 'worst' ? '#' + f.rank + ' Worst in the World' : '★ #' + f.rank + ' Best in the World')
    : ('#' + f.rank + (state.tab === 'worst' ? ' Worst' : ' Best'));

  var html = '<article class="leader-row" data-name="' + esc(f.name) + '" data-food-name="' + esc(f.name) + '">';
  html += '<div class="leader-rank">#' + f.rank + '</div>';
  if (photo) {
    html += '<img class="leader-photo" src="' + esc(photo) + '" alt="Photo of ' + esc(f.name) +
      '" loading="lazy" onerror="this.remove()">';
  }
  html += '<div class="leader-main">';
  html += '<div class="leader-name">' + esc(f.emoji + ' ' + f.name) + '</div>';
  html += '<div class="leader-sub">' + esc(f.origin) + ' · ' + esc(f.region) + ' · ' + esc(f.category) + '</div>';
  html += '<div class="leader-meta">';
  html += '<span class="' + badgeCls + '">' + esc(badgeTxt) + '</span>';
  html += '<span class="tier-badge tier-' + f.tier + '" title="Tier ' + f.tier + '">' + f.tier + '</span>';
  html += '<span class="score-line">' + f.score.toFixed(1) + '/10 <span class="stars" aria-label="' +
    esc(f.stars) + '">' + esc(f.stars) + '</span></span>';
  html += '<label class="compare-check"><input type="checkbox" class="compare-box" data-name="' + esc(f.name) + '"' +
    (compareSet.indexOf(f.name) !== -1 ? ' checked' : '') + '> Compare</label>';
  html += '</div>';
  html += flavorLineHTML(f.name);
  if (f.definition) html += '<p class="leader-def">' + esc(f.definition) + '</p>';
  if (f.research) html += '<p class="leader-res"><strong>Why it ranks:</strong> ' + esc(f.research) + '</p>';
  if (pc) {
    html += '<div class="pros-cons">';
    if (pc.pros && pc.pros.length) {
      html += '<div class="pros"><h4>Pros</h4><ul>' +
        pc.pros.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
    }
    if (pc.cons && pc.cons.length) {
      html += '<div class="cons"><h4>Cons</h4><ul>' +
        pc.cons.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
    }
    html += '</div>';
  }
  html += voteHTML(f.name);
  html += '</div></article>';
  return html;
}

function render() {
  // tabs
  var rankedActive = state.view === 'ranked';
  $('tabBest').classList.toggle('active', rankedActive && state.tab === 'best');
  $('tabWorst').classList.toggle('active', rankedActive && state.tab === 'worst');
  $('tabCategory').classList.toggle('active', state.view === 'category');
  $('tabBest').setAttribute('aria-selected', rankedActive && state.tab === 'best' ? 'true' : 'false');
  $('tabWorst').setAttribute('aria-selected', rankedActive && state.tab === 'worst' ? 'true' : 'false');
  $('tabCategory').setAttribute('aria-selected', state.view === 'category' ? 'true' : 'false');

  // controls reflect state
  $('sortSelect').value = state.sort;
  if ($('rankSearch').value !== state.q) $('rankSearch').value = state.q;

  // category view: own chip groups + sections; tier chips don't apply to it
  var inCat = state.view === 'category';
  $('catViewGroup').hidden = !inCat;
  $('catFilterGroup').hidden = inCat;
  $('tierGroup').hidden = inCat;
  if (inCat) {
    renderChips('catViewChips', allCategories(), state.catView, function (v) {
      state.catView = v; refresh();
    });
    renderChips('regionChips', uniqueValues('region'), state.region, function (v) {
      state.region = v; refresh();
    });
    renderCategoryView();
    renderCompareBar();
    writeStateToURL();
    return;
  }
  $('unrankedWrap').hidden = true;

  var all = rankedFoods(state.tab);
  var filtered = applySort(applyFilters(all));

  renderChips('categoryChips', uniqueValues('category'), state.category, function (v) {
    state.category = v; refresh();
  });
  renderChips('regionChips', uniqueValues('region'), state.region, function (v) {
    state.region = v; refresh();
  });
  var tiers = tiersPresent(all);
  if (tiers.indexOf(state.tier) === -1 && state.tier !== 'all') state.tier = 'all';
  renderChips('tierChips', tiers, state.tier, function (v) {
    state.tier = v; refresh();
  });

  syncViewToggle();

  // pagination
  var totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  if (state.page > totalPages) state.page = 1;

  // count
  var label = state.tab === 'best' ? 'best' : 'worst';
  if (filtered.length === 0) {
    $('resultCount').textContent = 'No dishes match your filters.';
  } else {
    var s0 = (state.page - 1) * PAGE_SIZE + 1;
    var s1 = Math.min(state.page * PAGE_SIZE, filtered.length);
    $('resultCount').textContent = 'Showing ' + s0 + '\u2013' + s1 + ' of ' +
      filtered.length + ' ' + label + ' dishes';
  }

  // rows
  var board = $('leaderboard');
  if (filtered.length === 0) {
    board.innerHTML = '<div class="empty">No dishes match your filters. ' +
      '<button type="button" class="gold-btn" id="clearFilters">Clear filters</button></div>';
    $('clearFilters').addEventListener('click', function () {
      state.category = 'all'; state.region = 'all'; state.tier = 'all'; state.q = '';
      refresh();
    });
    renderPageNav(0);
  } else {
    var pageItems = filtered.slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE);
    board.innerHTML = pageItems.map(rowHTML).join('');
    renderPageNav(totalPages);
  }

  renderCompareBar();
  writeStateToURL();
}

/* ---------------- pagination ---------------- */

function renderPageNav(totalPages) {
  var nav = $('pageNav');
  if (!nav) return;
  if (totalPages <= 1) { nav.hidden = true; nav.innerHTML = ''; return; }
  nav.hidden = false;
  var cur = state.page;
  function btn(label, page, cls, disabled, aria) {
    return '<button type="button" class="page-btn' + (cls ? ' ' + cls : '') + '"' +
      ' data-page="' + page + '"' + (disabled ? ' disabled' : '') +
      (aria ? ' aria-label="' + aria + '"' : '') + '>' + label + '</button>';
  }
  var pages = [];
  for (var p = 1; p <= totalPages; p++) {
    if (p === 1 || p === totalPages || Math.abs(p - cur) <= 1) pages.push(p);
  }
  var html = btn('\u2039 Prev', cur - 1, '', cur <= 1, 'Previous page');
  var prev = 0;
  for (var i = 0; i < pages.length; i++) {
    var pg = pages[i];
    if (pg - prev > 1) html += '<span class="page-ellipsis" aria-hidden="true">\u2026</span>';
    html += btn(String(pg), pg, pg === cur ? 'current' : '', false, 'Page ' + pg);
    prev = pg;
  }
  html += btn('Next \u203a', cur + 1, '', cur >= totalPages, 'Next page');
  nav.innerHTML = html;
}

/* ---------------- compare ---------------- */

function findFood(name) {
  var all = rankedFoods(state.tab);
  for (var i = 0; i < all.length; i++) if (all[i].name === name) return all[i];
  // fall back to the other tab so a comparison survives tab switches
  var other = rankedFoods(state.tab === 'best' ? 'worst' : 'best');
  for (var j = 0; j < other.length; j++) if (other[j].name === name) return other[j];
  return null;
}

function renderCompareBar() {
  var bar = $('compareBar');
  if (compareSet.length === 0) {
    bar.hidden = true;
    return;
  }
  bar.hidden = false;
  $('compareCount').textContent = compareSet.length;
  $('compareNames').textContent = compareSet.join(' · ');
}

function toggleCompare(name, checked) {
  var i = compareSet.indexOf(name);
  if (checked && i === -1) {
    if (compareSet.length >= 3) {
      var note = $('compareNote');
      note.textContent = 'You can compare up to 3 dishes — remove one first.';
      setTimeout(function () { note.textContent = ''; }, 2500);
      var box = document.querySelector('.compare-box[data-name="' + CSS.escape(name) + '"]');
      if (box) box.checked = false;
      return;
    }
    compareSet.push(name);
  } else if (!checked && i !== -1) {
    compareSet.splice(i, 1);
  }
  renderCompareBar();
}

function compareTableHTML() {
  var foods = compareSet.map(findFood).filter(Boolean);
  if (!foods.length) return '<div class="empty">Nothing to compare.</div>';
  var votes = getVotes();
  function cell(fn) {
    return foods.map(function (f) { return '<td>' + fn(f) + '</td>'; }).join('');
  }
  function li(items) {
    return '<ul class="compare-list">' + items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
  }
  var html = '<table class="compare-table"><thead><tr><th scope="col">Dish</th>' +
    foods.map(function (f) {
      return '<th scope="col"><span class="compare-emoji">' + esc(f.emoji) + '</span><br>' + esc(f.name) + '</th>';
    }).join('') + '</tr></thead><tbody>';
  html += '<tr><th scope="row">Origin</th>' + cell(function (f) { return esc(f.origin); }) + '</tr>';
  html += '<tr><th scope="row">Score</th>' + cell(function (f) { return f.score.toFixed(1) + '/10'; }) + '</tr>';
  html += '<tr><th scope="row">Tier</th>' + cell(function (f) {
    return '<span class="tier-badge tier-' + f.tier + '">' + f.tier + '</span>';
  }) + '</tr>';
  html += '<tr><th scope="row">Stars</th>' + cell(function (f) {
    return '<span class="stars">' + esc(f.stars) + '</span>';
  }) + '</tr>';
  html += '<tr><th scope="row">Your rating</th>' + cell(function (f) {
    return votes[f.name] ? esc(starsOf(votes[f.name])) + ' (' + votes[f.name] + '/5)' : '—';
  }) + '</tr>';
  html += '<tr><th scope="row">Pros</th>' + cell(function (f) {
    var pc = prosConsFor(f.name);
    return pc && pc.pros && pc.pros.length ? li(pc.pros) : '—';
  }) + '</tr>';
  html += '<tr><th scope="row">Cons</th>' + cell(function (f) {
    var pc = prosConsFor(f.name);
    return pc && pc.cons && pc.cons.length ? li(pc.cons) : '—';
  }) + '</tr>';
  html += '</tbody></table>';
  return html;
}

function openCompare() {
  $('compareBody').innerHTML = compareTableHTML();
  $('compareModal').hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeCompare() {
  $('compareModal').hidden = true;
  document.body.style.overflow = '';
}

/* ---------------- view density ---------------- */

function syncViewToggle() {
  var comfort = $('viewComfort'), compact = $('viewCompact');
  if (!comfort || !compact) return;
  var isCompact = state.rankview === 'compact';
  comfort.classList.toggle('active', !isCompact);
  compact.classList.toggle('active', isCompact);
  comfort.setAttribute('aria-pressed', !isCompact ? 'true' : 'false');
  compact.setAttribute('aria-pressed', isCompact ? 'true' : 'false');
}

function setRankView(v) {
  if (v !== 'compact' && v !== 'comfortable') return;
  state.rankview = v;
  try { window.localStorage.setItem('fr_rankview', v); } catch (e) { /* noop */ }
  render();
}

/* ---------------- events ---------------- */

function bindEvents() {
  $('tabBest').addEventListener('click', function () {
    if (state.view !== 'ranked' || state.tab !== 'best') {
      state.view = 'ranked'; state.tab = 'best'; refresh(); scrollLeaderboard();
    }
  });
  $('tabWorst').addEventListener('click', function () {
    if (state.view !== 'ranked' || state.tab !== 'worst') {
      state.view = 'ranked'; state.tab = 'worst'; refresh(); scrollLeaderboard();
    }
  });
  $('tabCategory').addEventListener('click', function () {
    if (state.view !== 'category') {
      state.view = 'category';
      // If the ranked view had a category filter on, carry it over as the viewed category.
      var carry = validCategory(state.category);
      if (carry) state.catView = carry;
      refresh(); scrollLeaderboard();
    }
  });
  $('sortSelect').addEventListener('change', function (e) {
    state.sort = e.target.value; refresh();
  });

  var searchTimer = null;
  $('rankSearch').addEventListener('input', function (e) {
    clearTimeout(searchTimer);
    var v = e.target.value;
    searchTimer = setTimeout(function () {
      state.q = v; refresh();
    }, 220);
  });

  // delegated: compare checkboxes + vote stars (rows re-render often)
  $('leaderboard').addEventListener('change', function (e) {
    if (e.target.classList.contains('compare-box')) {
      toggleCompare(e.target.getAttribute('data-name'), e.target.checked);
    }
  });
  $('leaderboard').addEventListener('click', function (e) {
    if (e.target.classList.contains('vote-star')) {
      setVote(e.target.getAttribute('data-name'), parseInt(e.target.getAttribute('data-stars'), 10));
      render();
    }
  });

  var pageNav = $('pageNav');
  if (pageNav) {
    pageNav.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('[data-page]') : null;
      if (!b || b.disabled) return;
      var p = parseInt(b.getAttribute('data-page'), 10);
      if (!p || p === state.page) return;
      state.page = p;
      render();
      scrollLeaderboard();
    });
  }

  var viewComfort = $('viewComfort'), viewCompact = $('viewCompact');
  if (viewComfort) viewComfort.addEventListener('click', function () { setRankView('comfortable'); });
  if (viewCompact) viewCompact.addEventListener('click', function () { setRankView('compact'); });

  /* Arrow keys move between tabs for keyboard users. */
  var tabOrder = ['tabBest', 'tabWorst', 'tabCategory'];
  var tablist = document.querySelector('.tabs');
  if (tablist) {
    tablist.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var idx = tabOrder.indexOf(document.activeElement && document.activeElement.id);
      if (idx === -1) return;
      e.preventDefault();
      var next = (idx + (e.key === 'ArrowRight' ? 1 : tabOrder.length - 1)) % tabOrder.length;
      $(tabOrder[next]).focus();
      $(tabOrder[next]).click();
    });
  }

  $('compareOpen').addEventListener('click', openCompare);
  $('compareClear').addEventListener('click', function () {
    compareSet = []; render();
  });
  $('compareClose').addEventListener('click', closeCompare);
  $('compareModal').addEventListener('click', function (e) {
    if (e.target === $('compareModal')) closeCompare();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !$('compareModal').hidden) closeCompare();
  });
}

/* ---------------- init ---------------- */

document.addEventListener('DOMContentLoaded', function () {
  readStateFromURL();
  bindEvents();
  if (typeof FOODS === 'undefined') {
    $('leaderboard').innerHTML = '<div class="empty">Ranking data failed to load. Please refresh the page.</div>';
    $('resultCount').textContent = '';
    return;
  }
  render();
});
