/* ==========================================================================
 * cursor-glow.js — a neon outline ring + dot that follows the mouse cursor.
 *
 * - Ring + dot are fixed divs styled in styles.css with neon box-shadows
 *   built from theme CSS vars (--accent / --primary), so the neon color
 *   adapts instantly when the user changes themes.
 * - pointer-events: none, transform-only animation (no layout thrash).
 * - Smooth follow via requestAnimationFrame with lerp; the dot follows
 *   tighter than the ring for a subtle trailing feel; the ring swells
 *   slightly with cursor speed and pulses on click.
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
  var RING_LERP = 0.2;
  var DOT_LERP = 0.45;

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

  if (!motionOK() || !hoverOK()) return; /* never create the elements */

  var ring = document.createElement('div');
  ring.id = 'cursor-glow';
  ring.setAttribute('aria-hidden', 'true');
  document.body.appendChild(ring);

  var dot = document.createElement('div');
  dot.id = 'cursor-dot';
  dot.setAttribute('aria-hidden', 'true');
  document.body.appendChild(dot);

  var tx = -9999, ty = -9999;   /* target (mouse) */
  var rx = -9999, ry = -9999;   /* ring position (lerped, looser) */
  var dx = -9999, dy = -9999;   /* dot position (lerped, tighter) */
  var rafId = null;
  var enabled = userEnabled();
  var visible = false;

  function loop() {
    var prx = rx, pry = ry;
    rx += (tx - rx) * RING_LERP;
    ry += (ty - ry) * RING_LERP;
    dx += (tx - dx) * DOT_LERP;
    dy += (ty - dy) * DOT_LERP;
    if (Math.abs(tx - rx) < 0.1) rx = tx;
    if (Math.abs(ty - ry) < 0.1) ry = ty;
    if (Math.abs(tx - dx) < 0.1) dx = tx;
    if (Math.abs(ty - dy) < 0.1) dy = ty;
    /* ring swells a touch with cursor speed */
    var speed = Math.sqrt(Math.pow(rx - prx, 2) + Math.pow(ry - pry, 2));
    var s = 1 + Math.min(speed / 60, 0.45);
    ring.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0)';
    ring.style.scale = s.toFixed(3);
    dot.style.transform = 'translate3d(' + dx + 'px,' + dy + 'px,0)';
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
    ring.classList.toggle('on', enabled && visible);
    dot.classList.toggle('on', enabled && visible);
  }

  document.addEventListener('mousemove', function (e) {
    tx = e.clientX;
    ty = e.clientY;
    if (!visible) {
      visible = true;
      rx = tx; ry = ty; dx = tx; dy = ty; /* start at cursor, no swoop-in */
      ring.classList.toggle('on', enabled);
      dot.classList.toggle('on', enabled);
    }
  }, { passive: true });

  document.addEventListener('mouseleave', function () {
    visible = false;
    ring.classList.remove('on');
    dot.classList.remove('on');
  });

  /* click pulse */
  document.addEventListener('mousedown', function () {
    if (!enabled || !visible) return;
    ring.classList.remove('pulse');
    void ring.offsetWidth; /* restart the animation */
    ring.classList.add('pulse');
  }, { passive: true });

  document.addEventListener('fr-glow', function (e) {
    setEnabled(e && e.detail && e.detail.on !== false);
  });

  setEnabled(enabled);
})();
