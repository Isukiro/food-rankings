/* modal.js — Food detail zoom modal for The Global Food Encyclopedia.
 *
 * Exposes:
 *   window.openFoodModal(name)  — open the detail modal for the food whose
 *                                 FOODS entry has this exact name
 *   window.closeFoodModal()     — close the modal (safe to call when closed)
 *
 * Also installs a document-level click delegate: any click on an element
 * carrying `data-food-name` opens the modal — EXCEPT when the click target
 * is inside an interactive element (button, a, input, select, textarea,
 * label, or .no-modal); those keep their existing behavior (vote stars,
 * compare checkboxes, cookbook hearts all live on interactive elements, so
 * they never trigger the modal). No stopPropagation is called.
 *
 * Depends on: data/foods.js (FOODS). Optionally data/pros-cons.js (PROS_CONS)
 * and data/photos.js (PHOTOS); both guarded with typeof.
 *
 * Storage formats (byte-identical to the sibling modules):
 *   fr_votes: JSON object  { "Food name": 1-5 }        (matches rankings.js)
 *   fr_favs:  JSON array   [ "Food name", ... ]        (matches cookbook.js)
 *
 * Events: on open, dispatches document 'fr-food-viewed' with {name}.
 *         on vote, dispatches document 'fr-vote-changed' with {name, stars}.
 *         on favorite toggle, dispatches 'fr-fav-changed' with {name, saved}.
 */
