/* ==========================================================================
 * cursor-glow.js — a neon outline ring that tracks the mouse cursor 1:1.
 *
 * Architecture (deliberately simple — this is what the old version got wrong):
 * - Outer wrapper #cursor-glow is positioned ONLY via transform in the
 *   mousemove handler: zero lag, zero jitter, no rAF loop at all.
 * - Inner #cursor-glow-ring draws the neon ring; the click pulse animates
 *   transform: scale() on the INNER element only, so positioning and the
 *   pulse can never fight each other (the old bug: JS wrote style.scale
 *   every frame while a CSS animation tried to animate the same property).
 * - Neon color comes from theme CSS vars (--accent), so it follows theme
 *   changes automatically. pointer-events: none; will-change: transform.
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

  var wrap = document.createElement('div');
  wrap.id = 'cursor-glow';
  wrap.setAttribute('aria-hidden', 'true');
  var ring = document.createElement('div');
  ring.id = 'cursor-glow-ring';
  ring.setAttribute('aria-hidden', 'true');
  wrap.appendChild(ring);
  document.body.appendChild(wrap);

  var enabled = userEnabled();
  var visible = false;

  function show() {
    visible = true;
    wrap.classList.toggle('on', enabled);
  }
  function hide() {
    visible = false;
    wrap.classList.remove('on');
  }

  /* 1:1 tracking — position directly in the event, no interpolation loop */
  document.addEventListener('mousemove', function (e) {
    if (!enabled) return;
    wrap.style.transform =
      'translate3d(' + e.clientX + 'px,' + e.clientY + 'px,0)';
    if (!visible) show();
  }, { passive: true });

  document.addEventListener('mouseleave', hide);
  window.addEventListener('blur', hide);

  /* click pulse — animates the INNER ring only, never touches positioning */
  var pulseTimer = null;
  document.addEventListener('mousedown', function () {
    if (!enabled || !visible) return;
    ring.classList.remove('pulse');
    void ring.offsetWidth; /* restart the animation */
    ring.classList.add('pulse');
    if (pulseTimer) clearTimeout(pulseTimer);
    pulseTimer = setTimeout(function () {
      ring.classList.remove('pulse');
      pulseTimer = null;
    }, 400);
  }, { passive: true });

  document.addEventListener('fr-glow', function (e) {
    enabled = !(e && e.detail && e.detail.on === false);
    wrap.classList.toggle('on', enabled && visible);
  });
})();
