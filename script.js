const BEST = [
  { name: "Lechona", origin: "Colombia", emoji: "🐖", tag: "TasteAtlas #1 best dish 2025",
    why: "The actual #1 dish in the world on TasteAtlas's 2025 list of 100 best dishes. A whole pig roasted for hours, stuffed with rice, peas, and spices until the skin turns to crackling and the meat falls apart. It is Colombia's celebration centerpiece — served at weddings and festivals — and voters put it above every other dish on Earth." },
  { name: "Pizza Napoletana", origin: "Naples, Italy", emoji: "🍕", tag: "TasteAtlas #2 · UNESCO heritage",
    why: "Ranked #2 in the world, and the art of the Neapolitan pizzaiolo is UNESCO intangible heritage. Leopard-spotted crust from a 450°C wood oven, San Marzano tomatoes, fior di latte, basil — a formula from 1889 so perfect it colonized the planet. The benchmark every pizza is judged against." },
  { name: "Picanha", origin: "Brazil", emoji: "🥩", tag: "TasteAtlas #3",
    why: "The crown of Brazilian churrasco: a cap of beef with a thick fat layer, seasoned with nothing but coarse salt and grilled over charcoal. Sliced thin against the grain, it is juicy, beefy, and elemental. Brazil's barbecue culture turned one humble cut into the #3 dish on the planet." },
  { name: "Rechta", origin: "Algeria", emoji: "🍝", tag: "TasteAtlas #4",
    why: "Hand-rolled noodles cut into thin artisanal strips, steamed and served in a fragrant spiced broth with chicken or lamb. Algeria's celebratory dish — traditionally made for Eid and weddings — beat nearly every famous dish in Europe and Asia to land at #4. Comfort food with ceremony." },
  { name: "Phanaeng Curry", origin: "Thailand", emoji: "🍛", tag: "TasteAtlas #5",
    why: "A thick, rich red curry simmered down with coconut cream until it glistens, loaded with peanuts, makrut lime, and chilies. Drier and more intense than other Thai curries, it balances sweet, salty, and heat in a single spoonful. Thailand's curry masterpiece, ranked #5 on Earth." },
  { name: "Asado", origin: "Argentina", emoji: "🔥", tag: "TasteAtlas #6",
    why: "Not just a dish but a ritual: beef, pork, chorizo, and morcilla slow-cooked over wood or charcoal by an asador, often for an entire afternoon. The smoke, the patience, the gathering of family around the parrilla — Argentina turned grilling into a national philosophy and the #6 dish in the world." },
  { name: "Çökertme Kebabı", origin: "Bodrum, Turkey", emoji: "🍖", tag: "TasteAtlas #7",
    why: "Strips of marinated veal layered over matchstick fried potatoes, drowned in garlic yogurt and sizzling tomato-butter sauce. Named after a Bodrum folk song, it hits every craving at once — crispy, creamy, meaty, tangy. Turkey's most complete plate, ranked #7 globally." },
  { name: "Rawon", origin: "East Java, Indonesia", emoji: "🍲", tag: "TasteAtlas #8",
    why: "A beef soup turned nearly black by keluak nuts, giving it a deep, earthy, almost chocolate-like depth you will not find in any other broth. Served with rice, bean sprouts, and salted egg, rawon is Indonesia's dark horse — mysterious-looking, unforgettable-tasting, and the #8 dish in the world." },
  { name: "Cağ Kebabı", origin: "Erzurum, Turkey", emoji: "🍢", tag: "TasteAtlas #9 · #5 in 2026",
    why: "Marinated lamb stacked with tail fat and roasted horizontally over open wood fire in Turkey's high-altitude east. Sheep raised on wild mountain herbs flavor the meat from the inside out. It ranked #9 in 2025 and climbed to #5 best dish in the world for 2026 — the kebab that outranks all kebabs." },
  { name: "Tibs", origin: "Ethiopia", emoji: "🥘", tag: "TasteAtlas #10",
    why: "Chopped beef or lamb seared at ferocious heat with berbere spice, garlic, and niter kibbeh (spiced clarified butter), served sizzling on injera flatbread. Ethiopia's beloved stir-fry is fiery, buttery, and eaten communally — a top-10 dish that turns dinner into a shared event." },
  { name: "Biang Biang Noodles", origin: "Shaanxi, China", emoji: "🍜", tag: "TasteAtlas #11",
    why: "Hand-pulled noodles as wide as belts, slapped and stretched to order, then hit with searing-hot chili oil poured over garlic and vinegar. The name mimics the slap of dough on the counter. Chewy, spicy, dramatic — China's noodle theater, ranked #11 in the world." },
  { name: "Cochinita Pibil", origin: "Yucatán, Mexico", emoji: "🐷", tag: "TasteAtlas #12",
    why: "Pork marinated in sour orange and achiote, wrapped in banana leaves, and slow-roasted in a pit until it surrenders. A Maya technique older than Mexico itself, finished with pickled red onions. The #12 dish on Earth tastes like history you can shred with a fork." },
  { name: "Châteaubriand", origin: "France", emoji: "🥩", tag: "TasteAtlas #13",
    why: "The thick center cut of beef tenderloin, roasted whole and carved tableside, served with béarnaise. Named for a 19th-century French viscount, it is the old-school definition of fine dining — pure, buttery tenderness with zero distractions. France's steak royalty at #13." },
  { name: "Pernil", origin: "Puerto Rico", emoji: "🍖", tag: "TasteAtlas #14",
    why: "A whole pork shoulder marinated in garlic, pepper, and adobo, roasted low and slow until the skin becomes a sheet of crackling called cuerito. The centerpiece of Puerto Rican Christmas — and the reason the island's holiday season smells incredible. Ranked #14 in the world." },
  { name: "Unadon", origin: "Japan", emoji: "🍱", tag: "TasteAtlas #15",
    why: "Grilled freshwater eel glazed in sweet-savory tare, laid over steaming rice so the sauce seeps into every grain. Eel is grilled over charcoal in a technique refined over centuries. Rich, lacquered, and deeply umami — Japan's #15 dish is luxury in a lacquered box." },
  { name: "Païdakia", origin: "Greece", emoji: "🍖", tag: "TasteAtlas #16",
    why: "Grilled lamb chops — the rib cut Greeks call the tastiest part of the animal — seasoned with lemon, oregano, and olive oil over charcoal. Simple, smoky, and eaten with your hands at tavernas across Greece. Proof that three ingredients, done right, beat thirty." },
  { name: "Khao Soi", origin: "Chiang Mai, Thailand", emoji: "🍜", tag: "TasteAtlas #17",
    why: "A coconut-curry noodle soup crowned with a tangle of crispy fried noodles for crunch. Rich, fragrant, and finished with pickled mustard greens, lime, and chili oil at the table. Northern Thailand's signature bowl — two textures of noodle in one dish — ranked #17 on Earth." },
  { name: "Amêijoas à Bulhão Pato", origin: "Portugal", emoji: "🦪", tag: "TasteAtlas #18",
    why: "Clams steamed open in white wine with mountains of garlic and fresh coriander, mopped up with crusty bread. Named for a 19th-century Portuguese poet, it is the Algarve's essential appetizer — briny, garlicky, and gone in minutes. Portugal's seafood soul at #18." },
  { name: "Mechouia Salad", origin: "Tunisia", emoji: "🥗", tag: "TasteAtlas #19",
    why: "Peppers and tomatoes charred directly over flame until blackened, then chopped with garlic, olive oil, and sometimes tuna and egg. Smoky, sweet, and bright all at once — Tunisia's grilled salad turns humble vegetables into something voters ranked #19 in the world." },
  { name: "Chakhchoukha", origin: "Algeria", emoji: "🥘", tag: "TasteAtlas #20",
    why: "Torn pieces of flatbread simmered in a spicy tomato-and-meat stew until they drink up every drop. A resourceful desert dish that wastes nothing and tastes like everything — Algeria's second entry in the global top 20, and a masterclass in turning bread into the main event." },
  { name: "Cordero Asado", origin: "Castile, Spain", emoji: "🐑", tag: "TasteAtlas #21",
    why: "Milk-fed lamb roasted in a wood-fired clay oven with nothing but water and salt until the meat collapses and the skin crisps. In Segovia it is carved with the edge of a plate to prove its tenderness. Spain's roast-lamb tradition, ranked #21 in the world." },
  { name: "Weihnachtsgans", origin: "Germany", emoji: "🪿", tag: "TasteAtlas #22",
    why: "The Christmas roast goose: crisp golden skin, rich dark meat, served with red cabbage, dumplings, and chestnut stuffing. Germans have roasted it for the holidays since the Middle Ages. One meal a year — but voters say it is worth the wait, ranking it #22 globally." },
  { name: "Pempek", origin: "Palembang, Indonesia", emoji: "🐟", tag: "TasteAtlas #23",
    why: "Fish and tapioca cakes — boiled, then fried — served in a dark, sour-spicy cuko sauce of palm sugar, tamarind, and chili. Palembang's 400-year-old street food is chewy, tangy, and fiery. Indonesia's snack game, ranked #23 on the planet." },
  { name: "Tagliatelle al Ragù", origin: "Bologna, Italy", emoji: "🍝", tag: "TasteAtlas #24",
    why: "The real 'Bolognese': wide ribbons of egg pasta tossed with a slow-simmered ragù of beef, pork, soffritto, wine, and milk — no spaghetti in sight. Bologna's chamber of commerce literally registered the official recipe. Italy's pasta canon, ranked #24." },
  { name: "Tonkotsu Ramen", origin: "Fukuoka, Japan", emoji: "🍥", tag: "TasteAtlas #25",
    why: "Pork bones boiled at a rolling boil for 12–18 hours until the broth turns milky-white and collagen-thick, paired with thin noodles, chashu, and black garlic oil. Born in Fukuoka's yatai stalls, it is the richest bowl in ramen culture — #25 in the world." },
  { name: "İskender Kebap", origin: "Bursa, Turkey", emoji: "🥙", tag: "TasteAtlas #26",
    why: "Invented in 1867 by İskender Efendi: thin döner slices laid over buttered pita, flooded with tomato sauce, and finished with sizzling browned butter and cool yogurt. Hot, cold, crispy, creamy in every bite — Turkey's 19th-century invention still ranks #26 globally." },
  { name: "Pappardelle al Cinghiale", origin: "Tuscany, Italy", emoji: "🍝", tag: "TasteAtlas #27",
    why: "Wide pappardelle ribbons in a slow-braised wild boar ragù with juniper, red wine, and rosemary. Tuscany's hunters turned game meat into the most rustic, soulful pasta sauce in Italy. Deep, dark, and ranked #27 on Earth." },
  { name: "Kuzu Şiş", origin: "Turkey", emoji: "🍢", tag: "TasteAtlas #28",
    why: "Cubes of lamb marinated in onion, milk, and spices, grilled over charcoal until charred outside and pink inside. Served with sumac onions and flatbread, it is the skewer all other skewers are measured against — #28 in the world." },
  { name: "Murgh Makhani (Butter Chicken)", origin: "Delhi, India", emoji: "🍗", tag: "TasteAtlas #29",
    why: "Invented in 1950s Delhi at Moti Mahal: tandoor-charred chicken folded into a silky tomato-butter-fenugreek sauce. The dish that introduced Indian food to the planet, and still the gateway curry for millions. Ranked #29 among all dishes in the world." },
  { name: "Hyderabadi Biryani", origin: "Hyderabad, India", emoji: "🍚", tag: "TasteAtlas #31",
    why: "Raw marinated meat layered with fragrant basmati, sealed with dough, and steam-cooked (dum) so every grain absorbs saffron, fried onions, and mint. The Nizams' royal kitchens created it; Hyderabad's biryani houses perfected it. India's celebration rice, ranked #31 globally." },
];

