const CATEGORIES = ["Main", "Soup", "Street Food", "Snack", "Dessert", "Candy", "Breakfast", "Drink", "Side", "Seafood"];
const REGIONS = ["Europe", "Asia", "Middle East", "Africa", "Americas", "Oceania"];

const state = {
  search: { q: "", cat: "All", region: "All", spotlight: null },
  best:   { cat: "All", region: "All" },
  worst:  { cat: "All", region: "All" },
};

function medal(i) {
  return i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}`;
}

function rankBadge(f) {
  if (f.bestRank) return `<span class="rank-badge best">★ #${f.bestRank} Best in the World</span>`;
  if (f.worstRank) return `<span class="rank-badge worst">#${f.worstRank} Worst in the World</span>`;
  return "";
}

function flavorPillsHTML(name) {
  const t = (window.FOOD_TASTES || {})[name];
  if (!t || !t.tags || !t.tags.length) return "";
  const pills = t.tags.slice(0, 4).map(tag => `<span class="flavor-pill">${tag}</span>`).join("");
  return `<span class="flavor-label">Flavors</span>${pills}`;
}

function cardHTML(f, rankLabel) {
  const flavors = flavorPillsHTML(f.name);
  return `<article class="card">
    ${rankLabel ? `<div class="rank">${rankLabel}</div>` : ""}
    <div class="emoji">${f.emoji}</div>
    <h3>${f.name}</h3>
    <div class="origin">${f.origin} · ${f.region}</div>
    <div class="cat-row"><span class="cat-tag">${f.category}</span>${rankBadge(f)}</div>
    ${flavors ? `<a class="flavor-line" href="map.html" title="See it on the Flavor Map">${flavors}</a>` : ""}
    <p class="definition">${f.definition}</p>
    <div class="research"><strong>Research:</strong> ${f.research}</div>
  </article>`;
}

function matchesFilters(f, s) {
  if (s.cat !== "All" && f.category !== s.cat) return false;
  if (s.region !== "All" && f.region !== s.region) return false;
  if (s.q) {
    const q = s.q.toLowerCase().trim();
    const hay = (f.name + " " + f.origin + " " + f.region + " " + f.category + " " + f.definition + " " + f.research).toLowerCase();
    if (!hay.includes(q)) return false;
  }
  return true;
}

function rowHTML(f) {
  const rank = f.bestRank || f.worstRank;
  return `<div class="leader-row">
    <div class="leader-rank">${rank}</div>
    <div class="leader-main">
      <div class="leader-name">${f.emoji} ${f.name}</div>
      <div class="leader-sub">${f.origin} · ${f.region} · ${f.category}</div>
      <p class="leader-def">${f.definition}</p>
      <p class="leader-res"><strong>Research:</strong> ${f.research}</p>
    </div>
  </div>`;
}

function renderGrid(gridId, emptyId, countId, list, countLabel) {
  const grid = document.getElementById(gridId);
  const isLeaderboard = gridId === "bestGrid" || gridId === "worstGrid";
  grid.innerHTML = list.map(f => isLeaderboard ? rowHTML(f) : cardHTML(f, null)).join("");
  document.getElementById(emptyId).style.display = list.length ? "none" : "block";
  const c = document.getElementById(countId);
  if (c) c.textContent = list.length ? `${list.length} ${countLabel}` : "";
}

function renderSearch() {
  const s = state.search;
  let list;
  if (s.spotlight) {
    list = [s.spotlight];
  } else {
    list = FOODS.filter(f => matchesFilters(f, s));
  }
  renderGrid("searchGrid", "searchEmpty", "searchCount", list, "foods found");
}

function renderBest() {
  const s = state.best;
  const list = FOODS.filter(f => f.bestRank)
    .sort((a, b) => a.bestRank - b.bestRank)
    .filter(f => (s.cat === "All" || f.category === s.cat) && (s.region === "All" || f.region === s.region));
  renderGrid("bestGrid", "bestEmpty", "bestCount", list, "of the top 100 shown");
}

function renderWorst() {
  const s = state.worst;
  const list = FOODS.filter(f => f.worstRank)
    .sort((a, b) => a.worstRank - b.worstRank)
    .filter(f => (s.cat === "All" || f.category === s.cat) && (s.region === "All" || f.region === s.region));
  renderGrid("worstGrid", "worstEmpty", "worstCount", list, "of the bottom 100 shown");
}

function buildChips(containerId, items, get, set, rerender) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  ["All", ...items].forEach(item => {
    const b = document.createElement("button");
    b.className = "chip" + (get() === item ? " active" : "");
    b.textContent = item;
    b.addEventListener("click", () => {
      set(item);
      state.search.spotlight = null;
      buildChips(containerId, items, get, set, rerender);
      rerender();
    });
    el.appendChild(b);
  });
}

function initChips() {
  buildChips("searchCatChips", CATEGORIES, () => state.search.cat, v => state.search.cat = v, renderSearch);
  buildChips("searchRegionChips", REGIONS, () => state.search.region, v => state.search.region = v, renderSearch);
  buildChips("bestCatChips", CATEGORIES, () => state.best.cat, v => state.best.cat = v, renderBest);
  buildChips("bestRegionChips", REGIONS, () => state.best.region, v => state.best.region = v, renderBest);
  buildChips("worstCatChips", CATEGORIES, () => state.worst.cat, v => state.worst.cat = v, renderWorst);
  buildChips("worstRegionChips", REGIONS, () => state.worst.region, v => state.worst.region = v, renderWorst);
}

document.getElementById("searchInput").addEventListener("input", e => {
  state.search.q = e.target.value;
  state.search.spotlight = null;
  renderSearch();
});

document.getElementById("surpriseBtn").addEventListener("click", () => {
  const pick = FOODS[Math.floor(Math.random() * FOODS.length)];
  state.search.spotlight = pick;
  renderSearch();
  document.getElementById("searchGrid").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".board").forEach(b => b.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

initChips();
renderSearch();
renderBest();
renderWorst();
