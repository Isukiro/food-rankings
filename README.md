# The Global Food Encyclopedia 🍕

A research-backed food rankings publication — "Google, but for food." 859 foods from every region, with definitions, real global rankings, scores, tiers, pros & cons, and community voting.

## Pages

- `index.html` — Homepage: food search engine, Trending Now (top 10 best/worst), Editor's Picks, Latest Reviews
- `rankings.html` — Full rankings with the listicle template: scores/10, star ratings, S–F tiers, pros & cons, sort/filter tools, side-by-side comparison, community voting (saved in your browser)
- `categories.html` — Category & region hubs linking to pre-filtered rankings
- `about.html` — Scoring criteria and methodology (honest sourcing)
- `contact.html` — Submit a Pick form (saves in browser + email fallback)
- `sitemap.xml`, `robots.txt` — SEO essentials

## Data

- `data/foods.js` — 859 foods: `{name, origin, region, category, emoji, definition, research, bestRank, worstRank}`
- `data/pros-cons.js` — grounded pros/cons for the top 25 best + top 25 worst
- `data/photos.js` — verified Wikimedia Commons photos (top dishes)

## Scoring

Computed in JS from TasteAtlas's 100 Best Dishes (2025) and 100 Worst Rated Foods (2026):
best #1 → 10.0 … #100 → ~6.5; worst #1 → 3.5 … #100 → ~1.0. Tiers: S ≥9.5, A ≥8.5, B ≥7.5, C ≥5.0, D ≥2.5, F <2.5.

## View it

Enable GitHub Pages on the `main` branch (root folder): `https://<username>.github.io/food-rankings/`.
