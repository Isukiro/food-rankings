/* ==========================================================================
 * cursor-glow.js — a soft glowing aura that follows the mouse cursor.
 *
 * - Single fixed div, radial gradient built from theme CSS vars (--accent /
 *   --primary), so it adapts instantly when the user changes themes.
 * - pointer-events: none, transform-only animation (no layout thrash).
 * - Smooth follow via requestAnimationFrame with lerp.
 * - Disabled when prefers-reduced-motion is set, on touch/no-hover devices,
 *   or when the user turns it off in the theme panel (fr_theme.glow === false).
 * - Listens for the 'fr-glow' CustomEvent (dispatched by theme.js) to toggle
 *   live without a reload.
 * ========================================================================== */
(function () {
  'use strict';

  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (window.__cursorGlowInit) return;
  window.__cursorGlowInit = true;

  var STORAGE_KEY = 'fr_theme';
  var LERP = 0.14;

  function motionOK() {
    try {
      return !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    } catch (e) { return true; }
  }

  function hoverOK() {
    try {
      if (window.matchMedia && window.matchMedia('(hover: none)').matches) return false;
      if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return false;
      return true;
    } catch (e) { return true; }
  }

  function userEnabled() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return true; /* default ON */
      var obj = JSON.parse(raw);
      return !(obj && obj.glow === false);
    } catch (e) { return true; }
  }

  if (!motionOK() || !hoverOK()) return; /* never create the div */

  var glow = document.createElement('div');
  glow.id = 'cursor-glow';
  glow.setAttribute('aria-hidden', 'true');
  document.body.appendChild(glow);

  var tx = -9999, ty = -9999;   /* target (mouse) */
  var cx = -9999, cy = -9999;   /* current (lerped) */
  var rafId = null;
  var enabled = userEnabled();
  var visible = false;

  function loop() {
    cx += (tx - cx) * LERP;
    cy += (ty - cy) * LERP;
    /* snap when close enough to avoid endless sub-pixel drift */
    if (Math.abs(tx - cx) < 0.1) cx = tx;
    if (Math.abs(ty - cy) < 0.1) cy = ty;
    glow.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0)';
    rafId = requestAnimationFrame(loop);
  }

  function setEnabled(on) {
    enabled = !!on;
    if (enabled && rafId === null) {
      rafId = requestAnimationFrame(loop);
    } else if (!enabled && rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    glow.classList.toggle('on', enabled && visible);
  }

  document.addEventListener('mousemove', function (e) {
    tx = e.clientX;
    ty = e.clientY;
    if (!visible) {
      visible = true;
      cx = tx; cy = ty; /* start at the cursor, no swoop-in from the corner */
      glow.classList.toggle('on', enabled);
    }
  }, { passive: true });

  document.addEventListener('mouseleave', function () {
    visible = false;
    glow.classList.remove('on');
  });

  document.addEventListener('fr-glow', function (e) {
    setEnabled(e && e.detail && e.detail.on !== false);
  });

  setEnabled(enabled);
})();
