/* =====================================================================
 * Country pages for the Global Food Encyclopedia.
 * Reads ?c=<origin name> (exact match against food `origin` in FOODS),
 * renders the country header, stats, flavor fingerprint, top dishes,
 * and the full food grid. All statistics are computed from real data —
 * no ranks or numbers are invented.
 * ===================================================================== */
(function () {
  "use strict";

  /* Country-name -> flag emoji. Matched against the LAST comma-separated
   * segment of an origin (e.g. "Naples, Italy" -> "Italy"), falling back
   * to a full-string match, then to the globe. */
  var FLAG_MAP = {
    "Turkey": "🇹🇷", "Italy": "🇮🇹", "Spain": "🇪🇸", "Argentina": "🇦🇷",
    "Australia": "🇦🇺", "Austria": "🇦🇹", "Mexico": "🇲🇽", "Indonesia": "🇮🇩",
    "Bangladesh": "🇧🇩", "Germany": "🇩🇪", "China": "🇨🇳", "Belgium": "🇧🇪",
    "Switzerland": "🇨🇭", "Bolivia": "🇧🇴", "France": "🇫🇷", "Brunei": "🇧🇳",
    "Bulgaria": "🇧🇬", "Cambodia": "🇰🇭", "Cameroon": "🇨🇲", "Canada": "🇨🇦",
    "Chile": "🇨🇱", "Colombia": "🇨🇴", "United Kingdom": "🇬🇧", "England": "🇬🇧",
    "Scotland": "🇬🇧", "Costa Rica": "🇨🇷", "Greece": "🇬🇷", "Croatia": "🇭🇷",
    "Cuba": "🇨🇺", "Cyprus": "🇨🇾", "Czechia": "🇨🇿", "Denmark": "🇩🇰",
    "Dominican Republic": "🇩🇴", "Portugal": "🇵🇹", "Ecuador": "🇪🇨",
    "Egypt": "🇪🇬", "El Salvador": "🇸🇻", "Ethiopia": "🇪🇹", "Fiji": "🇫🇯",
    "Finland": "🇫🇮", "Georgia": "🇬🇪", "Ghana": "🇬🇭", "Haiti": "🇭🇹",
    "Honduras": "🇭🇳", "Hungary": "🇭🇺", "Iceland": "🇮🇸", "India": "🇮🇳",
    "Iran": "🇮🇷", "Iraq": "🇮🇶", "Ireland": "🇮🇪", "Israel": "🇮🇱",
    "Jamaica": "🇯🇲", "Japan": "🇯🇵", "Jordan": "🇯🇴", "Kenya": "🇰🇪",
    "Laos": "🇱🇦", "Lebanon": "🇱🇧", "Malaysia": "🇲🇾", "Mauritius": "🇲🇺",
    "Morocco": "🇲🇦", "Mozambique": "🇲🇿", "Myanmar": "🇲🇲", "Nepal": "🇳🇵",
    "Netherlands": "🇳🇱", "New Zealand": "🇳🇿", "Nigeria": "🇳🇬",
    "Norway": "🇳🇴", "Pakistan": "🇵🇰", "Paraguay": "🇵🇾", "Peru": "🇵🇪",
    "Philippines": "🇵🇭", "Poland": "🇵🇱", "Puerto Rico": "🇵🇷",
    "Romania": "🇷🇴", "Russia": "🇷🇺", "Samoa": "🇼🇸", "Saudi Arabia": "🇸🇦",
    "Senegal": "🇸🇳", "Serbia": "🇷🇸", "Singapore": "🇸🇬", "Somalia": "🇸🇴",
    "South Africa": "🇿🇦", "South Korea": "🇰🇷", "Korea": "🇰🇷",
    "Sri Lanka": "🇱🇰", "Sweden": "🇸🇪", "Syria": "🇸🇾", "Taiwan": "🇹🇼",
    "Tanzania": "🇹🇿", "Thailand": "🇹🇭", "Trinidad and Tobago": "🇹🇹",
    "Tunisia": "🇹🇳", "Uganda": "🇺🇬", "Ukraine": "🇺🇦",
    "United Arab Emirates": "🇦🇪", "Uruguay": "🇺🇾", "Venezuela": "🇻🇪",
    "Vietnam": "🇻🇳", "Yemen": "🇾🇪", "Zimbabwe": "🇿🇼",
    "USA": "🇺🇸", "United States": "🇺🇸", "Hawaii": "🇺🇸",
    "Guam": "🇬🇺", "French Polynesia": "🇵🇫"
  };

  function flagFor(origin) {
    if (!origin) return "🌍";
    var parts = String(origin).split(",").map(function (s) { return s.trim(); });
    for (var i = parts.length - 1; i >= 0; i--) {
      if (FLAG_MAP[parts[i]]) return FLAG_MAP[parts[i]];
    }
    if (FLAG_MAP[origin]) return FLAG_MAP[origin];
    return "🌍";
  }

  /* Scoring formulas (same as the rest of the site). */
  function scoreOf(f) {
    if (f.bestRank) return 10 - (f.bestRank - 1) * 0.035;
    if (f.worstRank) return 3.5 - (f.worstRank - 1) * 0.025;
    return null;
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function foodLink(name) {
    return "food.html?name=" + encodeURIComponent(name);
  }

  function rankLabel(f) {
    if (f.bestRank) return { text: "Best #" + f.bestRank, cls: "best" };
    if (f.worstRank) return { text: "Worst #" + f.worstRank, cls: "worst" };
    return null;
  }

  function getParam(name) {
    try {
      return new URLSearchParams(window.location.search).get(name);
    } catch (e) {
      return null;
    }
  }

  function mostCommon(arr) {
    var counts = {}, best = null, bestN = 0;
    arr.forEach(function (v) {
      counts[v] = (counts[v] || 0) + 1;
      if (counts[v] > bestN) { bestN = counts[v]; best = v; }
    });
    return best;
  }

  function init() {
    var foods = (typeof FOODS !== "undefined" && Array.isArray(FOODS)) ? FOODS : [];
    var country = getParam("c");
    var wrap = document.getElementById("countryWrap");
    var notFound = document.getElementById("countryNotFound");

    if (!country) {
      showNotFound("", wrap, notFound);
      return;
    }
    country = country.trim();

    /* Exact origin match. */
    var list = foods.filter(function (f) { return f.origin === country; });

    if (!list.length) {
      showNotFound(country, wrap, notFound);
      return;
    }

    document.title = country + " — The Global Food Encyclopedia";

    var flag = flagFor(country);
    var region = mostCommon(list.map(function (f) { return f.region; })) || "";

    /* ---- Header ---- */
    document.getElementById("countryFlag").textContent = flag;
    document.getElementById("countryName").textContent = country;
    document.getElementById("countryRegion").textContent =
      region + " · " + list.length + (list.length === 1 ? " dish" : " dishes") + " in the encyclopedia";

    /* ---- Stats ---- */
    var statsEl = document.getElementById("countryStats");

    var ranked = list.filter(function (f) { return f.bestRank || f.worstRank; });

    /* Best-ranked dish: lowest bestRank; if none has a best rank,
     * the lowest worstRank ("least worst"). */
    var withBest = ranked.filter(function (f) { return f.bestRank; })
      .sort(function (a, b) { return a.bestRank - b.bestRank; });
    var bestDish = withBest.length ? withBest[0] :
      ranked.filter(function (f) { return f.worstRank; })
        .sort(function (a, b) { return a.worstRank - b.worstRank; })[0];

    var stats = [];
    stats.push(statCard(list.length, list.length === 1 ? "Dish listed" : "Dishes listed"));

    if (bestDish) {
      var rl = rankLabel(bestDish);
      stats.push(
        '<div class="cstat"><div class="cstat-num">' + esc(bestDish.emoji) + " " +
        '<a href="' + foodLink(bestDish.name) + '">' + esc(bestDish.name) + "</a></div>" +
        '<div class="cstat-label">' + (bestDish.bestRank ? "Highest ranked dish" : "Least-worst ranked dish") +
        ' <span class="rank-pill ' + rl.cls + '">' + esc(rl.text) + "</span></div></div>"
      );
    }

    if (ranked.length) {
      var sum = 0;
      ranked.forEach(function (f) { sum += scoreOf(f); });
      var avg = (sum / ranked.length);
      stats.push(statCard(
        avg.toFixed(1) + '<span class="cstat-unit">/10</span>',
        "Average score across " + ranked.length + " ranked " + (ranked.length === 1 ? "dish" : "dishes")
      ));
    }

    var categories = {};
    list.forEach(function (f) { categories[f.category] = true; });
    stats.push(statCard(Object.keys(categories).length, "Food categories represented"));

    statsEl.innerHTML = stats.join("");

    /* ---- Flavor fingerprint: average taste profile across the
     * country's foods that have a profile in window.FOOD_TASTES. ---- */
    var tastes = (typeof window !== "undefined" && window.FOOD_TASTES) || {};
    var axes = ["sweet", "salty", "sour", "bitter", "umami", "heat"];
    var totals = [0, 0, 0, 0, 0, 0];
    var counted = 0;
    list.forEach(function (f) {
      var t = tastes[f.name];
      if (t && typeof t === "object") {
        var vals = axes.map(function (a) { return Number(t[a]); });
        if (vals.every(function (v) { return isFinite(v); })) {
          for (var i = 0; i < 6; i++) totals[i] += Math.max(0, Math.min(5, vals[i]));
          counted++;
        }
      }
    });
    var fpEl = document.getElementById("countryFingerprint");
    var fpNote = document.getElementById("fingerprintNote");
    if (counted > 0 && typeof window.renderFoodDNA === "function") {
      var avgTaste = {};
      axes.forEach(function (a, i) { avgTaste[a] = Math.round((totals[i] / counted) * 10) / 10; });
      window.renderFoodDNA(fpEl, avgTaste, {
        width: 230, height: 230,
        label: "Average taste profile of " + country
      });
      fpNote.textContent = "Averaged from taste profiles of " + counted +
        (counted === 1 ? " dish" : " dishes") + " in this country.";
    } else {
      fpNote.textContent = "";
      if (typeof window.renderFoodDNA === "function") {
        window.renderFoodDNA(fpEl, null, { width: 230, height: 230 });
      }
    }

    /* ---- Top dishes: ranked first (best, then worst), then alphabetical. ---- */
    var top = list.slice().sort(function (a, b) {
      var ab = a.bestRank || Infinity, bb = b.bestRank || Infinity;
      if (ab !== bb) return ab - bb;
      var aw = a.worstRank || Infinity, bw = b.worstRank || Infinity;
      if (aw !== bw) return aw - bw;
      return String(a.name).localeCompare(String(b.name));
    }).slice(0, 12);

    var topEl = document.getElementById("topDishes");
    topEl.innerHTML = top.map(function (f) {
      var rl2 = rankLabel(f);
      return '<a class="tdish" href="' + foodLink(f.name) + '">' +
        '<span class="tdish-emoji" aria-hidden="true">' + esc(f.emoji) + "</span>" +
        '<span class="tdish-body"><span class="tdish-name">' + esc(f.name) + "</span>" +
        '<span class="tdish-cat">' + esc(f.category) + "</span></span>" +
        (rl2 ? '<span class="rank-pill ' + rl2.cls + '">' + esc(rl2.text) + "</span>" : "") +
        "</a>";
    }).join("");

    /* ---- Full grid, alphabetical. ---- */
    var grid = list.slice().sort(function (a, b) {
      return String(a.name).localeCompare(String(b.name));
    });
    var gridEl = document.getElementById("foodGrid");
    gridEl.innerHTML = grid.map(function (f) {
      return '<a class="cfood" href="' + foodLink(f.name) + '">' +
        '<span class="cfood-emoji" aria-hidden="true">' + esc(f.emoji) + "</span>" +
        '<span class="cfood-name">' + esc(f.name) + "</span>" +
        '<span class="cfood-cat">' + esc(f.category) + "</span></a>";
    }).join("");

    document.getElementById("gridCount").textContent =
      "All " + list.length + (list.length === 1 ? " dish" : " dishes") + " from " + country;

    wrap.hidden = false;
  }

  function statCard(numHtml, label) {
    return '<div class="cstat"><div class="cstat-num">' + numHtml +
      '</div><div class="cstat-label">' + esc(label) + "</div></div>";
  }

  function showNotFound(country, wrap, notFound) {
    if (wrap) wrap.hidden = true;
    if (!notFound) return;
    notFound.hidden = false;
    document.title = "Country not found — The Global Food Encyclopedia";
    var q = document.getElementById("nfQuery");
    if (q) q.textContent = country ? 'We could not find "' + country + '" in the encyclopedia.' :
      "No country was specified.";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