(function () {
  'use strict';

  if (window.__frModalInit) return; // guard against double-loading
  window.__frModalInit = true;

  /* ---------------- helpers ---------------- */

  // Same escaping contract as rankings.js esc().
  function esc(s) {
    return String(s === null || s === undefined ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Scoring, kept consistent with rankings.js scoreOf():
  // best  rank r -> Math.round((10-(r-1)*0.035)*10)/10, worst rank r -> same on 3.5/0.025
  function scoreFor(food) {
    if (food.bestRank !== null && food.bestRank !== undefined) {
      return Math.round((10 - (food.bestRank - 1) * 0.035) * 10) / 10;
    }
    if (food.worstRank !== null && food.worstRank !== undefined) {
      return Math.round((3.5 - (food.worstRank - 1) * 0.025) * 10) / 10;
    }
    return null;
  }

  function tierOf(score) {
    if (score === null || score === undefined) return null;
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

  function findFood(name) {
    if (typeof FOODS === 'undefined' || !FOODS) return null;
    for (var i = 0; i < FOODS.length; i++) {
      if (FOODS[i].name === name) return FOODS[i];
    }
    return null;
  }

  function prosConsFor(name) {
    if (typeof PROS_CONS !== 'undefined' && PROS_CONS && PROS_CONS[name]) return PROS_CONS[name];
    return null;
  }

  function photoFor(name) {
    if (typeof PHOTOS !== 'undefined' && PHOTOS && PHOTOS[name]) return PHOTOS[name];
    return null;
  }

  /* ---------------- storage: exact sibling formats ---------------- */

  // fr_votes: JSON object mapping food name -> star count (1-5). (rankings.js)
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

  // fr_favs: JSON array of food name strings. (cookbook.js)
  function getFavs() {
    try {
      var v = JSON.parse(localStorage.getItem('fr_favs') || '[]');
      if (!Array.isArray(v)) return [];
      return v.filter(function (x) { return typeof x === 'string' && x.length > 0; });
    } catch (e) {
      return [];
    }
  }

  function setFavs(list) {
    try {
      localStorage.setItem('fr_favs', JSON.stringify(list));
    } catch (e) { /* private mode: favorites just won't persist */ }
  }

  function isFav(name) {
    return getFavs().indexOf(name) !== -1;
  }

  // Returns true if the food is now saved.
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

  /* ---------------- shell ---------------- */

  var backdrop = null;
  var dialog = null;
  var closeBtn = null;
  var bodyEl = null;
  var modalName = null;   // name currently shown; null when closed
  var lastFocused = null; // element to restore focus to on close

  function buildShell() {
    backdrop = document.createElement('div');
    backdrop.className = 'fr-modal-backdrop';
    backdrop.hidden = true;
    backdrop.innerHTML =
      '<div class="fr-modal" role="dialog" aria-modal="true" aria-label="Food details">' +
        '<button type="button" class="fr-modal-close" aria-label="Close dialog">\u2715</button>' +
        '<div class="fr-modal-body"></div>' +
      '</div>';
    document.body.appendChild(backdrop);
    dialog = backdrop.querySelector('.fr-modal');
    closeBtn = backdrop.querySelector('.fr-modal-close');
    bodyEl = backdrop.querySelector('.fr-modal-body');

    closeBtn.addEventListener('click', closeFoodModal);
    // Backdrop click closes; clicks inside the dialog bubble with e.target !== backdrop.
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closeFoodModal();
    });
    // Modal-internal interactive bits use their own classes so sibling
    // modules' delegated handlers (vote-star, fav-btn) never see them.
    bodyEl.addEventListener('click', function (e) {
      if (!e.target || !e.target.closest) return;
      var star = e.target.closest('.fr-modal-star');
      if (star && bodyEl.contains(star)) {
        var sname = star.getAttribute('data-name');
        var stars = parseInt(star.getAttribute('data-stars'), 10);
        if (sname && stars >= 1 && stars <= 5) {
          setVote(sname, stars);
          document.dispatchEvent(new CustomEvent('fr-vote-changed', {
            detail: { name: sname, stars: stars }
          }));
          render(); // repaint the modal's vote row
        }
        return;
      }
      var fav = e.target.closest('.fr-modal-fav');
      if (fav && bodyEl.contains(fav)) {
        var fname = fav.getAttribute('data-name');
        if (fname) {
          var saved = toggleFav(fname);
          document.dispatchEvent(new CustomEvent('fr-fav-changed', {
            detail: { name: fname, saved: saved }
          }));
          render(); // repaint the heart
        }
      }
    });
  }

  /* ---------------- content ---------------- */

  function voteRowHTML(name) {
    var votes = getVotes();
    var mine = votes[name];
    var btns = '';
    for (var s = 1; s <= 5; s++) {
      btns += '<button type="button" class="fr-modal-star" data-name="' + esc(name) +
        '" data-stars="' + s + '" aria-label="Rate ' + s + ' out of 5 stars"' +
        (mine && s <= mine ? ' data-on="1"' : '') + '>\u2605</button>';
    }
    var status = mine
      ? '<span class="fr-modal-vote-status">Community: ' + esc(starsOf(mine)) +
        ' <em>(your vote, saved on this device — tap a star to change it)</em></span>'
      : '<span class="fr-modal-vote-status">Tap a star to rate this dish:</span>';
    return '<div class="fr-modal-vote-row">' + status +
      '<span class="fr-modal-vote-stars" role="group" aria-label="Rate this dish">' + btns + '</span></div>';
  }

  function favRowHTML(name) {
    var saved = isFav(name);
    return '<button type="button" class="fr-modal-fav' + (saved ? ' saved' : '') + '" data-name="' + esc(name) + '"' +
      ' aria-pressed="' + (saved ? 'true' : 'false') + '">' +
      '<span class="fr-modal-fav-icon" aria-hidden="true">' + (saved ? '\u2764\uFE0F' : '\uD83E\uDD0D') + '</span>' +
      '<span class="fr-modal-fav-label">' + (saved ? 'Saved to your cookbook' : 'Save to cookbook') + '</span>' +
      '</button>';
  }

  function prosConsHTML(pc) {
    if (!pc) return '';
    var html = '<div class="pros-cons">';
    if (pc.pros && pc.pros.length) {
      html += '<div class="pros"><h4>Pros</h4><ul>' +
        pc.pros.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
    }
    if (pc.cons && pc.cons.length) {
      html += '<div class="cons"><h4>Cons</h4><ul>' +
        pc.cons.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
    }
    return html + '</div>';
  }

  function contentHTML(f) {
    var score = scoreFor(f);
    var tier = tierOf(score);
    var stars = starsOf(score);
    var ranked = f.bestRank !== null && f.bestRank !== undefined
      ? { tab: 'best', rank: f.bestRank }
      : (f.worstRank !== null && f.worstRank !== undefined
        ? { tab: 'worst', rank: f.worstRank } : null);

    var badges = '';
    if (ranked) {
      var badgeCls = ranked.tab === 'worst' ? 'rank-badge worst' : 'rank-badge best';
      var badgeTxt = ranked.tab === 'worst'
        ? '#' + ranked.rank + ' Worst in the World'
        : '\u2605 #' + ranked.rank + ' Best in the World';
      badges += '<span class="' + badgeCls + '">' + esc(badgeTxt) + '</span>';
      badges += '<span class="tier-badge tier-' + tier + '" title="Tier ' + tier + '">' + tier + '</span>';
      badges += '<span class="fr-modal-score">' + score.toFixed(1) + '/10' +
        ' <span class="fr-modal-stars" aria-label="' + esc(stars) + '">' + esc(stars) + '</span></span>';
    } else {
      badges += '<span class="fr-modal-unranked">Unranked</span>';
    }

    var photo = photoFor(f.name);
    var html = '<div class="fr-modal-food-head">';
    if (photo) {
      html += '<img class="fr-modal-photo" src="' + esc(photo) + '" alt="Photo of ' + esc(f.name) +
        '" loading="lazy" onerror="this.remove()">';
    }
    html += '<div class="fr-modal-emoji" aria-hidden="true">' + esc(f.emoji) + '</div>';
    html += '<h2 class="fr-modal-name">' + esc(f.name) + '</h2>';
    html += '<p class="fr-modal-sub">' + esc(f.origin) + ' \u00B7 ' + esc(f.region) + ' \u00B7 ' + esc(f.category) + '</p>';
    html += '<div class="fr-modal-badges">' + badges + '</div>';
    html += '</div>';

    if (f.definition) html += '<p class="fr-modal-def">' + esc(f.definition) + '</p>';
    if (f.research) html += '<p class="fr-modal-res"><strong>Why it ranks:</strong> ' + esc(f.research) + '</p>';

    html += prosConsHTML(prosConsFor(f.name));

    html += '<div class="fr-modal-actions">';
    html += voteRowHTML(f.name);
    html += favRowHTML(f.name);
    html += '<a class="fr-modal-compare-link" href="rankings.html">Compare on rankings page &rarr;</a>';
    html += '</div>';

    return html;
  }

  function notFoundHTML(name) {
    return '<div class="fr-modal-food-head">' +
      '<div class="fr-modal-emoji" aria-hidden="true">\uD83C\uDF7D\uFE0F</div>' +
      '<h2 class="fr-modal-name">Dish not found</h2>' +
      '<p class="fr-modal-sub">We couldn\u2019t find a food called \u201C' + esc(name) + '\u201D in the encyclopedia.</p>' +
      '</div>' +
      '<p class="fr-modal-def">It may have been removed or renamed. Try searching the encyclopedia or browsing the rankings.</p>';
  }

  function render() {
    if (modalName === null) return;
    var f = findFood(modalName);
    dialog.setAttribute('aria-label', f ? ('Food details: ' + f.name) : 'Food not found');
    bodyEl.innerHTML = f ? contentHTML(f) : notFoundHTML(modalName);
  }

  /* ---------------- public API ---------------- */

  function openFoodModal(name) {
    if (typeof name !== 'string' || name === '') return;
    if (!backdrop) buildShell();
    modalName = name;
    lastFocused = document.activeElement;
    render();
    backdrop.hidden = false;
    document.body.style.overflow = 'hidden'; // lock scroll while the modal is up
    document.dispatchEvent(new CustomEvent('fr-food-viewed', { detail: { name: name } }));
    closeBtn.focus();
  }

  function closeFoodModal() {
    if (!backdrop || backdrop.hidden) return;
    backdrop.hidden = true;
    modalName = null;
    document.body.style.overflow = ''; // restore scroll
    if (lastFocused && document.contains(lastFocused)) {
      lastFocused.focus(); // restore focus
    }
  }

  window.openFoodModal = openFoodModal;
  window.closeFoodModal = closeFoodModal;

  /* ---------------- global wiring ---------------- */

  // Escape closes the open modal.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && backdrop && !backdrop.hidden) closeFoodModal();
  });

  // Click delegate: any click on [data-food-name] opens the modal, except
  // when the click is inside an interactive element (button, a, input,
  // select, textarea, label, .no-modal) — those keep their existing behavior.
  var INTERACTIVE_SEL = 'button, a, input, select, textarea, label, .no-modal';
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    if (t.closest(INTERACTIVE_SEL)) return; // keep existing behavior
    var el = t.closest('[data-food-name]');
    if (!el || !document.contains(el)) return;
    var name = el.getAttribute('data-food-name');
    if (name === null || name === '') return;
    openFoodModal(name);
  });
})();
