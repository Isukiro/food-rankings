/* Recently viewed — renders a strip of compact chips for foods the user has
 * recently opened in the modal. Sibling modal.js dispatches:
 *   document.dispatchEvent(new CustomEvent('fr-food-viewed', { detail: { name: 'Sushi' } }))
 * Requires data/foods.js (global FOODS) loaded first for emoji lookup.
 * Load this script after data/foods.js; it only touches #recent-section / #recent-strip.
 */
(function () {
  "use strict";

  var KEY = "fr_recent";
  var MAX = 12;

  function loadRecent() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      // Keep only non-empty strings; guard against tampered storage shapes.
      return parsed.filter(function (n) {
        return typeof n === "string" && n.length > 0;
      });
    } catch (e) {
      return [];
    }
  }

  function saveRecent(list) {
    try {
      localStorage.setItem(KEY, JSON.stringify(list.slice(0, MAX)));
    } catch (e) {
      /* storage unavailable/quota — non-fatal */
    }
  }

  function recordRecent(name) {
    if (typeof name !== "string" || !name.length) return;
    var list = loadRecent();
    list = [name].concat(list.filter(function (n) { return n !== name; }));
    saveRecent(list.slice(0, MAX));
  }

  function emojiFor(name) {
    if (typeof FOODS === "undefined") return "🍽️";
    for (var i = 0; i < FOODS.length; i++) {
      if (FOODS[i] && FOODS[i].name === name) return FOODS[i].emoji || "🍽️";
    }
    return "🍽️";
  }

  function renderRecentStrip() {
    var strip = document.getElementById("recent-strip");
    if (!strip) return;
    var section = document.getElementById("recent-section");
    var list = loadRecent();

    // Clear old chips.
    while (strip.firstChild) strip.removeChild(strip.firstChild);

    if (!list.length) {
      if (section) section.style.display = "none";
      return;
    }
    if (section) section.style.display = "";

    list.forEach(function (name) {
      // Build chips with DOM nodes + textContent so names with quotes/
      // apostrophes can never break out into HTML or attributes.
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip recent-chip";
      chip.title = name;

      var em = document.createElement("span");
      em.className = "recent-emoji";
      em.textContent = emojiFor(name);
      em.setAttribute("aria-hidden", "true");

      var label = document.createElement("span");
      label.className = "recent-name";
      label.textContent = name;

      chip.appendChild(em);
      chip.appendChild(label);

      chip.addEventListener("click", function () {
        if (typeof window.openFoodModal === "function") {
          window.openFoodModal(name);
        }
      });

      strip.appendChild(chip);
    });
  }

  document.addEventListener("fr-food-viewed", function (e) {
    var name = e && e.detail ? e.detail.name : null;
    recordRecent(name);
    renderRecentStrip();
  });

  // Intentional, documented public API (renderRecentStrip only).
  window.renderRecentStrip = renderRecentStrip;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderRecentStrip);
  } else {
    renderRecentStrip();
  }
})();
