/* My Shelf page logic. Requires data/foods.js and collections.js (both loaded before this). */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function starsOf(n) { // gold read-only star readout, e.g. 4 -> "★★★★☆"
    var out = "";
    for (var i = 1; i <= 5; i++) out += '<span class="' + (i <= n ? "on" : "off") + '">★</span>';
    return '<span class="shelf-stars" title="My rating: ' + n + '/5">' + out + "</span>";
  }

  var BY_NAME = {};
  (window.FOODS || []).forEach(function (f) { BY_NAME[f.name] = f; });
  function foodInfo(name) {
    return BY_NAME[name] || { name: name, emoji: "🍽", origin: "Unknown origin", region: "", category: "" };
  }
  function foodLink(name) {
    return "food.html?name=" + encodeURIComponent(name);
  }

  var TABS = [
    { id: "fav",     label: "Favorites",   emptyGlyph: "♥", empty: "No favorites yet — tap the heart on any food to save it here." },
    { id: "try",     label: "Want to Try",  emptyGlyph: "★", empty: "Nothing on your list yet — tap the star on any food you want to try someday." },
    { id: "tried",   label: "Tried It",     emptyGlyph: "✓", empty: "Nothing marked as tried yet — tap the check on any food you have tasted." },
    { id: "ratings", label: "My Ratings",   emptyGlyph: "★", empty: "You have not rated anything yet — open a food and give it your own 1–5 stars." }
  ];
  var activeTab = "fav";

  function rowHTML(name, kind) {
    var f = foodInfo(name);
    var meta = [f.origin, f.category, f.region].filter(Boolean).join(" · ");
    return '<li class="shelf-row" data-name="' + esc(name) + '">' +
      '<span class="shelf-emoji" aria-hidden="true">' + esc(f.emoji || "🍽") + "</span>" +
      '<div class="shelf-main">' +
        '<div class="shelf-name"><a href="' + foodLink(name) + '">' + esc(name) + "</a></div>" +
        (meta ? '<div class="shelf-sub">' + esc(meta) + "</div>" : "") +
      "</div>" +
      '<div class="shelf-side">' +
        '<span class="shelf-tbtns">' + window.Shelf.toggleButtonHTML(name) + "</span>" +
        '<button type="button" class="shelf-remove" data-remove="' + esc(name) +
          '" title="Remove from ' + esc(kindLabel(kind)) + '" aria-label="Remove ' + esc(name) +
          ' from ' + esc(kindLabel(kind)) + '">✕</button>' +
      "</div></li>";
  }
  function kindLabel(id) {
    var t = TABS.filter(function (t) { return t.id === id; })[0];
    return t ? t.label : id;
  }

  function renderProgress() {
    var count = window.Shelf.exploredCount();
    var total = window.Shelf.exploredTotal();
    var pct = total > 0 ? Math.min(100, Math.round(count / total * 1000) / 10) : 0;
    document.getElementById("shelfCount").innerHTML =
      "I explored <strong>" + count + "</strong> / " + total + " foods";
    document.getElementById("shelfBar").style.width = pct + "%";
    document.getElementById("shelfPct").textContent = pct + "% of the encyclopedia explored";
  }

  function listFor(tab) {
    if (tab === "ratings") {
      var r = window.Shelf.myRatings();
      return Object.keys(r).sort(function (a, b) { return r[b] - r[a] || a.localeCompare(b); });
    }
    return window.Shelf.list(tab);
  }

  function renderTabs() {
    var el = document.getElementById("shelfTabs");
    el.innerHTML = TABS.map(function (t) {
      var n = (t.id === "ratings") ? Object.keys(window.Shelf.myRatings()).length
                                  : window.Shelf.list(t.id).length;
      return '<button type="button" class="shelf-tab' + (t.id === activeTab ? " is-active" : "") +
        '" data-tab="' + t.id + '">' + esc(t.label) +
        '<span class="tab-n">' + n + "</span></button>";
    }).join("");
  }

  function renderList() {
    var tab = TABS.filter(function (t) { return t.id === activeTab; })[0] || TABS[0];
    var box = document.getElementById("shelfList");
    var names = listFor(activeTab);
    if (!names.length) {
      box.innerHTML = '<div class="shelf-empty" role="status">' +
        '<div class="big">' + esc(tab.emptyGlyph) + "</div>" +
        "<p>" + esc(tab.empty) + "</p>" +
        '<a href="rankings.html">Browse the rankings</a> · <a href="categories.html">Browse categories</a></div>';
      return;
    }
    if (activeTab === "ratings") {
      box.innerHTML = '<ul class="shelf-list">' + names.map(function (name) {
        var f = foodInfo(name);
        var meta = [f.origin, f.category, f.region].filter(Boolean).join(" · ");
        return '<li class="shelf-row" data-name="' + esc(name) + '">' +
          '<span class="shelf-emoji" aria-hidden="true">' + esc(f.emoji || "🍽") + "</span>" +
          '<div class="shelf-main">' +
            '<div class="shelf-name"><a href="' + foodLink(name) + '">' + esc(name) + "</a></div>" +
            (meta ? '<div class="shelf-sub">' + esc(meta) + "</div>" : "") +
          "</div>" +
          '<div class="shelf-side">' + starsOf(window.Shelf.getRating(name)) + "</div></li>";
      }).join("") + "</ul>";
    } else {
      box.innerHTML = '<ul class="shelf-list">' +
        names.map(function (name) { return rowHTML(name, activeTab); }).join("") + "</ul>";
    }
  }

  function renderAll() { renderProgress(); renderTabs(); renderList(); }

  function exportJSON() {
    var data = window.Shelf.exportData();
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "my-shelf-foods.json";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  function clearAll() {
    if (!window.confirm("Clear your whole shelf — favorites, lists, ratings, and explored count? This cannot be undone.")) return;
    window.Shelf.clearAll();
    renderAll();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    document.getElementById("shelfTabs").addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-tab]") : null;
      if (!b) return;
      activeTab = b.getAttribute("data-tab");
      renderTabs(); renderList();
    });
    // Delegated: ✕ removes the food from the currently shown collection.
    document.getElementById("shelfList").addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-remove]") : null;
      if (!b) return;
      var name = b.getAttribute("data-remove");
      if (window.Shelf.has(name, activeTab)) window.Shelf.toggle(name, activeTab);
      renderAll();
    });
    // The collection toggle buttons (♥ ★ ✓) handle themselves via collections.js.
    // Refresh the whole page view afterwards so tab counts stay correct.
    document.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest(".shelf-tbtn")) {
        setTimeout(renderAll, 0);
      }
    });
    document.getElementById("shelfExport").addEventListener("click", exportJSON);
    document.getElementById("shelfClear").addEventListener("click", clearAll);
  });
})();
