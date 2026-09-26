/* tops.js — feature module for tops.html ("Rankings by Category")
 *
 * HONESTY RULE (do not weaken): only the overall Top 100 Best (TasteAtlas 2025)
 * and Top 100 Worst (TasteAtlas 2026) have REAL ranks. Per-category lists here
 * are ordered by the site's computed Food Rankings score and are ALWAYS
 * labeled "not an official ranking". A "#" rank badge is rendered ONLY for a
 * food that carries a real bestRank/worstRank. Foods without one show
 * score/10 + tier badge, or an "Unranked" tag when they have no score at all.
 *
 * Scoring (same formula as rankings.js, kept self-contained):
 *   bestRank r  -> Math.round((10-(r-1)*0.035)*10)/10
 *   worstRank r -> Math.round((3.5-(r-1)*0.025)*10)/10
 *   unranked    -> null
 * Tiers: S>=9.5, A>=8.5, B>=7.5, C>=5.0, D>=2.5, F<2.5, null->"–"
 * Stars: Math.round(score/2) of 5, rendered as ★/☆.
 *
 * Depends on: data/foods.js (FOODS). Optionally data/pros-cons.js (PROS_CONS)
 * and data/photos.js (PHOTOS); both are guarded with typeof.
 */

'use strict';

/* ---------------- scoring ---------------- */

