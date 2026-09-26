/* map.js — "Flavor Map": interactive Leaflet map of every dish origin in the encyclopedia.
 *
 * Self-contained IIFE; intentionally exposes no globals (window.openFoodModal is
 * only *read*, never written). Safe to load on every page, but only map.html
 * has the DOM hooks it needs (#flavormap, #fmFilters, #fmLegend, #fmFallback).
 *
 * Behavior:
 *  - One circleMarker per distinct `origin` in FOODS; radius scales with dish count.
 *  - Tooltip shows origin + dish count; clicking opens a popup listing that
 *    origin's top dishes (bestRank asc, then worstRank asc, then the rest; max 8),
 *    each a <span data-food-name="..."> that calls window.openFoodModal(name)
 *    when available (guarded; modal.js owns the modal itself).
 *  - Region filter buttons ("All" + the 6 regions) toggle visible markers.
 *  - If the Leaflet CDN fails, a styled fallback message is shown instead.
 */
(function () {
  'use strict';

  var REGIONS = ["Africa", "Americas", "Asia", "Europe", "Middle East", "Oceania"];

  /* Approximate centroid lookup, one entry per distinct `origin` value in
   * data/foods.js. IMPORTANT: all coordinates below are APPROXIMATE —
   * country centroids for country-level origins, city/landmark coordinates
   * for city-level origins (e.g. "Adana, Turkey"), and best-effort
   * representative points for fuzzy origins ("Arctic", "Global",
   * "Ashkenazi", "Levant", generic regions like "Central Asia"). They are
   * good enough for a flavor map, not for navigation. */
  var CENTROIDS = {
    "Adana, Turkey": [37.00, 35.32],
    "Alba, Italy": [44.70, 8.03],
    "Algeria": [28.03, 1.66],
    "Amatrice, Italy": [42.63, 13.29],
    "Andalusia, Spain": [37.54, -4.72],
    "Arctic": [75.00, -40.00],
    "Argentina": [-38.42, -63.62],
    "Ashkenazi": [52.00, 19.00],
    "Australia": [-25.27, 133.77],
    "Austria": [47.52, 14.55],
    "Baja California, Mexico": [28.00, -113.50],
    "Bali, Indonesia": [-8.65, 115.22],
    "Bangladesh": [23.68, 90.35],
    "Bavaria, Germany": [48.79, 11.43],
    "Beijing, China": [39.90, 116.41],
    "Belgium": [50.85, 4.35],
    "Berlin, Germany": [52.52, 13.40],
    "Bern, Switzerland": [46.95, 7.45],
    "Bodrum, Turkey": [37.03, 27.43],
    "Bolivia": [-16.29, -63.59],
    "Bologna, Italy": [44.49, 11.34],
    "Bonn, Germany": [50.74, 7.10],
    "Bosnia and Herzegovina": [43.92, 17.68],
    "Brazil": [-14.24, -47.88],
    "Brittany, France": [48.20, -2.93],
    "Brunei": [4.53, 114.73],
    "Bulgaria": [42.73, 25.49],
    "Burgundy, France": [47.32, 4.84],
    "Bursa, Turkey": [40.19, 29.06],
    "Cambodia": [12.57, 104.99],
    "Cameroon": [7.37, 12.35],
    "Canada": [56.13, -106.35],
    "Capri, Italy": [40.55, 14.24],
    "Castile, Spain": [40.20, -4.00],
    "Catalonia, Spain": [41.59, 1.57],
    "Central Asia": [45.00, 65.00],
    "Chennai, India": [13.08, 80.27],
    "Chiang Mai, Thailand": [18.79, 98.98],
    "Chicago, USA": [41.88, -87.63],
    "Chile": [-35.68, -71.54],
    "Chiloé, Chile": [-42.62, -73.95],
    "China": [35.86, 104.20],
    "Colombia": [4.57, -74.30],
    "Cornwall, United Kingdom": [50.27, -5.05],
    "Costa Rica": [9.75, -84.00],
    "Crete, Greece": [35.24, 24.81],
    "Croatia": [45.10, 15.20],
    "Cuba": [21.52, -78.74],
    "Cyprus": [35.13, 33.43],
    "Czechia": [49.82, 15.47],
    "Delhi, India": [28.61, 77.21],
    "Denmark": [56.26, 9.50],
    "Detroit, USA": [42.33, -83.05],
    "Dominican Republic": [18.74, -70.16],
    "Douro Valley, Portugal": [41.15, -7.63],
    "East Asia": [35.00, 115.00],
    "East Java, Indonesia": [-7.54, 112.24],
    "Ecuador": [-1.83, -78.18],
    "Egypt": [26.82, 30.80],
    "El Salvador": [13.79, -88.90],
    "England": [52.36, -1.17],
    "Erzurum, Turkey": [39.90, 41.27],
    "Ethiopia": [9.15, 40.49],
    "Europe": [54.50, 15.00],
    "Fiji": [-16.58, 179.41],
    "Finland": [61.92, 25.75],
    "Florence, Italy": [43.77, 11.25],
    "France": [46.23, 2.21],
    "Fukuoka, Japan": [33.59, 130.40],
    "Galicia, Spain": [42.76, -7.88],
    "Georgia": [42.32, 43.68],
    "Georgia, USA": [32.17, -82.90],
    "Germany": [51.17, 10.45],
    "Ghana": [7.95, -1.02],
    "Global": [20.00, 0.00],
    "Goa, India": [15.30, 74.12],
    "Greece": [39.07, 21.82],
    "Guam": [13.44, 144.79],
    "Guangdong, China": [23.13, 113.26],
    "Gujarat, India": [23.02, 72.57],
    "Haiti": [19.00, -72.29],
    "Hanoi, Vietnam": [21.03, 105.85],
    "Hawaii": [19.90, -155.67],
    "Hawaii, USA": [19.90, -155.67],
    "Hokkaido, Japan": [43.06, 141.35],
    "Honduras": [15.20, -86.24],
    "Hong Kong, China": [22.32, 114.17],
    "Hue, Vietnam": [16.47, 107.59],
    "Hungary": [47.16, 19.50],
    "Hyderabad, India": [17.39, 78.49],
    "Iceland": [64.96, -19.02],
    "India": [20.59, 78.96],
    "Indonesia": [-2.55, 118.01],
    "Iran": [32.43, 53.69],
    "Iraq": [33.00, 43.68],
    "Ireland": [53.41, -8.24],
    "Israel": [31.05, 34.85],
    "Italy": [41.87, 12.57],
    "Ivory Coast": [7.54, -5.55],
    "Izu Islands, Japan": [34.75, 139.40],
    "Jalisco, Mexico": [20.66, -103.35],
    "Jamaica": [18.11, -77.30],
    "Japan": [36.20, 138.25],
    "Jerusalem, Israel": [31.77, 35.21],
    "Jordan": [30.59, 36.24],
    "Kansas City, USA": [39.10, -94.58],
    "Kashmir, India": [34.08, 74.80],
    "Kenya": [-0.02, 37.86],
    "Kerala, India": [9.50, 76.34],
    "Kolkata, India": [22.57, 88.36],
    "Korea": [37.40, 127.00],
    "Kumamoto, Japan": [32.79, 130.74],
    "Lanzhou, China": [36.06, 103.83],
    "Laos": [19.86, 102.50],
    "Lebanon": [33.85, 35.86],
    "Levant": [33.50, 36.50],
    "Liguria, Italy": [44.30, 8.80],
    "London, England": [51.51, -0.13],
    "Lorraine, France": [48.70, 6.18],
    "Los Angeles, USA": [34.05, -118.24],
    "Maharashtra, India": [19.75, 75.71],
    "Malaysia": [4.21, 101.98],
    "Marseille, France": [43.30, 5.37],
    "Mauritius": [-20.35, 57.55],
    "Melbourne, Australia": [-37.81, 144.96],
    "Mesoamerica": [17.50, -95.00],
    "Mexico": [23.63, -102.55],
    "Mexico City, Mexico": [19.43, -99.13],
    "Michigan, USA": [44.31, -85.60],
    "Michoacán, Mexico": [19.57, -101.00],
    "Middle East": [27.00, 45.00],
    "Milan, Italy": [45.46, 9.19],
    "Morocco": [31.79, -6.07],
    "Mozambique": [-18.67, 35.53],
    "Mumbai, India": [19.08, 72.88],
    "Myanmar": [21.92, 95.96],
    "Nagasaki, Japan": [32.74, 129.87],
    "Naples, Italy": [40.85, 14.27],
    "Navarre, Spain": [42.61, -1.78],
    "Nepal": [28.39, 84.12],
    "Netherlands": [52.13, 5.29],
    "New England, USA": [43.50, -71.50],
    "New York City, USA": [40.71, -74.01],
    "New York, USA": [43.00, -75.00],
    "New Zealand": [-40.90, 174.89],
    "Nice, France": [43.70, 7.27],
    "Nigeria": [9.08, 8.68],
    "Norrland, Sweden": [63.00, 16.00],
    "North Africa": [27.00, 5.00],
    "Northern China": [38.00, 114.00],
    "Northern Germany": [53.50, 9.00],
    "Northern Mexico": [26.00, -102.00],
    "Norway": [64.47, 11.53],
    "Oaxaca, Mexico": [17.07, -96.73],
    "Osaka, Japan": [34.69, 135.50],
    "Pacific Northwest": [46.00, -121.00],
    "Pakistan": [30.38, 69.35],
    "Palembang, Indonesia": [-2.99, 104.76],
    "Palermo, Italy": [38.12, 13.36],
    "Palestine": [31.95, 35.23],
    "Pampanga, Philippines": [15.08, 120.68],
    "Paraguay": [-23.42, -58.44],
    "Penang, Malaysia": [5.41, 100.33],
    "Pennsylvania, USA": [41.20, -77.19],
    "Peru": [-9.19, -75.01],
    "Philippines": [12.88, 121.77],
    "Piteå, Sweden": [65.32, 21.48],
    "Poland": [51.92, 19.15],
    "Porto, Portugal": [41.16, -8.63],
    "Portugal": [39.40, -8.22],
    "Puerto Rico": [18.22, -66.59],
    "Punjab, India": [31.15, 75.34],
    "Quebec, Canada": [52.94, -68.00],
    "Romania": [45.94, 25.00],
    "Rome, Italy": [41.90, 12.50],
    "Russia": [61.52, 90.33],
    "Samoa": [-13.76, -172.10],
    "Sardinia, Italy": [40.12, 9.01],
    "Saudi Arabia": [23.89, 45.08],
    "Scandinavia": [62.00, 12.00],
    "Scotland": [58.00, -4.00],
    "Scotland, United Kingdom": [57.50, -4.50],
    "Senegal": [14.50, -17.44],
    "Serbia": [44.02, 20.80],
    "Shaanxi, China": [34.34, 108.94],
    "Shanghai, China": [31.23, 121.47],
    "Sichuan, China": [30.57, 102.97],
    "Sicily, Italy": [37.60, 14.01],
    "Silesia, Poland": [50.80, 18.50],
    "Singapore": [1.35, 103.82],
    "Skellefteå, Sweden": [64.75, 20.95],
    "Somalia": [5.15, 46.20],
    "Sonora, Mexico": [29.65, -110.91],
    "South Africa": [-30.56, 22.94],
    "South Korea": [35.91, 127.77],
    "Southeast Asia": [10.00, 105.00],
    "Southern France": [44.00, 5.00],
    "Southern Germany": [48.50, 11.00],
    "Southern Thailand": [8.00, 99.00],
    "Spain": [40.46, -3.75],
    "Sri Lanka": [7.87, 80.77],
    "Sweden": [60.13, 18.64],
    "Switzerland": [46.82, 8.23],
    "Syria": [34.80, 38.00],
    "Tahiti, French Polynesia": [-17.65, -149.42],
    "Taiwan": [23.70, 120.96],
    "Tamil Nadu, India": [11.13, 78.66],
    "Tanzania": [-6.37, 34.89],
    "Texas, USA": [31.00, -100.00],
    "Thailand": [15.87, 100.99],
    "Tokyo, Japan": [35.68, 139.69],
    "Trinidad and Tobago": [10.69, -61.22],
    "Tunisia": [33.89, 9.54],
    "Turkey": [38.96, 35.24],
    "Tuscany, Italy": [43.42, 11.00],
    "USA": [39.83, -98.58],
    "Uganda": [1.37, 32.29],
    "Ukraine": [48.38, 31.17],
    "United Arab Emirates": [24.45, 54.38],
    "United Kingdom": [55.38, -3.44],
    "United States": [39.83, -98.58],
    "Uruguay": [-32.52, -55.77],
    "Utah, USA": [39.32, -111.09],
    "Utica, USA": [43.10, -75.23],
    "Valencia, Spain": [39.47, -0.38],
    "Vanuatu": [-15.38, 166.96],
    "Venezuela": [6.42, -66.59],
    "Vienna, Austria": [48.21, 16.37],
    "Vietnam": [14.06, 108.28],
    "West Bengal, India": [22.99, 87.85],
    "Yemen": [15.55, 48.52],
    "Yucatán, Mexico": [20.70, -89.28],
    "Zimbabwe": [-19.02, 29.87]
  };

  /* ---------------- helpers ---------------- */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function dishesOf(origin) {
    return FOODS.filter(function (f) { return f.origin === origin; });
  }

  function originRegion(origin) {
    var counts = {};
    dishesOf(origin).forEach(function (f) {
      counts[f.region] = (counts[f.region] || 0) + 1;
    });
    var best = null, bestN = -1;
    Object.keys(counts).forEach(function (r) {
      if (counts[r] > bestN) { bestN = counts[r]; best = r; }
    });
    return best;
  }

  /* Top dishes for an origin: bestRank asc, then worstRank asc, then the rest. Max 8. */
  function topFoods(origin) {
    var indexed = dishesOf(origin).map(function (f, i) { return { f: f, i: i }; });
    indexed.sort(function (a, b) {
      var ba = a.f.bestRank || Infinity, bb = b.f.bestRank || Infinity;
      var ga = ba === Infinity ? (a.f.worstRank ? 1 : 2) : 0;
      var gb = bb === Infinity ? (b.f.worstRank ? 1 : 2) : 0;
      if (ga !== gb) return ga - gb;
      if (ba !== bb) return ba - bb;
      var wa = a.f.worstRank || Infinity, wb = b.f.worstRank || Infinity;
      if (wa !== wb) return wa - wb;
      return a.i - b.i;
    });
    return indexed.slice(0, 8).map(function (x) { return x.f; });
  }

  function rankTag(f) {
    if (f.bestRank) return ' <span class="fm-rank best">★ #' + f.bestRank + '</span>';
    if (f.worstRank) return ' <span class="fm-rank worst">#' + f.worstRank + ' worst</span>';
    return "";
  }

  function popupHTML(origin, count, region) {
    var items = topFoods(origin).map(function (f) {
      return '<li><span class="fm-food" data-food-name="' + esc(f.name) + '" role="button" tabindex="0">'
        + esc(f.emoji) + ' ' + esc(f.name) + '</span>' + rankTag(f) + '</li>';
    }).join("");
    return '<div class="fm-popup">'
      + '<h4>' + esc(origin) + '</h4>'
      + '<p class="fm-sub">' + count + ' dish' + (count === 1 ? '' : 'es') + ' · ' + esc(region || '') + '</p>'
      + '<ul>' + items + '</ul>'
      + '<p class="fm-hint">Select a dish for details</p>'
      + '</div>';
  }

  /* ---------------- map construction ---------------- */

  var FALLBACK_MSG = "The interactive map couldn't load — the map library or its tiles look blocked on this network (an ad-blocker or firewall can do this). "
    + "Try allowing unpkg.com / cdnjs.cloudflare.com, or browse every dish via Search.";

  function showFallback() {
    var fb = document.getElementById("fmFallback");
    var mapEl = document.getElementById("flavormap");
    if (mapEl) mapEl.style.display = "none";
    var legend = document.getElementById("fmLegend");
    if (legend) legend.style.display = "none";
    if (fb) {
      fb.innerHTML = '<p>' + esc(FALLBACK_MSG) + '</p>'
        + '<p><a href="index.html">Search every dish →</a></p>';
      fb.style.display = "block";
    }
  }

  function init() {
    var mapEl = document.getElementById("flavormap");
    if (!mapEl) return; // not the map page

    if (typeof L === "undefined" || typeof FOODS === "undefined") {
      showFallback();
      return;
    }

    var origins = Object.keys(CENTROIDS).filter(function (o) { return dishesOf(o).length > 0; });

    var map = L.map("flavormap", { worldCopyJump: true, zoomControl: true }).setView([20, 10], 2);
    /* Tile layer: CARTO's dark basemap (© OpenStreetMap contributors © CARTO).
     * We deliberately do NOT use tile.openstreetmap.org directly — those are
     * volunteer-run servers with a strict usage policy, and they block
     * embedded use like this. CARTO serves the same OSM data from its own
     * infrastructure and permits it with attribution; the dark style also
     * suits the site's navy theme. */
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);

    /* Nudge exact duplicate centroids apart (e.g. "USA" vs "United States",
     * "Hawaii" vs "Hawaii, USA") so overlapping markers stay clickable. */
    var used = {};
    function placeFor(origin) {
      var c = CENTROIDS[origin];
      var key = c[0].toFixed(2) + "," + c[1].toFixed(2);
      var n = used[key] || 0;
      used[key] = n + 1;
      return [c[0] + n * 3, c[1]];
    }

    var markers = origins.map(function (origin) {
      var dishes = dishesOf(origin);
      var count = dishes.length;
      var region = originRegion(origin);
      var radius = Math.min(30, 6 + Math.sqrt(count) * 2);
      var marker = L.circleMarker(placeFor(origin), {
        radius: radius,
        color: "#d4af37",
        weight: 1.5,
        opacity: 0.95,
        fillColor: "#123a6e",
        fillOpacity: 0.88
      });
      marker.bindTooltip(
        "<strong>" + esc(origin) + "</strong> · " + count + " dish" + (count === 1 ? "" : "es"),
        { direction: "top", offset: [0, -radius], className: "fm-tooltip" }
      );
      marker.bindPopup(popupHTML(origin, count, region), { className: "fm-popup-wrap", maxWidth: 320 });
      return { origin: origin, region: region, count: count, marker: marker };
    });

    var layer = L.layerGroup().addTo(map);

    var state = { region: "All" };
    function applyFilter() {
      layer.clearLayers();
      var shown = 0;
      markers.forEach(function (m) {
        if (state.region === "All" || m.region === state.region) {
          m.marker.addTo(layer);
          shown++;
        }
      });
      var status = document.getElementById("fmStatus");
      if (status) status.textContent = "Showing " + shown + " of " + markers.length + " places";
    }
    applyFilter();

    if (markers.length) {
      map.fitBounds(L.featureGroup(markers.map(function (m) { return m.marker; })).getBounds().pad(0.15));
    }

    /* Region filter buttons: "All" + the 6 regions. */
    var filters = document.getElementById("fmFilters");
    if (filters) {
      var labels = ["All"].concat(REGIONS);
      filters.innerHTML = labels.map(function (r, i) {
        return '<button type="button" class="chip fm-chip' + (i === 0 ? " active" : "") + '"'
          + ' data-region="' + esc(r) + '" aria-pressed="' + (i === 0) + '">' + esc(r) + "</button>";
      }).join("");
      filters.addEventListener("click", function (e) {
        var btn = e.target.closest ? e.target.closest("[data-region]") : null;
        if (!btn) return;
        state.region = btn.getAttribute("data-region");
        var chips = filters.querySelectorAll(".chip");
        Array.prototype.forEach.call(chips, function (c) {
          var on = c === btn;
          c.classList.toggle("active", on);
          c.setAttribute("aria-pressed", on ? "true" : "false");
        });
        applyFilter();
      });
    }
  }

  /* Clicks on [data-food-name] inside popups are handled by modal.js's
   * document-level delegation (it ignores interactive elements itself), so no
   * click listener is needed here — only the keyboard fallback below. */

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var t = e.target && e.target.closest ? e.target.closest("[data-food-name]") : null;
    if (!t || !t.closest(".fm-popup")) return;
    e.preventDefault();
    var name = t.getAttribute("data-food-name");
    if (typeof window.openFoodModal === "function") window.openFoodModal(name);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
