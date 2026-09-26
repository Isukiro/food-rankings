/* food.js — logic for food.html (food detail pages).
 *
 * Reads ?name=<food name>, looks the food up in FOODS (data/foods.js),
 * enriches it with window.FOOD_DETAILS (food-details.js) when available,
 * and renders the full profile. Foods without a FOOD_DETAILS entry still
 * get a complete page from base data, with an honest "coming soon" note
 * on the deep sections.
 *
 * Scoring replicas match rankings.js exactly:
 *   best  rank r -> Math.round((10-(r-1)*0.035)*10)/10
 *   worst rank r -> Math.round((3.5-(r-1)*0.025)*10)/10
 * Tiers: S>=9.5, A>=8.5, B>=7.5, C>=5.0, D>=2.5, F<2.5
 */

'use strict';

/* ---------------- helpers ---------------- */

function esc(s) {
  return String(s === null || s === undefined ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function $(id) { return document.getElementById(id); }

function scoreOf(food, tab) {
  var r = tab === 'worst' ? food.worstRank : food.bestRank;
  if (r === null || r === undefined) return null;
  var raw = tab === 'worst' ? 3.5 - (r - 1) * 0.025 : 10 - (r - 1) * 0.035;
  return Math.round(raw * 10) / 10;
}

function tierOf(score) {
  if (score === null || score === undefined) return '–';
  if (score >= 9.5) return 'S';
  if (score >= 8.5) return 'A';
  if (score >= 7.5) return 'B';
  if (score >= 5.0) return 'C';
  if (score >= 2.5) return 'D';
  return 'F';
}

function starsOf(score) {
  if (score === null || score === undefined) return '';
  var full = Math.max(0, Math.min(5, Math.round(score / 2)));
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function foodURL(name) {
  return 'food.html?name=' + encodeURIComponent(name);
}

function photoFor(name, details) {
  if (details && details.photo) return details.photo;
  if (typeof PHOTOS !== 'undefined' && PHOTOS && PHOTOS[name]) return PHOTOS[name];
  return null;
}

/* ---------------- section builders ---------------- */

var COMING_SOON =
  '<p class="coming-soon-note">Full details coming soon — want to contribute? ' +
  'See the <a href="contact.html">Contribute page</a>.</p>';

function section(title, innerHTML) {
  return '<section class="food-section"><h2>' + esc(title) + '</h2>' + innerHTML + '</section>';
}

function paragraphs(text) {
  return String(text).split(/\n{2,}|\n/).map(function (p) {
    return '<p>' + esc(p.trim()) + '</p>';
  }).join('');
}

function rankRibbon(food) {
  var tab = food.bestRank ? 'best' : (food.worstRank ? 'worst' : null);
  if (!tab) return '';
  var rank = tab === 'best' ? food.bestRank : food.worstRank;
  var score = scoreOf(food, tab);
  var label = tab === 'best'
    ? 'Best Dish in the World'
    : 'Worst-Rated Dish in the World';
  return (
    '<div class="rank-ribbon' + (tab === 'worst' ? ' worst' : '') + '">' +
      '<span class="rank-badge">#' + rank + ' ' + label + '</span>' +
      '<span class="rank-score"><strong>' + score.toFixed(1) + '</strong>/10</span>' +
      '<span class="rank-stars" aria-label="' + starsOf(score) + '">' + starsOf(score) + '</span>' +
      '<span class="rank-tier" title="Tier ' + tierOf(score) + '">Tier ' + tierOf(score) + '</span>' +
      '<span class="rank-note">Score derived from the global rank — see the ' +
        '<a href="about.html">About page</a> for the methodology.</span>' +
    '</div>'
  );
}

function heroHTML(food, details) {
  var photo = photoFor(food.name, details);
  var media = photo
    ? '<div class="food-photo-frame"><img src="' + esc(photo) + '" alt="' + esc(food.name) + '" loading="eager">' +
      '<span class="food-photo-credit">Photo: Wikimedia Commons</span></div>'
    : '<div class="food-photo-frame"><div class="food-photo-fallback" aria-hidden="true">' +
      esc(food.emoji || '') + '</div></div>';

  var pron = details && details.pronunciation
    ? '<p class="food-pronunciation">Pronounced: ' + esc(details.pronunciation) + '</p>' : '';

  return (
    '<div class="food-hero">' +
      media +
      '<div class="food-identity">' +
        '<p class="kicker">' + esc(food.category || 'Food') + '</p>' +
        '<h1>' + esc(food.name) + '</h1>' +
        pron +
        '<div class="food-meta">' +
          '<span><strong>Origin:</strong> ' + esc(food.origin || '—') + '</span>' +
          '<span><strong>Region:</strong> ' + esc(food.region || '—') + '</span>' +
        '</div>' +
        rankRibbon(food) +
        '<p class="food-definition">' + esc(food.definition || '') + '</p>' +
      '</div>' +
    '</div>'
  );
}

function nutritionHTML(n) {
  if (!n) return COMING_SOON;
  function cell(v, suffix) {
    return v === null || v === undefined ? '—' : esc(v) + (suffix || '');
  }
  return (
    '<table class="nutrition-table">' +
      '<thead><tr><th scope="col">Nutrient</th><th scope="col">Per serving</th></tr></thead>' +
      '<tbody>' +
        '<tr><td>Serving size</td><td>' + esc(n.serving || '—') + '</td></tr>' +
        '<tr><td>Calories</td><td>' + cell(n.calories, ' kcal') + '</td></tr>' +
        '<tr><td>Protein</td><td>' + cell(n.protein, ' g') + '</td></tr>' +
        '<tr><td>Carbohydrates</td><td>' + cell(n.carbs, ' g') + '</td></tr>' +
        '<tr><td>Fat</td><td>' + cell(n.fat, ' g') + '</td></tr>' +
      '</tbody>' +
    '</table>' +
    '<p class="nutrition-note">Nutrition values are approximate and vary by recipe and portion.</p>'
  );
}

function similarHTML(names) {
  if (!names || !names.length) return COMING_SOON;
  var links = names.map(function (n) {
    return '<a href="' + foodURL(n) + '">' + esc(n) + '</a>';
  }).join('');
  return '<div class="similar-links">' + links + '</div>';
}

/* ---------------- main render ---------------- */

function renderNotFound(name) {
  document.title = 'Food not found | The Global Food Encyclopedia';
  $('foodRoot').innerHTML =
    '<div class="food-notfound">' +
      '<h1>Food not found</h1>' +
      '<p>We could not find ' +
        (name ? '&ldquo;' + esc(name) + '&rdquo;' : 'that food') +
        ' in the encyclopedia.</p>' +
      '<p><a href="rankings.html">Browse the rankings</a> or ' +
      '<a href="index.html">search the encyclopedia</a>.</p>' +
    '</div>';
}

function render(food) {
  var details = (typeof FOOD_DETAILS !== 'undefined' && FOOD_DETAILS)
    ? FOOD_DETAILS[food.name] : null;

  document.title = food.name + ' | The Global Food Encyclopedia';

  var html = heroHTML(food, details);

  /* Why it ranks here — research is base data, always available. */
  html += '<div class="food-sections">';
  if (food.research) {
    html += '<div class="food-section why-ranks"><h2>Why it ranks here</h2>' +
      paragraphs(food.research) + '</div>';
  }

  if (details) {
    if (details.history) {
      html += section('Origin & history', paragraphs(details.history));
    }
    html += section('Country & region',
      '<p><strong>' + esc(food.name) + '</strong> comes from <strong>' +
      esc(food.origin || '—') + '</strong>, in the <strong>' +
      esc(food.region || '—') + '</strong> region.</p>');
    if (details.ingredients && details.ingredients.length) {
      html += section('Ingredients',
        '<ul class="ingredient-list">' +
        details.ingredients.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') +
        '</ul>');
    }
    if (details.preparation) {
      html += section('How it\u2019s traditionally prepared', paragraphs(details.preparation));
    }
    var ft = '';
    if (details.flavor || details.texture) {
      ft += '<div class="food-columns">';
      ft += details.flavor
        ? '<div class="food-section"><h2>Flavor profile</h2>' + paragraphs(details.flavor) + '</div>'
        : '<div class="food-section"><h2>Flavor profile</h2>' + COMING_SOON + '</div>';
      ft += details.texture
        ? '<div class="food-section"><h2>Texture</h2>' + paragraphs(details.texture) + '</div>'
        : '<div class="food-section"><h2>Texture</h2>' + COMING_SOON + '</div>';
      ft += '</div>';
    }
    html += ft;
    html += section('Similar foods', similarHTML(details.similar));
    if (details.variations && details.variations.length) {
      html += section('Common variations',
        '<ul class="variation-list">' +
        details.variations.map(function (v) { return '<li>' + esc(v) + '</li>'; }).join('') +
        '</ul>');
    }
    html += section('Nutrition', nutritionHTML(details.nutrition));
  } else {
    /* Base-data page: country/region always works; deep sections are honest stubs. */
    html += section('Country & region',
      '<p><strong>' + esc(food.name) + '</strong> comes from <strong>' +
      esc(food.origin || '—') + '</strong>, in the <strong>' +
      esc(food.region || '—') + '</strong> region.</p>');
    html += section('Origin & history', COMING_SOON);
    html += section('Ingredients', COMING_SOON);
    html += section('How it\u2019s traditionally prepared', COMING_SOON);
    html += '<div class="food-columns">' +
      '<div class="food-section"><h2>Flavor profile</h2>' + COMING_SOON + '</div>' +
      '<div class="food-section"><h2>Texture</h2>' + COMING_SOON + '</div>' +
      '</div>';
    html += section('Similar foods', COMING_SOON);
    html += section('Common variations', COMING_SOON);
    html += section('Nutrition', COMING_SOON);
  }

  html += '</div>';
  $('foodRoot').innerHTML = html;
}

/* ---------------- init ---------------- */

(function init() {
  var params = new URLSearchParams(window.location.search);
  var name = params.get('name');

  if (typeof FOODS === 'undefined' || !FOODS) {
    renderNotFound(name);
    return;
  }
  if (!name) { renderNotFound(null); return; }

  var food = null;
  for (var i = 0; i < FOODS.length; i++) {
    if (FOODS[i].name === name) { food = FOODS[i]; break; }
  }
  if (!food) {
    var lower = name.toLowerCase();
    for (var j = 0; j < FOODS.length; j++) {
      if (String(FOODS[j].name).toLowerCase() === lower) { food = FOODS[j]; break; }
    }
  }
  if (!food) { renderNotFound(name); return; }
  render(food);
})();
