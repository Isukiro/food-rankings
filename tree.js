/* Food Family Tree explorer — SVG tree, 2 levels, zoom + pan. Never throws. */
(function () {
  "use strict";

  var SVGNS = "http://www.w3.org/2000/svg";
  var W = 1000, H = 700, CX = 500, CY = 350;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function byName(n) {
    var f = (window.FOODS || []).filter(function (x) { return x.name === n; });
    return f.length ? f[0] : null;
  }
  function shortName(n) {
    n = String(n);
    return n.length > 20 ? n.slice(0, 19) + "…" : n;
  }

  /* Relations with live heuristic fallback (same logic as the relations build). */
  function relationsFor(food) {
    var rels = ((window.FOOD_RELATIONS || {})[food.name] || []).filter(byName);
    if (rels.length) return rels.slice(0, 5);
    var out = [], seen = {}, all = window.FOODS || [];
    seen[food.name] = 1;
    function add(cands) {
      cands.sort(function (a, b) { return a.name < b.name ? -1 : 1; });
      for (var i = 0; i < cands.length && out.length < 5; i++) {
        if (!seen[cands[i].name]) { seen[cands[i].name] = 1; out.push(cands[i].name); }
      }
    }
    add(all.filter(function (c) { return c.name !== food.name && c.category === food.category && c.origin === food.origin; }));
    add(all.filter(function (c) { return c.name !== food.name && c.category === food.category && c.region === food.region; }));
    add(all.filter(function (c) { return c.name !== food.name && c.origin === food.origin; }));
    add(all.filter(function (c) { return c.name !== food.name && c.category === food.category; }));
    return out;
  }

  function buildModel(rootName) {
    var root = byName(rootName);
    if (!root) return null;
    var placed = {};
    placed[root.name] = true;
    var l1 = relationsFor(root).map(byName).filter(Boolean);
    l1.forEach(function (f) { placed[f.name] = true; });
    var l2 = [];
    l1.forEach(function (parent) {
      var kids = relationsFor(parent)
        .filter(function (n) { return !placed[n]; })
        .slice(0, 3)
        .map(byName).filter(Boolean);
      kids.forEach(function (k) { placed[k.name] = true; l2.push({ food: k, parent: parent.name }); });
    });
    return { root: root, l1: l1, l2: l2 };
  }

  function el(tag, attrs, parent) {
    var n = document.createElementNS(SVGNS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }

  function nodeG(canvas, x, y, food, level) {
    var g = el("g", { "class": "tnode tnode-l" + level, transform: "translate(" + x + "," + y + ")", tabindex: "0", role: "link", "aria-label": food.name + " — open full page" }, canvas);
    var w = 168, h = 56;
    el("rect", { x: -w / 2, y: -h / 2, width: w, height: h, rx: 12, "class": "tnode-box" }, g);
    var t1 = el("text", { x: -w / 2 + 14, y: -4, "class": "tnode-emoji", "text-anchor": "start" }, g);
    t1.textContent = food.emoji || "🍽";
    var t2 = el("text", { x: -w / 2 + 44, y: -4, "class": "tnode-name", "text-anchor": "start" }, g);
    t2.textContent = shortName(food.name);
    var t3 = el("text", { x: -w / 2 + 44, y: 16, "class": "tnode-origin", "text-anchor": "start" }, g);
    t3.textContent = shortName(food.origin || "");
    function go() { location.href = "food.html?name=" + encodeURIComponent(food.name); }
    g.addEventListener("click", go);
    g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
    return g;
  }

  var zoom = 1, panX = 0, panY = 0, canvas;

  function applyView() {
    if (canvas) canvas.setAttribute("transform", "translate(" + panX + "," + panY + ") scale(" + zoom + ")");
  }

  function render(rootName) {
    var svg = document.getElementById("treeSvg");
    var empty = document.getElementById("treeEmpty");
    canvas = document.getElementById("treeCanvas");
    try {
      var model = buildModel(rootName);
      while (canvas.firstChild) canvas.removeChild(canvas.firstChild);
      if (!model) {
        empty.hidden = false;
        empty.textContent = "Hmm — we couldn't find that dish. Try another name from the suggestions.";
        return;
      }
      empty.hidden = true;

      // Layout: root center; L1 on a ring; L2 fanned near their parent.
      var nodes = [{ food: model.root, x: CX, y: CY, level: 0 }];
      var n1 = model.l1.length;
      model.l1.forEach(function (f, i) {
        var a = (i / Math.max(n1, 1)) * Math.PI * 2 - Math.PI / 2;
        var x = CX + Math.cos(a) * 235, y = CY + Math.sin(a) * 215;
        f._x = x; f._y = y; f._a = a;
        nodes.push({ food: f, x: x, y: y, level: 1, parent: model.root.name });
      });
      var perParent = {};
      model.l2.forEach(function (item) {
        var p = byName(item.parent) || model.l1.filter(function (f) { return f.name === item.parent; })[0];
        var idx = perParent[item.parent] = (perParent[item.parent] || 0);
        perParent[item.parent]++;
        var base = (p && p._a != null) ? p._a : 0;
        var spread = [-0.42, 0, 0.42][idx % 3];
        var a = base + spread;
        var x = CX + Math.cos(a) * 400, y = CY + Math.sin(a) * 300;
        x = Math.max(100, Math.min(W - 100, x));
        y = Math.max(60, Math.min(H - 60, y));
        nodes.push({ food: item.food, x: x, y: y, level: 2, parent: item.parent });
      });

      var byN = {};
      nodes.forEach(function (n) { byN[n.food.name] = n; });
      // links first (under nodes)
      nodes.forEach(function (n) {
        if (!n.parent) return;
        var p = byN[n.parent];
        if (!p) return;
        el("line", { x1: p.x, y1: p.y, x2: n.x, y2: n.y, "class": "tlink tlink-l" + n.level }, canvas);
      });
      nodes.forEach(function (n) { nodeG(canvas, n.x, n.y, n.food, n.level); });

      zoom = 1; panX = 0; panY = 0; applyView();
      try { history.replaceState(null, "", "tree.html?food=" + encodeURIComponent(rootName)); } catch (_) {}
    } catch (e) {
      empty.hidden = false;
      empty.textContent = "Something went wrong growing this tree — try another dish.";
    }
  }

  function init() {
    try {
      var foods = window.FOODS || [];
      var list = document.getElementById("treeFoodList");
      var frag = document.createDocumentFragment();
      foods.forEach(function (f) {
        var o = document.createElement("option");
        o.value = f.name;
        frag.appendChild(o);
      });
      list.appendChild(frag);

      var input = document.getElementById("treeSearch");
      function grow() {
        var v = input.value.trim();
        if (v) render(v);
      }
      document.getElementById("treeGo").addEventListener("click", grow);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") grow(); });

      document.getElementById("zoomIn").addEventListener("click", function () { zoom = Math.min(2.5, zoom * 1.2); applyView(); });
      document.getElementById("zoomOut").addEventListener("click", function () { zoom = Math.max(0.5, zoom / 1.2); applyView(); });
      document.getElementById("zoomReset").addEventListener("click", function () { zoom = 1; panX = 0; panY = 0; applyView(); });

      // drag to pan
      var svg = document.getElementById("treeSvg");
      var dragging = false, sx = 0, sy = 0;
      svg.addEventListener("pointerdown", function (e) { dragging = true; sx = e.clientX - panX; sy = e.clientY - panY; svg.setPointerCapture(e.pointerId); });
      svg.addEventListener("pointermove", function (e) { if (dragging) { panX = e.clientX - sx; panY = e.clientY - sy; applyView(); } });
      ["pointerup", "pointercancel", "pointerleave"].forEach(function (ev) { svg.addEventListener(ev, function () { dragging = false; }); });

      var q = "";
      try { q = new URLSearchParams(location.search).get("food") || ""; } catch (_) {}
      if (q && byName(q)) { input.value = q; render(q); }
      else {
        // default: a beloved, well-connected dish
        var def = byName("Picanha") ? "Picanha" : (foods[0] && foods[0].name);
        if (def) { input.value = def; render(def); }
      }
    } catch (e) { /* page stays usable */ }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
