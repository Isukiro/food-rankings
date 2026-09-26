# The Global Food Encyclopedia

A research-backed food encyclopedia and rankings publication — "Google, but for food." **1,203 foods** from every world region, each with a definition, origin, category, and research-backed reasoning. Live at **https://isukiro.github.io/food-rankings/**.

An honest-numbers project: only the Top 100 Best and Top 100 Worst carry real ranks (from TasteAtlas's *100 Best Dishes 2025* and *100 Worst Rated Foods 2026*). Everything else is labeled unranked — we never invent scores.

## Pages

- `index.html` — Homepage: food search (autocomplete, history, "Popular now" strip), Food of the Day, Trending Now, Editor's Picks, Latest Reviews, Recently Viewed, and the guided tour
- `rankings.html` — Top 100 Best / Top 100 Worst / By Category tabs, pagination, Detailed & Compact views, category/region filters, sorting, side-by-side comparison, community star voting
- `tops.html` — Rankings by category hub
- `categories.html` — Category & region hubs linking to pre-filtered rankings
- `map.html` — The Flavor Map: every dish plotted by origin, taste filters, "Explore the World" region cards, country links
- `tree.html` — Food family trees: pick a dish, grow its relatives
- `food.html` — Food detail pages: history, ingredients, preparation, flavor profile, Food DNA radar, timeline, pronunciation, food family
- `country.html` — Per-country food pages (`country.html?c=Japan`)
- `shelf.html` — My Shelf: favorites, want-to-try, tried, personal star ratings, progress
- `cookbook.html` — Cookbook: heart-saved shortlist
- `community.html` — Community hub (comments via Cusdis — App ID pending)
- `about.html` — Scoring criteria and methodology
- `contact.html` — Submit a Pick form
- `settings.html` — Sign-in & cloud sync settings (Firebase — project config pending)
- `sitemap.xml`, `robots.txt` — SEO essentials

## Features

- **Sage** (`assistant.js`) — offline AI food guide: typo-tolerant dish lookup, conversational memory ("why is it ranked?" after asking about a dish), flavor questions, country browsing, pronunciation, My Shelf queries, recommendations, comparisons. No network calls, no accounts.
- **Guided tour** (`tour.js`) — plays on every homepage visit (with opt-out), plain-language walkthrough for first-time visitors
- **My Shelf sync** (`auth.js`, `firebase-config.js`) — Firebase Auth (Google / phone / email) with per-user Firestore sync of shelf data. Inert until the Firebase project config is added.
- **Theming** (`theme.js`) — "Customize" control: preset themes or custom colors, remembered per browser

## Data

- `data/foods.js` — 1,203 foods: `{name, origin, region, category, emoji, definition, research, bestRank, worstRank}`
- `data/photos.js` — verified Wikimedia Commons photos (each URL curl-verified: HTTP 200 + image/*)
- `data/pros-cons.js` — grounded pros & cons for ranked dishes
- `tastes.js` — flavor dimensions & tags per dish (sweet/salty/sour/bitter/umami/heat)
- `pronunciations.js` — pronunciations for all 1,203 foods (CAPS = stressed syllable)
- `food-relations.js` — dish family relationships; `food-timelines.js` — historical timelines

## Scoring

Computed in JS from the official lists — best #1 → 10.0 … #100 → ~6.5; worst #1 → 3.5 … #100 → ~1.0.
Tiers: S ≥ 9.5, A ≥ 8.5, B ≥ 7.5, C ≥ 5.0, D ≥ 2.5, F < 2.5. Unranked dishes show no score.

## Run it locally

No build step — it's plain HTML/CSS/JS. Open `index.html` in a browser, or serve the folder:

```powershell
cd $env:USERPROFILE\Documents\food-rankings
git pull
start index.html
```

Deployed via GitHub Pages from this repo's root.
