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

var DEFAULTS = { tab: 'best', sort: 'score', category: 'all', region: 'all', tier: 'all', q: '' };
var state = Object.assign({}, DEFAULTS);
var compareSet = []; // food names, max 3

function readStateFromURL() {
  var p = new URLSearchParams(window.location.search);
  var tab = p.get('tab');
  state.tab = tab === 'worst' ? 'worst' : 'best';
  var sort = p.get('sort');
  state.sort = sort === 'name' || sort === 'region' ? sort : 'score';
  state.category = p.get('category') || 'all';
  state.region = p.get('region') || 'all';
  state.tier = p.get('tier') || 'all';
  state.q = p.get('q') || '';
}

function writeStateToURL() {
  var p = new URLSearchParams();
  p.set('tab', state.tab);
  if (state.sort !== 'score') p.set('sort', state.sort);
  if (state.category !== 'all') p.set('category', state.category);
  if (state.region !== 'all') p.set('region', state.region);
  if (state.tier !== 'all') p.set('tier', state.tier);
  if (state.q) p.set('q', state.q);
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

function rowHTML(f) {
  var pc = prosConsFor(f.name);
  var photo = photoFor(f.name);
  var badgeCls = state.tab === 'worst' ? 'rank-badge worst' : 'rank-badge best';
  var badgeTxt = '#' + f.rank + (state.tab === 'worst' ? ' Worst' : ' Best');

  var html = '<article class="leader-row" data-name="' + esc(f.name) + '">';
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
  var all = rankedFoods(state.tab);
  var filtered = applySort(applyFilters(all));

  // tabs
  $('tabBest').classList.toggle('active', state.tab === 'best');
  $('tabWorst').classList.toggle('active', state.tab === 'worst');
  $('tabBest').setAttribute('aria-selected', state.tab === 'best' ? 'true' : 'false');
  $('tabWorst').setAttribute('aria-selected', state.tab === 'worst' ? 'true' : 'false');

  // controls reflect state
  $('sortSelect').value = state.sort;
  if ($('rankSearch').value !== state.q) $('rankSearch').value = state.q;
  renderChips('categoryChips', uniqueValues('category'), state.category, function (v) {
    state.category = v; writeStateToURL(); render();
  });
  renderChips('regionChips', uniqueValues('region'), state.region, function (v) {
    state.region = v; writeStateToURL(); render();
  });
  var tiers = tiersPresent(all);
  if (tiers.indexOf(state.tier) === -1 && state.tier !== 'all') state.tier = 'all';
  renderChips('tierChips', tiers, state.tier, function (v) {
    state.tier = v; writeStateToURL(); render();
  });

  // count
  var label = state.tab === 'best' ? 'best' : 'worst';
  $('resultCount').textContent = filtered.length === all.length
    ? 'Showing all ' + all.length + ' ' + label + ' dishes'
    : 'Showing ' + filtered.length + ' of ' + all.length + ' ' + label + ' dishes';

  // rows
  var board = $('leaderboard');
  if (filtered.length === 0) {
    board.innerHTML = '<div class="empty">No dishes match your filters. ' +
      '<button type="button" class="gold-btn" id="clearFilters">Clear filters</button></div>';
    $('clearFilters').addEventListener('click', function () {
      state.category = 'all'; state.region = 'all'; state.tier = 'all'; state.q = '';
      writeStateToURL(); render();
    });
  } else {
    board.innerHTML = filtered.map(rowHTML).join('');
  }

  renderCompareBar();
  writeStateToURL();
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

/* ---------------- events ---------------- */

function bindEvents() {
  $('tabBest').addEventListener('click', function () {
    if (state.tab !== 'best') { state.tab = 'best'; writeStateToURL(); render(); }
  });
  $('tabWorst').addEventListener('click', function () {
    if (state.tab !== 'worst') { state.tab = 'worst'; writeStateToURL(); render(); }
  });
  $('sortSelect').addEventListener('change', function (e) {
    state.sort = e.target.value; writeStateToURL(); render();
  });

  var searchTimer = null;
  $('rankSearch').addEventListener('input', function (e) {
    clearTimeout(searchTimer);
    var v = e.target.value;
    searchTimer = setTimeout(function () {
      state.q = v; writeStateToURL(); render();
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