const WORST = [
  { name: "Pizza Vulkanen", origin: "Piteå, Sweden", emoji: "🌋", tag: "TasteAtlas worst #1 · 1.6/5",
    why: "The lowest-rated food on Earth: 1.6 out of 5 from nearly half a million legitimate TasteAtlas ratings. A ring-shaped pizza stuffed with cheese, ham, salami, bacon, and beef tenderloin, with french fries and Béarnaise salad erupting from the center. Maximum chaos, minimum restraint — voters found it grotesque, not fun." },
  { name: "Svið", origin: "Iceland", emoji: "🐑", tag: "TasteAtlas worst #2 · 1.7/5",
    why: "A singed, halved sheep's head — cooked with the face staring back at you. Born from an era when no part of the animal could be wasted, served at the midwinter Þorrablót festival with mashed turnips. Locals insist it is tasty; the rest of the world could not get past looking dinner in the eye." },
  { name: "Thorramatur", origin: "Iceland", emoji: "🦈", tag: "TasteAtlas worst #3 · 1.8/5",
    why: "A full buffet platter of Iceland's most challenging foods — fermented shark, blood sausages, seared lamb head, smoked lamb — eaten during the month of Þorri. Less a dish than a survival gauntlet of preservation-era flavors. Voters punished it into the #3 worst spot on the planet." },
  { name: "Truchas a la Navarra", origin: "Navarre, Spain", emoji: "🐟", tag: "TasteAtlas worst #4",
    why: "Trout stuffed with cured ham sounds reasonable until the execution: river fish wrapped around salty pork creates a muddy, confused flavor satisfying neither craving. TasteAtlas voters ranked it the 4th worst food in the world — proof that two good things do not always make one." },
  { name: "Blodpalt", origin: "Norrland, Sweden", emoji: "🩸", tag: "TasteAtlas worst #5",
    why: "Dumplings of reindeer blood, barley flour, and diced pork, boiled and served with lingonberries. A historic survival food of the far north, but the metallic, iron-heavy flavor and near-black appearance make it a hard sell for anyone who did not grow up with it." },
  { name: "Kugel Yerushalmi", origin: "Jerusalem, Israel", emoji: "🍝", tag: "TasteAtlas worst #6",
    why: "A baked noodle pudding that is simultaneously sweet (caramelized sugar) and aggressively peppery — a combination most palates read as a mistake. Beloved in Jerusalem's ultra-Orthodox community as Sabbath food, but outsiders rate it among the most confusing things they have ever tasted." },
  { name: "Blodplättar", origin: "Sweden", emoji: "🥞", tag: "TasteAtlas worst #7",
    why: "Pancakes made with pig or reindeer blood, onions, and spices, fried and served with lingonberry jam. Once everyday food across the Nordics, the iron-rich metallic taste now reads as shocking to modern eaters. Blood dishes sit near the very bottom of the rankings year after year." },
  { name: "Milcao", origin: "Chiloé, Chile", emoji: "🥔", tag: "TasteAtlas worst #8",
    why: "A dense potato bread from Chile's Chiloé archipelago — grated raw and cooked potatoes fried into heavy cakes. Filling peasant fuel, but its gluey, leaden texture and plainness leave first-timers wondering what the point was." },
  { name: "Hon Mhai (Fried Silkworms)", origin: "Thailand", emoji: "🐛", tag: "TasteAtlas worst #9",
    why: "Silkworm pupae deep-fried with salt and pepper — a protein-rich Isaan snack. The problem is the pop: a soft, pulpy interior that bursts in the mouth. Even adventurous eaters who happily crunch crickets often draw the line at the texture of these." },
  { name: "Chapalele", origin: "Chiloé, Chile", emoji: "🍞", tag: "TasteAtlas worst #10",
    why: "Another Chiloé staple: boiled dumplings of potato and wheat flour, sometimes sweetened. Soft, pale, and starchy to the point of vanishing — voters found it the definition of forgettable, a dish that tastes like the absence of flavor." },
  { name: "Jellied Eels", origin: "London, England", emoji: "🐍", tag: "TasteAtlas worst #11",
    why: "Chopped eels boiled in spiced stock that sets into a natural jelly — working-class London street food since the 1700s. The flavor is mild; the texture of cold, wobbling fish jelly is what ends careers. Even most Londoners under 50 have never willingly eaten it." },
  { name: "Aginares Salata", origin: "Crete, Greece", emoji: "🌿", tag: "TasteAtlas worst #12",
    why: "A cold artichoke salad that voters found bland, mushy, and relentlessly fibrous. Crete's cuisine is world-famous, which made this entry sting — even great food cultures produce a dish the world collectively shrugs at." },
  { name: "Ambuyat", origin: "Brunei", emoji: "🫠", tag: "TasteAtlas worst #13",
    why: "Sago palm starch stirred with boiling water into a translucent, glue-like blob, twirled onto a bamboo fork. It has almost no flavor of its own — the entire experience is texture, and the texture is wallpaper paste. Brunei's national dish is a dare disguised as dinner." },
  { name: "Nervetti", origin: "Milan, Italy", emoji: "🦴", tag: "TasteAtlas worst #14",
    why: "Calf's foot tendons, boiled, sliced, and served cold as a salad with beans and onions. Gelatinous, wobbly, and unapologetically odd — even in Italy, land of fearless eating, nervetti is a niche passion. Milan's contribution to the world's worst list." },
  { name: "Ramen Burger", origin: "New York City, USA", emoji: "🍔", tag: "TasteAtlas worst #15",
    why: "A 2013 Brooklyn invention: a beef patty sandwiched between two 'buns' of fried ramen noodles. The gimmick broke the internet for a week; the reality is a greasy, falling-apart mess worse than both a burger and a bowl of ramen. Novelty is not flavor." },
  { name: "Żymlok", origin: "Silesia, Poland", emoji: "🌭", tag: "TasteAtlas worst #16",
    why: "A Silesian blood sausage of pork blood, groats, and offal, dense and dark as coal. Poland's cuisine ranks among the world's best overall — which makes its blood sausage's place at #16 on the worst list a reminder that every food culture has its divisive corner." },
  { name: "Kichel", origin: "Israel", emoji: "🍪", tag: "TasteAtlas worst #17",
    why: "A sweet, dry, bow-tie-shaped cracker-cookie from Ashkenazi baking tradition. Inoffensive is the problem: voters found it stale-tasting and pointless, the rare baked good that made a worst-foods list purely by being aggressively forgettable." },
  { name: "Tortilla Paisana", origin: "Spain", emoji: "🍳", tag: "TasteAtlas worst #18",
    why: "Spain's beloved tortilla formula gone wrong: a peasant omelette overloaded with vegetables until it turns soggy and muddled. Next to the perfect tortilla española, this version tastes like a cautionary tale — and voters ranked it #18 worst in the world." },
  { name: "Heusuppe", origin: "Switzerland", emoji: "🌾", tag: "TasteAtlas worst #19",
    why: "Hay soup. Literally broth infused with mountain hay, a novelty from the Swiss Alps. It tastes the way a barn smells — which is exactly the problem. Even adventurous diners filed it under 'tried once,' landing it at #19 worst on Earth." },
  { name: "Kaeng Tai Pla", origin: "Southern Thailand", emoji: "🐟", tag: "TasteAtlas worst #20",
    why: "A dense curry built on fermented fish entrails blended with fierce chili paste, galangal, and shrimp paste. Southern Thailand's most pungent dish was once crowned the single worst dish in the world by TasteAtlas. Fermentation fans call it complex; everyone else calls it a biohazard." },
  { name: "Surströmming", origin: "Sweden", emoji: "🐟", tag: "Smell hazard",
    why: "Fermented Baltic herring canned while still fermenting, so tins bulge and spray on opening — always opened outdoors, by law of common sense. Studies rank it among the smelliest foods on the planet. The taste is milder than the smell, but nobody gets past the smell." },
  { name: "Hákarl", origin: "Iceland", emoji: "🦈", tag: "Ammonia cubes",
    why: "Greenland shark is poisonous when fresh, so Icelanders ferment it for months and hang it to dry — producing cubes that reek of ammonia. Anthony Bourdain called it the single worst thing he ever ate. A Viking-era food-safety solution that never got repealed." },
  { name: "Balut", origin: "Philippines", emoji: "🥚", tag: "Fear factor",
    why: "A fertilized duck egg, boiled and eaten whole from the shell — veins, beak, and all. Beloved in the Philippines as beer food and a stamina snack, but the texture surprise ruins most first-timers. The dish that launched a thousand reality-TV dares." },
  { name: "Casu Marzu", origin: "Sardinia, Italy", emoji: "🧀", tag: "Legally banned",
    why: "Pecorino aged until it hosts live cheese-fly larvae — yes, live — which digest the fats into a soft, pungent paste. Banned by the EU, sold on Sardinia's black market. The larvae can jump 15 cm when disturbed. Cheese was not supposed to move." },
  { name: "Fesikh", origin: "Egypt", emoji: "🐟", tag: "Salted mullet",
    why: "Grey mullet fermented in salt for weeks, eaten whole at Egypt's spring festival Sham El Nessim — a 5,000-year-old tradition. When prepared badly it can harbor botulism, so the government issues annual warnings. Ancient, risky, and intensely fishy." },
  { name: "Smalahove", origin: "Norway", emoji: "🐑", tag: "Sheep's head",
    why: "Norway's answer to svið: a singed sheep's head, split and served with mashed rutabaga — traditionally eaten with the eyes and ears first. A pre-Christmas delicacy in western Norway that most of the world files under 'absolutely not.'" },
  { name: "Calskrove", origin: "Skellefteå, Sweden", emoji: "🍕", tag: "Burger calzone",
    why: "A calzone stuffed with french fries and entire hamburgers — buns and all — invented at a Swedish pizzeria. It sounds like an American fever dream but it is Swedish, and it has repeatedly landed on worst-food lists. Two fast foods entered; no dignity left." },
  { name: "Luther Burger", origin: "Georgia, USA", emoji: "🍩", tag: "Donut burger",
    why: "A bacon cheeseburger served on a glazed donut instead of a bun — allegedly named for Luther Vandross. Sticky, collapsing, and a sugar bomb on top of a salt bomb. The American South's most chaotic contribution to the worst-foods conversation." },
  { name: "Pani ca Meusa", origin: "Palermo, Italy", emoji: "🥪", tag: "Spleen sandwich",
    why: "A soft roll stuffed with sliced veal spleen and lung, boiled then fried in lard, splashed with lemon. Palermo's beloved street food has fed workers for centuries — and horrified everyone else. Offal loyalty at its most extreme." },
  { name: "Frog Eye Salad", origin: "Utah, USA", emoji: "🐸", tag: "TasteAtlas worst #22 (2025)",
    why: "Acini di pepe pasta — the tiny 'frog eye' pearls — folded into whipped topping with canned fruit and marshmallows, served as a 'salad' at Mormon potlucks. Pasta for dessert is where many draw the line. Ranked #22 worst in the world in 2025." },
];

function medal(i) {
  return i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}`;
}

function render(list, gridId, kind, query) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = "";
  const q = (query || "").toLowerCase().trim();
  let shown = 0;
  list.forEach((f, i) => {
    if (q && !(f.name + " " + f.origin + " " + f.why).toLowerCase().includes(q)) return;
    shown++;
    const card = document.createElement("article");
    card.className = `card ${kind}` + (i < 3 ? " top3" : "");
    card.innerHTML = `
      <div class="rank">${medal(i)}</div>
      <div class="emoji">${f.emoji}</div>
      <h3>${f.name}</h3>
      <div class="origin">${f.origin}</div>
      <div class="why"><strong>Why it ranks here:</strong> ${f.why}</div>
      <span class="tag">${f.tag}</span>`;
    grid.appendChild(card);
  });
  const empty = document.getElementById(kind + "Empty");
  if (empty) empty.style.display = shown ? "none" : "block";
}

function renderAll() {
  const q = document.getElementById("search").value;
  render(BEST, "bestGrid", "best", q);
  render(WORST, "worstGrid", "worst", q);
}

renderAll();

document.getElementById("search").addEventListener("input", renderAll);

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".board").forEach(b => b.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
