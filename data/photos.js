// Verified Wikimedia Commons photos for the site's top-5 best and top-5 worst dishes.
// Every URL below was confirmed live (HTTP 200, content-type image/jpeg) on 2026-09-26.
// Two dishes have no verifiable Commons photo and are intentionally omitted:
//   - "Pizza Vulkanen" (Piteå, Sweden): no Commons file depicts this dish.
//   - "Blodpalt" (Norrland, Sweden): no Commons file depicts the dish itself
//     (only a palt-making ladle and an archival palt-cooking photo exist).
// Never substitute an unverified image for a missing entry.
const PHOTOS = {
  "Lechona": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lechona.JPG/960px-Lechona.JPG",
  "Pizza Napoletana": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Pizza_Napoletana_in_Pompei%2C_Italy.jpg/960px-Pizza_Napoletana_in_Pompei%2C_Italy.jpg",
  "Picanha": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/GrilledPicanha.jpg/960px-GrilledPicanha.jpg",
  "Rechta": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Rechta_de_Blida.jpg/960px-Rechta_de_Blida.jpg",
  "Phanaeng Curry": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Phanaeng_beef_curry.jpg/960px-Phanaeng_beef_curry.jpg",
  "Svið": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Svi%C3%B0.jpg/960px-Svi%C3%B0.jpg",
  "Thorramatur": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Thorramatur.jpg/960px-Thorramatur.jpg",
  "Truchas a la Navarra": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Trucha_a_la_Navarra.jpg/960px-Trucha_a_la_Navarra.jpg"
};
