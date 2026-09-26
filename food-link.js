/* food-link.js — click-to-detail wiring.
 * Any element with data-food-link="<exact food name>" navigates to
 * food.html?name=<encoded name> when clicked. Keyboard accessible for
 * links/buttons; other elements get role="button" + Enter/Space support. */
(function () {
  'use strict';
  function go(el) {
    var name = el.getAttribute('data-food-link');
    if (!name) return;
    window.location.href = 'food.html?name=' + encodeURIComponent(name);
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-food-link]') : null;
    if (el) go(el);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var el = e.target.closest ? e.target.closest('[data-food-link]') : null;
    if (!el) return;
    var tag = (el.tagName || '').toLowerCase();
    if (tag === 'a' || tag === 'button') return; /* native behavior */
    e.preventDefault();
    go(el);
  });
  /* Enhance non-interactive elements for a11y */
  document.querySelectorAll('[data-food-link]').forEach(function (el) {
    var tag = (el.tagName || '').toLowerCase();
    if (tag !== 'a' && tag !== 'button' && !el.hasAttribute('tabindex')) {
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
    }
    if (!el.hasAttribute('title')) el.title = 'View full food profile';
  });
  /* Record exploration for "My Shelf" progress (guarded). */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-food-link]') : null;
    if (el && window.Shelf && typeof window.Shelf.viewed === 'function') {
      try { window.Shelf.viewed(el.getAttribute('data-food-link')); } catch (err) {}
    }
  });
})();
