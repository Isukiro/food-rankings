/* surprise.js — "Surprise me" modal for the Food Rankings site.
 *
 * Exposes window.openSurprise(). Requires data/foods.js (FOODS); uses
 * window.FOOD_TASTES (tastes.js) for "Random by taste" when available and
 * falls back to a small keyword guesser when it isn't.
 *
 * Self-contained: injects its own navy/gold styles, no dependency on modal.js.
 * Result cards link to food.html?name=<encoded> (built separately).
 */
(function () {
  'use strict';

  var TASTES = [
    ["sweet", "Sweet"], ["salty", "Salty"], ["spicy", "Spicy"], ["umami", "Umami"],
    ["creamy", "Creamy"], ["smoky", "Smoky"], ["sour", "Sour"], ["fresh", "Fresh"]
  ];

  /* Keyword fallback for "Random by taste" when tastes.js isn't loaded. */
  var TASTE_KEYWORDS = {
    sweet: ["cake", "chocolate", "candy", "sweet", "dessert", "ice cream", "sugar", "honey", "pastry", "cookie"],
    salty: ["salt", "salty", "cured", "bacon", "soy sauce", "pretzel"],
    spicy: ["chili", "chilli", "spicy", "curry", "sambal", "sriracha", "pepper", "hot sauce", "kimchi"],
    umami: ["mushroom", "miso", "broth", "cheese", "soy", "truffle", "seaweed"],
    creamy: ["cream", "cheese", "butter", "milk", "yogurt", "custard", "mousse"],
    smoky: ["smoked", "barbecue", "bbq", "charcoal", "grilled", "tandoor"],
    sour: ["vinegar", "pickl", "lemon", "lime", "sour", "tamarind", "ceviche"],
    fresh: ["salad", "fresh", "mint", "citrus", "sashimi", "raw"]
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function foods() {
    return (typeof FOODS !== "undefined" && FOODS) || [];
  }

  function tasteTagsOf(name) {
    if (typeof window.FOOD_TASTES === "object" && window.FOOD_TASTES && window.FOOD_TASTES[name]) {
      return window.FOOD_TASTES[name].tags || [];
    }
    /* Keyword fallback. */
    var f = foods().filter(function (x) { return x.name === name; })[0];
    if (!f) return [];
    var text = (f.name + " " + (f.definition || "")).toLowerCase();
    return Object.keys(TASTE_KEYWORDS).filter(function (t) {
      return TASTE_KEYWORDS[t].some(function (kw) { return text.indexOf(kw) !== -1; });
    });
  }

  function pickOne(pool) {
    if (!pool.length) return null;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function byCategory(cat) {
    return foods().filter(function (f) { return f.category === cat; });
  }

  function byTaste(taste) {
    return foods().filter(function (f) { return tasteTagsOf(f.name).indexOf(taste) !== -1; });
  }

  function byOrigin(origin) {
    return foods().filter(function (f) { return f.origin === origin; });
  }

  function weirdestPool() {
    return foods().filter(function (f) { return f.worstRank != null; });
  }

  function origins() {
    var seen = {}, list = [];
    foods().forEach(function (f) {
      if (!seen[f.origin]) { seen[f.origin] = 1; list.push(f.origin); }
    });
    return list.sort(function (a, b) { return a.localeCompare(b); });
  }

  /* ---------------- styles (injected once) ---------------- */

  var CSS = [
    ".sp-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;",
    "background:rgba(4,10,24,.78);backdrop-filter:blur(3px);padding:16px;box-sizing:border-box}",
    ".sp-overlay[hidden]{display:none}",
    ".sp-dialog{position:relative;width:min(94vw,540px);max-height:88vh;overflow:auto;background:#0a1730;",
    "border:1px solid #c9a227;border-radius:14px;box-shadow:0 24px 64px rgba(0,0,0,.6);",
    "padding:28px 26px 24px;color:#f2ead8;box-sizing:border-box}",
    ".sp-close{position:absolute;top:10px;right:12px;background:none;border:none;color:#9fb0cc;",
    "font-size:1.6rem;line-height:1;cursor:pointer;padding:6px}",
    ".sp-close:hover{color:#c9a227}",
    ".sp-kicker{margin:0 0 6px;color:#c9a227;font-size:.75rem;letter-spacing:.18em;text-transform:uppercase}",
    ".sp-title{margin:0 0 6px;font-family:Georgia,serif;font-size:1.5rem;color:#f2ead8}",
    ".sp-sub{margin:0 0 18px;color:#9fb0cc;font-size:.9rem;font-style:italic;font-family:Georgia,serif}",
    ".sp-opts{display:grid;gap:10px}",
    ".sp-opt{display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;",
    "text-align:left;background:#10234a;border:1px solid rgba(201,162,39,.35);border-radius:10px;",
    "color:#f2ead8;padding:13px 16px;font-size:.95rem;cursor:pointer}",
    ".sp-opt:hover{border-color:#c9a227;background:#14305e}",
    ".sp-opt small{color:#9fb0cc;font-size:.78rem}",
    ".sp-pickrow{display:flex;gap:8px;margin-top:4px}",
    ".sp-select{flex:1;min-width:0;background:#0a1730;color:#f2ead8;border:1px solid rgba(201,162,39,.35);",
    "border-radius:8px;padding:10px;font-size:.9rem}",
    ".sp-btn{background:#c9a227;border:1px solid #c9a227;color:#0a1730;font-weight:700;border-radius:8px;",
    "padding:10px 16px;font-size:.9rem;cursor:pointer;white-space:nowrap}",
    ".sp-btn:hover{background:#e0bd45}",
    ".sp-btn.ghost{background:none;color:#c9a227}",
    ".sp-btn.ghost:hover{background:rgba(201,162,39,.12)}",
    ".sp-card{text-align:center}",
    ".sp-emoji{font-size:3rem;line-height:1;margin-bottom:8px}",
    ".sp-foodname{font-family:Georgia,serif;font-size:1.6rem;color:#e8c75a;margin:0 0 4px}",
    ".sp-meta{color:#9fb0cc;font-size:.85rem;margin:0 0 12px}",
    ".sp-def{color:#f2ead8;font-size:.95rem;line-height:1.55;margin:0 0 12px;text-align:left}",
    ".sp-tags{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin:0 0 18px}",
    ".sp-tag{font-size:.72rem;padding:2px 10px;border:1px solid rgba(201,162,39,.4);border-radius:999px;",
    "color:#e8c75a;background:rgba(201,162,39,.08);text-transform:capitalize}",
    ".sp-actions{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}",
    ".sp-actions a.sp-btn{text-decoration:none;display:inline-block}",
    ".sp-note{margin:14px 0 0;text-align:center;color:#9fb0cc;font-size:.78rem;font-style:italic}",
    "@media(max-width:480px){.sp-dialog{padding:22px 18px 20px}.sp-pickrow{flex-direction:column}}"
  ].join("\n");

  function ensureShell() {
    if (!document.getElementById("spStyles")) {
      var st = document.createElement("style");
      st.id = "spStyles";
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    var ov = document.getElementById("spOverlay");
    if (ov) return ov;
    ov = document.createElement("div");
    ov.id = "spOverlay";
    ov.className = "sp-overlay";
    ov.hidden = true;
    ov.innerHTML = '<div class="sp-dialog" role="dialog" aria-modal="true" aria-labelledby="spTitle">'
      + '<button type="button" class="sp-close" id="spClose" aria-label="Close">×</button>'
      + '<div id="spBody"></div></div>';
    document.body.appendChild(ov);
    document.getElementById("spClose").addEventListener("click", closeSurprise);
    ov.addEventListener("click", function (e) { if (e.target === ov) closeSurprise(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !ov.hidden) closeSurprise();
    });
    return ov;
  }

  function closeSurprise() {
    var ov = document.getElementById("spOverlay");
    if (ov) ov.hidden = true;
  }

  function body() { return document.getElementById("spBody"); }

  /* ---------------- screens ---------------- */

  function showOptions() {
    var all = foods();
    if (!all.length) {
      body().innerHTML = '<p class="sp-kicker">Surprise me</p>'
        + '<h2 class="sp-title" id="spTitle">Not ready yet</h2>'
        + '<p class="sp-sub">The food database has not loaded. Please reload the page.</p>';
      return;
    }
    var opts = [
      ["dish", "Random dish", "Any of " + all.length + " foods worldwide"],
      ["dessert", "Random dessert", byCategory("Dessert").length + " sweet picks"],
      ["snack", "Random snack", byCategory("Snack").length + " snacks"],
      ["street", "Random street food", byCategory("Street Food").length + " street eats"],
      ["country", "Random by country", "Pick a place, get its dish"],
      ["taste", "Random by taste", "Sweet, spicy, smoky and more"],
      ["weird", "Weirdest pick", "From the worst-rated list — dare you"]
    ];
    body().innerHTML = '<p class="sp-kicker">Surprise me</p>'
      + '<h2 class="sp-title" id="spTitle">What are you hungry for?</h2>'
      + '<p class="sp-sub">Pick a lane, or let fate decide.</p>'
      + '<div class="sp-opts">'
      + opts.map(function (o) {
          return '<button type="button" class="sp-opt" data-mode="' + o[0] + '">'
            + '<span>' + esc(o[1]) + '</span><small>' + esc(o[2]) + '</small></button>';
        }).join("")
      + "</div>";
    var btns = body().querySelectorAll(".sp-opt");
    Array.prototype.forEach.call(btns, function (b) {
      b.addEventListener("click", function () { chooseMode(b.getAttribute("data-mode")); });
    });
  }

  function chooseMode(mode) {
    if (mode === "country") return showCountryPicker();
    if (mode === "taste") return showTastePicker();
    var pool, label;
    if (mode === "dessert") { pool = byCategory("Dessert"); label = "Random dessert"; }
    else if (mode === "snack") { pool = byCategory("Snack"); label = "Random snack"; }
    else if (mode === "street") { pool = byCategory("Street Food"); label = "Random street food"; }
    else if (mode === "weird") { pool = weirdestPool(); label = "Weirdest pick"; }
    else { pool = foods(); label = "Random dish"; }
    showResult(pickOne(pool), mode, label, null);
  }

  function showCountryPicker() {
    var list = origins();
    body().innerHTML = '<p class="sp-kicker">Surprise me</p>'
      + '<h2 class="sp-title" id="spTitle">Pick a place</h2>'
      + '<p class="sp-sub">We will draw a random dish from there.</p>'
      + '<div class="sp-pickrow"><select class="sp-select" id="spCountry" aria-label="Choose a country or place">'
      + list.map(function (o) { return '<option value="' + esc(o) + '">' + esc(o) + "</option>"; }).join("")
      + '</select><button type="button" class="sp-btn" id="spGoCountry">Pick</button></div>'
      + '<p class="sp-note"><button type="button" class="sp-btn ghost" id="spBack">Back to options</button></p>';
    document.getElementById("spBack").addEventListener("click", showOptions);
    document.getElementById("spGoCountry").addEventListener("click", function () {
      var o = document.getElementById("spCountry").value;
      showResult(pickOne(byOrigin(o)), "country", "Random from " + o, o);
    });
  }

  function showTastePicker() {
    body().innerHTML = '<p class="sp-kicker">Surprise me</p>'
      + '<h2 class="sp-title" id="spTitle">Pick a craving</h2>'
      + '<p class="sp-sub">We will draw a random dish that tastes like it.</p>'
      + '<div class="sp-pickrow"><select class="sp-select" id="spTaste" aria-label="Choose a taste">'
      + TASTES.map(function (t) { return '<option value="' + t[0] + '">' + t[1] + "</option>"; }).join("")
      + '</select><button type="button" class="sp-btn" id="spGoTaste">Pick</button></div>'
      + '<p class="sp-note"><button type="button" class="sp-btn ghost" id="spBack">Back to options</button></p>';
    document.getElementById("spBack").addEventListener("click", showOptions);
    document.getElementById("spGoTaste").addEventListener("click", function () {
      var t = document.getElementById("spTaste").value;
      var label = t.charAt(0).toUpperCase() + t.slice(1);
      showResult(pickOne(byTaste(t)), "taste", "Random " + label.toLowerCase() + " dish", t);
    });
  }

  function showResult(food, mode, label, arg) {
    if (!food) {
      body().innerHTML = '<p class="sp-kicker">Surprise me</p>'
        + '<h2 class="sp-title" id="spTitle">Nothing found</h2>'
        + '<p class="sp-sub">No dishes matched — try another option.</p>'
        + '<p class="sp-note"><button type="button" class="sp-btn ghost" id="spBack">Back to options</button></p>';
      document.getElementById("spBack").addEventListener("click", showOptions);
      return;
    }
    var tags = tasteTagsOf(food.name);
    var tagRow = tags.length
      ? '<div class="sp-tags">' + tags.map(function (t) {
          return '<span class="sp-tag">' + esc(t) + "</span>";
        }).join("") + "</div>"
      : "";
    body().innerHTML = '<p class="sp-kicker">' + esc(label) + "</p>"
      + '<div class="sp-card">'
      + '<div class="sp-emoji" aria-hidden="true">' + esc(food.emoji || "") + "</div>"
      + '<h2 class="sp-title sp-foodname" id="spTitle">' + esc(food.name) + "</h2>"
      + '<p class="sp-meta">' + esc(food.origin || "") + " · " + esc(food.region || "")
      + " · " + esc(food.category || "") + "</p>"
      + '<p class="sp-def">' + esc(food.definition || "") + "</p>"
      + tagRow
      + '<div class="sp-actions">'
      + '<button type="button" class="sp-btn" id="spAgain">Roll again</button>'
      + '<a class="sp-btn ghost" id="spOpen" href="food.html?name=' + encodeURIComponent(food.name) + '">Open full page</a>'
      + '<button type="button" class="sp-btn ghost" id="spBack">Options</button>'
      + "</div></div>"
      + (mode === "weird"
          ? '<p class="sp-note">Drawn from the worst-rated list. Approach with curiosity.</p>'
          : "");
    document.getElementById("spBack").addEventListener("click", showOptions);
    document.getElementById("spAgain").addEventListener("click", function () {
      if (mode === "country") showResult(pickOne(byOrigin(arg)), mode, label, arg);
      else if (mode === "taste") showResult(pickOne(byTaste(arg)), mode, label, arg);
      else chooseMode(mode);
    });
  }

  function openSurprise() {
    var ov = ensureShell();
    showOptions();
    ov.hidden = false;
    var dlg = ov.querySelector(".sp-dialog");
    if (dlg) dlg.scrollTop = 0;
  }

  window.openSurprise = openSurprise;
  window.closeSurprise = closeSurprise;
})();
