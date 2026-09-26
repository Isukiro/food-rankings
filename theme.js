/* theme.js — theme customization for The Global Food Encyclopedia.
 *
 * Self-contained: on DOMContentLoaded it reads localStorage 'fr_theme'
 * (JSON {preset} or {custom:{primary,accent}}), applies it via
 * document.documentElement data-theme + CSS var overrides, injects a
 * settings button into nav.site-nav, and opens an elegant preset/custom
 * color panel. Choice persists to localStorage and applies instantly.
 * No dependencies. Safe to load on every page.
 */
(function () {
  'use strict';

  if (window.__frThemeInit) return; // guard against double-loading
  window.__frThemeInit = true;

  var STORAGE_KEY = 'fr_theme';
  var DEFAULT_PRESET = 'midnight';

  var PRESETS = {
    midnight:  { label: 'Midnight Gold', bg: '#060f21', surface: '#0d2140', text: '#f2ecdc', muted: '#93a1bd', primary: '#c9a227', accent: '#d4af37' },
    ocean:     { label: 'Ocean Blue',    bg: '#041826', surface: '#0a2c44', text: '#e8f1f5', muted: '#8fa8b8', primary: '#2e9bc4', accent: '#7fd4f0' },
    forest:    { label: 'Forest Green',  bg: '#0a1a10', surface: '#14301e', text: '#eef2e4', muted: '#9db09a', primary: '#5da85f', accent: '#a8dba8' },
    plum:      { label: 'Royal Plum',    bg: '#170d20', surface: '#2a1738', text: '#f0e8f2', muted: '#a89ab5', primary: '#a55fc0', accent: '#d0a0e8' },
    crimson:   { label: 'Crimson Night', bg: '#1c0a0e', surface: '#3a1420', text: '#f5e8e4', muted: '#b89890', primary: '#c0392b', accent: '#f08a70' },
    parchment: { label: 'Parchment',     bg: '#f5efe0', surface: '#fffdf5', text: '#2a2419', muted: '#7a6f5c', primary: '#a8842c', accent: '#c9a227' }
  };
  var PRESET_ORDER = ['midnight', 'ocean', 'forest', 'plum', 'crimson', 'parchment'];
  var HEX_RE = /^#[0-9a-fA-F]{6}$/;

  /* ---------------- storage ---------------- */

  function readStored() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var obj = JSON.parse(raw);
      if (!obj || typeof obj !== 'object') return null;
      if (obj.preset && PRESETS[obj.preset]) return { preset: obj.preset };
      if (obj.custom && HEX_RE.test(obj.custom.primary) && HEX_RE.test(obj.custom.accent)) {
        return { custom: { primary: obj.custom.primary, accent: obj.custom.accent } };
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  function persist(sel) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sel));
    } catch (e) { /* private mode: theme just won't persist */ }
  }

  /* ---------------- apply ---------------- */

  function applyTheme(sel) {
    var root = document.documentElement;
    // clear any previous custom inline overrides first
    root.style.removeProperty('--primary');
    root.style.removeProperty('--accent');
    if (sel && sel.custom) {
      root.setAttribute('data-theme', 'midnight'); // custom builds on the default base
      root.style.setProperty('--primary', sel.custom.primary);
      root.style.setProperty('--accent', sel.custom.accent);
    } else {
      root.setAttribute('data-theme', (sel && sel.preset) || DEFAULT_PRESET);
    }
  }

  /* ---------------- panel styles (self-contained) ---------------- */

  var PANEL_CSS = [
    '#fr-theme-btn{background:none;border:0;cursor:pointer;font-size:1.1rem;line-height:1;',
    'padding:6px 8px;margin-left:10px;vertical-align:middle;color:var(--muted,#93a1bd);border-radius:8px}',
    '#fr-theme-btn:hover{color:var(--accent,#d4af37);background:color-mix(in srgb,var(--primary,#c9a227) 12%,transparent)}',
    '#fr-theme-panel{position:fixed;top:76px;right:16px;z-index:300;width:294px;max-width:calc(100vw - 32px);',
    'background:var(--surface,#0d2140);border:1px solid var(--card-edge,rgba(201,162,39,.28));border-radius:14px;',
    'box-shadow:0 18px 50px rgba(0,0,0,.5);padding:20px 18px 16px;',
    "font-family:Georgia,'Times New Roman',serif;color:var(--text,#f2ecdc)}",
    '#fr-theme-panel[hidden]{display:none}',
    '.fr-theme-title{font-size:1.05rem;letter-spacing:1px;margin:0 0 2px}',
    '.fr-theme-sub{font-size:.8rem;color:var(--muted,#93a1bd);font-style:italic;margin:0 0 14px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif}',
    '.fr-theme-swatches{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px}',
    '.fr-theme-swatch{display:flex;align-items:center;gap:8px;background:none;border:1px solid var(--card-edge,rgba(201,162,39,.28));',
    'border-radius:10px;padding:8px 10px;cursor:pointer;color:var(--text,#f2ecdc);font-family:inherit;font-size:.8rem;text-align:left}',
    '.fr-theme-swatch:hover{border-color:var(--primary,#c9a227)}',
    '.fr-theme-swatch[aria-pressed="true"]{border-color:var(--accent,#d4af37);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent,#d4af37) 35%,transparent)}',
    '.fr-theme-dots{display:inline-flex;flex:none}',
    '.fr-theme-dots i{width:14px;height:14px;border-radius:50%;border:1px solid rgba(0,0,0,.35);margin-left:-5px;display:block}',
    '.fr-theme-dots i:first-child{margin-left:0}',
    '.fr-theme-custom-label{display:block;font-size:.72rem;letter-spacing:2px;text-transform:uppercase;color:var(--muted,#93a1bd);margin-bottom:8px}',
    '.fr-theme-custom{display:flex;gap:12px;margin-bottom:14px}',
    '.fr-theme-field{flex:1;display:flex;flex-direction:column;gap:6px;font-size:.72rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted,#93a1bd)}',
    '.fr-theme-field input[type=color]{width:100%;height:38px;border:1px solid var(--card-edge,rgba(201,162,39,.28));',
    'border-radius:8px;background:var(--input-bg,rgba(0,0,0,.45));padding:3px;cursor:pointer}',
    '.fr-theme-foot{display:flex;justify-content:space-between;align-items:center}',
    '.fr-theme-reset{background:none;border:0;color:var(--accent,#d4af37);cursor:pointer;font-family:inherit;font-size:.85rem;text-decoration:underline;padding:0}',
    '.fr-theme-reset:hover{color:var(--text,#f2ecdc)}',
    '.fr-theme-close{position:absolute;top:8px;right:10px;background:none;border:0;color:var(--muted,#93a1bd);font-size:1.15rem;cursor:pointer;line-height:1;padding:4px}',
    '.fr-theme-close:hover{color:var(--text,#f2ecdc)}'
  ].join('');

  function injectStyles() {
    if (document.getElementById('fr-theme-styles')) return;
    var st = document.createElement('style');
    st.id = 'fr-theme-styles';
    st.textContent = PANEL_CSS;
    document.head.appendChild(st);
  }

  /* ---------------- panel ---------------- */

  function swatchHTML(key) {
    var p = PRESETS[key];
    return '<button type="button" class="fr-theme-swatch" data-preset="' + key + '" aria-pressed="false">'
      + '<span class="fr-theme-dots" aria-hidden="true">'
      + '<i style="background:' + p.primary + '"></i><i style="background:' + p.accent + '"></i>'
      + '</span><span>' + p.label + '</span></button>';
  }

  function buildPanel() {
    var panel = document.createElement('div');
    panel.id = 'fr-theme-panel';
    panel.hidden = true;
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Theme settings');
    panel.innerHTML =
      '<button type="button" class="fr-theme-close" aria-label="Close theme settings">×</button>'
      + '<p class="fr-theme-title">Theme</p>'
      + '<p class="fr-theme-sub">Pick a preset, or mix your own colors.</p>'
      + '<div class="fr-theme-swatches">' + PRESET_ORDER.map(swatchHTML).join('') + '</div>'
      + '<span class="fr-theme-custom-label">Custom colors</span>'
      + '<div class="fr-theme-custom">'
      + '<label class="fr-theme-field">Primary<input type="color" id="fr-theme-primary" value="#c9a227"></label>'
      + '<label class="fr-theme-field">Accent<input type="color" id="fr-theme-accent" value="#d4af37"></label>'
      + '</div>'
      + '<div class="fr-theme-foot"><button type="button" class="fr-theme-reset">Reset to default</button></div>';
    document.body.appendChild(panel);
    return panel;
  }

  function syncPanel(panel) {
    var sel = readStored() || { preset: DEFAULT_PRESET };
    var swatches = panel.querySelectorAll('.fr-theme-swatch');
    for (var i = 0; i < swatches.length; i++) {
      var active = !!sel.preset && swatches[i].getAttribute('data-preset') === sel.preset;
      swatches[i].setAttribute('aria-pressed', active ? 'true' : 'false');
    }
    var primaryPicker = panel.querySelector('#fr-theme-primary');
    var accentPicker = panel.querySelector('#fr-theme-accent');
    if (sel.custom) {
      primaryPicker.value = sel.custom.primary;
      accentPicker.value = sel.custom.accent;
    } else {
      var p = PRESETS[sel.preset] || PRESETS[DEFAULT_PRESET];
      primaryPicker.value = p.primary;
      accentPicker.value = p.accent;
    }
  }

  function choose(sel) {
    applyTheme(sel);
    persist(sel);
  }

  function bindPanel(panel, btn) {
    panel.addEventListener('click', function (e) {
      var sw = e.target.closest ? e.target.closest('.fr-theme-swatch') : null;
      if (sw) {
        choose({ preset: sw.getAttribute('data-preset') });
        syncPanel(panel);
        return;
      }
      if (e.target.closest && e.target.closest('.fr-theme-close')) {
        panel.hidden = true;
        return;
      }
      if (e.target.closest && e.target.closest('.fr-theme-reset')) {
        choose({ preset: DEFAULT_PRESET });
        syncPanel(panel);
      }
    });

    function customFromPickers() {
      return {
        custom: {
          primary: panel.querySelector('#fr-theme-primary').value,
          accent: panel.querySelector('#fr-theme-accent').value
        }
      };
    }
    // live preview while dragging, persist once released
    panel.querySelector('#fr-theme-primary').addEventListener('input', function () {
      applyTheme(customFromPickers());
    });
    panel.querySelector('#fr-theme-accent').addEventListener('input', function () {
      applyTheme(customFromPickers());
    });
    panel.querySelector('#fr-theme-primary').addEventListener('change', function () {
      choose(customFromPickers()); syncPanel(panel);
    });
    panel.querySelector('#fr-theme-accent').addEventListener('change', function () {
      choose(customFromPickers()); syncPanel(panel);
    });

    btn.addEventListener('click', function () {
      panel.hidden = !panel.hidden;
      if (!panel.hidden) syncPanel(panel);
    });

    // close on outside click
    document.addEventListener('click', function (e) {
      if (panel.hidden) return;
      if (panel.contains(e.target)) return;
      if (btn.contains(e.target)) return;
      panel.hidden = true;
    });

    // close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) panel.hidden = true;
    });
  }

  /* ---------------- init ---------------- */

  function init() {
    applyTheme(readStored());
    injectStyles();

    var nav = document.querySelector('nav.site-nav');
    if (!nav) return;
    if (document.getElementById('fr-theme-btn')) return; // guard against double-injection

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'fr-theme-btn';
    btn.setAttribute('aria-label', 'Theme settings');
    btn.setAttribute('title', 'Theme settings');
    btn.textContent = '⚙️';
    nav.appendChild(btn);

    var panel = buildPanel();
    bindPanel(panel, btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
