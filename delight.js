/* delight.js — small moments of joy.
 * 1. Reveal-on-scroll for cards (subtle, respects reduced-motion).
 * 2. Tiny gold confetti burst when a dish is marked "tried".
 * Everything is guarded; the page works fine without it. */
(function () {
  'use strict';

  /* ---------- 1. Reveal on scroll ---------- */
  try {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('dl-revealed');
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.06, rootMargin: '0px 0px 40px 0px' });
      document.querySelectorAll(
        '.food-card, .region-card, .cat-card, .leader-row, .pick-card, .review-card, .rc-card, .shelf-row'
      ).forEach(function (el) {
        el.classList.add('dl-reveal');
        io.observe(el);
      });
    }
  } catch (e) { /* visible by default */ }

  /* ---------- 2. Confetti on "tried it" ---------- */
  var COLORS = ['#d4af37', '#f4e3b2', '#ffffff', '#c9a227'];
  function burst(x, y) {
    try {
      for (var i = 0; i < 16; i++) {
        (function (i) {
          var s = document.createElement('span');
          s.className = 'dl-confetti';
          s.style.left = x + 'px';
          s.style.top = y + 'px';
          s.style.background = COLORS[i % COLORS.length];
          document.body.appendChild(s);
          var ang = Math.random() * Math.PI * 2;
          var dist = 40 + Math.random() * 70;
          var dx = Math.cos(ang) * dist;
          var dy = Math.sin(ang) * dist - 30;
          var anim = s.animate(
            [
              { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
              { transform: 'translate(' + dx + 'px,' + dy + 'px) rotate(' + Math.floor(Math.random() * 360) + 'deg)', opacity: 0 }
            ],
            { duration: 700 + Math.random() * 400, easing: 'cubic-bezier(.2,.7,.3,1)' }
          );
          anim.onfinish = function () { s.remove(); };
          setTimeout(function () { if (s.parentNode) s.remove(); }, 1400);
        })(i);
      }
    } catch (e) { /* joy is optional */ }
  }

  document.addEventListener('click', function (e) {
    var b = e.target && e.target.closest
      ? e.target.closest('.shelf-tbtn[data-shelf-kind="tried"], [data-shelf="tried"]')
      : null;
    if (!b) return;
    var r = b.getBoundingClientRect();
    setTimeout(function () {
      if (b.classList.contains('is-active') || b.classList.contains('active')) {
        burst(r.left + r.width / 2, r.top);
      }
    }, 40);
  });
})();
