/* =====================================================================
 * Food DNA — taste-profile radar charts for the Global Food Encyclopedia.
 * No external dependencies. Consumes `window.FOOD_TASTES`:
 *   window.FOOD_TASTES["<exact food name>"] =
 *     { sweet:0-5, salty:0-5, sour:0-5, bitter:0-5, umami:0-5, heat:0-5, tags:[] }
 *
 * API:
 *   window.renderFoodDNA(el, tasteObj, opts)
 *     Draws a 6-axis radar chart on a canvas inside `el`.
 *     opts: { width, height, label } — defaults 260x260.
 *     Never throws: missing/bad tasteObj renders a graceful placeholder.
 *
 *   window.dnaBadge(tasteObj)
 *     Returns a small inline SVG summarizing the top 2 taste axes,
 *     or "" when no profile exists. Never throws.
 * ===================================================================== */
(function () {
  "use strict";

  var AXES = ["Sweet", "Salty", "Sour", "Bitter", "Umami", "Heat"];
  var MAX = 5;
  var GOLD = "#d4af37";
  var GOLD_FILL = "rgba(201,162,39,0.28)";
  var GRID_SUBTLE = "rgba(147,161,189,0.22)";
  var GRID_OUTER = "rgba(201,162,39,0.55)";
  var SPOKE = "rgba(147,161,189,0.25)";
  var LABEL_COLOR = "#c3ccdd";
  var EMPTY_SEG = "rgba(147,161,189,0.25)";

  /* Normalize a taste object into [sweet, salty, sour, bitter, umami, heat]
   * (numbers clamped to 0-5), or null when it is missing/unusable. */
  function normalize(tasteObj) {
    if (!tasteObj || typeof tasteObj !== "object") return null;
    var vals = AXES.map(function (axis) {
      var v = Number(tasteObj[axis.toLowerCase()]);
      if (!isFinite(v)) return NaN;
      return Math.max(0, Math.min(MAX, v));
    });
    for (var i = 0; i < vals.length; i++) {
      if (isNaN(vals[i])) return null;
    }
    return vals;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setupCanvas(canvas, cssW, cssH) {
    var dpr = (typeof window !== "undefined" && window.devicePixelRatio) || 1;
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    canvas.style.width = cssW + "px";
    canvas.style.height = cssH + "px";
    canvas.style.maxWidth = "100%";
    canvas.style.height = "auto";
    var ctx = canvas.getContext("2d");
    if (ctx && ctx.setTransform) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
  }

  /**
   * Draw a Food DNA radar chart inside `el`.
   * @param {HTMLElement} el        container element
   * @param {Object}      tasteObj  {sweet,salty,sour,bitter,umami,heat} each 0-5
   * @param {Object}      [opts]    {width, height, label}
   */
  window.renderFoodDNA = function (el, tasteObj, opts) {
    try {
      if (!el) return;
      opts = opts || {};
      var vals = normalize(tasteObj);

      el.innerHTML = "";
      el.classList.add("food-dna");

      if (!vals) {
        var ph = document.createElement("div");
        ph.className = "food-dna-placeholder";
        ph.textContent = "Taste profile coming soon";
        el.appendChild(ph);
        return;
      }

      var W = opts.width || 260;
      var H = opts.height || 260;
      var label = opts.label || "Taste profile";

      var canvas = document.createElement("canvas");
      canvas.setAttribute("role", "img");
      canvas.setAttribute(
        "aria-label",
        label + ": " + AXES.map(function (a, i) { return a + " " + vals[i] + " of 5"; }).join(", ")
      );

      var ctx = setupCanvas(canvas, W, H);
      if (!ctx) {
        var fb = document.createElement("div");
        fb.className = "food-dna-placeholder";
        fb.textContent = "Taste profile coming soon";
        el.appendChild(fb);
        return;
      }

      var n = AXES.length;
      var cx = W / 2;
      var cy = H / 2;
      var R = Math.min(W, H) / 2 - 36;

      function pt(i, r) {
        var ang = -Math.PI / 2 + (i * 2 * Math.PI) / n;
        return [cx + r * Math.cos(ang), cy + r * Math.sin(ang)];
      }

      /* Concentric grid rings (1..5). */
      var ring, i, p;
      ctx.lineWidth = 1;
      for (ring = 1; ring <= MAX; ring++) {
        ctx.beginPath();
        for (i = 0; i <= n; i++) {
          p = pt(i % n, (R * ring) / MAX);
          if (i === 0) ctx.moveTo(p[0], p[1]);
          else ctx.lineTo(p[0], p[1]);
        }
        ctx.strokeStyle = ring === MAX ? GRID_OUTER : GRID_SUBTLE;
        ctx.stroke();
      }

      /* Spokes from center to each axis. */
      for (i = 0; i < n; i++) {
        p = pt(i, R);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(p[0], p[1]);
        ctx.strokeStyle = SPOKE;
        ctx.stroke();
      }

      /* Data polygon. */
      ctx.beginPath();
      for (i = 0; i <= n; i++) {
        p = pt(i % n, (R * vals[i % n]) / MAX);
        if (i === 0) ctx.moveTo(p[0], p[1]);
        else ctx.lineTo(p[0], p[1]);
      }
      ctx.closePath();
      ctx.fillStyle = GOLD_FILL;
      ctx.fill();
      ctx.strokeStyle = GOLD;
      ctx.lineWidth = 2;
      ctx.stroke();

      /* Vertex dots. */
      for (i = 0; i < n; i++) {
        p = pt(i, (R * vals[i]) / MAX);
        ctx.beginPath();
        ctx.arc(p[0], p[1], 3.5, 0, Math.PI * 2);
        ctx.fillStyle = GOLD;
        ctx.fill();
      }

      /* Axis labels with values. */
      ctx.font = "600 11px Georgia, 'Times New Roman', serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (i = 0; i < n; i++) {
        var lp = pt(i, R + 20);
        ctx.fillStyle = LABEL_COLOR;
        ctx.fillText(AXES[i], lp[0], lp[1] - 6);
        var vp = pt(i, R + 20);
        ctx.fillStyle = GOLD;
        ctx.font = "700 10px Georgia, 'Times New Roman', serif";
        ctx.fillText(vals[i] + "/5", vp[0], vp[1] + 7);
        ctx.font = "600 11px Georgia, 'Times New Roman', serif";
      }

      el.appendChild(canvas);
    } catch (e) {
      /* Never break the host page. */
      try {
        var err = document.createElement("div");
        err.className = "food-dna-placeholder";
        err.textContent = "Taste profile coming soon";
        el.innerHTML = "";
        el.appendChild(err);
      } catch (e2) { /* noop */ }
    }
  };

  /**
   * Small inline SVG summary of a food's top 2 taste axes.
   * @param {Object} tasteObj
   * @returns {string} SVG markup, or "" when no usable profile exists.
   */
  window.dnaBadge = function (tasteObj) {
    try {
      var vals = normalize(tasteObj);
      if (!vals) return "";

      var order = AXES.map(function (axis, i) {
        return { name: axis, v: vals[i] };
      })
        .filter(function (x) { return x.v > 0; })
        .sort(function (a, b) { return b.v - a.v; })
        .slice(0, 2);

      if (!order.length) return "";

      var rows = order.map(function (x, ri) {
        var y = 10 + ri * 22;
        var segs = "";
        for (var sgi = 0; sgi < MAX; sgi++) {
          segs += '<rect x="' + (92 + sgi * 13) + '" y="' + (y - 5) +
            '" width="10" height="10" rx="2" fill="' +
            (sgi < x.v ? GOLD : EMPTY_SEG) + '"/>';
        }
        return '<text x="0" y="' + (y + 4) +
          '" font-family="Georgia,serif" font-size="11" fill="' + LABEL_COLOR + '">' +
          esc(x.name) + '</text>' + segs;
      }).join("");

      var h = 12 + order.length * 22;
      var names = order.map(function (x) { return x.name + " " + x.v + "/5"; }).join(", ");
      return '<svg class="dna-badge" width="160" height="' + h +
        '" viewBox="0 0 160 ' + h + '" role="img" aria-label="Top tastes: ' +
        esc(names) + '">' + rows + "</svg>";
    } catch (e) {
      return "";
    }
  };
})();
