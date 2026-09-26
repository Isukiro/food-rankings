/* fotd.js — deterministic Food of the Day for The Global Food Encyclopedia.
 *
 * Picks index = (whole days since 2026-01-01 UTC) % FOODS.length, so every
 * visitor sees the same food on the same calendar day.
 *
 * On DOMContentLoaded, if document.getElementById('fotd-slot') exists and
 * FOODS is loaded, renders an elegant showcase card into it using existing
 * classes (card, kicker, etc.) so theme.js styling applies automatically.
 * Self-contained; depends only on data/foods.js (FOODS).
 */
(function () {
  'use strict';

  if (window.__frFotdInit) return; // guard against double-loading
  window.__frFotdInit = true;

  var FOTD_CSS = [
    '.fotd-card{text-align:center;max-width:680px;margin:0 auto}',
    '.fotd-card .fotd-emoji{font-size:3.6rem;margin-top:12px}',
    '.fotd-card h3{font-size:2rem;margin-top:10px}',
    '.fotd-card .definition,.fotd-card .research{text-align:left}',
    '.fotd-card .cat-row{justify-content:center}'
  ].join('');

  function injectStyles() {
    if (document.getElementById('fr-fotd-styles')) return;
    var st = document.createElement('style');
    st.id = 'fr-fotd-styles';
    st.textContent = FOTD_CSS;
    document.head.appendChild(st);
  }

  function foodOfTheDay() {
    if (typeof FOODS === 'undefined' || !FOODS || !FOODS.length) return null;
    var epoch = Date.UTC(2026, 0, 1); // 2026-01-01 00:00 UTC
    var days = Math.floor((Date.now() - epoch) / 86400000);
    var idx = ((days % FOODS.length) + FOODS.length) % FOODS.length;
    return FOODS[idx];
  }

  function rankBadge(f) {
    if (f.bestRank) return ' <span class="rank-badge best">★ #' + f.bestRank + ' Best</span>';
    if (f.worstRank) return ' <span class="rank-badge worst">#' + f.worstRank + ' Worst</span>';
    return '';
  }

  function render() {
    var slot = document.getElementById('fotd-slot');
    if (!slot) return;
    var f = foodOfTheDay();
    if (!f) {
      slot.innerHTML = '<p class="empty">Today\u2019s pick is still simmering \u2014 check back soon.</p>';
      return;
    }
    slot.innerHTML =
      '<article class="card fotd-card">'
      + '<p class="kicker">Food of the Day</p>'
      + '<div class="emoji fotd-emoji">' + f.emoji + '</div>'
      + '<h3>' + f.name + '</h3>'
      + '<div class="origin">' + f.origin + ' \u00B7 ' + f.region + '</div>'
      + '<div class="cat-row"><span class="cat-tag">' + f.category + '</span>' + rankBadge(f) + '</div>'
      + '<p class="definition">' + f.definition + '</p>'
      + '<div class="research"><strong>Research:</strong> ' + f.research + '</div>'
      + '</article>';
  }

  function init() {
    injectStyles();
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
