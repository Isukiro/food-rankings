/* Personal Collections library ("My Shelf") — site-wide.
 *
 * window.Shelf: favorites / want-to-try / tried-it collections, an
 * "explored" counter, and personal star ratings — all persisted in
 * localStorage on this device (keys prefixed "fr_"). Works standalone;
 * only needs data/foods.js for exploredTotal().
 *
 * Kinds: 'fav'   = Favorites   (heart  ♥)
 *         'try'   = Want to Try (star   ★)
 *         'tried' = Tried It    (check  ✓)
 *
 * Community votes live under 'fr_votes' (rankings.js) and are untouched;
 * personal ratings use their own key 'fr_myratings'.
 */
(function () {
  "use strict";

  var PREFIX = "fr_";
  var KEYS = {
    fav: PREFIX + "fav",
    try: PREFIX + "try",
    tried: PREFIX + "tried",
    viewed: PREFIX + "viewed",
    myratings: PREFIX + "myratings"
  };
  var KINDS = ["fav", "try", "tried"];
  var KIND_LABEL = { fav: "Favorites", try: "Want to Try", tried: "Tried It" };
  var KIND_GLYPH = { fav: "♥", try: "★", tried: "✓" };

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      var v = JSON.parse(raw);
      return v === null || v === undefined ? fallback : v;
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { /* storage unavailable — stay silent, site still works */ }
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function asList(v) {
    return Array.isArray(v) ? v.filter(function (x) { return typeof x === "string"; }) : [];
  }
  function validKind(kind) { return KINDS.indexOf(kind) !== -1; }

  var Shelf = {
    /* ---- collections: fav / try / tried ---- */
    toggle: function (name, kind) {
      if (!name || !validKind(kind)) return false;
      var list = asList(read(KEYS[kind], []));
      var i = list.indexOf(name);
      if (i === -1) list.push(name);
      else list.splice(i, 1);
      write(KEYS[kind], list);
      return i === -1; // true when the food was added
    },
    has: function (name, kind) {
      if (!name || !validKind(kind)) return false;
      return asList(read(KEYS[kind], [])).indexOf(name) !== -1;
    },
    list: function (kind) {
      if (!validKind(kind)) return [];
      return asList(read(KEYS[kind], []));
    },
    label: function (kind) { return KIND_LABEL[kind] || kind; },
    glyph: function (kind) { return KIND_GLYPH[kind] || ""; },

    /* ---- explored (viewed) counter ---- */
    viewed: function (name) {
      if (!name) return;
      var cap = Shelf.exploredTotal() || 1203;
      var list = asList(read(KEYS.viewed, []));
      if (list.indexOf(name) === -1) {
        list.push(name);
        if (list.length > cap) list = list.slice(list.length - cap);
        write(KEYS.viewed, list);
      }
    },
    exploredCount: function () { return asList(read(KEYS.viewed, [])).length; },
    exploredTotal: function () {
      return (typeof window !== "undefined" && Array.isArray(window.FOODS))
        ? window.FOODS.length : 1203;
    },

    /* ---- personal star ratings (1–5), separate from community votes ---- */
    rate: function (name, stars) {
      if (!name) return false;
      stars = Math.round(Number(stars));
      if (stars < 1 || stars > 5) return false;
      var r = read(KEYS.myratings, {});
      r = (r && typeof r === "object" && !Array.isArray(r)) ? r : {};
      r[name] = stars;
      write(KEYS.myratings, r);
      return true;
    },
    getRating: function (name) {
      var r = read(KEYS.myratings, {});
      var v = r && r[name];
      return (v >= 1 && v <= 5) ? v : null;
    },
    myRatings: function () {
      var r = read(KEYS.myratings, {});
      var out = {};
      if (r && typeof r === "object" && !Array.isArray(r)) {
        Object.keys(r).forEach(function (k) {
          var v = Number(r[k]);
          if (v >= 1 && v <= 5) out[k] = Math.round(v);
        });
      }
      return out;
    },

    /* ---- embeddable toggle buttons: ♥ Favorites · ★ Want to Try · ✓ Tried It ----
     * Returns an HTML string. Buttons flip Shelf state and re-render their
     * own active states in place; no page code needed beyond rendering this.
     * Call Shelf.viewed(name) separately when a food is opened/clicked. */
    toggleButtonHTML: function (name) {
      var n = esc(name);
      return KINDS.map(function (kind) {
        var on = Shelf.has(name, kind);
        return '<button type="button" class="shelf-tbtn shelf-' + kind +
          (on ? " is-active" : "") + '" data-shelf-kind="' + kind +
          '" data-shelf-name="' + n + '" aria-pressed="' + (on ? "true" : "false") +
          '" title="' + (on ? "Remove from " : "Add to ") + esc(Shelf.label(kind)) +
          '" aria-label="' + (on ? "Remove from " : "Add to ") + esc(Shelf.label(kind)) +
          ': ' + n + '">' + KIND_GLYPH[kind] + "</button>";
      }).join("");
    },

    /* Re-render active states for all toggle buttons on the page (used by
     * the delegated click handler and by pages that re-render cards). */
    refreshButtons: function (root) {
      (root || document).querySelectorAll(".shelf-tbtn").forEach(function (btn) {
        var on = Shelf.has(btn.getAttribute("data-shelf-name"), btn.getAttribute("data-shelf-kind"));
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
        var label = Shelf.label(btn.getAttribute("data-shelf-kind"));
        btn.title = (on ? "Remove from " : "Add to ") + label;
      });
    },

    /* ---- export / clear ---- */
    exportData: function () {
      return {
        exportedAt: new Date().toISOString(),
        favorites: Shelf.list("fav"),
        wantToTry: Shelf.list("try"),
        triedIt: Shelf.list("tried"),
        explored: asList(read(KEYS.viewed, [])),
        myRatings: Shelf.myRatings()
      };
    },
    clearAll: function () {
      Object.keys(KEYS).forEach(function (k) {
        try { localStorage.removeItem(KEYS[k]); } catch (e) { /* noop */ }
      });
    }
  };

  /* Delegated click handling: any .shelf-tbtn anywhere toggles its food/kind
   * and updates its own active state. Pages must NOT stop propagation here. */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest(".shelf-tbtn") : null;
    if (!btn) return;
    e.preventDefault();
    var name = btn.getAttribute("data-shelf-name");
    var kind = btn.getAttribute("data-shelf-kind");
    if (!name || !validKind(kind)) return;
    Shelf.toggle(name, kind);
    var on = Shelf.has(name, kind);
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    var label = Shelf.label(kind);
    btn.title = (on ? "Remove from " : "Add to ") + label;
  });

  window.Shelf = Shelf;
})();