function topsScoreOf(food) {
  var r = food.bestRank;
  if (r !== null && r !== undefined) {
    return Math.round((10 - (r - 1) * 0.035) * 10) / 10;
  }
  r = food.worstRank;
  if (r !== null && r !== undefined) {
    return Math.round((3.5 - (r - 1) * 0.025) * 10) / 10;
  }
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

/* URL builder for cross-linking: tops.html?cat=<category>.
 * Exposed as window.topInCategory(cat) so other pages/widgets can link here. */
function topInCategory(cat) {
  return 'tops.html?cat=' + encodeURIComponent(cat);
}
window.topInCategory = topInCategory;

/* ---------------- personal shelf (guarded) ---------------- */
/* If a global window.Shelf with toggle(list, name) / has(list, name) exists,
 * it is used; otherwise a localStorage fallback (fr_shelf) keeps the
 * Favorite / Want to try / Tried lists on this device. */

var SHELF_LISTS = ['favorites', 'wantToTry', 'tried'];

function shelfStore() {
  try {
    return JSON.parse(localStorage.getItem('fr_shelf') || '{}') || {};
  } catch (e) {
    return {};
  }
}

function shelfSave(store) {
  try {
    localStorage.setItem('fr_shelf', JSON.stringify(store));
  } catch (e) { /* private mode: shelf just won't persist */ }
}

function shelfHas(list, name) {
  if (typeof window.Shelf !== 'undefined' && window.Shelf &&
      typeof window.Shelf.has === 'function') {
    /* tops.js lists: favorites/wantToTry/tried -> Shelf kinds: fav/try/tried */
    var kind = { favorites: 'fav', wantToTry: 'try', tried: 'tried' }[list] || list;
    try { return !!window.Shelf.has(name, kind); } catch (e) { /* fall through */ }
  }
  var store = shelfStore();
  return Array.isArray(store[list]) && store[list].indexOf(name) !== -1;
}

function shelfToggle(list, name) {
  if (typeof window.Shelf !== 'undefined' && window.Shelf &&
      typeof window.Shelf.toggle === 'function') {
    var kind = { favorites: 'fav', wantToTry: 'try', tried: 'tried' }[list] || list;
    try {
      window.Shelf.toggle(name, kind);
      return shelfHas(list, name);
    } catch (e) { /* fall through to local fallback */ }
  }
  var store = shelfStore();
  if (!Array.isArray(store[list])) store[list] = [];
  var i = store[list].indexOf(name);
  if (i === -1) store[list].push(name);
  else store[list].splice(i, 1);
  shelfSave(store);
  return i === -1;
}

function shelfButtonsHTML(name) {
  var labels = { favorites: 'Favorite', wantToTry: 'Want to try', tried: 'Tried' };
  return '<div class="shelf-row" role="group" aria-label="Save ' + esc(name) + '">' +
    SHELF_LISTS.map(function (list) {
      var on = shelfHas(list, name);
      return '<button type="button" class="shelf-btn' + (on ? ' active' : '') +
        '" data-shelf="' + list + '" data-name="' + esc(name) +
        '" aria-pressed="' + (on ? 'true' : 'false') + '">' +
        esc(labels[list]) + '</button>';
    }).join('') + '</div>';
}

/* ---------------- state ---------------- */

var state = { cat: null, sort: 'score', q: '' };
var compareSet = []; // food names, max 3 (persisted so the tray survives navigation)

function loadCompareSet() {
  try {
    var v = JSON.parse(localStorage.getItem('fr_compare_tray') || '[]');
    if (Array.isArray(v)) compareSet = v.slice(0, 3);
  } catch (e) { compareSet = []; }
}

function saveCompareSet() {
  try {
    localStorage.setItem('fr_compare_tray', JSON.stringify(compareSet));
  } catch (e) { /* noop */ }
}

function allCategories() {
  var seen = {}, out = [];
  for (var i = 0; i < FOODS.length; i++) {
    var c = FOODS[i].category;
    if (c && !seen[c]) { seen[c] = true; out.push(c); }
  }
  return out;
}

function categoryCounts() {
  var counts = {};
  for (var i = 0; i < FOODS.length; i++) {
    var c = FOODS[i].category;
    counts[c] = (counts[c] || 0) + 1;
  }
  return allCategories().map(function (c) { return { name: c, count: counts[c] }; })
    .sort(function (a, b) { return b.count - a.count || a.name.localeCompare(b.name); });
}

function validCategory(v) {
  return v && allCategories().indexOf(v) !== -1 ? v : null;
}

function readStateFromURL() {
  var p = new URLSearchParams(window.location.search);
  state.cat = validCategory(p.get('cat'));
  var sort = p.get('sort');
  state.sort = sort === 'name' ? 'name' : 'score';
  state.q = p.get('q') || '';
}

function writeStateToURL() {
  var p = new URLSearchParams();
  if (state.cat) p.set('cat', state.cat);
  if (state.sort !== 'score') p.set('sort', state.sort);
  if (state.q) p.set('q', state.q);
  history.replaceState(null, '', window.location.pathname + '?' + p.toString());
}

/* ---------------- data ---------------- */

function photoFor(name) {
  if (typeof PHOTOS !== 'undefined' && PHOTOS && PHOTOS[name]) return PHOTOS[name];
  return null;
}

function prosConsFor(name) {
  if (typeof PROS_CONS !== 'undefined' && PROS_CONS && PROS_CONS[name]) return PROS_CONS[name];
  return null;
}

// Every food in a category, enriched. Order: scored (by score desc) first,
// then unscored (A–Z). score is null for unranked foods — never invented.
function categoryFoods(cat) {
  var scored = [], unscored = [];
  for (var i = 0; i < FOODS.length; i++) {
    var f = FOODS[i];
    if (f.category !== cat) continue;
    var score = topsScoreOf(f);
    var row = {
      name: f.name, origin: f.origin, region: f.region, category: f.category,
      emoji: f.emoji, definition: f.definition, research: f.research,
      bestRank: f.bestRank, worstRank: f.worstRank,
      score: score, tier: tierOf(score), stars: starsOf(score)
    };
    (score === null ? unscored : scored).push(row);
  }
  scored.sort(function (a, b) {
    return b.score - a.score || a.name.localeCompare(b.name);
  });
  unscored.sort(function (a, b) { return a.name.localeCompare(b.name); });
  return scored.concat(unscored);
}

function filteredSortedFoods(cat) {
  var list = categoryFoods(cat);
  var q = state.q.trim().toLowerCase();
  if (q) {
    list = list.filter(function (f) {
      var hay = (f.name + ' ' + f.origin + ' ' + f.region).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }
  if (state.sort === 'name') {
    list = list.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
  }
  return list;
}

/* ---------------- render: hub ---------------- */

function hubCardHTML(cat) {
  var foods = categoryFoods(cat.name).slice(0, 3);
  var top = foods.map(function (f) {
    var extra = f.score !== null
      ? ' <span class="hub-score">' + f.score.toFixed(1) + '/10</span>'
      : ' <span class="hub-unranked">Unranked</span>';
    return '<li>' + esc(f.emoji + ' ' + f.name) + extra + '</li>';
  }).join('');
  return '<a class="hub-card" href="' + esc(topInCategory(cat.name)) + '">' +
    '<h2>' + esc(cat.name) + '</h2>' +
    '<p class="hub-count">' + cat.count + ' dishes</p>' +
    '<ol class="hub-top">' + top + '</ol>' +
    '<span class="hub-link">View the full ranking</span>' +
    '</a>';
}

function renderHub() {
  $('hubView').hidden = false;
  $('catView').hidden = true;
  $('topsTitle').innerHTML = 'Rankings by <span class="gold">Category</span>';
  $('topsSub').textContent =
    'Every kind of food, from desserts to street food — ordered by Food Rankings score. ' +
    'Pick a category to see its full leaderboard.';
  var cats = categoryCounts();
  $('catHub').innerHTML = cats.map(hubCardHTML).join('');
  document.title = 'Rankings by Category — Top Desserts, Snacks, Street Food & More | The Global Food Encyclopedia';
}

/* ---------------- render: category view ---------------- */

function realRankBadge(f) {
  // The ONLY place a "#" rank number may appear: a real global rank.
  if (f.bestRank !== null && f.bestRank !== undefined) {
    return '<span class="rank-badge best">★ #' + f.bestRank + ' Best in the World</span>';
  }
  if (f.worstRank !== null && f.worstRank !== undefined) {
    return '<span class="rank-badge worst">#' + f.worstRank + ' Worst in the World</span>';
  }
  return '';
}

function topsRowHTML(f, position) {
  var photo = photoFor(f.name);
  var pc = prosConsFor(f.name);

  var html = '<article class="leader-row" data-name="' + esc(f.name) +
    '" data-food-name="' + esc(f.name) + '">';
  // Position in THIS list only — plain numeral, never "#N", so it can't be
  // mistaken for an official rank (the honesty note says the same).
  html += '<div class="leader-rank" title="Position in this category list — not an official rank">' +
    position + '</div>';
  if (photo) {
    html += '<img class="leader-photo" src="' + esc(photo) + '" alt="Photo of ' + esc(f.name) +
      '" loading="lazy" onerror="this.remove()">';
  }
  html += '<div class="leader-main">';
  html += '<div class="leader-name">' + esc(f.emoji + ' ' + f.name) + '</div>';
  html += '<div class="leader-sub">' + esc(f.origin) + ' · ' + esc(f.region) + ' · ' +
    esc(f.category) + '</div>';
  html += '<div class="leader-meta">';
  html += realRankBadge(f);
  if (f.score !== null) {
    html += '<span class="tier-badge tier-' + f.tier + '" title="Tier ' + f.tier + '">' +
      f.tier + '</span>';
    html += '<span class="score-line">' + f.score.toFixed(1) + '/10 <span class="stars" aria-label="' +
      esc(f.stars) + '">' + esc(f.stars) + '</span></span>';
  } else {
    html += '<span class="unranked-tag">Unranked — no official score</span>';
  }
  html += '<label class="compare-check"><input type="checkbox" class="compare-box" data-name="' +
    esc(f.name) + '"' + (compareSet.indexOf(f.name) !== -1 ? ' checked' : '') +
    '> Compare</label>';
  html += '</div>';
  html += shelfButtonsHTML(f.name);
  if (f.definition) html += '<p class="leader-def">' + esc(f.definition) + '</p>';
  if (f.research) {
    var label = f.score !== null ? 'Why it ranks' : 'Research notes';
    html += '<p class="leader-res"><strong>' + label + ':</strong> ' + esc(f.research) + '</p>';
  }
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
  html += '</div></article>';
  return html;
}

function renderCategoryView() {
  $('hubView').hidden = true;
  $('catView').hidden = false;
  var cat = state.cat;
  $('topsTitle').innerHTML = 'Top ' + esc(cat);
  $('topsSub').textContent =
    'Every ' + cat.toLowerCase() + ' dish in the encyclopedia, ordered by Food Rankings score. ' +
    'Not an official ranking — only TasteAtlas global ranks are official.';

  $('topsSort').value = state.sort;
  if ($('topsSearch').value !== state.q) $('topsSearch').value = state.q;

  var list = filteredSortedFoods(cat);
  var total = categoryFoods(cat).length;
  $('topsCount').textContent = list.length === total
    ? 'Showing all ' + total + ' ' + cat.toLowerCase() + ' dishes'
    : 'Showing ' + list.length + ' of ' + total + ' ' + cat.toLowerCase() + ' dishes';

  var board = $('topsBoard');
  if (list.length === 0) {
    board.innerHTML = '<div class="empty">No dishes match your search. ' +
      '<button type="button" class="gold-btn" id="topsClear">Clear search</button></div>';
    $('topsClear').addEventListener('click', function () {
      state.q = ''; writeStateToURL(); renderCategoryView(); renderCompareBar();
    });
  } else {
    board.innerHTML = list.map(function (f, i) { return topsRowHTML(f, i + 1); }).join('');
  }
  document.title = 'Top ' + cat + ' — Rankings by Category | The Global Food Encyclopedia';
}

/* ---------------- compare ---------------- */

function findFood(name) {
  if (typeof FOODS === 'undefined') return null;
  for (var i = 0; i < FOODS.length; i++) {
    if (FOODS[i].name === name) {
      var f = FOODS[i];
      var score = topsScoreOf(f);
      return {
        name: f.name, origin: f.origin, region: f.region, category: f.category,
        emoji: f.emoji, definition: f.definition,
        bestRank: f.bestRank, worstRank: f.worstRank,
        score: score, tier: tierOf(score), stars: starsOf(score)
      };
    }
  }
  return null;
}

function officialRankText(f) {
  if (f.bestRank !== null && f.bestRank !== undefined) return '#' + f.bestRank + ' Best in the World';
  if (f.worstRank !== null && f.worstRank !== undefined) return '#' + f.worstRank + ' Worst in the World';
  return '—';
}

function compareTableHTML() {
  var foods = compareSet.map(findFood).filter(Boolean);
  if (!foods.length) return '<div class="empty">Nothing to compare.</div>';
  function cell(fn) {
    return foods.map(function (f) { return '<td>' + fn(f) + '</td>'; }).join('');
  }
  function li(items) {
    return '<ul class="compare-list">' + items.map(function (x) {
      return '<li>' + esc(x) + '</li>';
    }).join('') + '</ul>';
  }
  var html = '<table class="compare-table"><thead><tr><th scope="col">Dish</th>' +
    foods.map(function (f) {
      return '<th scope="col"><span class="compare-emoji">' + esc(f.emoji) + '</span><br>' +
        esc(f.name) + '</th>';
    }).join('') + '</tr></thead><tbody>';
  html += '<tr><th scope="row">Origin</th>' + cell(function (f) { return esc(f.origin); }) + '</tr>';
  html += '<tr><th scope="row">Category</th>' + cell(function (f) { return esc(f.category); }) + '</tr>';
  html += '<tr><th scope="row">Score</th>' + cell(function (f) {
    return f.score !== null ? f.score.toFixed(1) + '/10' : 'Unranked';
  }) + '</tr>';
  html += '<tr><th scope="row">Tier</th>' + cell(function (f) {
    return f.score !== null
      ? '<span class="tier-badge tier-' + f.tier + '">' + f.tier + '</span>' : '—';
  }) + '</tr>';
  html += '<tr><th scope="row">Stars</th>' + cell(function (f) {
    return f.stars ? '<span class="stars">' + esc(f.stars) + '</span>' : '—';
  }) + '</tr>';
  html += '<tr><th scope="row">Official rank</th>' + cell(function (f) {
    return esc(officialRankText(f));
  }) + '</tr>';
  html += '<tr><th scope="row">Definition</th>' + cell(function (f) {
    return f.definition ? esc(f.definition) : '—';
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
  saveCompareSet();
  renderCompareBar();
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
  var searchTimer = null;
  $('topsSearch').addEventListener('input', function (e) {
    clearTimeout(searchTimer);
    var v = e.target.value;
    searchTimer = setTimeout(function () {
      state.q = v; writeStateToURL(); renderCategoryView();
    }, 220);
  });
  $('topsSort').addEventListener('change', function (e) {
    state.sort = e.target.value; writeStateToURL(); renderCategoryView();
  });

  // delegated: compare checkboxes + shelf buttons (rows re-render often)
  $('topsBoard').addEventListener('change', function (e) {
    if (e.target.classList.contains('compare-box')) {
      toggleCompare(e.target.getAttribute('data-name'), e.target.checked);
    }
  });
  $('topsBoard').addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.shelf-btn') : null;
    if (btn) {
      var list = btn.getAttribute('data-shelf');
      var name = btn.getAttribute('data-name');
      var on = shelfToggle(list, name);
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  });

  $('compareOpen').addEventListener('click', openCompare);
  $('compareClear').addEventListener('click', function () {
    compareSet = []; saveCompareSet();
    var boxes = document.querySelectorAll('.compare-box');
    for (var i = 0; i < boxes.length; i++) boxes[i].checked = false;
    renderCompareBar();
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
  loadCompareSet();
  readStateFromURL();
  bindEvents();
  if (typeof FOODS === 'undefined') {
    $('catHub').innerHTML =
      '<div class="empty">Ranking data failed to load. Please refresh the page.</div>';
    return;
  }
  if (state.cat) renderCategoryView();
  else renderHub();
  renderCompareBar();
});
