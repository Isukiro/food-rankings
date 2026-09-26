/* search-plus.js — autocomplete suggestions + recent searches for the
 * homepage search box (#searchInput / #searchSuggest).
 *
 * - Typing shows up to 8 matching foods (name, origin, category), with
 *   taste-tag pills when window.FOOD_TASTES is available (guarded).
 * - Full keyboard support: ArrowUp/ArrowDown to move, Enter to choose, Esc
 *   to dismiss. Mouse/touch via mousedown (fires before blur).
 * - Focusing an empty box shows "Recent searches" from localStorage
 *   (fr_recent_searches, max 8, deduped, clickable to re-run).
 * - Choosing a suggestion fills the box and dispatches an input event so the
 *   page's existing live search renders — existing behavior is untouched.
 */
(function () {
  'use strict';

  var input = document.getElementById('searchInput');
  var box = document.getElementById('searchSuggest');
  if (!input || !box || typeof FOODS === 'undefined') return;

  var TASTES = (typeof window.FOOD_TASTES === 'object' && window.FOOD_TASTES) || {};
  var RECENT_KEY = 'fr_recent_searches';
  var MAX_SUGGEST = 8;
  var MAX_RECENT = 8;

  var activeIx = -1;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ---------------- recent searches ---------------- */

  function getRecent() {
    try {
      var arr = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
      if (!Array.isArray(arr)) return [];
      return arr.filter(function (x) { return typeof x === 'string' && x.trim(); }).slice(0, MAX_RECENT);
    } catch (e) { return []; }
  }

  function saveRecent(q) {
    q = String(q == null ? '' : q).trim();
    if (!q) return;
    var low = q.toLowerCase();
    var arr = getRecent().filter(function (x) { return x.toLowerCase() !== low; });
    arr.unshift(q);
    arr = arr.slice(0, MAX_RECENT);
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(arr)); } catch (e) { /* noop */ }
  }

  /* ---------------- matching ---------------- */

  function matchScore(f, q) {
    var name = f.name.toLowerCase();
    var origin = f.origin.toLowerCase();
    var cat = f.category.toLowerCase();
    if (name.indexOf(q) === 0) return 0;
    if (name.indexOf(q) !== -1) return 1;
    if (origin.indexOf(q) === 0) return 2;
    if (origin.indexOf(q) !== -1 || cat.indexOf(q) !== -1) return 3;
    return 4;
  }

  function findMatches(q) {
    q = q.toLowerCase().trim();
    if (!q) return [];
    var scored = [];
    for (var i = 0; i < FOODS.length; i++) {
      var s = matchScore(FOODS[i], q);
      if (s < 4) scored.push({ f: FOODS[i], s: s });
    }
    scored.sort(function (a, b) {
      if (a.s !== b.s) return a.s - b.s;
      return a.f.name < b.f.name ? -1 : (a.f.name > b.f.name ? 1 : 0);
    });
    return scored.slice(0, MAX_SUGGEST).map(function (x) { return x.f; });
  }

  function tastePills(name) {
    var t = TASTES[name];
    var tags = (t && t.tags) || [];
    if (!tags.length) return '';
    return '<span class="sug-tags" aria-hidden="true">' + tags.slice(0, 3).map(function (tag) {
      return '<span class="sug-tag">' + esc(tag) + '</span>';
    }).join('') + '</span>';
  }

  /* ---------------- rendering ---------------- */

  function show() {
    box.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  }

  function hide() {
    box.hidden = true;
    activeIx = -1;
    input.setAttribute('aria-expanded', 'false');
  }

  function renderSuggest(list) {
    if (!list.length) { hide(); return; }
    activeIx = -1;
    box.innerHTML = list.map(function (f, i) {
      return '<div class="sug-item" role="option" data-ix="' + i + '" data-name="' + esc(f.name) + '" aria-selected="false">'
        + '<span class="sug-emoji" aria-hidden="true">' + f.emoji + '</span>'
        + '<span class="sug-main"><span class="sug-name">' + esc(f.name) + '</span>'
        + '<span class="sug-sub">' + esc(f.origin) + ' \u00b7 ' + esc(f.category) + '</span></span>'
        + tastePills(f.name)
        + '</div>';
    }).join('');
    show();
  }

  function renderRecent() {
    var recents = getRecent();
    if (!recents.length) { hide(); return; }
    activeIx = -1;
    box.innerHTML = '<div class="sug-head">Recent searches</div>' + recents.map(function (q, i) {
      return '<div class="sug-item sug-recent" role="option" data-ix="' + i + '" data-q="' + esc(q) + '" aria-selected="false">'
        + '<span class="sug-clock" aria-hidden="true">\u21bb</span>'
        + '<span class="sug-name">' + esc(q) + '</span></div>';
    }).join('');
    show();
  }

  function items() {
    return box.querySelectorAll('.sug-item');
  }

  function setActive(ix) {
    var list = items();
    if (!list.length) return;
    activeIx = ((ix % list.length) + list.length) % list.length;
    Array.prototype.forEach.call(list, function (el, i) {
      var on = i === activeIx;
      el.classList.toggle('sug-active', on);
      el.setAttribute('aria-selected', on ? 'true' : 'false');
      if (on && el.scrollIntoView) {
        try { el.scrollIntoView({ block: 'nearest' }); } catch (e) { /* noop */ }
      }
    });
  }

  /* ---------------- choosing ---------------- */

  function foodByName(name) {
    for (var i = 0; i < FOODS.length; i++) {
      if (FOODS[i].name === name) return FOODS[i];
    }
    return null;
  }

  function runSearch() {
    var ev;
    try { ev = new Event('input', { bubbles: true }); }
    catch (e) { ev = document.createEvent('Event'); ev.initEvent('input', true, true); }
    input.dispatchEvent(ev);
  }

  function activateItem(el) {
    if (!el) return;
    var name = el.getAttribute('data-name');
    var q = el.getAttribute('data-q');
    if (name && foodByName(name)) {
      input.value = name;
      saveRecent(name);
    } else if (q) {
      input.value = q;
    } else if (name) {
      input.value = name;
      saveRecent(name);
    }
    hide();
    runSearch();
    input.focus();
  }

  /* ---------------- events ---------------- */

  input.addEventListener('input', function () {
    var q = input.value.trim();
    if (q) renderSuggest(findMatches(q));
    else renderRecent();
  });

  input.addEventListener('focus', function () {
    if (!input.value.trim()) renderRecent();
  });

  input.addEventListener('keydown', function (e) {
    if (box.hidden) {
      if (e.key === 'Enter' && input.value.trim()) saveRecent(input.value);
      return;
    }
    var list = items();
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(activeIx + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(activeIx - 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIx >= 0 && list[activeIx]) activateItem(list[activeIx]);
      else if (input.value.trim()) { saveRecent(input.value); hide(); }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      hide();
    }
  });

  /* mousedown fires before blur, so a tap/click always lands. */
  box.addEventListener('mousedown', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('.sug-item') : null;
    if (!el) return;
    e.preventDefault();
    activateItem(el);
  });

  document.addEventListener('click', function (e) {
    if (box.hidden) return;
    var wrap = input.closest ? input.closest('.search-input-wrap') : null;
    if (wrap && wrap.contains(e.target)) return;
    if (e.target === input || box.contains(e.target)) return;
    hide();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !box.hidden) hide();
  });
})();
