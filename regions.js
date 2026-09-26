/* regions.js — "Explore the World" region cards for map.html.
 *
 * Loaded in the Leaflet boot chain BEFORE map.js, so it can capture the
 * Leaflet map instance by wrapping L.map (map.js itself exposes no handle).
 * Renders region cards above the map: clicking a card flies the map to the
 * region, opens a region panel (food-culture blurb, top 5 dishes by score,
 * country links), and syncs the map's own region filter chips so markers
 * match the chosen region.
 *
 * Depends on: data/foods.js (FOODS). Leaflet (L) is optional — everything
 * except the fly-to animation still works if the map failed to load.
 */
(function () {
  'use strict';

  var REGION_ORDER = ["Africa", "Americas", "Asia", "Europe", "Middle East", "Oceania"];

  /* Fly-to targets are approximate region centers (good enough for a flavor
   * map, not for navigation). Blurbs are general food-culture knowledge. */
  var REGION_META = {
    "Africa": {
      lat: 5, lng: 20, zoom: 3,
      blurb: "Bold, communal cooking built on grains, stews, and open fire — from North African tagines and hand-rolled couscous to West African jollof rice and slow-simmered groundnut stews, with ancient traditions of fermentation and spice."
    },
    "Americas": {
      lat: -5, lng: -75, zoom: 3,
      blurb: "A collision of Indigenous, European, African, and immigrant foodways — corn, beans, and chili at the root, smoke and street food at the branches, from tacos al pastor to Argentine asado and New England chowder."
    },
    "Asia": {
      lat: 30, lng: 105, zoom: 3,
      blurb: "The world's deepest pantry: rice and noodles as staples, fermentation and umami as philosophy — from Japanese precision and Sichuan heat to India's layered spice craft and Southeast Asia's sweet-sour-salty balance."
    },
    "Europe": {
      lat: 50, lng: 15, zoom: 4,
      blurb: "Technique-driven and terroir-obsessed — the birthplace of the restaurant canon, from French mother sauces and Italy's regional pastas to Central European roasts, British pies, and Nordic preservation traditions."
    },
    "Middle East": {
      lat: 28, lng: 42, zoom: 4,
      blurb: "Ancient grains, olive oil, and live fire — mezze culture, slow-cooked kebabs, fragrant rice dishes, and some of the world's oldest breads, shaped by millennia of trade routes and legendary hospitality."
    },
    "Oceania": {
      lat: -20, lng: 160, zoom: 3,
      blurb: "Indigenous ingredients meet Pacific and settler cooking — from Aboriginal bush foods and M\u0101ori h\u0101ng\u012b to Australian caf\u00e9 culture, the backyard barbecue, and the tropical flavors of the Pacific islands."
    }
  };

  /* Capture the map instance created by map.js by wrapping the L.map factory.
   * Harmless if Leaflet failed to load or nothing ever calls L.map. */
  if (typeof L !== "undefined" && typeof L.map === "function") {
    var _origLMap = L.map;
    L.map = function (id, options) {
      var m = _origLMap(id, options);
      var key = typeof id === "string" ? id : (id && id.id);
      if (key === "flavormap") window.__frMap = m;
      return m;
    };
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* Site scoring formula (same as rankings.js):
   *   best  rank r -> 10  - (r-1) * 0.035
   *   worst rank r -> 3.5 - (r-1) * 0.025
   * Unranked foods have no score (null) — never invented. */
  function scoreOf(f) {
    var raw = null;
    if (f.bestRank) raw = 10 - (f.bestRank - 1) * 0.035;
    else if (f.worstRank) raw = 3.5 - (f.worstRank - 1) * 0.025;
    return raw === null ? null : Math.round(raw * 10) / 10;
  }

  function foodsIn(region) {
    if (typeof FOODS === "undefined") return [];
    return FOODS.filter(function (f) { return f.region === region; });
  }

  function rankBadge(f) {
    if (f.bestRank) return ' <span class="rd-rank best">\u2605 #' + f.bestRank + ' Best</span>';
    if (f.worstRank) return ' <span class="rd-rank worst">#' + f.worstRank + ' Worst</span>';
    return "";
  }

  function topDishes(region) {
    var list = foodsIn(region).slice();
    list.sort(function (a, b) {
      var sa = scoreOf(a), sb = scoreOf(b);
      if (sa === null && sb === null) return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
      if (sa === null) return 1;
      if (sb === null) return -1;
      return sb - sa;
    });
    return list.slice(0, 5);
  }

  function topOrigins(region) {
    var counts = {};
    foodsIn(region).forEach(function (f) { counts[f.origin] = (counts[f.origin] || 0) + 1; });
    return Object.keys(counts)
      .sort(function (a, b) { return counts[b] - counts[a]; })
      .slice(0, 8)
      .map(function (o) { return { origin: o, count: counts[o] }; });
  }

  function renderCards() {
    var wrap = document.getElementById("regionCards");
    if (!wrap) return;
    wrap.innerHTML = REGION_ORDER.map(function (r) {
      var n = foodsIn(r).length;
      return '<button type="button" class="region-card" data-region="' + esc(r) + '" aria-pressed="false">'
        + '<span class="region-card-name">' + esc(r) + '</span>'
        + '<span class="region-card-count">' + n + ' dish' + (n === 1 ? '' : 'es') + ' in the encyclopedia</span>'
        + '<span class="region-card-blurb">' + esc(REGION_META[r].blurb) + '</span>'
        + '</button>';
    }).join("");
    wrap.addEventListener("click", function (e) {
      var btn = e.target && e.target.closest ? e.target.closest("[data-region]") : null;
      if (!btn) return;
      selectRegion(btn.getAttribute("data-region"));
    });
  }

  function renderPanel(region) {
    var panel = document.getElementById("regionPanel");
    if (!panel) return;
    var dishes = topDishes(region);
    var origins = topOrigins(region);
    var dishHTML = dishes.map(function (f) {
      var sc = scoreOf(f);
      var scoreTxt = sc === null
        ? '<span class="rd-unranked">Unranked</span>'
        : '<span class="rd-score">' + sc.toFixed(1) + '/10</span>';
      return '<li><a class="rd-link" href="food.html?name=' + encodeURIComponent(f.name) + '">'
        + '<span class="rd-emoji" aria-hidden="true">' + f.emoji + '</span> ' + esc(f.name) + '</a>'
        + '<span class="rd-meta">' + esc(f.origin) + ' \u00b7 ' + scoreTxt + rankBadge(f) + '</span></li>';
    }).join("");
    var countryHTML = origins.map(function (o) {
      return '<a class="region-country" href="country.html?c=' + encodeURIComponent(o.origin) + '">'
        + esc(o.origin) + ' <span class="rc-count">' + o.count + '</span></a>';
    }).join("");
    panel.innerHTML =
      '<div class="region-panel-head"><div>'
      + '<p class="kicker">Explore the World</p>'
      + '<h3>' + esc(region) + '</h3>'
      + '<p class="region-blurb">' + esc(REGION_META[region].blurb) + '</p>'
      + '</div><button type="button" class="region-close" id="regionClose" aria-label="Close region panel">\u2715</button></div>'
      + '<div class="region-panel-cols"><div>'
      + '<h4>Top dishes</h4><ul class="region-dishes">' + dishHTML + '</ul>'
      + '<p class="rd-note">Ordered by Food Rankings score. Numbered badges are real TasteAtlas global ranks; unranked dishes show no score.</p>'
      + '</div><div>'
      + '<h4>Countries &amp; places</h4><div class="region-countries">' + countryHTML + '</div>'
      + '</div></div>';
    panel.hidden = false;
    var close = document.getElementById("regionClose");
    if (close) close.addEventListener("click", function () {
      panel.hidden = true;
      var cards = document.querySelectorAll("#regionCards .region-card");
      Array.prototype.forEach.call(cards, function (c) {
        c.classList.remove("active");
        c.setAttribute("aria-pressed", "false");
      });
    });
  }

  function selectRegion(region) {
    if (!REGION_META[region]) return;
    var meta = REGION_META[region];
    var cards = document.querySelectorAll("#regionCards .region-card");
    Array.prototype.forEach.call(cards, function (c) {
      var on = c.getAttribute("data-region") === region;
      c.classList.toggle("active", on);
      c.setAttribute("aria-pressed", on ? "true" : "false");
    });
    renderPanel(region);
    if (window.__frMap && typeof window.__frMap.flyTo === "function") {
      try { window.__frMap.flyTo([meta.lat, meta.lng], meta.zoom, { duration: 1.6 }); } catch (e) { /* noop */ }
    }
    /* Sync the map's own region filter chips so the markers match. */
    var chips = document.querySelectorAll("#fmFilters [data-region]");
    Array.prototype.forEach.call(chips, function (c) {
      if (c.getAttribute("data-region") === region && typeof c.click === "function") c.click();
    });
    var mapEl = document.getElementById("flavormap");
    if (mapEl && mapEl.scrollIntoView) {
      try { mapEl.scrollIntoView({ behavior: "smooth", block: "nearest" }); } catch (e) { /* noop */ }
    }
  }

  function init() {
    if (!document.getElementById("regionCards")) return; // not the map page
    renderCards();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
