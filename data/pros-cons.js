// Pros and cons for the TOP 25 BEST and TOP 25 WORST foods.
// Every statement is grounded ONLY in each entry's `definition` + `research` text
// from data/foods.js. Keys must match food names verbatim.
const PROS_CONS = {
 "Lechona": {
  pros: [
   "The actual #1 dish in the world on TasteAtlas's 2025 list of 100 best dishes.",
   "Colombia's celebration centerpiece — served at weddings and festivals, with crackling skin and meat that falls apart."
  ],
  cons: [
   "A whole pig roasted for hours — a massive time and effort commitment, not an everyday meal.",
   "Very rich: crackling skin and slow-roasted pork make it a heavy celebration dish."
  ]
 },
 "Pizza Napoletana": {
  pros: [
   "Ranked #2 in the world, and the art of the Neapolitan pizzaiolo is UNESCO intangible heritage.",
   "A formula from 1889 — leopard-spotted crust from a 450°C wood oven, San Marzano tomatoes, fior di latte, basil — the benchmark every pizza is judged against."
  ],
  cons: [
   "Authenticity demands a 450°C wood-fired oven, which is hard to replicate at home.",
   "The minimalist formula leaves no room to hide — quality lives or dies on technique and ingredients."
  ]
 },
 "Picanha": {
  pros: [
   "The crown of Brazilian churrasco and the #3 dish on the planet.",
   "Seasoned with nothing but coarse salt and grilled over charcoal — juicy, beefy, and elemental."
  ],
  cons: [
   "The thick fat cap makes it a rich, fatty cut.",
   "Elemental preparation is unforgiving — with only salt and fire, a mediocre cut has nowhere to hide."
  ]
 },
 "Rechta": {
  pros: [
   "Beat nearly every famous dish in Europe and Asia to land at #4 in the world.",
   "Algeria's celebratory dish — traditionally made for Eid and weddings; comfort food with ceremony."
  ],
  cons: [
   "Hand-rolled, hand-cut artisanal noodles are labor-intensive to make.",
   "Hearty comfort food served in a meat broth — rich and filling, not a light meal."
  ]
 },
 "Phanaeng Curry": {
  pros: [
   "Ranked #5 on Earth — Thailand's curry masterpiece.",
   "Balances sweet, salty, and heat in a single spoonful, with coconut cream, peanuts, makrut lime, and chilies."
  ],
  cons: [
   "Drier and more intense than other Thai curries — the heat is not for mild palates.",
   "Thick, rich red curry simmered down with coconut cream — heavy and indulgent."
  ]
 },
 "Asado": {
  pros: [
   "The #6 dish in the world — and not just a dish but a ritual: Argentina turned grilling into a national philosophy.",
   "The smoke, the patience, the gathering of family around the parrilla — a communal event."
  ],
  cons: [
   "Often takes an entire afternoon of slow-cooking over wood or charcoal.",
   "Beef, pork, chorizo, and morcilla — an unapologetically meat-heavy meal."
  ]
 },
 "Çökertme Kebabı": {
  pros: [
   "Ranked #7 globally — Turkey's most complete plate.",
   "Hits every craving at once — crispy, creamy, meaty, tangy — named after a Bodrum folk song."
  ],
  cons: [
   "Drowned in garlic yogurt and sizzling tomato-butter sauce over fried potatoes — a rich, heavy plate.",
   "Multiple indulgent layers (fried potatoes, yogurt, butter sauce) make it decadent rather than balanced."
  ]
 },
 "Rawon": {
  pros: [
   "The #8 dish in the world — Indonesia's dark horse.",
   "Keluak nuts give a deep, earthy, almost chocolate-like depth you will not find in any other broth."
  ],
  cons: [
   "Nearly black broth is mysterious-looking and can unsettle first-timers.",
   "Keluak nuts are an unusual ingredient, so the authentic flavor is hard to find outside Indonesia."
  ]
 },
 "Cağ Kebabı": {
  pros: [
   "Ranked #9 in 2025 and climbed to #5 best dish in the world for 2026 — the kebab that outranks all kebabs.",
   "Sheep raised on wild mountain herbs flavor the meat from the inside out."
  ],
  cons: [
   "Stacked with tail fat — rich and fatty.",
   "Roasted horizontally over open wood fire in Turkey's high-altitude east — hard to find an authentic version elsewhere."
  ]
 },
 "Tibs": {
  pros: [
   "A top-10 dish that turns dinner into a shared event — eaten communally.",
   "Fiery and buttery: chopped beef or lamb seared at ferocious heat with berbere, garlic, and spiced clarified butter, served sizzling on injera."
  ],
  cons: [
   "Fiery berbere spice brings serious heat.",
   "Seared in spiced clarified butter — rich and indulgent."
  ]
 },
 "Biang Biang Noodles": {
  pros: [
   "Ranked #11 in the world — China's noodle theater.",
   "Belt-wide hand-pulled noodles, slapped and stretched to order, hit with searing-hot chili oil over garlic and vinegar — chewy, spicy, dramatic."
  ],
  cons: [
   "Searing-hot chili oil makes it very spicy.",
   "Hand-pulled to order — labor-intensive and best eaten immediately."
  ]
 },
 "Cochinita Pibil": {
  pros: [
   "The #12 dish on Earth — tastes like history you can shred with a fork.",
   "A Maya technique older than Mexico itself: pork marinated in sour orange and achiote, wrapped in banana leaves, slow-roasted in a pit."
  ],
  cons: [
   "Slow-roasted in a pit until it surrenders — hours of cooking time.",
   "Rich roasted pork — a heavy, indulgent dish."
  ]
 },
 "Châteaubriand": {
  pros: [
   "France's steak royalty at #13 — the old-school definition of fine dining.",
   "Pure, buttery tenderness with zero distractions: thick center-cut tenderloin roasted whole, carved tableside, served with béarnaise."
  ],
  cons: [
   "The center cut of beef tenderloin is one of the priciest cuts you can buy.",
   "Formal and old-school — carved tableside, not a casual meal."
  ]
 },
 "Pernil": {
  pros: [
   "Ranked #14 in the world — the centerpiece of Puerto Rican Christmas.",
   "The reason the island's holiday season smells incredible: whole pork shoulder roasted low and slow until the skin becomes crackling cuerito."
  ],
  cons: [
   "A whole pork shoulder roasted low and slow takes hours.",
   "Crackling skin and marbled roast pork make it a very rich dish."
  ]
 },
 "Unadon": {
  pros: [
   "Japan's #15 dish — luxury in a lacquered box.",
   "Grilled freshwater eel glazed in sweet-savory tare over steaming rice — rich, lacquered, and deeply umami."
  ],
  cons: [
   "Rich, lacquered, glazed eel — decadent and heavy.",
   "Grilled over charcoal in a technique refined over centuries — demanding to get right."
  ]
 },
 "Païdakia": {
  pros: [
   "The rib cut Greeks call the tastiest part of the animal, seasoned with lemon, oregano, and olive oil over charcoal.",
   "Proof that three ingredients, done right, beat thirty — simple and smoky."
  ],
  cons: [
   "With only three ingredients, there is no margin for error — everything depends on the lamb and the charcoal fire.",
   "Eaten with your hands at tavernas — messy and casual, not refined dining."
  ]
 },
 "Khao Soi": {
  pros: [
   "Ranked #17 on Earth — Northern Thailand's signature bowl.",
   "Two textures of noodle in one dish: coconut-curry noodle soup crowned with a tangle of crispy fried noodles."
  ],
  cons: [
   "Rich, fragrant coconut-curry — a rich, filling bowl.",
   "Finished at the table with pickled mustard greens, lime, and chili oil — many components to assemble."
  ]
 },
 "Amêijoas à Bulhão Pato": {
  pros: [
   "Portugal's seafood soul at #18 — the Algarve's essential appetizer.",
   "Clams steamed open in white wine with mountains of garlic and fresh coriander — briny, garlicky, and gone in minutes."
  ],
  cons: [
   "It is an appetizer — small plates, gone in minutes, not a full meal.",
   "Mountains of garlic — not for the garlic-shy."
  ]
 },
 "Mechouia Salad": {
  pros: [
   "Ranked #19 in the world — Tunisia's grilled salad turns humble vegetables into something special.",
   "Peppers and tomatoes charred directly over flame — smoky, sweet, and bright all at once."
  ],
  cons: [
   "Charred, chopped vegetables give a soft texture — not a crisp salad.",
   "Versions with tuna and egg are not vegetarian-friendly."
  ]
 },
 "Chakhchoukha": {
  pros: [
   "Algeria's second entry in the global top 20 — a masterclass in turning bread into the main event.",
   "A resourceful desert dish that wastes nothing and tastes like everything: torn flatbread simmered in spicy tomato-and-meat stew."
  ],
  cons: [
   "Bread simmered until it drinks up the broth — a soft, porridge-like texture.",
   "Bread-heavy and carb-dense by design."
  ]
 },
 "Cordero Asado": {
  pros: [
   "Ranked #21 in the world — Spain's roast-lamb tradition.",
   "So tender it is carved with the edge of a plate in Segovia; milk-fed lamb roasted in a wood-fired clay oven with nothing but water and salt."
  ],
  cons: [
   "Requires a wood-fired clay oven — hard to replicate at home.",
   "Purist simplicity (water and salt only) leaves no margin for error."
  ]
 },
 "Weihnachtsgans": {
  pros: [
   "Ranked #22 globally — voters say it is worth the wait.",
   "Germans have roasted the Christmas goose since the Middle Ages: crisp golden skin, rich dark meat, red cabbage, dumplings, and chestnut stuffing."
  ],
  cons: [
   "One meal a year — rarely available outside the holidays.",
   "Rich dark goose meat with crisp skin — a heavy, fatty roast."
  ]
 },
 "Pempek": {
  pros: [
   "Ranked #23 on the planet — Palembang's 400-year-old street food.",
   "Chewy, tangy, and fiery: fish-and-tapioca cakes in a dark, sour-spicy cuko sauce of palm sugar, tamarind, and chili."
  ],
  cons: [
   "The sour-spicy cuko sauce is tangy and fiery — intense for mild palates.",
   "Chewy fish-and-tapioca texture is polarizing for first-timers."
  ]
 },
 "Tagliatelle al Ragù": {
  pros: [
   "Ranked #24 — the real Bolognese, and Italy's pasta canon.",
   "Bologna's chamber of commerce literally registered the official recipe: slow-simmered ragù of beef, pork, soffritto, wine, and milk."
  ],
  cons: [
   "Slow-simmered ragù takes hours to prepare properly.",
   "Rich meat ragù with beef, pork, and milk — hearty, not light."
  ]
 },
 "Tonkotsu Ramen": {
  pros: [
   "The #25 dish in the world — the richest bowl in ramen culture.",
   "Pork bones boiled 12–18 hours until the broth turns milky-white and collagen-thick, with thin noodles, chashu, and black garlic oil."
  ],
  cons: [
   "The broth demands 12–18 hours of rolling boil — an enormous time investment.",
   "The richest bowl in ramen culture — extremely rich and heavy."
  ]
 },
 "Pizza Vulkanen": {
  pros: [
   "An ambitious maximalist concept: a cheese-stuffed ring loaded with ham, salami, bacon, and beef tenderloin.",
   "Theatrically presented, with french fries and Béarnaise salad erupting from the center."
  ],
  cons: [
   "The lowest-rated food on Earth: 1.6 out of 5 from nearly half a million legitimate ratings.",
   "Maximum chaos, minimum restraint — voters found it grotesque, not fun."
  ]
 },
 "Svið": {
  pros: [
   "Born from an era when no part of the animal could be wasted — a zero-waste tradition.",
   "Locals insist it is tasty, and it is served at the midwinter Þorrablót festival with mashed turnips."
  ],
  cons: [
   "A singed, halved sheep's head — cooked with the face staring back at you.",
   "The rest of the world could not get past looking dinner in the eye."
  ]
 },
 "Thorramatur": {
  pros: [
   "A full buffet platter of Iceland's preservation-era foods — a historic survival tradition.",
   "Offers variety: fermented shark, blood sausages, seared lamb head, and smoked lamb in one Þorri-month spread."
  ],
  cons: [
   "Voters punished it into the #3 worst spot on the planet.",
   "Less a dish than a survival gauntlet of challenging preservation-era flavors."
  ]
 },
 "Truchas a la Navarra": {
  pros: [
   "Built from two good ingredients — river trout and cured ham — that sound reasonable together.",
   "A traditional Navarrese preparation of local river fish."
  ],
  cons: [
   "River fish wrapped around salty pork creates a muddy, confused flavor satisfying neither craving.",
   "Ranked the 4th worst food in the world — proof that two good things do not always make one."
  ]
 },
 "Blodpalt": {
  pros: [
   "A historic survival food of the far north, born of necessity.",
   "Served with lingonberries — a classic Nordic pairing."
  ],
  cons: [
   "The metallic, iron-heavy flavor of reindeer blood is a hard sell.",
   "Near-black dumplings of blood and barley look unappetizing to anyone who did not grow up with them."
  ]
 },
 "Kugel Yerushalmi": {
  pros: [
   "Beloved in Jerusalem's ultra-Orthodox community as Sabbath food — a cherished tradition.",
   "A distinctive baked noodle pudding with caramelized sugar."
  ],
  cons: [
   "Simultaneously sweet and aggressively peppery — a combination most palates read as a mistake.",
   "Outsiders rate it among the most confusing things they have ever tasted."
  ]
 },
 "Blodplättar": {
  pros: [
   "Once everyday food across the Nordics — a historic staple.",
   "Fried and served with lingonberry jam, a classic pairing."
  ],
  cons: [
   "The iron-rich metallic taste of pig or reindeer blood now reads as shocking to modern eaters.",
   "Blood dishes sit near the very bottom of the rankings year after year."
  ]
 },
 "Milcao": {
  pros: [
   "Filling peasant fuel from Chile's Chiloé archipelago — a hearty traditional food.",
   "Made from simple, humble ingredients: grated raw and cooked potatoes."
  ],
  cons: [
   "Gluey, leaden texture — dense, heavy potato cakes.",
   "Its plainness leaves first-timers wondering what the point was."
  ]
 },
 "Hon Mhai (Fried Silkworms)": {
  pros: [
   "A protein-rich Isaan snack — nutritious street food.",
   "Simply deep-fried with salt and pepper."
  ],
  cons: [
   "A soft, pulpy interior that bursts in the mouth — the texture is the problem.",
   "Even adventurous eaters who happily crunch crickets often draw the line at these."
  ]
 },
 "Chapalele": {
  pros: [
   "A traditional Chiloé staple — humble boiled dumplings of potato and wheat flour.",
   "Sometimes sweetened, giving it a bit of versatility."
  ],
  cons: [
   "Voters found it the definition of forgettable — a dish that tastes like the absence of flavor.",
   "Soft, pale, and starchy to the point of vanishing."
  ]
 },
 "Jellied Eels": {
  pros: [
   "Working-class London street food since the 1700s — a historic tradition.",
   "The flavor itself is mild — chopped eels boiled in spiced stock."
  ],
  cons: [
   "The texture of cold, wobbling fish jelly is what ends careers.",
   "Even most Londoners under 50 have never willingly eaten it."
  ]
 },
 "Aginares Salata": {
  pros: [
   "Comes from Crete, whose cuisine is world-famous.",
   "A simple cold salad of a classic Mediterranean ingredient — artichokes."
  ],
  cons: [
   "Voters found it bland, mushy, and relentlessly fibrous.",
   "Even great food cultures produce a dish the world collectively shrugs at."
  ]
 },
 "Ambuyat": {
  pros: [
   "Brunei's national dish — a point of cultural pride.",
   "A unique preparation: sago palm starch twirled onto a bamboo fork."
  ],
  cons: [
   "It has almost no flavor of its own — the entire experience is texture.",
   "And the texture is wallpaper paste — a dare disguised as dinner."
  ]
 },
 "Nervetti": {
  pros: [
   "A niche passion in Milan — a fearless-eating tradition.",
   "Served as a salad with beans and onions — a distinctive cold dish."
  ],
  cons: [
   "Calf's foot tendons, boiled and served cold — gelatinous, wobbly, and unapologetically odd.",
   "Even in Italy, land of fearless eating, it is a niche passion."
  ]
 },
 "Ramen Burger": {
  pros: [
   "A 2013 Brooklyn invention whose gimmick broke the internet for a week — viral novelty.",
   "An inventive concept: a beef patty between two buns of fried ramen noodles."
  ],
  cons: [
   "The reality is a greasy, falling-apart mess.",
   "Worse than both a burger and a bowl of ramen — novelty is not flavor."
  ]
 },
 "Żymlok": {
  pros: [
   "A traditional Silesian blood sausage — part of Poland's food heritage.",
   "Hearty and dense — substantial peasant food."
  ],
  cons: [
   "Pork blood, groats, and offal — dense and dark as coal.",
   "A reminder that every food culture has its divisive corner: #16 on the worst list."
  ]
 },
 "Kichel": {
  pros: [
   "A sweet, bow-tie-shaped cracker-cookie from Ashkenazi baking tradition.",
   "Inoffensive and simple — a traditional teatime-style bite."
  ],
  cons: [
   "Voters found it stale-tasting and pointless.",
   "Aggressively forgettable — the rare baked good on a worst-foods list."
  ]
 },
 "Tortilla Paisana": {
  pros: [
   "Built on Spain's beloved tortilla formula — a peasant potato omelette.",
   "Loaded with mixed vegetables — hearty and rustic in concept."
  ],
  cons: [
   "Overloaded with vegetables until it turns soggy and muddled.",
   "Next to the perfect tortilla española, it tastes like a cautionary tale — ranked #18 worst in the world."
  ]
 },
 "Heusuppe": {
  pros: [
   "A novelty from the Swiss Alps — mountain hay broth, a unique concept.",
   "A traditional Alpine curiosity worth trying once."
  ],
  cons: [
   "It tastes the way a barn smells — which is exactly the problem.",
   "Even adventurous diners filed it under tried once — #19 worst on Earth."
  ]
 },
 "Kaeng Tai Pla": {
  pros: [
   "Fermentation fans call it complex — a dense Southern Thai curry of fermented fish entrails, chili paste, galangal, and shrimp paste.",
   "Southern Thailand's most pungent dish — bold and uncompromising."
  ],
  cons: [
   "Once crowned the single worst dish in the world by TasteAtlas.",
   "Everyone else calls it a biohazard — fermented fish entrails are an extreme proposition."
  ]
 },
 "Surströmming": {
  pros: [
   "The taste is milder than the smell — fermented Baltic herring with a devoted following.",
   "A traditional Swedish preservation method."
  ],
  cons: [
   "Studies rank it among the smelliest foods on the planet.",
   "Tins bulge and spray on opening — always opened outdoors — and nobody gets past the smell."
  ]
 },
 "Hákarl": {
  pros: [
   "A Viking-era food-safety solution that made poisonous Greenland shark edible — historic ingenuity.",
   "An Icelandic tradition: fermented for months and hung to dry."
  ],
  cons: [
   "The cubes reek of ammonia.",
   "Anthony Bourdain called it the single worst thing he ever ate."
  ]
 },
 "Balut": {
  pros: [
   "Beloved in the Philippines as beer food and a stamina snack.",
   "A nutrient-dense traditional street food."
  ],
  cons: [
   "A fertilized duck egg eaten whole — veins, beak, and all.",
   "The texture surprise ruins most first-timers — the dish that launched a thousand reality-TV dares."
  ]
 },
 "Casu Marzu": {
  pros: [
   "A Sardinian pecorino tradition where cheese-fly larvae digest the fats into a soft, pungent paste — a unique transformation.",
   "Prized enough to be sold on Sardinia's black market despite the EU ban."
  ],
  cons: [
   "Banned by the EU — it hosts live cheese-fly larvae.",
   "The larvae can jump 15 cm when disturbed — cheese was not supposed to move."
  ]
 },
 "Fesikh": {
  pros: [
   "A 5,000-year-old tradition — grey mullet fermented in salt for weeks.",
   "Eaten whole at Egypt's spring festival Sham El Nessim — a centerpiece of celebration."
  ],
  cons: [
   "When prepared badly it can harbor botulism, so the government issues annual warnings.",
   "Ancient, risky, and intensely fishy."
  ]
 }
};

/* Expose on window for consistency. */
window.PROS_CONS = PROS_CONS;
