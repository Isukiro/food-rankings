/* cookbook.js — "My Cookbook" favorites for The Global Food Encyclopedia.
 *
 * localStorage 'fr_favs' = JSON array of food names.
 *
 * On DOMContentLoaded:
 *  - index-style pages: for each article.card h3 (except review cards, whose
 *    h3 is a review title rather than a food name), append a heart button
 *    (toggle, aria-label 'Save to cookbook', class 'fav-btn') next to the h3.
 *  - rankings pages: for each article.leader-row[data-name], append a small
 *    heart button into the row, next to .leader-name.
 * Clicks on .fav-btn are handled via event delegation on document; toggling
 * updates fr_favs and every matching button. The handler touches nothing
 * else, so existing vote/compare handlers keep working.
 *
 * Exposes window.getFavs() returning the array.
 * Self-contained; no dependencies.
 */
(function () {
  'use strict';

  if (window.__frCookbookInit) return; // guard against double-loading
  window.__frCookbookInit = true;

  var KEY = 'fr_favs';

  var FAV_CSS = [
    '.fav-btn{background:none;border:0;cursor:pointer;font-size:1.05rem;line-height:1;',
    'margin-left:10px;padding:2px 4px;vertical-align:middle;border-radius:6px}',
    '.fav-btn:hover{transform:scale(1.25)}',
    '.fav-btn:focus-visible{outline:2px solid var(--accent,#d4af37);outline-offset:2px}',
    '.fav-btn-small{font-size:.95rem;margin-left:8px}'
  ].join('');

  function injectStyles() {
    if (document.getElementById('fr-fav-styles')) return;
    var st = document.createElement('style');
    st.id = 'fr-fav-styles';
    st.textContent = FAV_CSS;
    document.head.appendChild(st);
  }

  /* ---------------- storage ---------------- */

  function getFavs() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || '[]');
      if (!Array.isArray(v)) return [];
      return v.filter(function (x) { return typeof x === 'string' && x.length > 0; });
    } catch (e) {
      return [];
    }
  }

  function setFavs(list) {
    try {
      localStorage.setItem(KEY, JSON.stringify(list));
    } catch (e) { /* private mode: favorites just won't persist */ }
  }

  // public accessor
  window.getFavs = getFavs;

  function isFav(name) {
    return getFavs().indexOf(name) !== -1;
  }

  // returns true if the food is now saved
  function toggleFav(name) {
    var favs = getFavs();
    var i = favs.indexOf(name);
    if (i === -1) {
      favs.push(name);
    } else {
      favs.splice(i, 1);
    }
    setFavs(favs);
    return i === -1;
  }

  /* ---------------- buttons ---------------- */

  function paintButton(btn, saved) {
    btn.textContent = saved ? '❤️' : '🤍';
    btn.setAttribute('aria-pressed', saved ? 'true' : 'false');
    btn.setAttribute('aria-label', saved ? 'Remove from cookbook' : 'Save to cookbook');
    btn.setAttribute('title', saved ? 'Remove from cookbook' : 'Save to cookbook');
  }

  function makeButton(name, small) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'fav-btn' + (small ? ' fav-btn-small' : '');
    b.setAttribute('data-name', name);
    paintButton(b, isFav(name));
    return b;
  }

  function paintAll(name, saved) {
    var btns = document.querySelectorAll('.fav-btn');
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].getAttribute('data-name') === name) paintButton(btns[i], saved);
    }
  }

  function injectButtons() {
    // the cookbook page renders its own cards with Remove buttons — skip it
    if (document.getElementById('cookbookGrid')) return;

    // index.html-style cards (search results, editor's picks)
    var cards = document.querySelectorAll('article.card');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      if (card.classList.contains('review-card')) continue; // h3 is a review title, not a food
      var h3 = card.querySelector('h3');
      if (!h3 || h3.querySelector('.fav-btn')) continue;
      var name = h3.textContent.trim();
      if (!name) continue;
      h3.appendChild(makeButton(name, false));
    }

    // rankings.html leaderboard rows
    var rows = document.querySelectorAll('article.leader-row[data-name]');
    for (var j = 0; j < rows.length; j++) {
      var row = rows[j];
      var nameEl = row.querySelector('.leader-name');
      if (!nameEl || nameEl.querySelector('.fav-btn')) continue;
      var rowName = row.getAttribute('data-name');
      if (!rowName) continue;
      nameEl.appendChild(makeButton(rowName, true));
    }
  }

  /* ---------------- events ---------------- */

  // delegated: a single listener, scoped strictly to .fav-btn, so vote/compare
  // handlers on the same pages are unaffected
  document.addEventListener('click', function (e) {
    var btn = (e.target && e.target.closest) ? e.target.closest('.fav-btn') : null;
    if (!btn || !document.contains(btn)) return;
    var name = btn.getAttribute('data-name');
    if (!name) return;
    var saved = toggleFav(name);
    paintAll(name, saved);
  });

  /* ---------------- init ---------------- */

  function init() {
    injectStyles();
    injectButtons();

    // index search and rankings filters re-render their lists; re-inject hearts
    // after DOM churn (debounced; injectButtons itself is idempotent)
    var scheduled = false;
    function schedule() {
      if (scheduled) return;
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        injectButtons();
      }, 60);
    }
    if (window.MutationObserver) {
      var obs = new MutationObserver(schedule);
      obs.observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
