/* food-details.js — deep detail entries for the 200 ranked foods
 * (Top 100 Best + Top 100 Worst). Generated 2026-09-26.
 *
 * Schema: window.FOOD_DETAILS = {
 *   "<exact food name>": {
 *     history, ingredients[], preparation, flavor, texture,
 *     similar[] (exact names from FOODS), variations[],
 *     nutrition { serving, calories, protein, carbs, fat, note: "approximate" },
 *     pronunciation, photo (verified Wikimedia Commons URL, or null)
 *   }, ...
 * }
 * Keys match data/foods.js `name` strings character-for-character.
 * Nutrition values are approximate typical servings, never lab data.
 * Foods without an entry here still render a full page from base data
 * (see food.js). Loaded by food.html before food.js.
 */
window.FOOD_DETAILS = {
 "Amêijoas à Bulhão Pato": {
  "flavor": "Briny-sweet clams in a garlicky, winey broth lifted by fresh coriander and lemon.",
  "history": "Ameijoas a Bulhao Pato is a classic Portuguese clam dish named for the 19th-century poet Raimundo Antonio de Bulhao Pato. It is a staple of Lisbon's tascas, where the clams are steamed simply and mopped up with bread. It captures the Portuguese love of seafood cooked with restraint.",
  "ingredients": [
   "fresh clams",
   "garlic",
   "extra-virgin olive oil",
   "dry white wine",
   "fresh coriander",
   "lemon",
   "salt",
   "crusty bread"
  ],
  "nutrition": {
   "calories": 350,
   "carbs": 20,
   "fat": 14,
   "note": "approximate",
   "protein": 35,
   "serving": "1 portion (300 g)"
  },
  "preparation": "Clams are purged of sand, then steamed in olive oil, garlic, and white wine until they open. Fresh coriander is scattered over at the last moment. Served with lemon wedges and bread for the broth.",
  "pronunciation": "ah-MAY-zhwash ah bool-YOWN PAH-too",
  "similar": [
   "Spaghetti alle Vongole",
   "Gambas al Ajillo",
   "Bouillabaisse",
   "Cioppino"
  ],
  "texture": "Plump, tender clams in a light, brothy sauce made for sopping with bread.",
  "variations": [
   "with extra chili",
   "served over toasted bread",
   "with a splash of beer instead of wine"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Am%C3%AAijoas_%C3%A0_Bulh%C3%A3o_Pato.jpg/960px-Am%C3%AAijoas_%C3%A0_Bulh%C3%A3o_Pato.jpg"
 },
 "Asado": {
  "flavor": "Smoky, beefy, and elemental, with the clean savor of salt and fire, brightened by tangy chimichurri.",
  "history": "Asado is Argentina's iconic barbecue tradition, born from the cattle culture of the pampas and the gaucho way of life. Cooking large cuts slowly over wood embers became the country's defining social ritual. The asador tends the fire for hours while family and friends gather.",
  "ingredients": [
   "beef short ribs",
   "flank steak",
   "chorizo",
   "morcilla (blood sausage)",
   "pork",
   "coarse salt",
   "firewood or charcoal",
   "chimichurri"
  ],
  "nutrition": {
   "calories": 1100,
   "carbs": 5,
   "fat": 88,
   "note": "approximate",
   "protein": 70,
   "serving": "1 mixed plate (450 g)"
  },
  "preparation": "Meats are arranged on a parrilla grill over embers, cooked slowly and turned rarely. Different cuts go on at different times so everything finishes together. It is served communally, carved at the table, with chimichurri on the side.",
  "pronunciation": "ah-SAH-doh",
  "similar": [
   "Churrasco",
   "Texas Brisket",
   "Picanha",
   "Chivito",
   "Burnt Ends"
  ],
  "texture": "Crisp, charred exteriors giving way to juicy, tender meat with rendered fat.",
  "variations": [
   "asado de tira (short ribs)",
   "vacio (flank)",
   "asado with provoleta cheese"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Asado_a.jpg/960px-Asado_a.jpg"
 },
 "Biang Biang Noodles": {
  "flavor": "Wheaty and chewy with garlicky heat, black vinegar tang, and the tingle of Sichuan pepper.",
  "history": "Biang biang noodles are the famous wide, hand-pulled noodles of Shaanxi province in northwestern China. The name is said to mimic the slap of dough against the counter as the noodles are stretched. They are a beloved street food of Xi'an, the province's capital.",
  "ingredients": [
   "wheat flour",
   "water",
   "salt",
   "garlic",
   "black vinegar",
   "soy sauce",
   "chili flakes",
   "Sichuan peppercorn",
   "bok choy",
   "scallions",
   "hot oil"
  ],
  "nutrition": {
   "calories": 600,
   "carbs": 95,
   "fat": 16,
   "note": "approximate",
   "protein": 18,
   "serving": "1 bowl (400 g)"
  },
  "preparation": "A firm dough rests, then each piece is stretched and slapped into a wide belt-like noodle. The noodles are boiled briefly and topped with garlic, vinegar, and chili. Smoking-hot oil is poured over to sizzle the toppings.",
  "pronunciation": "bee-AHNG bee-AHNG",
  "similar": [
   "Dan Dan Noodles",
   "Lanzhou Beef Noodles",
   "Udon",
   "Char Kway Teow",
   "Pad See Ew"
  ],
  "texture": "Broad, springy, satisfyingly chewy ribbons with a slick of chili oil.",
  "variations": [
   "with tomato and egg",
   "with braised pork",
   "extra-spicy with extra chili oil"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Biang_Biang_Noodles_at_Qintangyizhan%2C_Tianzhu%2C_Beijing_%2820200412133323%29.jpg/960px-Biang_Biang_Noodles_at_Qintangyizhan%2C_Tianzhu%2C_Beijing_%2820200412133323%29.jpg"
 },
 "Cağ Kebabı": {
  "flavor": "Intensely lamb-y and smoky, with the richness of rendered tail fat and sharp sumac brightness.",
  "history": "Cağ kebab is the horizontal-rotisserie lamb kebab of Erzurum in eastern Turkey. Lamb is marinated, stacked with tail fat, and roasted sideways over a wood fire, a method distinct from the vertical doner. It is served in small skewers called cağ and eaten with flatbread.",
  "ingredients": [
   "lamb leg or shoulder",
   "lamb tail fat",
   "onion",
   "salt",
   "black pepper",
   "flatbread",
   "sumac",
   "tomato",
   "green pepper"
  ],
  "nutrition": {
   "calories": 750,
   "carbs": 30,
   "fat": 45,
   "note": "approximate",
   "protein": 50,
   "serving": "1 portion (300 g)"
  },
  "preparation": "Lamb is marinated with onion and spices, then stacked on a horizontal spit layered with tail fat. It roasts slowly over a wood fire, and crisped slices are shaved onto small skewers. Served with warm flatbread, sumac onions, and grilled vegetables.",
  "pronunciation": "JAH keh-BAH-buh",
  "similar": [
   "Döner Kebab",
   "Adana Kebab",
   "Kuzu Şiş",
   "Shawarma",
   "İskender Kebap"
  ],
  "texture": "Crisp-edged, juicy slices with a slight chew, wrapped in soft flatbread.",
  "variations": [
   "served with yogurt",
   "spicy version with isot pepper",
   "cağ with bulgur pilaf"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Ca%C4%9F_kebab.jpg/960px-Ca%C4%9F_kebab.jpg"
 },
 "Chakhchoukha": {
  "flavor": "Deeply savory and warming, with ras el hanout spice, sweet tomato, and rich lamb.",
  "history": "Chakhchoukha is a hearty Algerian dish of torn flatbread simmered in a spiced stew. It is especially associated with the Aures region and is traditionally served at weddings and Eid. The bread soaks up the rich broth until every piece is saturated.",
  "ingredients": [
   "semolina flatbread",
   "lamb or chicken",
   "tomatoes",
   "chickpeas",
   "onion",
   "garlic",
   "ras el hanout",
   "paprika",
   "olive oil",
   "chili",
   "butter"
  ],
  "nutrition": {
   "calories": 650,
   "carbs": 70,
   "fat": 24,
   "note": "approximate",
   "protein": 35,
   "serving": "1 bowl (450 g)"
  },
  "preparation": "Thin flatbreads are baked, then torn into pieces. A spicy tomato-and-meat stew simmers until rich. The bread is added to the stew and cooked until it absorbs the broth, then served in deep bowls.",
  "pronunciation": "shakh-SHOO-khah",
  "similar": [
   "Shakshuka",
   "Msemen",
   "Harira",
   "Mansaf"
  ],
  "texture": "Soft, broth-saturated bread pieces mingling with tender meat and creamy chickpeas.",
  "variations": [
   "with lamb (classic)",
   "with chicken",
   "extra-spicy with harissa"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Algerian_Chakhchoukha.jpg"
 },
 "Chicken Tikka Masala": {
  "flavor": "Creamy and gently spiced, with char-grilled smokiness, sweet tomato, and fenugreek warmth.",
  "history": "Chicken tikka masala is the creamy tomato-fenugreek curry closely associated with British-Indian restaurants. Char-grilled marinated chicken is folded into a rich, mildly spiced sauce. It became one of Britain's most popular dishes and a global restaurant staple.",
  "ingredients": [
   "chicken",
   "yogurt",
   "tikka spices",
   "tomato puree",
   "cream",
   "butter",
   "ginger",
   "garlic",
   "garam masala",
   "fenugreek",
   "cumin",
   "coriander"
  ],
  "nutrition": {
   "calories": 800,
   "carbs": 60,
   "fat": 40,
   "note": "approximate",
   "protein": 42,
   "serving": "1 bowl with rice (450 g)"
  },
  "preparation": "Chicken marinates in yogurt and spices, then is char-grilled until smoky at the edges. It simmers in a tomato-cream sauce with ginger and fenugreek. Served with rice or naan.",
  "pronunciation": "TIK-kah mah-SAH-lah",
  "similar": [
   "Murgh Makhani (Butter Chicken)",
   "Korma",
   "Vindaloo",
   "Tandoori Chicken",
   "Chana Masala"
  ],
  "texture": "Tender charred chicken pieces in a smooth, velvety orange sauce.",
  "variations": [
   "extra creamy",
   "spicier restaurant style",
   "with smoked chicken"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CHICKEN_TIKKA_MASALA.jpg/960px-CHICKEN_TIKKA_MASALA.jpg"
 },
 "Châteaubriand": {
  "flavor": "Pure, buttery beef with a delicate mineral note, enriched by tarragon bearnaise.",
  "history": "Chateaubriand is the thick center cut of beef tenderloin, named for the French writer and diplomat Francois-Rene de Chateaubriand. It was created by his chef in the early 19th century and became a symbol of classic French haute cuisine. It is traditionally roasted whole and carved tableside for two.",
  "ingredients": [
   "beef tenderloin center cut",
   "butter",
   "salt",
   "black pepper",
   "shallots",
   "white wine",
   "tarragon",
   "egg yolks",
   "beef stock"
  ],
  "nutrition": {
   "calories": 800,
   "carbs": 5,
   "fat": 58,
   "note": "approximate",
   "protein": 60,
   "serving": "1 portion (300 g)"
  },
  "preparation": "The tenderloin is seared hard, then roasted to rare or medium-rare. It rests, then is carved into thick slices at the table. It is classically served with bearnaise sauce.",
  "pronunciation": "shah-toh-bree-AHN",
  "similar": [
   "Filet Mignon",
   "T-Bone Steak",
   "Beef Wellington",
   "Steak Frites"
  ],
  "texture": "Supremely tender, almost spoon-soft, with a crisp seared crust.",
  "variations": [
   "with bearnaise (classic)",
   "with red wine reduction",
   "with pommes puree"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Chateaubriand-Variation_2_-_bleu.jpg/960px-Chateaubriand-Variation_2_-_bleu.jpg"
 },
 "Cochinita Pibil": {
  "flavor": "Tangy and earthy, with achiote's peppery warmth, bright citrus, and deep pork richness.",
  "history": "Cochinita pibil is the signature pork dish of the Yucatan Peninsula in Mexico, with roots in Maya pit-roasting traditions. Pork is marinated in achiote and sour orange, wrapped in banana leaves, and slow-roasted. It is the centerpiece of Yucatecan Sunday meals and festivals.",
  "ingredients": [
   "pork shoulder",
   "achiote paste",
   "sour orange juice",
   "garlic",
   "oregano",
   "cumin",
   "banana leaves",
   "red onion",
   "habanero",
   "lime",
   "salt"
  ],
  "nutrition": {
   "calories": 650,
   "carbs": 25,
   "fat": 42,
   "note": "approximate",
   "protein": 40,
   "serving": "1 plate (350 g)"
  },
  "preparation": "Pork marinates overnight in achiote and citrus, then is wrapped tightly in banana leaves. It roasts low and slow for hours until it shreds easily. Served with pickled red onions and habanero salsa in tacos or tortas.",
  "pronunciation": "koh-chee-NEE-tah pee-BEEL",
  "similar": [
   "Birria",
   "Pozole",
   "Pernil",
   "Lechon",
   "Pulled Pork"
  ],
  "texture": "Falling-apart tender shredded pork, moist from the long roast, with crisp pickled onion contrast.",
  "variations": [
   "tacos de cochinita",
   "torta de cochinita",
   "cochinita with extra habanero salsa"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Bao_con_cochinita_pibil.jpg/960px-Bao_con_cochinita_pibil.jpg"
 },
 "Cordero Asado": {
  "flavor": "Delicately milky lamb with a clean, roasted savor and crisp, salty skin.",
  "history": "Cordero asado is the celebrated roast suckling lamb of Castile in central Spain. Roasting milk-fed lamb in wood-fired clay ovens is a centuries-old Castilian tradition, with towns like Segovia famous for it. The dish is defined by its simplicity: lamb, water, and salt.",
  "ingredients": [
   "suckling lamb (quarter)",
   "water",
   "coarse salt",
   "lard or olive oil"
  ],
  "nutrition": {
   "calories": 800,
   "carbs": 2,
   "fat": 62,
   "note": "approximate",
   "protein": 55,
   "serving": "1 quarter portion (350 g)"
  },
  "preparation": "The lamb quarter goes into a clay cazuela with a little water and salt. It roasts slowly in a wood-fired oven, basted in its own juices. The skin is crisped at high heat at the end until deeply golden.",
  "pronunciation": "kor-DEH-roh ah-SAH-doh",
  "similar": [
   "Païdakia",
   "Kuzu Şiş",
   "Churrasco",
   "Souvlaki"
  ],
  "texture": "Meat so tender it collapses, with glassy-crisp skin and silky pan juices.",
  "variations": [
   "Segovia style",
   "with roasted potatoes",
   "Aranda de Duero style"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Cocina_Palentina_-_Cordero_Asado_001.JPG/960px-Cocina_Palentina_-_Cordero_Asado_001.JPG"
 },
 "Feijoada": {
  "flavor": "Smoky, porky, and deeply savory, cut by bright orange and bitter greens.",
  "history": "Feijoada is Brazil's national dish, a slow stew of black beans and pork. It grew from Portuguese bean-and-meat stews adapted in Brazil and became the country's defining communal meal. It is traditionally eaten on Wednesdays and Saturdays with rice, greens, and orange.",
  "ingredients": [
   "black beans",
   "pork shoulder",
   "smoked sausage",
   "bacon",
   "beef",
   "onion",
   "garlic",
   "bay leaves",
   "orange",
   "collard greens",
   "rice",
   "farofa"
  ],
  "nutrition": {
   "calories": 850,
   "carbs": 75,
   "fat": 35,
   "note": "approximate",
   "protein": 48,
   "serving": "1 plate (500 g)"
  },
  "preparation": "Beans simmer for hours with salted and smoked pork cuts until creamy. The meats are sliced and returned to the pot. Served with white rice, sauteed collard greens, toasted farofa, and orange slices.",
  "pronunciation": "fay-zhwah-DAH",
  "similar": [
   "Moqueca",
   "Acarajé",
   "Jollof Rice",
   "Paella"
  ],
  "texture": "Creamy beans with tender meats, fluffy rice, and crunchy farofa.",
  "variations": [
   "feijoada completa (full spread)",
   "lighter weekday version",
   "with extra smoked meats"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Feijoada_%28Brazilian_dish%29%2C_S%C3%A3o_Lu%C3%ADs%2C_Maranh%C3%A3o.jpg/960px-Feijoada_%28Brazilian_dish%29%2C_S%C3%A3o_Lu%C3%ADs%2C_Maranh%C3%A3o.jpg"
 },
 "French Onion Soup": {
  "flavor": "Deeply sweet-savory with caramelized onion richness, winey depth, and nutty melted Gruyere.",
  "history": "French onion soup, soupe a l'oignon gratinee, is the classic Parisian bistro soup. Onions are caramelized to mahogany, deglazed with wine, and simmered in beef broth. The Gruyere-crusted crouton made it famous in the brasseries of Les Halles.",
  "ingredients": [
   "yellow onions",
   "butter",
   "beef broth",
   "dry white wine",
   "Gruyere cheese",
   "baguette",
   "thyme",
   "bay leaf",
   "flour",
   "salt",
   "pepper"
  ],
  "nutrition": {
   "calories": 450,
   "carbs": 40,
   "fat": 22,
   "note": "approximate",
   "protein": 20,
   "serving": "1 crock (400 g)"
  },
  "preparation": "Onions cook low and slow in butter until deeply caramelized. Wine deglazes the pot, broth and herbs join for a simmer. The soup is ladled into crocks, topped with bread and Gruyere, and broiled until bubbling.",
  "pronunciation": "french UHN-yun soop",
  "similar": [
   "Minestrone",
   "Harira",
   "Borscht",
   "Pho"
  ],
  "texture": "Silky, jammy onions in rich broth under a crisp, cheese-crusted crouton.",
  "variations": [
   "classic gratinee",
   "with extra Gruyere",
   "made with chicken broth"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/French_onion_soup_and_squid%2C_Loola%27s_by_Awfully_Chocolate%2C_Esplanade_%E2%80%93_Theatres_on_the_Bay%2C_Singapore_-_20140326.jpg/960px-French_onion_soup_and_squid%2C_Loola%27s_by_Awfully_Chocolate%2C_Esplanade_%E2%80%93_Theatres_on_the_Bay%2C_Singapore_-_20140326.jpg"
 },
 "Gulai": {
  "flavor": "Warm and aromatic, with turmeric earthiness, lemongrass brightness, and rich coconut.",
  "history": "Gulai is the golden curry of the Minangkabau people of West Sumatra, Indonesia. Built on coconut milk, turmeric, lemongrass, and galangal, it is one of the great curries of the Malay world. It is served at Padang restaurants and festive meals across Indonesia.",
  "ingredients": [
   "beef, goat, or fish",
   "coconut milk",
   "turmeric",
   "lemongrass",
   "galangal",
   "shallots",
   "garlic",
   "chilies",
   "candlenut",
   "coriander",
   "kaffir lime leaves"
  ],
  "nutrition": {
   "calories": 700,
   "carbs": 55,
   "fat": 38,
   "note": "approximate",
   "protein": 35,
   "serving": "1 bowl with rice (450 g)"
  },
  "preparation": "A spice paste of aromatics is sauteed until fragrant, then coconut milk is added. The protein simmers gently until tender and the sauce thickens to a golden gravy. Served with steamed rice.",
  "pronunciation": "goo-LIE",
  "similar": [
   "Rendang",
   "Massaman Curry",
   "Rogan Josh",
   "Soto Ayam"
  ],
  "texture": "Tender protein in a silky, golden, moderately thick curry sauce.",
  "variations": [
   "gulai kambing (goat)",
   "gulai ikan (fish)",
   "gulai cubadak (jackfruit)"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Stamp_of_Indonesia_-_2009_-_Colnect_379644_-_Traditional_Food_-_Gulai_balak.jpeg/960px-Stamp_of_Indonesia_-_2009_-_Colnect_379644_-_Traditional_Food_-_Gulai_balak.jpeg"
 },
 "Hyderabadi Biryani": {
  "flavor": "Fragrant and layered, with saffron, fried onion sweetness, and warm whole spices.",
  "history": "Hyderabadi biryani is the legendary rice dish of Hyderabad, developed in the kitchens of the Nizams. It uses the kacchi (raw) dum method, where marinated raw meat and rice steam together sealed with dough. It is the centerpiece of Hyderabadi celebration feasts.",
  "ingredients": [
   "basmati rice",
   "chicken or mutton",
   "yogurt",
   "fried onions",
   "saffron",
   "mint",
   "green chilies",
   "ginger-garlic paste",
   "garam masala",
   "lemon",
   "ghee"
  ],
  "nutrition": {
   "calories": 850,
   "carbs": 85,
   "fat": 35,
   "note": "approximate",
   "protein": 45,
   "serving": "1 plate (450 g)"
  },
  "preparation": "Meat marinates in yogurt and spices, then is layered with par-cooked fragrant rice. The pot is sealed with dough and steam-cooked on dum. It is opened at the table, releasing saffron-scented steam, and garnished with fried onions and mint.",
  "pronunciation": "hy-deh-rah-BAH-dee beer-YAH-nee",
  "similar": [
   "Mandi",
   "Kabsa",
   "Nasi Goreng",
   "Jambalaya",
   "Paella"
  ],
  "texture": "Fluffy, separate grains of rice with meltingly tender meat and crisp onion bits.",
  "variations": [
   "chicken dum biryani",
   "mutton dum biryani",
   "vegetable biryani"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/4/41/Hyderabadi_Biryani_Home_made.png"
 },
 "Hünkar Beğendi": {
  "flavor": "Smoky, creamy eggplant with savory braised lamb and the gentle tang of cheese.",
  "history": "Hunkar begendi, meaning the sultan approved, is a dish of Ottoman palace cuisine. Smoked eggplant is pureed with cheese into a silky bed for braised lamb. Legend holds it was created to please a visiting sultan, and it remains a classic of refined Turkish cooking.",
  "ingredients": [
   "lamb",
   "smoked eggplant",
   "kasar or Parmesan cheese",
   "milk",
   "flour",
   "butter",
   "onion",
   "tomato paste",
   "garlic",
   "thyme",
   "salt",
   "pepper"
  ],
  "nutrition": {
   "calories": 650,
   "carbs": 25,
   "fat": 42,
   "note": "approximate",
   "protein": 40,
   "serving": "1 plate (400 g)"
  },
  "preparation": "Eggplants are charred over flame until smoky, then pureed and folded into a bechamel enriched with cheese. Lamb braises separately with tomato and thyme until tender. The stew is served over the warm eggplant puree.",
  "pronunciation": "hoon-KAR beh-en-DEE",
  "similar": [
   "Baba Ganoush",
   "Köfte",
   "Moussaka",
   "Kuzu Şiş"
  ],
  "texture": "Silky, spoonable eggplant puree topped with soft, rich lamb stew.",
  "variations": [
   "with beef instead of lamb",
   "extra-smoky eggplant",
   "with mushrooms"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Hunkarbegendi.jpg/960px-Hunkarbegendi.jpg"
 },
 "Karē": {
  "flavor": "Mildly spiced, sweet-savory, and deeply comforting, with a distinctive roux thickness.",
  "history": "Japanese curry rice, kare raisu, arrived in Japan in the Meiji era via the British navy and was adapted to Japanese tastes. It became a staple of school lunches, home cooking, and military canteens. Its thick, mild, sweet-savory sauce is now a national comfort food.",
  "ingredients": [
   "beef or pork",
   "potatoes",
   "carrots",
   "onion",
   "Japanese curry roux",
   "rice",
   "fukujinzuke pickles",
   "stock"
  ],
  "nutrition": {
   "calories": 750,
   "carbs": 95,
   "fat": 25,
   "note": "approximate",
   "protein": 30,
   "serving": "1 plate (450 g)"
  },
  "preparation": "Meat and vegetables simmer in stock until tender. Blocks of curry roux dissolve into the pot, thickening it into a glossy sauce. It is served over steamed rice with pickles on the side.",
  "pronunciation": "kah-REH",
  "similar": [
   "Omurice",
   "Tonkatsu",
   "Massaman Curry",
   "Jollof Rice"
  ],
  "texture": "Thick, gravy-like curry with soft vegetables over fluffy rice.",
  "variations": [
   "katsu curry (with breaded cutlet)",
   "beef curry",
   "dry curry"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Kare-kare_The_dish_is_usually_served_with_bagoong_%28fermented_shrimp_paste%29_on_the_side_for_added_flavor._It%27s_a_comforting_dish_often_enjoyed_during_special_occasions_and_family_gatherings.jpg"
 },
 "Khachapuri": {
  "flavor": "Salty, tangy molten cheese with rich butter and egg yolk stirred through.",
  "history": "Khachapuri is Georgia's beloved cheese bread, with many regional forms. The Adjarian version, shaped like a boat and topped with egg and butter, is the most famous. It is a staple of Georgian supra feasts and a source of national pride.",
  "ingredients": [
   "wheat flour",
   "yeast",
   "sulguni cheese",
   "imeruli cheese",
   "egg",
   "butter",
   "milk",
   "salt",
   "sugar"
  ],
  "nutrition": {
   "calories": 950,
   "carbs": 90,
   "fat": 45,
   "note": "approximate",
   "protein": 40,
   "serving": "1 khachapuri (350 g)"
  },
  "preparation": "Leavened dough is shaped into a boat and filled with a mixture of salty cheeses. It bakes until golden and bubbling. A raw egg yolk and a knob of butter are added at the end to be stirred into the molten cheese.",
  "pronunciation": "khah-chah-POO-ree",
  "similar": [
   "Pide",
   "Pão de Queijo",
   "Calzone",
   "Lahmacun",
   "Manakish"
  ],
  "texture": "Chewy, golden bread with a gooey cheese center and a silky yolk-butter swirl.",
  "variations": [
   "Adjarian (boat with egg)",
   "Imeretian (round, cheese inside)",
   "Mingrelian (cheese on top too)"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Large_khachapuri_on_a_dish_at_Little_Georgia_restaurant.jpg/960px-Large_khachapuri_on_a_dish_at_Little_Georgia_restaurant.jpg"
 },
 "Khao Soi": {
  "flavor": "Creamy, gently spiced coconut curry with turmeric warmth, balanced by sour pickled greens and lime.",
  "history": "Khao soi is the signature curry-noodle soup of Chiang Mai in northern Thailand. It reflects the region's history as a trading crossroads, blending Burmese and Yunnanese influences with Thai aromatics. The crispy noodle crown is its unmistakable hallmark.",
  "ingredients": [
   "egg noodles",
   "chicken or beef",
   "coconut milk",
   "khao soi curry paste",
   "turmeric",
   "fish sauce",
   "palm sugar",
   "pickled mustard greens",
   "shallots",
   "lime",
   "chili oil"
  ],
  "nutrition": {
   "calories": 700,
   "carbs": 65,
   "fat": 32,
   "note": "approximate",
   "protein": 35,
   "serving": "1 bowl (500 g)"
  },
  "preparation": "The curry paste is fried in coconut cream, then meat simmers in the coconut broth until tender. Boiled egg noodles go in the bowl, broth is ladled over, and a tangle of deep-fried noodles crowns the top. Pickled greens, lime, and chili oil are added to taste.",
  "pronunciation": "kow soy",
  "similar": [
   "Tom Kha Gai",
   "Laksa",
   "Massaman Curry",
   "Pad Thai"
  ],
  "texture": "Slippery boiled noodles and tender meat under a shattering crisp noodle crown, with crunchy shallots.",
  "variations": [
   "khao soi gai (chicken)",
   "khao soi nuea (beef)",
   "khao soi with extra crispy noodles"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/2019_01_Khao_Soi_Kai.jpg/960px-2019_01_Khao_Soi_Kai.jpg"
 },
 "Kuzu Şiş": {
  "flavor": "Charred, juicy lamb with tangy marinade notes, oregano, and sharp sumac.",
  "history": "Kuzu sis is Turkey's classic lamb shish kebab, grilled over charcoal in ocakbasi restaurants and home mangals alike. Skewering marinated meat over open fire is one of the oldest cooking methods in Anatolia. It is typically served with sumac onions and flatbread.",
  "ingredients": [
   "lamb leg or shoulder",
   "onion",
   "milk or yogurt",
   "olive oil",
   "dried oregano",
   "red pepper flakes",
   "salt",
   "black pepper",
   "sumac",
   "flatbread"
  ],
  "nutrition": {
   "calories": 600,
   "carbs": 20,
   "fat": 36,
   "note": "approximate",
   "protein": 48,
   "serving": "1 portion (300 g)"
  },
  "preparation": "Lamb cubes marinate in onion, milk, and spices until tender. They are threaded on skewers and grilled over hot charcoal, turned often. Served with sumac-dressed onions and warm flatbread.",
  "pronunciation": "koo-ZOO sheesh",
  "similar": [
   "Adana Kebab",
   "Souvlaki",
   "Shish Tawook",
   "Döner Kebab",
   "Satay"
  ],
  "texture": "Crisp-edged cubes with a pink, tender interior and soft flatbread.",
  "variations": [
   "with eggplant",
   "spicy Urfa style",
   "served with bulgur"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kuzu_%C5%9Fi%C5%9F_%28%C5%9Ei%C5%9F_kebap%29.jpg/960px-Kuzu_%C5%9Fi%C5%9F_%28%C5%9Ei%C5%9F_kebap%29.jpg"
 },
 "Laksa": {
  "flavor": "Rich and aromatic, with coconut creaminess, shrimp-paste funk, and lemongrass-chili heat.",
  "history": "Laksa is the spicy noodle soup of Malaysia and Singapore, born from the Peranakan fusion of Chinese noodles and Malay spices. The coconut-curry version, laksa lemak, hums with shrimp paste and lemongrass. It is a hawker-center icon across the region.",
  "ingredients": [
   "rice noodles",
   "prawns",
   "coconut milk",
   "laksa paste",
   "shrimp paste",
   "lemongrass",
   "bean sprouts",
   "fish cake",
   "boiled egg",
   "laksa leaf",
   "chili sambal"
  ],
  "nutrition": {
   "calories": 650,
   "carbs": 65,
   "fat": 30,
   "note": "approximate",
   "protein": 30,
   "serving": "1 bowl (550 g)"
  },
  "preparation": "The spice paste fries until fragrant, then coconut milk builds the broth. Noodles, prawns, and toppings go into bowls, and the hot broth is ladled over. Sambal and laksa leaf are added to taste.",
  "pronunciation": "LAHK-sah",
  "similar": [
   "Tom Yum Goong",
   "Khao Soi",
   "Char Kway Teow",
   "Tom Kha Gai"
  ],
  "texture": "Slippery noodles and snappy prawns in a creamy broth with crunchy sprouts.",
  "variations": [
   "laksa lemak (coconut curry)",
   "asam laksa (tamarind, no coconut)",
   "Sarawak laksa"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Curry_Laksa_-_Laksa_King_%282597729514%29.jpg/960px-Curry_Laksa_-_Laksa_King_%282597729514%29.jpg"
 },
 "Lasagne alla Bolognese": {
  "flavor": "Rich and comforting, with meaty ragu mellowed by creamy bechamel and nutty Parmigiano.",
  "history": "Lasagne alla Bolognese is the baked layered pasta of Bologna, built from fresh egg pasta, ragu, bechamel, and Parmigiano. Layered pasta dishes have existed in Emilia-Romagna for centuries, and this version became Italy's most famous baked pasta. It is the centerpiece of festive family meals.",
  "ingredients": [
   "fresh egg lasagne sheets",
   "beef-pork ragu",
   "bechamel",
   "Parmigiano-Reggiano",
   "butter",
   "nutmeg",
   "milk",
   "flour"
  ],
  "nutrition": {
   "calories": 800,
   "carbs": 60,
   "fat": 42,
   "note": "approximate",
   "protein": 42,
   "serving": "1 portion (350 g)"
  },
  "preparation": "Fresh pasta sheets are layered with ragu, bechamel, and Parmigiano in a baking dish. The lasagne bakes until the top is bronzed and bubbling. It rests before slicing so the layers set.",
  "pronunciation": "lah-ZAHN-yeh AH-lah boh-loh-NYEH-zeh",
  "similar": [
   "Moussaka",
   "Tagliatelle al Ragù",
   "Pappardelle al Cinghiale",
   "Spaghetti alla Carbonara"
  ],
  "texture": "Tender pasta layers with a crisp golden top and a molten, sliceable interior.",
  "variations": [
   "with spinach pasta sheets",
   "extra bechamel",
   "with porcini in the ragu"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Halal_Beef_Lasagne_and_Cauliflowers_-_Foodilic_2024-08-12.jpg/960px-Halal_Beef_Lasagne_and_Cauliflowers_-_Foodilic_2024-08-12.jpg"
 },
 "Lechona": {
  "flavor": "Rich and savory, with the deep porkiness of slow-roasted meat, earthy cumin and annatto, and the mild sweetness of the rice-and-pea stuffing.",
  "history": "Lechona is a traditional dish of the Tolima region of Colombia, served at weddings, holidays, and large family gatherings. A whole pig is stuffed and slow-roasted, a practice rooted in Spanish colonial roasting traditions adapted in the Andes. It remains a centerpiece of Colombian celebration cooking.",
  "ingredients": [
   "whole young pig",
   "long-grain rice",
   "yellow peas",
   "pork fat",
   "garlic",
   "onion",
   "cumin",
   "annatto",
   "salt",
   "black pepper",
   "bay leaves"
  ],
  "nutrition": {
   "calories": 950,
   "carbs": 55,
   "fat": 60,
   "note": "approximate",
   "protein": 45,
   "serving": "1 plate (400 g)"
  },
  "preparation": "The pig is boned and stuffed with a mixture of rice, peas, and seasoned pork. It is sewn shut and roasted slowly for many hours until the skin turns deep golden and crisp. It is then rested, carved, and served in portions of meat, stuffing, and crackling skin.",
  "pronunciation": "leh-CHO-nah",
  "similar": [
   "Lechon",
   "Pernil",
   "Cochinita Pibil",
   "Crispy Pata",
   "Kalua Pig"
  ],
  "texture": "Tender, spoonable meat and soft stuffing contrasted with shatteringly crisp, golden skin.",
  "variations": [
   "Lechona Tolimense (classic, with peas)",
   "stuffed with potatoes instead of rice",
   "mini lechona portions for small gatherings"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lechona.JPG/960px-Lechona.JPG"
 },
 "Massaman Curry": {
  "flavor": "Sweet, sour, and warmly spiced, with cinnamon-cardamom depth and roasted peanut richness.",
  "history": "Massaman is Thailand's Persian-influenced curry, its name likely linked to Muslim traders who brought dried spices to Siam. It is a royal curry of braised meat, potatoes, and peanuts in a sweet-sour coconut sauce. It is often cited among the world's most beloved curries.",
  "ingredients": [
   "beef",
   "coconut milk",
   "massaman curry paste",
   "potatoes",
   "peanuts",
   "cinnamon",
   "cardamom",
   "cloves",
   "fish sauce",
   "palm sugar",
   "tamarind",
   "onions"
  ],
  "nutrition": {
   "calories": 780,
   "carbs": 55,
   "fat": 44,
   "note": "approximate",
   "protein": 38,
   "serving": "1 bowl with rice (450 g)"
  },
  "preparation": "The curry paste fries in coconut cream until fragrant, then beef braises slowly in coconut milk with warm spices. Potatoes and peanuts join until tender. Tamarind, fish sauce, and palm sugar balance it sweet-sour-salty.",
  "pronunciation": "mah-sah-MAHN",
  "similar": [
   "Phanaeng Curry",
   "Gulai",
   "Rogan Josh",
   "Khao Soi"
  ],
  "texture": "Fall-apart beef and soft potatoes in a thick, glossy, peanut-flecked sauce.",
  "variations": [
   "massaman nuea (beef)",
   "massaman gai (chicken)",
   "massaman with extra peanuts"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Chicken_Massaman_Curry_-Bangkok_-Food_%2830363542667%29.jpg/960px-Chicken_Massaman_Curry_-Bangkok_-Food_%2830363542667%29.jpg"
 },
 "Mechouia Salad": {
  "flavor": "Smoky-sweet charred vegetables with briny tuna, sharp capers, and fruity olive oil.",
  "history": "Mechouia is Tunisia's beloved salad of flame-grilled vegetables, its name meaning grilled. Charring peppers and tomatoes over open flame is an ancient North African technique. It is served as part of the mezze spread at family meals and celebrations.",
  "ingredients": [
   "bell peppers",
   "tomatoes",
   "garlic",
   "extra-virgin olive oil",
   "tuna",
   "hard-boiled eggs",
   "olives",
   "capers",
   "caraway",
   "salt",
   "lemon"
  ],
  "nutrition": {
   "calories": 300,
   "carbs": 15,
   "fat": 20,
   "note": "approximate",
   "protein": 18,
   "serving": "1 plate (250 g)"
  },
  "preparation": "Peppers and tomatoes are charred whole over flame until blackened and soft. They are peeled, seeded, and chopped with garlic and olive oil. Served at room temperature, often topped with tuna, egg, olives, and capers.",
  "pronunciation": "meh-SHWEE-yah",
  "similar": [
   "Tabbouleh",
   "Fattoush",
   "Hummus",
   "Shakshuka"
  ],
  "texture": "Soft, jammy chopped vegetables with firm tuna, creamy egg, and crunchy olives.",
  "variations": [
   "with tuna and egg (classic)",
   "plain without tuna",
   "spicy with harissa"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tunisian_meal_04.jpg/960px-Tunisian_meal_04.jpg"
 },
 "Moussaka": {
  "flavor": "Warmly spiced meat with sweet cinnamon, creamy bechamel, and the mild savor of eggplant.",
  "history": "Moussaka is Greece's iconic baked casserole of eggplant, spiced meat, and bechamel. Its modern form was shaped in the early 20th century, giving the traditional dish a French-style bechamel crown. It is a staple of Greek home cooking and tavernas.",
  "ingredients": [
   "eggplant",
   "ground lamb or beef",
   "onion",
   "tomato",
   "cinnamon",
   "allspice",
   "potatoes",
   "bechamel",
   "egg yolk",
   "kefalotyri cheese",
   "olive oil"
  ],
  "nutrition": {
   "calories": 650,
   "carbs": 35,
   "fat": 40,
   "note": "approximate",
   "protein": 32,
   "serving": "1 portion (350 g)"
  },
  "preparation": "Eggplant and potato slices are fried until golden. A cinnamon-spiced meat sauce simmers, then the dish is layered and crowned with bechamel. Baked until set and deeply browned, it is rested before slicing.",
  "pronunciation": "moo-sah-KAH",
  "similar": [
   "Lasagne alla Bolognese",
   "Parmigiana alla Napoletana",
   "Ratatouille"
  ],
  "texture": "Soft, sliceable layers with a puffed, golden bechamel top.",
  "variations": [
   "with potatoes (classic)",
   "vegetarian with lentils",
   "with extra bechamel"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/B%C3%A9chamel_on_moussaka.jpg/960px-B%C3%A9chamel_on_moussaka.jpg"
 },
 "Murgh Makhani (Butter Chicken)": {
  "flavor": "Velvety and mildly spiced, with sweet tomato, rich butter, and the distinctive aroma of fenugreek.",
  "history": "Butter chicken was created in Delhi in the mid-20th century at the Moti Mahal restaurant, when tandoori chicken was folded into a tomato-butter sauce to keep it moist. It quickly became one of India's most famous exports. The dish is now a global symbol of North Indian cooking.",
  "ingredients": [
   "chicken",
   "yogurt",
   "tandoori masala",
   "tomato puree",
   "butter",
   "cream",
   "ginger",
   "garlic",
   "garam masala",
   "fenugreek leaves",
   "honey",
   "green chilies"
  ],
  "nutrition": {
   "calories": 800,
   "carbs": 55,
   "fat": 45,
   "note": "approximate",
   "protein": 40,
   "serving": "1 bowl with rice (450 g)"
  },
  "preparation": "Chicken marinates in yogurt and spices, then is charred in a tandoor or hot oven. A sauce of tomato, butter, and cream simmers with ginger and fenugreek. The chicken finishes in the sauce until silky.",
  "pronunciation": "moorg mahk-HAH-nee",
  "similar": [
   "Korma",
   "Vindaloo",
   "Dal Makhani",
   "Tandoori Chicken",
   "Chicken Tikka Masala"
  ],
  "texture": "Tender charred chicken in a smooth, glossy, cream-enriched sauce.",
  "variations": [
   "extra creamy (malai)",
   "smoky with charcoal finish",
   "spicier dhaba style"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Murgh_Makhani_%28Butter_Chicken%29_%288039245631%29.jpg/960px-Murgh_Makhani_%28Butter_Chicken%29_%288039245631%29.jpg"
 },
 "Pappardelle al Cinghiale": {
  "flavor": "Gamey and deeply savory, with juniper's piney lift, red wine depth, and rosemary.",
  "history": "Pappardelle al cinghiale is Tuscany's celebrated wild boar pasta, born from the region's hunting tradition. Wild boar has been hunted in the Tuscan hills for centuries, and its rich meat suits long, slow braising. The dish is a staple of autumn in Tuscan trattorias.",
  "ingredients": [
   "pappardelle (egg pasta)",
   "wild boar",
   "red wine",
   "juniper berries",
   "rosemary",
   "onion",
   "carrot",
   "celery",
   "tomato",
   "olive oil",
   "Parmigiano-Reggiano"
  ],
  "nutrition": {
   "calories": 780,
   "carbs": 68,
   "fat": 34,
   "note": "approximate",
   "protein": 42,
   "serving": "1 plate (350 g)"
  },
  "preparation": "The boar marinates in wine with juniper and rosemary, then braises slowly with soffritto and tomato until it falls apart. The sauce is shredded and tossed with wide pappardelle. Finished with Parmigiano.",
  "pronunciation": "pahp-pahr-DEH-leh ahl cheen-GYAH-leh",
  "similar": [
   "Tagliatelle al Ragù",
   "Lasagne alla Bolognese",
   "Spaghetti alla Carbonara",
   "Cacio e Pepe"
  ],
  "texture": "Broad, silky pasta ribbons in a hearty, shredded-meat sauce.",
  "variations": [
   "with extra juniper",
   "white version without tomato",
   "with porcini added"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pappardelle_al_cinghiale_%28cropped%29.jpg/960px-Pappardelle_al_cinghiale_%28cropped%29.jpg"
 },
 "Parmigiana alla Napoletana": {
  "flavor": "Sweet tomato and creamy mozzarella over the mild, meaty savor of fried eggplant, with fresh basil.",
  "history": "Parmigiana alla Napoletana is Naples' beloved baked eggplant dish, layering fried eggplant with tomato, basil, and cheese. Eggplant arrived in southern Italy centuries ago and became a staple of cucina povera. The Neapolitan version is lighter than many, letting the eggplant shine.",
  "ingredients": [
   "eggplant",
   "tomato passata",
   "fresh basil",
   "mozzarella",
   "Parmigiano-Reggiano",
   "olive oil",
   "garlic",
   "flour",
   "salt"
  ],
  "nutrition": {
   "calories": 550,
   "carbs": 35,
   "fat": 34,
   "note": "approximate",
   "protein": 25,
   "serving": "1 portion (300 g)"
  },
  "preparation": "Eggplant slices are salted, floured, and fried until golden. They are layered in a dish with tomato sauce, basil, and cheeses. Baked until bubbling and bronzed, it is rested before serving.",
  "pronunciation": "pahr-mee-JAH-nah AH-lah nah-poh-leh-TAH-nah",
  "similar": [
   "Moussaka",
   "Ratatouille",
   "Lasagne alla Bolognese",
   "Calzone"
  ],
  "texture": "Soft, melting layers with a golden, slightly crisp top and stretchy cheese.",
  "variations": [
   "with smoked mozzarella",
   "lighter baked-eggplant version",
   "with extra basil"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Making_melanzane_alla_parmigiana_-_14913647140.jpg/960px-Making_melanzane_alla_parmigiana_-_14913647140.jpg"
 },
 "Païdakia": {
  "flavor": "Smoky lamb brightened by lemon and the piney warmth of Greek oregano.",
  "history": "Paidakia are Greece's beloved grilled lamb chops, a fixture of tavernas and Easter tables. Grilling small cuts over charcoal with lemon and oregano reflects the simple, ingredient-driven spirit of Greek cooking. They are eaten by hand, often as part of a shared spread.",
  "ingredients": [
   "lamb rib chops",
   "lemon juice",
   "extra-virgin olive oil",
   "dried oregano",
   "garlic",
   "salt",
   "black pepper"
  ],
  "nutrition": {
   "calories": 650,
   "carbs": 3,
   "fat": 50,
   "note": "approximate",
   "protein": 45,
   "serving": "1 portion (300 g)"
  },
  "preparation": "The chops are marinated briefly in lemon, olive oil, and oregano. They are grilled over hot charcoal until charred outside and blushing inside. Finished with a squeeze of lemon and a pinch more oregano.",
  "pronunciation": "pie-DAHK-yah",
  "similar": [
   "Souvlaki",
   "Shish Tawook",
   "Adana Kebab",
   "Churrasco"
  ],
  "texture": "Charred, juicy chops with tender meat that pulls easily from the bone.",
  "variations": [
   "with lemon-oil sauce",
   "extra garlic marinade",
   "Easter-style over coals"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Freshippo_grilled_lamb_chops.jpg/960px-Freshippo_grilled_lamb_chops.jpg"
 },
 "Peking Duck": {
  "flavor": "Rich duck with sweet lacquered skin, savory hoisin, and fresh scallion sharpness.",
  "history": "Peking duck is Beijing's most famous dish, with a history stretching back to imperial courts. Ducks are air-dried, lacquered with maltose, and roasted until the skin shatters. It became a restaurant showpiece in the 19th century and remains China's iconic roast.",
  "ingredients": [
   "Beijing duck",
   "maltose",
   "soy sauce",
   "five-spice",
   "scallions",
   "cucumber",
   "hoisin sauce",
   "thin pancakes",
   "Shaoxing wine"
  ],
  "nutrition": {
   "calories": 850,
   "carbs": 35,
   "fat": 58,
   "note": "approximate",
   "protein": 45,
   "serving": "1 portion (300 g)"
  },
  "preparation": "The duck is inflated, blanched, and lacquered with maltose, then air-dried. It roasts in a hot oven until the skin is deep mahogany and crisp. Carved tableside, the skin and meat are wrapped in pancakes with hoisin, scallion, and cucumber.",
  "pronunciation": "pee-KING duck",
  "similar": [
   "Duck Confit",
   "Char Siu"
  ],
  "texture": "Shatteringly crisp skin over tender meat, wrapped in soft, thin pancakes.",
  "variations": [
   "traditional oven-roasted",
   "with extra crispy skin",
   "served with sugar dip for skin"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/A_dish_of_Peking_Duck_from_Fu_Dong_Kwok_Restaurant_in_Sha_Tin.jpg/960px-A_dish_of_Peking_Duck_from_Fu_Dong_Kwok_Restaurant_in_Sha_Tin.jpg"
 },
 "Pempek": {
  "flavor": "Savory, bouncy fish cake in a sweet-sour-spicy tamarind sauce with a garlicky bite.",
  "history": "Pempek is the iconic fish cake of Palembang in South Sumatra, Indonesia. It is said to have been created by a Chinese immigrant fisherman who wanted to make use of abundant river fish. The sour-spicy cuko sauce is essential to the dish's identity.",
  "ingredients": [
   "mackerel or tenggiri fish",
   "tapioca starch",
   "water",
   "salt",
   "garlic",
   "egg",
   "palm sugar",
   "tamarind",
   "dried chilies",
   "vinegar"
  ],
  "nutrition": {
   "calories": 450,
   "carbs": 60,
   "fat": 12,
   "note": "approximate",
   "protein": 25,
   "serving": "1 portion (300 g)"
  },
  "preparation": "Fish is ground with tapioca into a springy dough and shaped into boats, balls, or long rolls. The cakes are boiled, then deep-fried before serving. They are served in a dark cuko sauce of palm sugar, tamarind, and chili, with cucumber.",
  "pronunciation": "pem-PEK",
  "similar": [
   "Bakso",
   "Soto Ayam",
   "Gyoza",
   "Tempura"
  ],
  "texture": "Chewy, springy fish cake with a crisp fried exterior, soaked in thin tangy sauce.",
  "variations": [
   "pempek kapal selam (with egg inside)",
   "pempek lenjer (long roll)",
   "pempek adaan (round, fried)"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/PEMPEK_KERITING.jpg/960px-PEMPEK_KERITING.jpg"
 },
 "Pernil": {
  "flavor": "Garlicky and peppery with deep pork savor and the herbal lift of oregano.",
  "history": "Pernil is Puerto Rico's celebratory roast pork shoulder, the centerpiece of Christmas and Three Kings Day feasts. The technique of slow-roasting a garlic-and-pepper-marinated shoulder comes from Spanish colonial cooking adapted to the island. The crackling skin, called cuerito, is the most prized part.",
  "ingredients": [
   "pork shoulder (bone-in)",
   "garlic",
   "black peppercorns",
   "adobo seasoning",
   "oregano",
   "olive oil",
   "salt",
   "vinegar",
   "bay leaves"
  ],
  "nutrition": {
   "calories": 850,
   "carbs": 5,
   "fat": 68,
   "note": "approximate",
   "protein": 50,
   "serving": "1 plate (350 g)"
  },
  "preparation": "The shoulder is scored and rubbed deeply with a garlic-pepper paste, then marinated overnight. It roasts low and slow for hours until the meat is tender. The heat is raised at the end to blister the skin into crackling.",
  "pronunciation": "pair-NEEL",
  "similar": [
   "Lechon",
   "Cochinita Pibil",
   "Lechona",
   "Crispy Pata",
   "Pulled Pork"
  ],
  "texture": "Silky, pull-apart meat under shatteringly crisp, puffy skin.",
  "variations": [
   "pernil navideno (Christmas style)",
   "with extra adobo",
   "slow-smoked pernil"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Croissant_de_pernil_i_formatge.jpg/960px-Croissant_de_pernil_i_formatge.jpg"
 },
 "Phanaeng Curry": {
  "flavor": "Rich and nutty with dried-chili warmth, sweet coconut, and citrusy makrut lime, balanced salty-sweet.",
  "history": "Phanaeng is a classic Thai curry, said to have roots in Persian-influenced court cooking that reached Siam centuries ago. It is thicker and drier than most Thai curries, simmered down until the coconut cream breaks and glistens with oil. It is a staple of central Thai home and restaurant cooking.",
  "ingredients": [
   "beef or chicken",
   "coconut cream",
   "phanaeng curry paste",
   "dried red chilies",
   "peanuts",
   "makrut lime leaves",
   "fish sauce",
   "palm sugar",
   "Thai basil"
  ],
  "nutrition": {
   "calories": 750,
   "carbs": 50,
   "fat": 45,
   "note": "approximate",
   "protein": 35,
   "serving": "1 bowl with rice (450 g)"
  },
  "preparation": "Coconut cream is fried with the curry paste until fragrant and the oil separates. Meat is added and simmered until tender, with peanuts and lime leaves. Fish sauce and palm sugar balance the sauce, which is reduced until thick and glossy.",
  "pronunciation": "pah-NENG",
  "similar": [
   "Massaman Curry",
   "Gulai",
   "Rogan Josh",
   "Khao Soi"
  ],
  "texture": "Thick, clinging sauce coating tender meat, with a slight crunch from crushed peanuts.",
  "variations": [
   "Phanaeng nuea (beef)",
   "Phanaeng gai (chicken)",
   "Phanaeng moo (pork)"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Phanaeng_beef_curry.jpg/960px-Phanaeng_beef_curry.jpg"
 },
 "Picanha": {
  "flavor": "Deeply beefy with a rich, buttery savor from the rendered fat cap and clean salt seasoning.",
  "history": "Picanha is the prized top sirloin cap of Brazilian churrasco culture, grilled over charcoal in the rodizio tradition of Rio Grande do Sul. Brazilian gauchos perfected the art of grilling large cuts on skewers over open fire. It is now one of the most celebrated cuts in Brazilian steakhouse cooking.",
  "ingredients": [
   "picanha (top sirloin cap)",
   "coarse sea salt",
   "charcoal or hardwood"
  ],
  "nutrition": {
   "calories": 700,
   "carbs": 0,
   "fat": 52,
   "note": "approximate",
   "protein": 55,
   "serving": "1 portion (250 g)"
  },
  "preparation": "The cut is seasoned generously with coarse salt, sometimes scored through the fat cap. It is grilled over hot charcoal, fat-side first, then sliced thin against the grain. Skewered versions are roasted slowly and carved at the table.",
  "pronunciation": "pee-KAHN-yah",
  "similar": [
   "Churrasco",
   "Steak Frites",
   "Filet Mignon",
   "Chivito",
   "Asado"
  ],
  "texture": "Tender and juicy with a crisp, caramelized fat cap and a pleasantly hearty bite.",
  "variations": [
   "rodizio-style skewered picanha",
   "pan-seared picanha steaks",
   "picanha with garlic butter"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/GrilledPicanha.jpg/960px-GrilledPicanha.jpg"
 },
 "Pizza Napoletana": {
  "flavor": "Bright, sweet-acidic tomato balanced by milky fresh mozzarella, fragrant basil, and a whisper of wood smoke.",
  "history": "Pizza Napoletana is the classic pizza of Naples, Italy, baked in blazing-hot wood-fired ovens. It developed from the flatbreads of Naples' working-class neighborhoods and is now protected by the Associazione Verace Pizza Napoletana, which defines its ingredients and method. It is widely regarded as the original modern pizza.",
  "ingredients": [
   "00 flour",
   "water",
   "sea salt",
   "fresh yeast",
   "San Marzano tomatoes",
   "fior di latte mozzarella",
   "fresh basil",
   "extra-virgin olive oil"
  ],
  "nutrition": {
   "calories": 800,
   "carbs": 120,
   "fat": 22,
   "note": "approximate",
   "protein": 32,
   "serving": "1 pizza (280 g)"
  },
  "preparation": "The dough ferments for many hours, then is hand-stretched thin with a puffy rim. It is topped simply and baked for about 60 to 90 seconds in a wood-fired oven at very high heat. It is finished with a drizzle of olive oil and fresh basil.",
  "pronunciation": "PEET-sah nah-poh-leh-TAH-nah",
  "similar": [
   "Margherita Pizza",
   "Calzone",
   "Focaccia",
   "Stromboli",
   "Pizza al Taglio"
  ],
  "texture": "Soft, supple, and slightly soupy in the center with a puffy, leopard-spotted, chewy crust.",
  "variations": [
   "Marinara (tomato, garlic, oregano, no cheese)",
   "Margherita (tomato, mozzarella, basil)",
   "Diavola (with spicy salami)"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Pizza_Napoletana_in_Pompei%2C_Italy.jpg/960px-Pizza_Napoletana_in_Pompei%2C_Italy.jpg"
 },
 "Pollo a la Brasa": {
  "flavor": "Smoky and savory with the fruity depth of aji panca, cumin warmth, and tangy aji sauces.",
  "history": "Pollo a la brasa is Peru's beloved rotisserie chicken, created in Lima in the mid-20th century when Swiss immigrants introduced the rotating spit. Marinated in aji panca and spices, it is roasted over open flame. It is now Peru's most popular restaurant dish, served with fries and aji sauces.",
  "ingredients": [
   "whole chicken",
   "aji panca",
   "garlic",
   "cumin",
   "soy sauce",
   "vinegar",
   "oregano",
   "beer",
   "salt",
   "pepper",
   "fries",
   "aji amarillo sauce"
  ],
  "nutrition": {
   "calories": 900,
   "carbs": 55,
   "fat": 48,
   "note": "approximate",
   "protein": 50,
   "serving": "1 quarter with fries (450 g)"
  },
  "preparation": "The chicken marinates for hours in a dark, spiced aji panca mixture. It rotates on a spit over open flame until the skin is crisp and burnished. Served quartered with thick fries and green and yellow aji sauces.",
  "pronunciation": "POH-yoh ah lah BRAH-sah",
  "similar": [
   "Tandoori Chicken",
   "Churrasco",
   "Anticuchos",
   "Milanesa"
  ],
  "texture": "Crackling, well-seasoned skin over juicy, evenly roasted meat, with crisp fries.",
  "variations": [
   "with extra aji amarillo",
   "quarter chicken with fries (classic)",
   "spicy rocoto sauce version"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/El_pollo_a_la_brasa_es_el_plato_m%C3%A1s_consumido_en_Lima.png/960px-El_pollo_a_la_brasa_es_el_plato_m%C3%A1s_consumido_en_Lima.png"
 },
 "Rawon": {
  "flavor": "Deep, earthy, and savory with a distinctive nutty bitterness from keluak, warmed by turmeric and galangal.",
  "history": "Rawon is a signature beef soup of East Java, Indonesia, distinguished by its near-black broth. The dark color comes from keluak, a fermented nut native to Southeast Asia used in Javanese cooking. It is a beloved comfort dish in Surabaya and across Java.",
  "ingredients": [
   "beef brisket or shank",
   "keluak nuts",
   "shallots",
   "garlic",
   "turmeric",
   "galangal",
   "lemongrass",
   "candlenut",
   "coriander",
   "salt",
   "bean sprouts",
   "salted egg",
   "rice"
  ],
  "nutrition": {
   "calories": 600,
   "carbs": 60,
   "fat": 22,
   "note": "approximate",
   "protein": 35,
   "serving": "1 bowl with rice (500 g)"
  },
  "preparation": "Keluak flesh is ground into a spice paste with aromatics and sauteed until fragrant. Beef simmers in the darkened broth until tender. It is served with rice, bean sprouts, and salted egg on the side.",
  "pronunciation": "rah-WOHN",
  "similar": [
   "Soto Ayam",
   "Bakso",
   "Gulai",
   "Rendang",
   "Harira"
  ],
  "texture": "Tender chunks of beef in a rich, opaque broth, with crunchy sprouts and creamy salted egg.",
  "variations": [
   "Rawon Surabaya (classic)",
   "Rawon with extra bean sprouts",
   "Rawon with fried shallots"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bumbu_Rawon.jpg/960px-Bumbu_Rawon.jpg"
 },
 "Rechta": {
  "flavor": "Delicately wheaty noodles in a warm, gently spiced broth with cinnamon and the savoriness of slow-cooked meat.",
  "history": "Rechta is a traditional Algerian noodle dish, especially associated with Algiers and festive meals. The noodles are rolled by hand from semolina dough, a skill passed down through generations. It is commonly served at Eid celebrations and family gatherings with a fragrant broth.",
  "ingredients": [
   "fine semolina",
   "water",
   "salt",
   "chicken or lamb",
   "chickpeas",
   "onion",
   "cinnamon",
   "butter",
   "black pepper",
   "turnips",
   "carrots"
  ],
  "nutrition": {
   "calories": 550,
   "carbs": 65,
   "fat": 18,
   "note": "approximate",
   "protein": 30,
   "serving": "1 bowl (400 g)"
  },
  "preparation": "The semolina dough is rolled into very thin strands, cut into fine noodles, and steamed in a couscoussier. A spiced broth with meat and chickpeas is prepared separately. The noodles are served in bowls with the hot broth ladled over.",
  "pronunciation": "RESH-tah",
  "similar": [
   "Couscous",
   "Harira",
   "Koshari"
  ],
  "texture": "Silky, fine noodles that soak up the broth, with tender meat and creamy chickpeas.",
  "variations": [
   "Rechta with chicken",
   "Rechta with lamb",
   "sweet-and-savory version with caramelized onions and raisins"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Rechta_de_Blida.jpg/960px-Rechta_de_Blida.jpg"
 },
 "Rendang": {
  "flavor": "Deeply caramelized and complex, with toasted coconut, warm spices, and gentle chili heat.",
  "history": "Rendang is the slow-braised beef of the Minangkabau people of West Sumatra, cooked for hours until the coconut milk caramelizes into a dark coating. It was developed as a way to preserve meat for long journeys. It is Indonesia's most celebrated dish and a centerpiece of festive meals.",
  "ingredients": [
   "beef",
   "coconut milk",
   "toasted coconut",
   "lemongrass",
   "galangal",
   "turmeric",
   "chilies",
   "shallots",
   "garlic",
   "ginger",
   "kaffir lime leaves"
  ],
  "nutrition": {
   "calories": 750,
   "carbs": 45,
   "fat": 44,
   "note": "approximate",
   "protein": 42,
   "serving": "1 portion with rice (400 g)"
  },
  "preparation": "Beef simmers for hours in coconut milk with a pounded spice paste. The liquid slowly reduces and the coconut caramelizes, coating the meat in a dark, intense paste. It is traditionally served with rice.",
  "pronunciation": "ren-DAHNG",
  "similar": [
   "Gulai",
   "Massaman Curry",
   "Rogan Josh",
   "Soto Ayam"
  ],
  "texture": "Tender beef coated in a dry, dark, almost jammy spiced crust.",
  "variations": [
   "rendang sapi (beef, classic)",
   "rendang ayam (chicken)",
   "rendang with extra toasted coconut"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Rendang_dish_closeup.jpg"
 },
 "Seco de Cabrito": {
  "flavor": "Herbaceous and deeply savory, with cilantro brightness, mild chili warmth, and the malty note of corn beer.",
  "history": "Seco de cabrito is a signature stew of northern Peru, especially the Lambayeque region. Goat is braised in cilantro and chicha de jora, the traditional corn beer of the Andes. It is classic criollo comfort food, often served with beans and rice.",
  "ingredients": [
   "goat meat",
   "cilantro",
   "chicha de jora (corn beer)",
   "onion",
   "garlic",
   "aji amarillo",
   "cumin",
   "potatoes",
   "peas",
   "salt"
  ],
  "nutrition": {
   "calories": 700,
   "carbs": 55,
   "fat": 30,
   "note": "approximate",
   "protein": 45,
   "serving": "1 plate (450 g)"
  },
  "preparation": "Goat browns in a heavy pot, then simmers for hours in a cilantro-chicha broth with aji amarillo. The sauce reduces to a rich, green gravy. Served with white rice, beans, and sometimes yuca.",
  "pronunciation": "SEH-koh deh kah-BREE-toh",
  "similar": [
   "Goulash",
   "Irish Stew",
   "Boeuf Bourguignon",
   "Birria",
   "Pozole"
  ],
  "texture": "Falling-off-the-bone goat in a thick, glossy green sauce with soft potatoes.",
  "variations": [
   "with extra cilantro",
   "seco de cordero (lamb version)",
   "northern style with loche squash"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Seco_de_Cordero_%28Lamb_Leg_Stew%29_from_Lima_Peruvian_at_Off_the_Grid-_Fort_Mason_Center_%287423438016%29.jpg/960px-Seco_de_Cordero_%28Lamb_Leg_Stew%29_from_Lima_Peruvian_at_Off_the_Grid-_Fort_Mason_Center_%287423438016%29.jpg"
 },
 "Sinigang": {
  "flavor": "Bright, mouthwatering sourness balanced by savory pork or seafood and sweet vegetables.",
  "history": "Sinigang is the Philippines' beloved sour soup, its tang traditionally from tamarind. Sour broths are ancient in Filipino cooking, made with whatever souring fruit was at hand. It is everyday comfort food, served steaming with rice.",
  "ingredients": [
   "pork, shrimp, or fish",
   "tamarind",
   "water spinach",
   "radish",
   "tomatoes",
   "onion",
   "long green chilies",
   "taro",
   "fish sauce",
   "rice"
  ],
  "nutrition": {
   "calories": 450,
   "carbs": 55,
   "fat": 12,
   "note": "approximate",
   "protein": 32,
   "serving": "1 bowl with rice (500 g)"
  },
  "preparation": "Tamarind simmers into a sour broth with onion and tomato. The protein cooks until tender, then vegetables go in order of cooking time. Seasoned with fish sauce, it is served hot with rice.",
  "pronunciation": "see-nee-GAHNG",
  "similar": [
   "Tom Yum Goong",
   "Laksa",
   "Pho",
   "Harira"
  ],
  "texture": "Clear, light broth loaded with tender meat and soft-cooked garden vegetables.",
  "variations": [
   "sinigang na baboy (pork)",
   "sinigang na hipon (shrimp)",
   "sinigang na isda (fish)"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sinigang_na_Bangus_sa_Biyabas_01.jpg/960px-Sinigang_na_Bangus_sa_Biyabas_01.jpg"
 },
 "Spaghetti alla Carbonara": {
  "flavor": "Salty-porky and sharp with Pecorino bite, black pepper heat, and rich egg silkiness.",
  "history": "Spaghetti alla carbonara is Rome's iconic pasta, made without cream: guanciale, Pecorino Romano, egg, and black pepper. Its exact origins are debated, but it became a symbol of Roman cucina povera after the mid-20th century. The silky sauce comes purely from emulsified egg and cheese.",
  "ingredients": [
   "spaghetti",
   "guanciale",
   "Pecorino Romano",
   "eggs",
   "black pepper",
   "salt"
  ],
  "nutrition": {
   "calories": 750,
   "carbs": 75,
   "fat": 35,
   "note": "approximate",
   "protein": 32,
   "serving": "1 plate (300 g)"
  },
  "preparation": "Guanciale renders crisp in a pan while the pasta boils. Off the heat, eggs and Pecorino are tossed with the hot pasta and a splash of pasta water. The residual heat forms a glossy sauce, finished with cracked pepper.",
  "pronunciation": "spah-GET-tee AH-lah kahr-boh-NAH-rah",
  "similar": [
   "Cacio e Pepe",
   "Spaghetti alle Vongole",
   "Tagliatelle al Ragù",
   "Pappardelle al Cinghiale"
  ],
  "texture": "Glossy, clinging sauce coating al dente spaghetti with crisp-chewy guanciale bits.",
  "variations": [
   "with extra Pecorino",
   "rigatoni alla carbonara",
   "with pancetta instead of guanciale"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Spaghetti_alla_Carbonara_%282%29.jpg"
 },
 "Tagliatelle al Ragù": {
  "flavor": "Deeply meaty and gently sweet, with the mellow richness of milk-tamed tomato and pork.",
  "history": "Tagliatelle al ragu is the signature pasta of Bologna, in Italy's Emilia-Romagna region. The slow-simmered meat ragu is one of Italy's great sauces, traditionally served with wide egg noodles rather than spaghetti. It is a cornerstone of Bolognese Sunday cooking.",
  "ingredients": [
   "tagliatelle (egg pasta)",
   "ground beef",
   "ground pork",
   "pancetta",
   "onion",
   "carrot",
   "celery",
   "tomato paste",
   "dry white wine",
   "milk",
   "Parmigiano-Reggiano",
   "olive oil"
  ],
  "nutrition": {
   "calories": 750,
   "carbs": 70,
   "fat": 32,
   "note": "approximate",
   "protein": 40,
   "serving": "1 plate (350 g)"
  },
  "preparation": "A soffritto of onion, carrot, and celery softens in olive oil with pancetta. The meats brown, wine deglazes, and tomato and milk join for a long, gentle simmer. The ragu is tossed with fresh tagliatelle and Parmigiano.",
  "pronunciation": "tahl-yah-TEH-leh ahl rah-GOO",
  "similar": [
   "Lasagne alla Bolognese",
   "Pappardelle al Cinghiale",
   "Spaghetti alla Carbonara",
   "Cacio e Pepe"
  ],
  "texture": "Silky ribbons of egg pasta coated in a thick, clinging, finely textured sauce.",
  "variations": [
   "with extra milk (Bolognese style)",
   "with porcini mushrooms",
   "half beef, half pork"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Happy_Luca_tagliatelle_al_rag%C3%B9.jpg/960px-Happy_Luca_tagliatelle_al_rag%C3%B9.jpg"
 },
 "Texas Brisket": {
  "flavor": "Profoundly beefy with clean pepper heat, sweet smoke, and rendered fat richness.",
  "history": "Texas brisket is the cornerstone of Central Texas barbecue, shaped by German and Czech immigrants who adapted their smoking traditions to beef. Cooked low and slow over post oak, it became the defining dish of Texas BBQ joints. The black bark and smoke ring are its badges of honor.",
  "ingredients": [
   "whole beef brisket (packer cut)",
   "coarse salt",
   "coarse black pepper",
   "post oak wood"
  ],
  "nutrition": {
   "calories": 900,
   "carbs": 2,
   "fat": 70,
   "note": "approximate",
   "protein": 60,
   "serving": "1 portion (300 g)"
  },
  "preparation": "The brisket is trimmed and seasoned simply with salt and pepper. It smokes at low temperature for 12 or more hours over post oak, wrapped partway through. Rested for hours, it is sliced against the grain.",
  "pronunciation": "TEX-iss BRISS-kit",
  "similar": [
   "Pulled Pork",
   "Burnt Ends",
   "Churrasco",
   "Asado"
  ],
  "texture": "Bark-crisped outside with a jiggly, melting interior that pulls apart easily.",
  "variations": [
   "Central Texas salt-and-pepper style",
   "with post oak smoke",
   "brisket burnt ends"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Smoked_brisket%2C_white_bread%2C_horseradish%2C_slaw%2C_%2815452301364%29.jpg/960px-Smoked_brisket%2C_white_bread%2C_horseradish%2C_slaw%2C_%2815452301364%29.jpg"
 },
 "Tibs": {
  "flavor": "Bold and aromatic, with berbere's warm chili-fenugreek complexity and the richness of spiced butter.",
  "history": "Tibs is a classic Ethiopian dish of meat sauteed with spices and clarified butter. It is a staple of Ethiopian celebrations and restaurant cooking, often served sizzling on a hot plate. Eaten with injera, it is central to communal Ethiopian dining.",
  "ingredients": [
   "beef or lamb",
   "berbere spice",
   "niter kibbeh (spiced clarified butter)",
   "garlic",
   "onion",
   "rosemary",
   "green chili",
   "salt",
   "injera"
  ],
  "nutrition": {
   "calories": 700,
   "carbs": 40,
   "fat": 38,
   "note": "approximate",
   "protein": 45,
   "serving": "1 plate with injera (400 g)"
  },
  "preparation": "Meat is cut into small cubes and seared quickly in hot niter kibbeh with berbere. Onions, garlic, and chili are tossed in at the end. It is served sizzling, often on injera with extra injera for scooping.",
  "pronunciation": "tibss",
  "similar": [
   "Doro Wat",
   "Injera",
   "Sambusa"
  ],
  "texture": "Seared, juicy meat cubes with softened onions, eaten wrapped in spongy injera.",
  "variations": [
   "tibs firfir (tossed with torn injera)",
   "awaze tibs (with spicy dipping sauce)",
   "shekla tibs (served in a clay pot)"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Lock_89_%28Tibs_Lock%29%2C_Rochdale_Canal_-_geograph.org.uk_-_4253702.jpg"
 },
 "Tom Yum Goong": {
  "flavor": "Electrically hot and sour, with lemongrass-citrus perfume and sweet prawn depth.",
  "history": "Tom yum goong is Thailand's famous hot-and-sour prawn soup, built on lemongrass, galangal, and makrut lime. It is a classic of central Thai cooking, balancing the four fundamental Thai flavors. The clear version showcases the aromatic broth at its purest.",
  "ingredients": [
   "river prawns",
   "lemongrass",
   "galangal",
   "makrut lime leaves",
   "Thai chilies",
   "fish sauce",
   "lime juice",
   "mushrooms",
   "cilantro",
   "chicken stock"
  ],
  "nutrition": {
   "calories": 250,
   "carbs": 15,
   "fat": 8,
   "note": "approximate",
   "protein": 30,
   "serving": "1 bowl (400 g)"
  },
  "preparation": "Aromatics simmer in stock to build a fragrant base. Prawns and mushrooms cook briefly, then the soup comes off the heat. Fish sauce and lime juice are added at the end to keep the flavors bright.",
  "pronunciation": "tohm yoom goong",
  "similar": [
   "Tom Kha Gai",
   "Laksa",
   "Sinigang",
   "Pho"
  ],
  "texture": "Clear, light broth with snappy prawns and tender mushrooms.",
  "variations": [
   "clear broth (classic)",
   "with coconut milk (tom yum nam khon)",
   "extra-spicy"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Tom_yum_goong-01.jpg/960px-Tom_yum_goong-01.jpg"
 },
 "Tonkotsu Ramen": {
  "flavor": "Intensely porky and creamy, with roasted garlic depth and the salt-sweet balance of tare.",
  "history": "Tonkotsu ramen comes from Fukuoka on Japan's southern island of Kyushu. Its milky pork-bone broth is made by boiling bones at a rolling boil for 12 to 18 hours. It grew from postwar street stalls into one of Japan's defining ramen styles.",
  "ingredients": [
   "pork bones",
   "thin wheat noodles",
   "chashu pork",
   "black garlic oil",
   "soft-boiled egg",
   "nori",
   "scallions",
   "bamboo shoots",
   "sesame"
  ],
  "nutrition": {
   "calories": 850,
   "carbs": 80,
   "fat": 38,
   "note": "approximate",
   "protein": 40,
   "serving": "1 bowl (600 g)"
  },
  "preparation": "Pork bones boil hard for many hours until the broth turns opaque and creamy. Noodles cook in under a minute and are added to the bowl with tare seasoning. Toppings are arranged and the bowl is finished with black garlic oil.",
  "pronunciation": "tohn-KOHT-soo RAH-men",
  "similar": [
   "Shoyu Ramen",
   "Miso Ramen",
   "Shio Ramen",
   "Tsukemen",
   "Abura Soba"
  ],
  "texture": "Rich, lip-coating broth with springy thin noodles, melting chashu, and jammy egg.",
  "variations": [
   "with extra black garlic oil",
   "kotteri (extra-rich broth)",
   "with extra chashu"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/A_bowl_of_tonkotsu_ramen_at_Ichiran_in_Tokyo_in_July_2026.jpg/960px-A_bowl_of_tonkotsu_ramen_at_Ichiran_in_Tokyo_in_July_2026.jpg"
 },
 "Unadon": {
  "flavor": "Rich, fatty eel glazed in sweet-savory tare with a whisper of smoky char and tingling sansho.",
  "history": "Unadon is grilled freshwater eel over rice, a beloved Japanese summer dish. Eel has been eaten in Japan for centuries and became especially popular in the Edo period, when kabayaki grilling developed. It is traditionally eaten on midsummer days to build stamina in the heat.",
  "ingredients": [
   "freshwater eel (unagi)",
   "short-grain rice",
   "soy sauce",
   "mirin",
   "sake",
   "sugar",
   "sansho pepper"
  ],
  "nutrition": {
   "calories": 700,
   "carbs": 75,
   "fat": 28,
   "note": "approximate",
   "protein": 35,
   "serving": "1 box (350 g)"
  },
  "preparation": "The eel is filleted, skewered, and grilled, then steamed to soften. It is basted repeatedly with sweet-savory tare and grilled again until lacquered. It is laid over steamed rice and dusted with sansho.",
  "pronunciation": "oo-nah-DOHN",
  "similar": [
   "Unagi",
   "Sushi",
   "Tempura"
  ],
  "texture": "Silky, almost melting eel over soft, steaming rice, with crisp caramelized edges.",
  "variations": [
   "unaju (served in a lacquered box)",
   "hitsumabushi (Nagoya style, with dashi)",
   "shirayaki (grilled without sauce)"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Kaidaya_Unadon_02.jpg/960px-Kaidaya_Unadon_02.jpg"
 },
 "Weihnachtsgans": {
  "flavor": "Rich, gamey goose with sweet-tart apple and chestnut stuffing, balanced by tangy red cabbage.",
  "history": "The Weihnachtsgans, or Christmas goose, is Germany's traditional holiday roast. Goose has been the festive bird of German Christmas tables for centuries, served with red cabbage and dumplings. The long roasting renders the rich fat that bastes the bird to crispness.",
  "ingredients": [
   "whole goose",
   "apples",
   "onions",
   "chestnuts",
   "marjoram",
   "salt",
   "pepper",
   "red cabbage",
   "potato dumplings"
  ],
  "nutrition": {
   "calories": 1000,
   "carbs": 45,
   "fat": 65,
   "note": "approximate",
   "protein": 55,
   "serving": "1 plate (450 g)"
  },
  "preparation": "The goose is stuffed with apples, onions, and chestnuts, and seasoned with marjoram. It roasts for hours, basted in its own fat, until the skin is crisp and golden. Served with braised red cabbage, dumplings, and gravy.",
  "pronunciation": "VY-nahkts-gahns",
  "similar": [
   "Peking Duck",
   "Duck Confit",
   "Beef Wellington"
  ],
  "texture": "Crisp, lacquered skin over succulent dark meat, with fluffy dumplings and silky cabbage.",
  "variations": [
   "stuffed with apples and chestnuts (classic)",
   "with bread dumplings",
   "with kale instead of red cabbage"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Christmas-goose-%28Weihnachtsgans%29_1.jpg/960px-Christmas-goose-%28Weihnachtsgans%29_1.jpg"
 },
 "Çökertme Kebabı": {
  "flavor": "Savory seared beef with cool tangy garlic yogurt, sweet tomato, and rich browned butter.",
  "history": "Çökertme kebab comes from Bodrum on Turkey's Aegean coast, named after the village of Çökertme. It layers the classic Turkish trio of meat, yogurt, and tomato sauce over crisp potatoes. It is a restaurant favorite that showcases Bodrum's take on the kebab tradition.",
  "ingredients": [
   "veal or beef strips",
   "potatoes",
   "plain yogurt",
   "garlic",
   "tomato paste",
   "butter",
   "olive oil",
   "dried mint",
   "paprika",
   "salt",
   "black pepper"
  ],
  "nutrition": {
   "calories": 850,
   "carbs": 55,
   "fat": 48,
   "note": "approximate",
   "protein": 45,
   "serving": "1 plate (450 g)"
  },
  "preparation": "Potatoes are cut into matchsticks and fried until crisp. Marinated meat strips are seared quickly over high heat. The plate is built with potatoes, meat, garlic yogurt, and a sizzling tomato-butter sauce poured over.",
  "pronunciation": "chuh-KERT-meh keh-BAH-buh",
  "similar": [
   "Döner Kebab",
   "Adana Kebab",
   "İskender Kebap",
   "Pide",
   "Lahmacun"
  ],
  "texture": "Tender meat and creamy yogurt over crisp-edged potatoes, with the sauce softening everything together.",
  "variations": [
   "with chicken instead of veal",
   "extra-spicy with Urfa pepper",
   "served over pita instead of potatoes"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/COKERTME_KEBAB_%28with_chicken%29_-_Efes_Town_Turkish_Cuisine_2026-01-27.jpg/960px-COKERTME_KEBAB_%28with_chicken%29_-_Efes_Town_Turkish_Cuisine_2026-01-27.jpg"
 },
 "İskender Kebap": {
  "flavor": "Savory lamb with bright tomato, cool tangy yogurt, and nutty browned butter.",
  "history": "Iskender kebab was created in Bursa, Turkey, by Iskender Efendi, who had the idea of roasting lamb on a vertical spit and serving it sliced over bread. It became one of Turkey's most famous kebabs and a point of pride for Bursa. The sizzling browned butter poured over at serving is its signature.",
  "ingredients": [
   "lamb (doner meat)",
   "pita bread",
   "tomato sauce",
   "plain yogurt",
   "butter",
   "tomato paste",
   "dried oregano",
   "salt",
   "black pepper"
  ],
  "nutrition": {
   "calories": 900,
   "carbs": 55,
   "fat": 50,
   "note": "approximate",
   "protein": 50,
   "serving": "1 plate (450 g)"
  },
  "preparation": "Thin slices of vertical-spit lamb are laid over buttered, toasted pita. Hot tomato sauce is spooned over, and foaming browned butter is poured sizzling across the top. Cool yogurt is served alongside.",
  "pronunciation": "iss-ken-DER keh-BAHP",
  "similar": [
   "Döner Kebab",
   "Adana Kebab",
   "Pide",
   "Çökertme Kebabı",
   "Cağ Kebabı"
  ],
  "texture": "Tender meat over sauce-soaked pita, with the contrast of hot butter and cool yogurt.",
  "variations": [
   "with extra butter",
   "spicy with pul biber",
   "Iskender with eggplant"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/3/38/Iskender_kebap.jpg"
 },
 "Miso Soup": {
  "history": "Miso is a fermented soybean paste with a history stretching back centuries in Japan, developing alongside temple cuisine and everyday home cooking. Miso soup became a daily staple across Japanese households, traditionally served with rice at breakfast and dinner.",
  "ingredients": [
   "miso paste",
   "dashi stock",
   "silken tofu",
   "wakame seaweed",
   "scallions",
   "kombu",
   "bonito flakes",
   "shiitake mushrooms",
   "water"
  ],
  "preparation": "Dashi is prepared from kombu and bonito flakes, then miso is whisked into the hot broth off the boil to preserve its flavor. Cubes of tofu and wakame are added and the soup is served immediately, before the miso settles.",
  "flavor": "Savory, salty, and deeply umami, with a gentle sweetness; lighter and milder with white miso, bolder with red miso.",
  "texture": "A light, silky broth with soft cubes of tofu and slippery ribbons of wakame.",
  "similar": [
   "Pho",
   "Chicken Noodle Soup",
   "Avgolemono",
   "Minestrone",
   "Mulligatawny"
  ],
  "variations": [
   "Shiro white miso soup",
   "Aka red miso soup",
   "Tonjiru pork miso soup",
   "Clam miso soup"
  ],
  "nutrition": {
   "serving": "1 bowl (250 g)",
   "calories": 70,
   "protein": 5,
   "carbs": 6,
   "fat": 3,
   "note": "approximate"
  },
  "pronunciation": "MEE-soh soop",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Miso_Soup_with_Rice.jpg/960px-Miso_Soup_with_Rice.jpg"
 },
 "Borscht": {
  "history": "Borscht is a beet soup of Eastern Europe, most closely associated with Ukraine, where it has been cooked for centuries as a hearty staple of rural households. It spread across Russia, Poland, and the diaspora, with each region keeping its own version.",
  "ingredients": [
   "beets",
   "beef stock",
   "cabbage",
   "potatoes",
   "carrots",
   "onions",
   "garlic",
   "tomato paste",
   "dill",
   "sour cream",
   "bay leaves",
   "vinegar"
  ],
  "preparation": "Beets are simmered until tender, then shredded vegetables and stock are added and the pot cooks down into a rich soup. It is finished with vinegar and garlic, and served hot with sour cream and dill, or chilled in summer.",
  "flavor": "Sweet earthiness from the beets balanced by sour notes from vinegar or fermented beet juice.",
  "texture": "A hearty broth with tender chunks of vegetables and a deep ruby color.",
  "similar": [
   "Minestrone",
   "Chicken Noodle Soup",
   "Avgolemono",
   "Gazpacho",
   "Mulligatawny"
  ],
  "variations": [
   "Ukrainian borscht",
   "Russian borscht",
   "Cold borscht",
   "White borscht"
  ],
  "nutrition": {
   "serving": "1 bowl (300 g)",
   "calories": 120,
   "protein": 4,
   "carbs": 18,
   "fat": 5,
   "note": "approximate"
  },
  "pronunciation": "BORSH-ch",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/0/09/Borscht_with_cream.jpg"
 },
 "Clam Chowder": {
  "history": "Clam chowder developed along the New England coast, where abundant clams met shipboard cooking traditions and salt pork. The creamy white New England version became the region's signature, while a tomato-based Manhattan style grew up as its New York rival.",
  "ingredients": [
   "clams",
   "potatoes",
   "onion",
   "celery",
   "bacon",
   "heavy cream",
   "butter",
   "flour",
   "clam juice",
   "thyme",
   "bay leaf",
   "black pepper"
  ],
  "preparation": "Bacon is rendered and vegetables softened in the fat, then flour is stirred in to make a roux. Clam juice and potatoes simmer until tender, and the clams and cream go in at the end so they stay delicate.",
  "flavor": "Briny, rich, and creamy, with smoky bacon undertones and a gentle thyme warmth.",
  "texture": "A thick, velvety broth with tender potato chunks and chewy morsels of clam.",
  "similar": [
   "Lobster Bisque",
   "Chicken Noodle Soup",
   "Mulligatawny",
   "Hot and Sour Soup",
   "Minestrone"
  ],
  "variations": [
   "New England clam chowder",
   "Manhattan clam chowder",
   "Rhode Island clear chowder",
   "Seafood chowder"
  ],
  "nutrition": {
   "serving": "1 bowl (300 g)",
   "calories": 280,
   "protein": 12,
   "carbs": 25,
   "fat": 15,
   "note": "approximate"
  },
  "pronunciation": "klam CHOW-der",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/2021-09-04_Fluffy_Clam_Chowder.jpg/960px-2021-09-04_Fluffy_Clam_Chowder.jpg"
 },
 "Tom Kha Gai": {
  "history": "Tom kha gai is a coconut soup of central Thailand, named for the galangal (kha) and chicken (gai) at its heart. It belongs to the tom family of Thai boiled dishes, long cooked in home kitchens and street stalls across the country.",
  "ingredients": [
   "coconut milk",
   "chicken breast",
   "galangal",
   "lemongrass",
   "kaffir lime leaves",
   "straw mushrooms",
   "fish sauce",
   "lime juice",
   "bird's eye chilies",
   "chicken stock",
   "cilantro",
   "palm sugar"
  ],
  "preparation": "Coconut milk is simmered with galangal, lemongrass, and lime leaves until fragrant. Chicken is poached in the broth, then the soup is seasoned with fish sauce, lime juice, and a touch of sugar, and served hot.",
  "flavor": "Creamy and fragrant, balancing sour lime, salty fish sauce, and gentle chili heat.",
  "texture": "A silky coconut broth with tender chicken and soft mushrooms.",
  "similar": [
   "Hot and Sour Soup",
   "Massaman Curry",
   "Khao Soi",
   "Tonkotsu Ramen",
   "Pho"
  ],
  "variations": [
   "Tom kha talay with seafood",
   "Tom kha het with mushrooms",
   "Tom kha with shrimp",
   "Extra-spicy tom kha"
  ],
  "nutrition": {
   "serving": "1 bowl (300 g)",
   "calories": 260,
   "protein": 18,
   "carbs": 10,
   "fat": 18,
   "note": "approximate"
  },
  "pronunciation": "tom KAH guy",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Tom_Kha_Gai_-_Thai_Food.jpg/960px-Tom_Kha_Gai_-_Thai_Food.jpg"
 },
 "Pad Thai": {
  "history": "Pad Thai is Thailand's national noodle dish, promoted in the mid-20th century as part of an effort to popularize rice noodles and Thai culinary identity. It went on to become one of the world's most recognized stir-fried noodle dishes.",
  "ingredients": [
   "rice noodles",
   "shrimp",
   "tofu",
   "eggs",
   "bean sprouts",
   "chives",
   "peanuts",
   "tamarind paste",
   "fish sauce",
   "palm sugar",
   "garlic",
   "lime"
  ],
  "preparation": "Rice noodles are soaked until pliable, then wok-fried with egg, tofu, and shrimp. A tamarind-based sauce is tossed through, and the dish is finished with peanuts, bean sprouts, and a wedge of lime.",
  "flavor": "Sweet, sour, and salty in balance, with nutty crunch and a bright squeeze of lime.",
  "texture": "Chewy noodles in a glossy sauce, contrasted with crisp sprouts and crunchy peanuts.",
  "similar": [
   "Pad See Ew",
   "Drunken Noodles",
   "Khao Soi",
   "Massaman Curry"
  ],
  "variations": [
   "Pad thai with shrimp",
   "Pad thai with chicken",
   "Vegetarian pad thai",
   "Pad thai wrapped in egg"
  ],
  "nutrition": {
   "serving": "1 plate (350 g)",
   "calories": 550,
   "protein": 25,
   "carbs": 65,
   "fat": 22,
   "note": "approximate"
  },
  "pronunciation": "pad TIE",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Chicken_Pad_Thai_dish_served_at_Indooroopilly_Shopping_Centre%2C_Brisbane.jpg/960px-Chicken_Pad_Thai_dish_served_at_Indooroopilly_Shopping_Centre%2C_Brisbane.jpg"
 },
 "Banh Mi": {
  "history": "Banh mi grew out of French colonial influence in Vietnam, when the baguette met Vietnamese pickles, pate, and herbs. It became the country's beloved street sandwich, sold from carts and stalls in every city.",
  "ingredients": [
   "baguette",
   "pork belly",
   "pate",
   "pickled daikon and carrots",
   "cucumber",
   "cilantro",
   "mayonnaise",
   "jalapeno",
   "fish sauce",
   "soy sauce",
   "garlic",
   "black pepper"
  ],
  "preparation": "The baguette is split and toasted until crisp, then spread with mayonnaise and pate. It is layered with meat, pickled vegetables, cucumber, and fresh herbs, and served immediately.",
  "flavor": "Crisp, tangy, and savory, with fresh herbs and a gentle chili heat.",
  "texture": "A crackly crust and airy crumb against crunchy pickles and tender meat.",
  "similar": [
   "Gua Bao",
   "Banh Xeo",
   "Gyro",
   "Croque Monsieur"
  ],
  "variations": [
   "Banh mi thit with pork",
   "Banh mi ga with chicken",
   "Banh mi chay vegetarian",
   "Banh mi op la with fried egg"
  ],
  "nutrition": {
   "serving": "1 sandwich (250 g)",
   "calories": 500,
   "protein": 28,
   "carbs": 55,
   "fat": 20,
   "note": "approximate"
  },
  "pronunciation": "bahn MEE",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Banh_mi_sandwich.jpg/960px-Banh_mi_sandwich.jpg"
 },
 "Shawarma": {
  "history": "Shawarma developed from Ottoman-era vertical roasting traditions in the Levant, a close cousin of the Turkish doner. It became a defining street food of the Middle East, wrapped in flatbread with tahini, pickles, and salads.",
  "ingredients": [
   "chicken thighs",
   "pita bread",
   "tahini",
   "garlic sauce",
   "pickles",
   "tomatoes",
   "onions",
   "parsley",
   "cumin",
   "paprika",
   "turmeric",
   "olive oil"
  ],
  "preparation": "Meat is marinated in warm spices, stacked on a vertical spit, and slow-roasted until the edges crisp. It is shaved thin to order and wrapped in pita with garlic sauce, tahini, pickles, and salads.",
  "flavor": "Warmly spiced and garlicky, tangy with pickles and creamy with tahini.",
  "texture": "Crisp-edged shaved meat in soft warm pita, with crunchy pickles for contrast.",
  "similar": [
   "Gyro",
   "Gua Bao",
   "Banh Xeo",
   "Falafel"
  ],
  "variations": [
   "Chicken shawarma",
   "Beef shawarma",
   "Shawarma plate",
   "Shawarma in laffa bread"
  ],
  "nutrition": {
   "serving": "1 wrap (300 g)",
   "calories": 600,
   "protein": 35,
   "carbs": 45,
   "fat": 30,
   "note": "approximate"
  },
  "pronunciation": "shuh-WAR-muh",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lebanon%2C_Baalbek%2C_Lebanese_Shawarma.jpg/960px-Lebanon%2C_Baalbek%2C_Lebanese_Shawarma.jpg"
 },
 "Poutine": {
  "history": "Poutine emerged in rural Quebec in the mid-20th century, when fries topped with cheese curds and gravy moved from local snack bars to a national symbol. It is now Canada's most famous comfort dish.",
  "ingredients": [
   "russet potatoes",
   "cheese curds",
   "beef gravy",
   "vegetable oil",
   "beef stock",
   "flour",
   "butter",
   "salt",
   "black pepper",
   "cornstarch"
  ],
  "preparation": "Potatoes are cut and double-fried until crisp, then topped with fresh cheese curds. Piping-hot gravy is poured over so the curds soften and the fries stay crisp underneath.",
  "flavor": "Salty, savory, and rich, with the mild squeak of fresh cheese curds.",
  "texture": "Crisp fries softened at the edges, melting curds, and glossy gravy.",
  "similar": [
   "Chili Cheese Fries",
   "Bratwurst",
   "Hot Dog"
  ],
  "variations": [
   "Classic poutine",
   "Italian poutine",
   "Pulled pork poutine",
   "Breakfast poutine"
  ],
  "nutrition": {
   "serving": "1 serving (400 g)",
   "calories": 750,
   "protein": 20,
   "carbs": 70,
   "fat": 45,
   "note": "approximate"
  },
  "pronunciation": "poo-TEEN",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Non-traditional_poutine_served_in_Minneapolis%2C_Minnesota%2C_USA.jpg/960px-Non-traditional_poutine_served_in_Minneapolis%2C_Minnesota%2C_USA.jpg"
 },
 "Currywurst": {
  "history": "Currywurst was born in postwar Berlin, where a street vendor began serving grilled sausage with a curry-spiced ketchup. It grew into Germany's iconic fast food, sold at stands across the country.",
  "ingredients": [
   "bratwurst",
   "ketchup",
   "curry powder",
   "tomato paste",
   "Worcestershire sauce",
   "onion",
   "paprika",
   "honey",
   "vegetable oil",
   "cayenne",
   "vinegar",
   "salt"
  ],
  "preparation": "The sausage is grilled and sliced, then spooned over with a simmered curry ketchup. It is dusted with extra curry powder and served with fries or a bread roll.",
  "flavor": "Sweet, spicy, and tangy, with warm curry aromatics.",
  "texture": "Snappy sausage under a thick, glossy sauce.",
  "similar": [
   "Bratwurst",
   "Hot Dog",
   "Chili Cheese Fries"
  ],
  "variations": [
   "Berlin-style currywurst",
   "Currywurst with fries",
   "Currywurst with mayo",
   "Vegan currywurst"
  ],
  "nutrition": {
   "serving": "1 serving with fries (400 g)",
   "calories": 800,
   "protein": 25,
   "carbs": 60,
   "fat": 50,
   "note": "approximate"
  },
  "pronunciation": "KUR-ee-vurst",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/20220430_currywurst.jpg/960px-20220430_currywurst.jpg"
 },
 "Arepas": {
  "history": "Arepas are griddled corn cakes of Venezuela and Colombia, with roots in Indigenous maize cooking that predate European arrival. They became a daily staple, split open and stuffed with cheese, meat, or beans.",
  "ingredients": [
   "masarepa",
   "water",
   "salt",
   "butter",
   "mozzarella",
   "shredded beef",
   "black beans",
   "avocado",
   "vegetable oil",
   "chicken",
   "mayonnaise",
   "cilantro"
  ],
  "preparation": "Masarepa is mixed with warm water into a soft dough and formed into discs. They are griddled, baked, or fried until golden, then split and filled while hot.",
  "flavor": "Mild, toasty corn carrying whatever savory filling is tucked inside.",
  "texture": "A crisp golden crust around a soft, steamy interior.",
  "similar": [
   "Gua Bao",
   "Gyro",
   "Banh Xeo",
   "Falafel"
  ],
  "variations": [
   "Arepa reina pepiada",
   "Arepa de queso",
   "Arepa con carne mechada",
   "Sweet arepa de choclo"
  ],
  "nutrition": {
   "serving": "2 arepas with filling (300 g)",
   "calories": 550,
   "protein": 22,
   "carbs": 60,
   "fat": 25,
   "note": "approximate"
  },
  "pronunciation": "ah-REH-pahs",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Arepas_1.jpg/960px-Arepas_1.jpg"
 },
 "Satay": {
  "history": "Satay is the skewered, grilled meat of Indonesia and Malaysia, likely influenced by kebab traditions carried by traders across the region. It became a beloved street food across Southeast Asia, always served with a rich peanut sauce.",
  "ingredients": [
   "chicken thighs",
   "coconut milk",
   "turmeric",
   "lemongrass",
   "garlic",
   "coriander",
   "cumin",
   "peanuts",
   "palm sugar",
   "tamarind",
   "soy sauce",
   "bamboo skewers"
  ],
  "preparation": "Meat is marinated in spiced coconut milk, threaded onto skewers, and grilled over charcoal until charred at the edges. It is served with peanut sauce and a cucumber relish.",
  "flavor": "Smoky, sweet, and nutty, with warm spice from turmeric and coriander.",
  "texture": "Charred edges and a juicy interior, with a creamy dipping sauce.",
  "similar": [
   "Yakitori",
   "Khao Soi",
   "Massaman Curry",
   "Drunken Noodles"
  ],
  "variations": [
   "Chicken satay",
   "Beef satay",
   "Pork satay",
   "Mutton satay"
  ],
  "nutrition": {
   "serving": "6 skewers with sauce (250 g)",
   "calories": 450,
   "protein": 35,
   "carbs": 15,
   "fat": 28,
   "note": "approximate"
  },
  "pronunciation": "sah-TAY",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Hot_Satay_%286198843578%29.jpg/960px-Hot_Satay_%286198843578%29.jpg"
 },
 "Fish and Chips": {
  "history": "Fish and chips took shape in 19th-century Britain, pairing fried fish with fried potatoes, and became the defining meal of the industrial working class. It remains Britain's most famous takeaway dish.",
  "ingredients": [
   "cod",
   "flour",
   "beer",
   "baking powder",
   "potatoes",
   "vegetable oil",
   "malt vinegar",
   "tartar sauce",
   "salt",
   "black pepper",
   "lemon",
   "peas"
  ],
  "preparation": "Fish is dipped in a light batter and deep-fried until golden, while the chips are fried twice for extra crispness. It is served with malt vinegar, salt, and tartar sauce.",
  "flavor": "Crisp and savory, lifted by the tang of malt vinegar and lemon.",
  "texture": "A shattering batter around flaky fish, with fluffy-crisp chips.",
  "similar": [
   "Chili Cheese Fries",
   "Bratwurst",
   "Hot Dog",
   "Fried Chicken",
   "Tempura"
  ],
  "variations": [
   "Cod and chips",
   "Haddock and chips",
   "Scampi and chips",
   "Gluten-free batter"
  ],
  "nutrition": {
   "serving": "1 serving (450 g)",
   "calories": 900,
   "protein": 40,
   "carbs": 80,
   "fat": 45,
   "note": "approximate"
  },
  "pronunciation": "fish and chips",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/A_dish_of_fish_and_chips_containing_fried_cod%2C_pea_puree%2C_tartar_sauce_and_chips.jpg/960px-A_dish_of_fish_and_chips_containing_fried_cod%2C_pea_puree%2C_tartar_sauce_and_chips.jpg"
 },
 "Samosa": {
  "history": "The samosa traveled from the Middle East to South Asia with traders and cooks centuries ago, where it became India's favorite fried snack. It is now essential at tea time, festivals, and street stalls.",
  "ingredients": [
   "all-purpose flour",
   "potatoes",
   "peas",
   "cumin seeds",
   "coriander",
   "turmeric",
   "garam masala",
   "ginger",
   "green chilies",
   "vegetable oil",
   "ajwain seeds",
   "salt"
  ],
  "preparation": "A firm dough is rolled into cones and filled with spiced potatoes and peas, then sealed and deep-fried until golden and crisp. Samosas are served with tamarind and mint chutneys.",
  "flavor": "Warmly spiced and earthy, brightened by tangy tamarind chutney.",
  "texture": "Flaky, crisp pastry around a soft, fragrant filling.",
  "similar": [
   "Spring Rolls",
   "Wonton",
   "Shumai",
   "Gyoza"
  ],
  "variations": [
   "Punjabi samosa",
   "Keema samosa",
   "Sweet samosa",
   "Baked samosa"
  ],
  "nutrition": {
   "serving": "2 samosas (150 g)",
   "calories": 350,
   "protein": 8,
   "carbs": 40,
   "fat": 18,
   "note": "approximate"
  },
  "pronunciation": "suh-MOH-suh",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Samosa_junk_food.jpg/960px-Samosa_junk_food.jpg"
 },
 "Empanada": {
  "history": "Empanadas descend from the stuffed pastries of medieval Spain and Portugal, carried to Latin America by colonists. Each country made them its own, from Argentine beef to Chilean seafood fillings.",
  "ingredients": [
   "wheat flour",
   "beef mince",
   "onions",
   "hard-boiled eggs",
   "olives",
   "cumin",
   "paprika",
   "butter",
   "lard",
   "salt",
   "water",
   "raisins"
  ],
  "preparation": "A short dough is made and rested, the filling cooked and cooled, then discs of dough are filled, folded, and crimped. Empanadas are baked or fried until golden.",
  "flavor": "Savory and gently spiced, with buttery pastry and sweet touches of raisin and olive.",
  "texture": "A flaky or crisp shell around a juicy, seasoned filling.",
  "similar": [
   "Spring Rolls",
   "Wonton",
   "Quesadilla",
   "Gyoza"
  ],
  "variations": [
   "Argentine beef empanada",
   "Chilean empanada de pino",
   "Colombian empanada",
   "Sweet dessert empanada"
  ],
  "nutrition": {
   "serving": "2 empanadas (200 g)",
   "calories": 550,
   "protein": 20,
   "carbs": 50,
   "fat": 30,
   "note": "approximate"
  },
  "pronunciation": "em-pah-NAH-dah",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Empanada_de_pino.jpg/960px-Empanada_de_pino.jpg"
 },
 "Gyoza": {
  "history": "Gyoza arrived in Japan from China in the early 20th century, adapted from Chinese jiaozi by returning travelers and cooks. The pan-fried version became a beloved side in izakaya and ramen shops.",
  "ingredients": [
   "ground pork",
   "cabbage",
   "garlic chives",
   "ginger",
   "garlic",
   "soy sauce",
   "sesame oil",
   "gyoza wrappers",
   "sake",
   "salt",
   "black pepper",
   "rice vinegar"
  ],
  "preparation": "A juicy pork and cabbage filling is wrapped in thin skins, then the dumplings are pan-fried and steamed with a splash of water. They are served with a vinegar-soy dipping sauce.",
  "flavor": "Savory and garlicky, with a bright, tangy dipping sauce.",
  "texture": "A crisp lace bottom and tender steamed top around a juicy filling.",
  "similar": [
   "Shumai",
   "Gua Bao",
   "Okonomiyaki",
   "Wonton"
  ],
  "variations": [
   "Yaki gyoza pan-fried",
   "Sui gyoza boiled",
   "Age gyoza deep-fried",
   "Vegetable gyoza"
  ],
  "nutrition": {
   "serving": "6 gyoza (180 g)",
   "calories": 350,
   "protein": 18,
   "carbs": 30,
   "fat": 18,
   "note": "approximate"
  },
  "pronunciation": "GYOH-zah",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Hamamatsugyoza.jpg/960px-Hamamatsugyoza.jpg"
 },
 "Arancini": {
  "history": "Arancini are Sicily's fried rice balls, born as a way to use leftover risotto and shaped like little oranges, hence the name. They became a staple of Sicilian street food and festive tables.",
  "ingredients": [
   "arborio rice",
   "mozzarella",
   "breadcrumbs",
   "eggs",
   "parmesan",
   "peas",
   "beef ragu",
   "saffron",
   "vegetable oil",
   "flour",
   "salt",
   "black pepper"
  ],
  "preparation": "Cooled risotto is shaped around a filling of ragu, peas, or mozzarella, then breaded and deep-fried until golden. They are served hot so the center stays molten.",
  "flavor": "Rich, cheesy, and savory, with a gentle saffron warmth.",
  "texture": "A crisp golden crust around creamy risotto and a molten center.",
  "similar": [
   "Onigiri",
   "Shumai",
   "Wonton",
   "Spring Rolls"
  ],
  "variations": [
   "Arancini al ragu",
   "Arancini al burro",
   "Arancini ai funghi",
   "Suppli-style arancini"
  ],
  "nutrition": {
   "serving": "3 arancini (250 g)",
   "calories": 550,
   "protein": 18,
   "carbs": 55,
   "fat": 28,
   "note": "approximate"
  },
  "pronunciation": "ah-rahn-CHEE-nee",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/5_small_Arancini_Spinach_-_Monjibello%2C_Brighton_2023-11-20.jpg/960px-5_small_Arancini_Spinach_-_Monjibello%2C_Brighton_2023-11-20.jpg"
 },
 "Falafel": {
  "history": "Falafel is the fried chickpea patty of the Levant, with roots in Egypt where fava-bean versions are still made. It became the defining vegetarian street food of the Middle East.",
  "ingredients": [
   "dried chickpeas",
   "onion",
   "garlic",
   "parsley",
   "cilantro",
   "cumin",
   "coriander",
   "baking soda",
   "flour",
   "vegetable oil",
   "salt",
   "black pepper"
  ],
  "preparation": "Soaked chickpeas are ground raw with herbs and spices, formed into balls, and deep-fried until deeply golden. Falafel is served in pita with tahini, pickles, and salads.",
  "flavor": "Herby, nutty, and warmly spiced, with creamy tahini to finish.",
  "texture": "A crisp crust around a fluffy, green-flecked interior.",
  "similar": [
   "Tabbouleh",
   "Baba Ganoush",
   "Tzatziki",
   "Shakshuka"
  ],
  "variations": [
   "Classic chickpea falafel",
   "Egyptian ta'ameya",
   "Baked falafel",
   "Stuffed falafel"
  ],
  "nutrition": {
   "serving": "4 falafel in pita (250 g)",
   "calories": 500,
   "protein": 18,
   "carbs": 55,
   "fat": 25,
   "note": "approximate"
  },
  "pronunciation": "fuh-LAH-ful",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Crispy_Falafel.jpg/960px-Crispy_Falafel.jpg"
 },
 "Takoyaki": {
  "history": "Takoyaki was created in Osaka in the 1930s, when a street vendor began cooking octopus-filled batter balls on a special molded griddle. It became the signature snack of Osaka's street food culture.",
  "ingredients": [
   "octopus",
   "wheat flour",
   "dashi",
   "eggs",
   "tempura scraps",
   "green onion",
   "pickled ginger",
   "takoyaki sauce",
   "mayonnaise",
   "bonito flakes",
   "seaweed powder",
   "vegetable oil"
  ],
  "preparation": "Batter is poured into a half-sphere griddle, octopus and toppings are added, and the balls are turned with picks until round and crisp. They are finished with sauce, mayonnaise, and dancing bonito flakes.",
  "flavor": "Savory and briny, with sweet-salty sauce and deep umami toppings.",
  "texture": "A crisp shell around a molten, custardy center with chewy octopus.",
  "similar": [
   "Okonomiyaki",
   "Shumai",
   "Gyoza",
   "Onigiri"
  ],
  "variations": [
   "Classic takoyaki",
   "Cheese takoyaki",
   "Negiyaki style",
   "Akashiyaki"
  ],
  "nutrition": {
   "serving": "8 pieces (200 g)",
   "calories": 400,
   "protein": 20,
   "carbs": 40,
   "fat": 18,
   "note": "approximate"
  },
  "pronunciation": "tah-koh-YAH-kee",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Takoyaki_Dish.jpg/960px-Takoyaki_Dish.jpg"
 },
 "Tiramisu": {
  "history": "Tiramisu is Italy's coffee-layered dessert, emerging in the Veneto region in the late 20th century and rising to worldwide fame. Its name means 'pick me up,' a nod to the espresso inside.",
  "ingredients": [
   "ladyfingers",
   "mascarpone",
   "espresso",
   "eggs",
   "sugar",
   "cocoa powder",
   "marsala wine",
   "heavy cream",
   "vanilla",
   "dark chocolate",
   "salt",
   "coffee liqueur"
  ],
  "preparation": "Ladyfingers are dipped in espresso and layered with a mascarpone cream, then chilled until set. The dessert is dusted with cocoa just before serving.",
  "flavor": "Bittersweet coffee and rich cream with a deep cocoa finish.",
  "texture": "Cloudlike cream against soft, coffee-soaked sponge.",
  "similar": [
   "Panna Cotta",
   "Flan",
   "Eton Mess",
   "Profiteroles"
  ],
  "variations": [
   "Classic tiramisu",
   "Tiramisu al limone",
   "Strawberry tiramisu",
   "Chocolate tiramisu"
  ],
  "nutrition": {
   "serving": "1 slice (150 g)",
   "calories": 450,
   "protein": 8,
   "carbs": 35,
   "fat": 32,
   "note": "approximate"
  },
  "pronunciation": "tee-rah-mee-SOO",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tiramisu_from_Alexis_Bistro%2C_January_2009_%283260538908%29.jpg/960px-Tiramisu_from_Alexis_Bistro%2C_January_2009_%283260538908%29.jpg"
 },
 "Crème Brûlée": {
  "history": "Crème brûlée is France's torched custard, with roots in 17th-century European recipes for caramel-topped creams. The crisp sugar crust, cracked with a spoon, is its defining pleasure.",
  "ingredients": [
   "heavy cream",
   "egg yolks",
   "sugar",
   "vanilla bean",
   "salt",
   "turbinado sugar"
  ],
  "preparation": "Cream is infused with vanilla and whisked with yolks and sugar, then baked gently in a water bath. After chilling, sugar is scattered on top and torched to a glassy caramel.",
  "flavor": "Rich vanilla custard beneath a bitter-sweet caramel shell.",
  "texture": "A glassy, crackling top over silky, just-set custard.",
  "similar": [
   "Flan",
   "Panna Cotta",
   "Eton Mess",
   "Profiteroles"
  ],
  "variations": [
   "Vanilla crème brûlée",
   "Chocolate crème brûlée",
   "Lavender crème brûlée",
   "Citrus crème brûlée"
  ],
  "nutrition": {
   "serving": "1 ramekin (120 g)",
   "calories": 380,
   "protein": 6,
   "carbs": 30,
   "fat": 28,
   "note": "approximate"
  },
  "pronunciation": "krem broo-LAY",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/2024-02-10_Creme_brulee_at_Restaurant_Uri_Buri_in_Acre_anagoria.jpg/960px-2024-02-10_Creme_brulee_at_Restaurant_Uri_Buri_in_Acre_anagoria.jpg"
 },
 "Baklava": {
  "history": "Baklava is the layered nut pastry of the Ottoman world, refined in imperial kitchens from older stuffed-dough traditions. It is now the celebratory sweet of Turkey, Greece, and the Levant.",
  "ingredients": [
   "phyllo dough",
   "pistachios",
   "walnuts",
   "butter",
   "honey",
   "sugar",
   "water",
   "lemon juice",
   "cinnamon",
   "cloves",
   "orange blossom water",
   "salt"
  ],
  "preparation": "Sheets of buttered phyllo are layered with chopped nuts, baked until golden, and soaked in spiced syrup while still hot. The pastry rests so the syrup sinks through every layer.",
  "flavor": "Buttery and nutty, floral-sweet with warm spice.",
  "texture": "Shattering crisp layers, sticky syrup, and crunchy nuts.",
  "similar": [
   "Turkish Delight",
   "Jalebi",
   "Kheer",
   "Macarons"
  ],
  "variations": [
   "Pistachio baklava",
   "Walnut baklava",
   "Chocolate baklava",
   "Baklava cheesecake"
  ],
  "nutrition": {
   "serving": "2 pieces (100 g)",
   "calories": 350,
   "protein": 6,
   "carbs": 35,
   "fat": 22,
   "note": "approximate"
  },
  "pronunciation": "bahk-lah-VAH",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Baklava%2C_pomegranite_ice_cream%2C_mastic-flavoured_custard_%283061207178%29.jpg/960px-Baklava%2C_pomegranite_ice_cream%2C_mastic-flavoured_custard_%283061207178%29.jpg"
 },
 "Churros": {
  "history": "Churros are Spain's ridged fried dough, long sold by churrerias for breakfast with thick hot chocolate. They traveled with Spanish influence to Latin America, where filled versions are beloved.",
  "ingredients": [
   "flour",
   "water",
   "butter",
   "eggs",
   "sugar",
   "cinnamon",
   "salt",
   "vegetable oil",
   "vanilla",
   "chocolate",
   "milk",
   "cornstarch"
  ],
  "preparation": "A choux-like dough is piped through a star tip directly into hot oil and fried until golden. The churros are rolled in cinnamon sugar and served with thick chocolate for dipping.",
  "flavor": "Warm, sweet, and cinnamony, with crisp fried richness.",
  "texture": "A crisp ridged exterior around a soft, airy interior.",
  "similar": [
   "Danish Pastry",
   "Funnel Cake",
   "Macarons",
   "Cannoli"
  ],
  "variations": [
   "Churros con chocolate",
   "Filled churros",
   "Mexican churros",
   "Mini churros"
  ],
  "nutrition": {
   "serving": "3 churros (120 g)",
   "calories": 400,
   "protein": 6,
   "carbs": 50,
   "fat": 20,
   "note": "approximate"
  },
  "pronunciation": "CHOOR-rohs",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Churros_con_chocolate_-_currystrumpet.jpg"
 },
 "Pavlova": {
  "history": "Pavlova is the meringue cake of Australia and New Zealand, created in the early 20th century and named for the ballerina Anna Pavlova. Both countries claim it as their own national dessert.",
  "ingredients": [
   "egg whites",
   "sugar",
   "cornstarch",
   "vinegar",
   "vanilla",
   "heavy cream",
   "kiwi",
   "strawberries",
   "passion fruit",
   "powdered sugar",
   "lemon juice"
  ],
  "preparation": "Meringue is whipped stiff and baked low until crisp outside and marshmallowy inside. It is cooled, then topped with whipped cream and fresh fruit just before serving.",
  "flavor": "Sweet and light, brightened by tart fresh fruit.",
  "texture": "A crisp shell around a chewy marshmallow center, crowned with billowy cream.",
  "similar": [
   "Eton Mess",
   "Panna Cotta",
   "Flan",
   "Macarons"
  ],
  "variations": [
   "Classic pavlova",
   "Mini pavlovas",
   "Chocolate pavlova",
   "Pavlova roll"
  ],
  "nutrition": {
   "serving": "1 slice (150 g)",
   "calories": 320,
   "protein": 4,
   "carbs": 45,
   "fat": 14,
   "note": "approximate"
  },
  "pronunciation": "pav-LOH-vah",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Pavlova_cake_-_Down_under_dessert.jpg/960px-Pavlova_cake_-_Down_under_dessert.jpg"
 },
 "Sticky Toffee Pudding": {
  "history": "Sticky toffee pudding is Britain's date-sponge dessert with toffee sauce, popularized in the Lake District in the 20th century. It became a pub and restaurant classic across the UK.",
  "ingredients": [
   "dates",
   "flour",
   "butter",
   "brown sugar",
   "eggs",
   "baking soda",
   "vanilla",
   "heavy cream",
   "golden syrup",
   "salt",
   "baking powder",
   "milk"
  ],
  "preparation": "A moist date sponge is baked, then warm toffee sauce is poured over so it soaks in. It is served hot with cream, custard, or ice cream.",
  "flavor": "Deep caramel and moist date sweetness in every bite.",
  "texture": "A soft, sticky sponge under glossy warm sauce.",
  "similar": [
   "Flan",
   "Trifle",
   "Panna Cotta",
   "Eton Mess"
  ],
  "variations": [
   "Classic sticky toffee pudding",
   "Sticky toffee pudding with ice cream",
   "Gingerbread version",
   "Chocolate sticky toffee pudding"
  ],
  "nutrition": {
   "serving": "1 serving (200 g)",
   "calories": 550,
   "protein": 6,
   "carbs": 75,
   "fat": 25,
   "note": "approximate"
  },
  "pronunciation": "sticky TOFF-ee pudding",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sticky_Toffee_Pudding_Cheesecake_-_Caff%C3%A8_Nero_2025-12-11.jpg/960px-Sticky_Toffee_Pudding_Cheesecake_-_Caff%C3%A8_Nero_2025-12-11.jpg"
 },
 "Tres Leches Cake": {
  "history": "Tres leches cake is Latin America's milk-soaked sponge, drenched in evaporated, condensed, and whole milk. It is a fixture of celebrations from Mexico to Central America.",
  "ingredients": [
   "flour",
   "eggs",
   "sugar",
   "baking powder",
   "evaporated milk",
   "condensed milk",
   "whole milk",
   "heavy cream",
   "vanilla",
   "cinnamon",
   "strawberries",
   "salt"
  ],
  "preparation": "A light sponge is baked, then soaked while warm in the three-milk mixture until saturated. It is chilled and finished with whipped cream and a dusting of cinnamon.",
  "flavor": "Milky-sweet and vanilla-rich, with a hint of spice.",
  "texture": "An impossibly moist sponge under airy whipped cream.",
  "similar": [
   "Flan",
   "Panna Cotta",
   "Profiteroles",
   "Eton Mess"
  ],
  "variations": [
   "Classic tres leches",
   "Chocolate tres leches",
   "Coconut tres leches",
   "Coffee tres leches"
  ],
  "nutrition": {
   "serving": "1 slice (150 g)",
   "calories": 420,
   "protein": 8,
   "carbs": 55,
   "fat": 18,
   "note": "approximate"
  },
  "pronunciation": "trays LEH-ches",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Tres_Leches_Cake_%284%29.jpg/960px-Tres_Leches_Cake_%284%29.jpg"
 },
 "Gulab Jamun": {
  "history": "Gulab jamun is South Asia's syrup-soaked milk dumpling, with roots in Persian-influenced court cooking of the Mughal era. It is the essential sweet of festivals, weddings, and Diwali.",
  "ingredients": [
   "milk powder",
   "flour",
   "ghee",
   "baking soda",
   "milk",
   "cardamom",
   "rose water",
   "sugar",
   "water",
   "saffron",
   "pistachios",
   "vegetable oil"
  ],
  "preparation": "A soft milk dough is formed into smooth balls and fried low and slow until deep golden. The hot dumplings are soaked in warm rose-and-cardamom syrup.",
  "flavor": "Floral, sweet, and milky, with cardamom warmth.",
  "texture": "Soft, spongy dumplings laden with syrup.",
  "similar": [
   "Jalebi",
   "Kheer",
   "Turkish Delight",
   "Macarons"
  ],
  "variations": [
   "Classic gulab jamun",
   "Kala jamun",
   "Dry gulab jamun",
   "Stuffed gulab jamun"
  ],
  "nutrition": {
   "serving": "2 pieces (100 g)",
   "calories": 300,
   "protein": 5,
   "carbs": 40,
   "fat": 14,
   "note": "approximate"
  },
  "pronunciation": "goo-LAHB jah-MOON",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sweet_dish_-_Gulab_Jamun.jpg/960px-Sweet_dish_-_Gulab_Jamun.jpg"
 },
 "Mango Sticky Rice": {
  "history": "Mango sticky rice is Thailand's beloved summer dessert, pairing glutinous rice with ripe mango at the height of mango season. It is a staple of Thai street stalls and celebrations.",
  "ingredients": [
   "glutinous rice",
   "coconut milk",
   "mango",
   "sugar",
   "salt",
   "sesame seeds",
   "mung beans",
   "pandan leaves",
   "water",
   "coconut cream"
  ],
  "preparation": "Glutinous rice is steamed, then folded with sweetened, lightly salted coconut milk. It is served warm with sliced ripe mango and an extra drizzle of coconut cream.",
  "flavor": "Sweet mango and rich coconut, balanced by a gentle saltiness.",
  "texture": "Chewy sticky rice and juicy mango under a creamy sauce.",
  "similar": [
   "Kheer",
   "Flan",
   "Panna Cotta",
   "Jalebi"
  ],
  "variations": [
   "Classic mango sticky rice",
   "Durian sticky rice",
   "Black sticky rice version",
   "Coconut ice cream version"
  ],
  "nutrition": {
   "serving": "1 serving (250 g)",
   "calories": 450,
   "protein": 5,
   "carbs": 70,
   "fat": 16,
   "note": "approximate"
  },
  "pronunciation": "mango sticky rice",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Mango_Sticky_Rice.jpg/960px-Mango_Sticky_Rice.jpg"
 },
 "Panna Cotta": {
  "history": "Panna cotta is northern Italy's set-cream dessert, its name meaning 'cooked cream' in Italian. It became a restaurant standard for its elegant simplicity and silky texture.",
  "ingredients": [
   "heavy cream",
   "sugar",
   "gelatin",
   "vanilla bean",
   "milk",
   "strawberries",
   "raspberry sauce",
   "mint",
   "lemon zest",
   "salt"
  ],
  "preparation": "Cream is simmered with sugar and vanilla, gelatin is dissolved in, and the mixture is poured into molds. It chills until just set, then is unmolded with fruit or sauce.",
  "flavor": "Delicately sweet cream with vanilla, lifted by bright fruit.",
  "texture": "Trembling, silky, and barely set.",
  "similar": [
   "Tiramisu",
   "Flan",
   "Eton Mess",
   "Profiteroles"
  ],
  "variations": [
   "Vanilla panna cotta",
   "Chocolate panna cotta",
   "Coconut panna cotta",
   "Coffee panna cotta"
  ],
  "nutrition": {
   "serving": "1 serving (120 g)",
   "calories": 350,
   "protein": 5,
   "carbs": 25,
   "fat": 26,
   "note": "approximate"
  },
  "pronunciation": "PAH-nah KOH-tah",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ELDERFLOWER_PANNA_COTTA_-_The_Meeting_Place_2025-06-28.jpg/960px-ELDERFLOWER_PANNA_COTTA_-_The_Meeting_Place_2025-06-28.jpg"
 },
 "Pastel de Nata": {
  "history": "Pasteis de nata are Portugal's custard tarts, created by monks in Lisbon's Belem district in the 19th century. The famous bakery there still draws lines of visitors to the original.",
  "ingredients": [
   "puff pastry",
   "egg yolks",
   "sugar",
   "milk",
   "flour",
   "cinnamon",
   "lemon peel",
   "vanilla",
   "butter",
   "water",
   "salt",
   "powdered sugar"
  ],
  "preparation": "Puff pastry is pressed into tins and filled with warm custard, then baked at fierce heat until blistered and caramelized on top. The tarts are dusted with cinnamon and served warm.",
  "flavor": "Caramelized custard and buttery pastry, with cinnamon warmth.",
  "texture": "Flaky layers around a creamy, wobbly center with a scorched top.",
  "similar": [
   "Danish Pastry",
   "Flan",
   "Cannoli",
   "Apple Pie"
  ],
  "variations": [
   "Classic pastel de nata",
   "Chocolate pastel de nata",
   "Pastel de Belem",
   "Mini pasteis"
  ],
  "nutrition": {
   "serving": "2 tarts (120 g)",
   "calories": 350,
   "protein": 7,
   "carbs": 40,
   "fat": 18,
   "note": "approximate"
  },
  "pronunciation": "pash-TELL duh NAH-tah",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/First_pastel_de_nata_%288969928158%29.jpg/960px-First_pastel_de_nata_%288969928158%29.jpg"
 },
 "Apfelstrudel": {
  "history": "Apfelstrudel is Austria's apple strudel, refined in Viennese kitchens from layered pastries influenced by the Ottoman world. It became the defining dessert of the Habsburg coffee-house tradition.",
  "ingredients": [
   "flour",
   "apples",
   "butter",
   "breadcrumbs",
   "sugar",
   "cinnamon",
   "raisins",
   "walnuts",
   "lemon juice",
   "egg",
   "water",
   "salt",
   "powdered sugar"
  ],
  "preparation": "A paper-thin dough is stretched by hand, spread with buttered crumbs and spiced apples, then rolled up and baked golden. It is served warm with cream or vanilla sauce.",
  "flavor": "Tart-sweet apple, buttery and cinnamony.",
  "texture": "Shattering flaky layers around a soft apple filling.",
  "similar": [
   "Apple Pie",
   "Apple Strudel",
   "Danish Pastry",
   "Cannoli"
  ],
  "variations": [
   "Classic apfelstrudel",
   "Apfelstrudel with vanilla sauce",
   "Cherry strudel",
   "Topfenstrudel"
  ],
  "nutrition": {
   "serving": "1 slice (150 g)",
   "calories": 380,
   "protein": 5,
   "carbs": 55,
   "fat": 16,
   "note": "approximate"
  },
  "pronunciation": "AHP-ful-shtroo-dul",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apfelstrudel_with_whipped_cream.jpg/960px-Apfelstrudel_with_whipped_cream.jpg"
 },
 "Brigadeiro": {
  "history": "Brigadeiro is Brazil's chocolate truffle, born in the 1940s and named for a presidential candidate of the era. It became the must-have sweet of Brazilian birthday parties.",
  "ingredients": [
   "condensed milk",
   "cocoa powder",
   "butter",
   "chocolate sprinkles",
   "salt",
   "vanilla",
   "heavy cream",
   "dark chocolate"
  ],
  "preparation": "Condensed milk is cooked with cocoa and butter until thick enough to hold its shape, then cooled. The mixture is rolled into balls and coated in chocolate sprinkles.",
  "flavor": "Deep, fudgy chocolate with milky sweetness.",
  "texture": "Dense, chewy, and smooth.",
  "similar": [
   "Fudge",
   "Turkish Delight",
   "Macarons",
   "Pavlova"
  ],
  "variations": [
   "Classic chocolate brigadeiro",
   "White brigadeiro",
   "Coconut brigadeiro",
   "Brigadeiro cake"
  ],
  "nutrition": {
   "serving": "3 pieces (75 g)",
   "calories": 300,
   "protein": 5,
   "carbs": 45,
   "fat": 12,
   "note": "approximate"
  },
  "pronunciation": "bree-gah-DAY-roh",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Liat_Portal_for_Foodie_Disorder_-_Brigadeiros_chocolate_bonbons_from_Trader_Joe%E2%80%99s.jpg/960px-Liat_Portal_for_Foodie_Disorder_-_Brigadeiros_chocolate_bonbons_from_Trader_Joe%E2%80%99s.jpg"
 },
 "Turkish Delight": {
  "history": "Turkish delight, or lokum, is the famed confection of the Ottoman Empire, made from starch and sugar and perfumed with rose or mastic. It became world-famous as a gift sweet and tea-time treat.",
  "ingredients": [
   "sugar",
   "cornstarch",
   "water",
   "rose water",
   "lemon juice",
   "pistachios",
   "cream of tartar",
   "powdered sugar",
   "mastic",
   "walnuts",
   "salt"
  ],
  "preparation": "A sugar syrup is cooked with starch until thick and translucent, then flavored, poured into molds, and left to set. The jelly is cut into cubes and dusted with powdered sugar.",
  "flavor": "Floral and sweet, gently chewy, with nutty pieces.",
  "texture": "Soft and jelly-like under a powdery coating.",
  "similar": [
   "Jalebi",
   "Kheer",
   "Gulab Jamun",
   "Macarons"
  ],
  "variations": [
   "Rose Turkish delight",
   "Pistachio Turkish delight",
   "Mastic Turkish delight",
   "Chocolate-coated lokum"
  ],
  "nutrition": {
   "serving": "3 pieces (75 g)",
   "calories": 250,
   "protein": 2,
   "carbs": 55,
   "fat": 6,
   "note": "approximate"
  },
  "pronunciation": "turkish dee-LITE",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg/960px-Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg"
 },
 "Alfajores": {
  "history": "Alfajores are the dulce de leche sandwich cookies of Argentina and much of Latin America, descended from Moorish-influenced sweets brought by the Spanish. They are Argentina's national cookie.",
  "ingredients": [
   "flour",
   "cornstarch",
   "butter",
   "sugar",
   "egg yolks",
   "dulce de leche",
   "coconut",
   "baking powder",
   "vanilla",
   "lemon zest",
   "salt",
   "powdered sugar"
  ],
  "preparation": "Delicate shortbread-like discs are baked, sandwiched with dulce de leche, and the edges are rolled in coconut or dipped in chocolate.",
  "flavor": "Buttery and caramel-sweet, melting in the mouth.",
  "texture": "Crumbly, delicate cookies around a gooey filling.",
  "similar": [
   "Macarons",
   "Danish Pastry",
   "Cannoli",
   "Fudge"
  ],
  "variations": [
   "Classic alfajor",
   "Chocolate-covered alfajor",
   "Cornstarch alfajor",
   "Alfajor santafesino"
  ],
  "nutrition": {
   "serving": "2 cookies (80 g)",
   "calories": 350,
   "protein": 5,
   "carbs": 50,
   "fat": 15,
   "note": "approximate"
  },
  "pronunciation": "ahl-fah-HOH-res",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Alfajores_%40_Rinconcito_Peruano_%2812052635153%29.jpg"
 },
 "Halva": {
  "history": "Halva is the dense sesame sweet of the Middle East and beyond, with versions stretching from the Balkans to India. Tahini-based halva is the beloved crumbly treat of Levantine and Turkish tables.",
  "ingredients": [
   "tahini",
   "sugar",
   "water",
   "honey",
   "pistachios",
   "vanilla",
   "cocoa",
   "salt",
   "lemon juice",
   "almonds",
   "cardamom"
  ],
  "preparation": "Sugar syrup is cooked to the thread stage and beaten into tahini until the mixture crystallizes. It is pressed into molds with nuts and left to set.",
  "flavor": "Nutty, sweet, and sesame-rich, with vanilla warmth.",
  "texture": "Crumbly and flaky, melting in the mouth.",
  "similar": [
   "Turkish Delight",
   "Fudge",
   "Gulab Jamun",
   "Jalebi"
  ],
  "variations": [
   "Plain tahini halva",
   "Chocolate halva",
   "Pistachio halva",
   "Semolina halva"
  ],
  "nutrition": {
   "serving": "2 slices (80 g)",
   "calories": 400,
   "protein": 8,
   "carbs": 35,
   "fat": 26,
   "note": "approximate"
  },
  "pronunciation": "hahl-VAH",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Carrot_halva.jpg/960px-Carrot_halva.jpg"
 },
 "Full English Breakfast": {
  "history": "The full English breakfast grew from the country-house breakfasts of Victorian England into the working-class fry-up of the 20th century. It remains Britain's iconic morning plate.",
  "ingredients": [
   "bacon",
   "pork sausages",
   "eggs",
   "baked beans",
   "tomatoes",
   "mushrooms",
   "black pudding",
   "toast",
   "butter",
   "hash browns",
   "tea",
   "orange juice"
  ],
  "preparation": "The components are fried or grilled in sequence in the same pan, the beans are warmed, and the toast is buttered. Everything is plated hot and served with tea.",
  "flavor": "Salty and savory, hearty, with sweet beans and roasted tomato.",
  "texture": "Crisp bacon, runny or set eggs, and soft beans on buttered toast.",
  "similar": [
   "Huevos Rancheros",
   "Shakshuka",
   "Eggs Benedict",
   "French Toast"
  ],
  "variations": [
   "Full English",
   "Full Scottish",
   "Vegetarian fry-up",
   "Full Irish"
  ],
  "nutrition": {
   "serving": "1 plate (600 g)",
   "calories": 1100,
   "protein": 45,
   "carbs": 60,
   "fat": 70,
   "note": "approximate"
  },
  "pronunciation": "full english breakfast",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Full_English_breakfast.jpg/960px-Full_English_breakfast.jpg"
 },
 "Shakshuka": {
  "history": "Shakshuka is the poached-egg tomato dish of North Africa and the Middle East, with roots in Tunisian and Libyan cooking. It became Israel's beloved brunch after arriving with North African immigrants.",
  "ingredients": [
   "eggs",
   "canned tomatoes",
   "bell peppers",
   "onion",
   "garlic",
   "cumin",
   "paprika",
   "chili flakes",
   "olive oil",
   "feta",
   "parsley",
   "harissa",
   "salt",
   "black pepper"
  ],
  "preparation": "Peppers and onions are softened, then tomatoes and spices simmer into a rich sauce. Eggs are cracked into wells and poached gently, finished with feta and herbs, and served with bread.",
  "flavor": "Smoky, tangy, and gently spicy, with rich runny yolk.",
  "texture": "A jammy sauce with runny yolks, made for scooping with crusty bread.",
  "similar": [
   "Huevos Rancheros",
   "Eggs Benedict",
   "Tabbouleh",
   "Tzatziki"
  ],
  "variations": [
   "Classic shakshuka",
   "Green shakshuka",
   "Shakshuka with feta",
   "Spicy harissa shakshuka"
  ],
  "nutrition": {
   "serving": "1 serving with bread (350 g)",
   "calories": 450,
   "protein": 20,
   "carbs": 30,
   "fat": 28,
   "note": "approximate"
  },
  "pronunciation": "shahk-SHOO-kah",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Liat_Portal_for_Foodie_Disorder_-_Shakshuka_with_Mozzarella.jpg/960px-Liat_Portal_for_Foodie_Disorder_-_Shakshuka_with_Mozzarella.jpg"
 },
 "Congee": {
  "history": "Congee is the rice porridge of China and much of Asia, cooked for centuries as a gentle, nourishing meal. It is the classic comfort food for breakfast and for recovery from illness.",
  "ingredients": [
   "jasmine rice",
   "water",
   "chicken stock",
   "ginger",
   "scallions",
   "century egg",
   "pork",
   "soy sauce",
   "sesame oil",
   "white pepper",
   "peanuts",
   "cilantro"
  ],
  "preparation": "Rice is simmered in abundant water or stock until the grains break down into a thick porridge. It is served plain or with toppings like ginger, scallions, century egg, or pork.",
  "flavor": "Mild and soothing, savory with ginger and sesame notes.",
  "texture": "Silky, thick, and spoonable.",
  "similar": [
   "Pho",
   "Tonkotsu Ramen",
   "Chicken Noodle Soup",
   "Hot and Sour Soup"
  ],
  "variations": [
   "Plain congee",
   "Century egg congee",
   "Chicken congee",
   "Seafood congee"
  ],
  "nutrition": {
   "serving": "1 bowl (300 g)",
   "calories": 200,
   "protein": 10,
   "carbs": 30,
   "fat": 5,
   "note": "approximate"
  },
  "pronunciation": "KON-jee",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Cantonese_Sampan_Congee_%28Boat_Congee%29.jpeg/960px-Cantonese_Sampan_Congee_%28Boat_Congee%29.jpeg"
 },
 "Eggs Benedict": {
  "history": "Eggs Benedict is the American brunch classic of poached eggs, ham, and hollandaise on an English muffin, with origin stories tracing to 19th-century New York restaurants. It became the definitive hotel brunch dish.",
  "ingredients": [
   "eggs",
   "English muffins",
   "ham",
   "butter",
   "egg yolks",
   "lemon juice",
   "cayenne",
   "white vinegar",
   "chives",
   "salt",
   "black pepper"
  ],
  "preparation": "Hollandaise is whisked over gentle heat, eggs are poached in barely simmering water, and muffins are toasted with ham. The stack is assembled and generously sauced.",
  "flavor": "Rich and buttery, lemony, with salty ham.",
  "texture": "Runny yolks and velvety sauce over a crisped muffin.",
  "similar": [
   "Shakshuka",
   "Huevos Rancheros",
   "Croque Monsieur",
   "French Toast"
  ],
  "variations": [
   "Classic eggs Benedict",
   "Eggs Florentine",
   "Eggs Royale",
   "Southwestern Benedict"
  ],
  "nutrition": {
   "serving": "2 eggs Benedict (300 g)",
   "calories": 650,
   "protein": 30,
   "carbs": 30,
   "fat": 45,
   "note": "approximate"
  },
  "pronunciation": "eggs BEN-ih-dikt",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Eggs_Benedict2.jpg"
 },
 "Menemen": {
  "history": "Menemen is Turkey's beloved egg-and-tomato scramble, named for a town in the Izmir region. It is the centerpiece of the Turkish breakfast table, scooped up with fresh bread.",
  "ingredients": [
   "eggs",
   "tomatoes",
   "green peppers",
   "onion",
   "olive oil",
   "butter",
   "paprika",
   "chili flakes",
   "feta",
   "parsley",
   "black pepper",
   "salt",
   "bread"
  ],
  "preparation": "Peppers and tomatoes are cooked down in olive oil until soft and jammy, then beaten eggs are stirred in and cooked soft. It is served straight from the pan with bread.",
  "flavor": "Sweet tomato and peppery warmth with rich egg.",
  "texture": "A soft scramble in a juicy tomato sauce.",
  "similar": [
   "Shakshuka",
   "Huevos Rancheros",
   "Eggs Benedict",
   "Tabbouleh"
  ],
  "variations": [
   "Classic menemen",
   "Menemen with cheese",
   "Menemen with sucuk",
   "Spicy menemen"
  ],
  "nutrition": {
   "serving": "1 serving with bread (300 g)",
   "calories": 400,
   "protein": 18,
   "carbs": 25,
   "fat": 26,
   "note": "approximate"
  },
  "pronunciation": "meh-neh-MEN",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Menemen_with_bread.jpg/960px-Menemen_with_bread.jpg"
 },
 "Croque Madame": {
  "history": "The croque madame is France's dressed-up grilled ham-and-cheese sandwich, a croque monsieur crowned with a fried egg. It became a cafe and bistro staple of Parisian lunch culture.",
  "ingredients": [
   "sourdough bread",
   "ham",
   "gruyere",
   "butter",
   "flour",
   "milk",
   "Dijon mustard",
   "eggs",
   "nutmeg",
   "black pepper",
   "salt",
   "parsley"
  ],
  "preparation": "A bechamel is made and the sandwiches are layered with ham, cheese, and mustard, then grilled or baked until golden. A fried egg crowns each sandwich before serving.",
  "flavor": "Nutty cheese and salty ham under a rich fried egg.",
  "texture": "Crisp golden bread, molten cheese, and a runny yolk.",
  "similar": [
   "Croque Monsieur",
   "Grilled Cheese Sandwich",
   "French Toast",
   "Eggs Benedict"
  ],
  "variations": [
   "Classic croque madame",
   "Croque monsieur",
   "Vegetarian croque",
   "Croque with smoked salmon"
  ],
  "nutrition": {
   "serving": "1 sandwich (300 g)",
   "calories": 700,
   "protein": 35,
   "carbs": 40,
   "fat": 42,
   "note": "approximate"
  },
  "pronunciation": "krohk mah-DAHM",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Croque_Madame_-_Milfey_Patisserie_2026-03-02.jpg/960px-Croque_Madame_-_Milfey_Patisserie_2026-03-02.jpg"
 },
 "Espresso": {
  "history": "Espresso was born in early 20th-century Italy with the invention of pressure-brewed coffee machines. It became the foundation of Italian cafe culture and of milk-based coffee drinks worldwide.",
  "ingredients": [
   "espresso beans",
   "filtered water",
   "sugar (optional)",
   "lemon twist (optional)",
   "cocoa powder (optional)"
  ],
  "preparation": "Finely ground coffee is tamped into a portafilter and hot water is forced through under pressure. The shot is served immediately in a small cup, crowned with golden crema.",
  "flavor": "Intense and bittersweet, with a natural sweetness in the crema.",
  "texture": "Syrupy body under a golden, velvety crema.",
  "similar": [
   "Cappuccino",
   "Macchiato",
   "Masala Chai",
   "Thai Iced Tea"
  ],
  "variations": [
   "Ristretto",
   "Lungo",
   "Doppio",
   "Espresso macchiato"
  ],
  "nutrition": {
   "serving": "1 shot (30 ml)",
   "calories": 5,
   "protein": 0.5,
   "carbs": 1,
   "fat": 0,
   "note": "approximate"
  },
  "pronunciation": "ess-PRESS-oh",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Holunderlimonade_und_espresso.jpg/960px-Holunderlimonade_und_espresso.jpg"
 },
 "Turkish Coffee": {
  "history": "Turkish coffee is the unfiltered coffee of the Ottoman Empire, brewed in a cezve and central to centuries of coffeehouse culture. The settled grounds are traditionally read for fortune-telling.",
  "ingredients": [
   "finely ground coffee",
   "cold water",
   "sugar",
   "cardamom (optional)",
   "mastic (optional)"
  ],
  "preparation": "Coffee, water, and sugar are combined in a cezve and heated slowly until foam rises. It is poured before boiling so the foam tops each cup, and the grounds settle before drinking.",
  "flavor": "Strong and aromatic, bittersweet with optional cardamom notes.",
  "texture": "Thick and full-bodied, with fine grounds settling at the bottom.",
  "similar": [
   "Cappuccino",
   "Macchiato",
   "Masala Chai",
   "Thai Iced Tea"
  ],
  "variations": [
   "Sade plain",
   "Az sekerli little sugar",
   "Orta medium sweet",
   "Cok sekerli very sweet"
  ],
  "nutrition": {
   "serving": "1 cup (60 ml)",
   "calories": 15,
   "protein": 0.5,
   "carbs": 3,
   "fat": 0,
   "note": "approximate"
  },
  "pronunciation": "turkish coffee",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg/960px-Turkish_Pilaf_Rice_-_degustation_-_Ottoman_Cuisine_%283061206332%29.jpg"
 },
 "Masala Chai": {
  "history": "Masala chai is India's spiced milk tea, blending Assam tea with ginger, cardamom, and other spices. It became the nation's daily ritual, poured at railway stations and by street chai vendors.",
  "ingredients": [
   "Assam tea",
   "milk",
   "water",
   "ginger",
   "cardamom",
   "cinnamon",
   "cloves",
   "black pepper",
   "sugar",
   "fennel seeds",
   "star anise"
  ],
  "preparation": "Spices and tea are simmered in water until deeply brewed, then milk and sugar are added. The chai is boiled, strained, and served steaming hot.",
  "flavor": "Warm spice and malty tea under creamy sweetness.",
  "texture": "Rich, milky, and frothy.",
  "similar": [
   "Cappuccino",
   "Macchiato",
   "Thai Iced Tea",
   "Kheer"
  ],
  "variations": [
   "Cutting chai",
   "Adrak chai",
   "Elaichi chai",
   "Kashmiri chai"
  ],
  "nutrition": {
   "serving": "1 cup (200 ml)",
   "calories": 120,
   "protein": 4,
   "carbs": 18,
   "fat": 4,
   "note": "approximate"
  },
  "pronunciation": "mah-SAH-lah CHAI",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Lunch_at_Curry_Leaf_Cafe_2024-01-20.jpg/960px-Lunch_at_Curry_Leaf_Cafe_2024-01-20.jpg"
 },
 "Bubble Tea": {
  "history": "Bubble tea was invented in Taiwan in the 1980s, when tea shops began adding chewy tapioca pearls to sweet milk tea. It grew into a global phenomenon with endless flavors and toppings.",
  "ingredients": [
   "black tea",
   "milk",
   "tapioca pearls",
   "brown sugar",
   "water",
   "condensed milk",
   "taro powder",
   "matcha",
   "fruit syrup",
   "ice",
   "honey",
   "non-dairy creamer"
  ],
  "preparation": "Tea is brewed and sweetened, then shaken with milk and ice. Tapioca pearls are cooked in sugar syrup and added to the cup, which is sealed and served with a wide straw.",
  "flavor": "Sweet, milky tea with caramel-flavored chewy pearls.",
  "texture": "Smooth tea against springy boba.",
  "similar": [
   "Thai Iced Tea",
   "Masala Chai",
   "Cappuccino",
   "Kheer"
  ],
  "variations": [
   "Classic milk tea",
   "Taro bubble tea",
   "Brown sugar boba",
   "Fruit tea"
  ],
  "nutrition": {
   "serving": "1 cup (500 ml)",
   "calories": 350,
   "protein": 4,
   "carbs": 65,
   "fat": 8,
   "note": "approximate"
  },
  "pronunciation": "bubble tea",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Carousel_food_nasi_lemak_and_bubble_tea.jpg/960px-Carousel_food_nasi_lemak_and_bubble_tea.jpg"
 },
 "Ratatouille": {
  "history": "Ratatouille is Provence's celebrated vegetable stew, born as peasant fare in the Nice region. It became famous worldwide as the emblem of Provencal cooking and rustic French food.",
  "ingredients": [
   "eggplant",
   "zucchini",
   "bell peppers",
   "tomatoes",
   "onion",
   "garlic",
   "olive oil",
   "thyme",
   "basil",
   "bay leaf",
   "salt",
   "black pepper"
  ],
  "preparation": "The vegetables are sauteed separately or layered in a dish, then simmered with herbs until melting and tender. Ratatouille is served warm or at room temperature.",
  "flavor": "Sweet and herby, rich with good olive oil.",
  "texture": "Silky, melting vegetables in a light sauce.",
  "similar": [
   "Minestrone",
   "Gazpacho",
   "Baba Ganoush",
   "Tabbouleh"
  ],
  "variations": [
   "Classic ratatouille",
   "Confit byaldi",
   "Ratatouille nicoise",
   "Grilled ratatouille"
  ],
  "nutrition": {
   "serving": "1 serving (250 g)",
   "calories": 150,
   "protein": 3,
   "carbs": 15,
   "fat": 10,
   "note": "approximate"
  },
  "pronunciation": "rah-tah-TOO-ee",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/3/34/Crispy_Polenta_Cakes_with_Ratatouille_%2814743032251%29.jpg"
 },
 "Hummus": {
  "history": "Hummus is the chickpea-tahini dip of the Levant, with roots stretching back centuries in Middle Eastern kitchens. It became a global staple of mezze platters and healthy snacking.",
  "ingredients": [
   "chickpeas",
   "tahini",
   "lemon juice",
   "garlic",
   "olive oil",
   "cumin",
   "salt",
   "ice water",
   "paprika",
   "parsley",
   "pine nuts",
   "baking soda"
  ],
  "preparation": "Chickpeas are cooked until very soft, sometimes with baking soda, then blended with tahini, lemon, and garlic. The dip is finished with olive oil, paprika, and parsley.",
  "flavor": "Nutty, lemony, and garlicky, smooth and savory.",
  "texture": "Creamy, whipped, and silky.",
  "similar": [
   "Baba Ganoush",
   "Tzatziki",
   "Tabbouleh",
   "Shakshuka"
  ],
  "variations": [
   "Classic hummus",
   "Hummus with pine nuts",
   "Roasted red pepper hummus",
   "Hummus masabacha"
  ],
  "nutrition": {
   "serving": "1 serving with pita (150 g)",
   "calories": 250,
   "protein": 8,
   "carbs": 25,
   "fat": 15,
   "note": "approximate"
  },
  "pronunciation": "HOOM-uhs",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/95871_jaffa_dish_of_hummus_PikiWiki_Israel.jpg/960px-95871_jaffa_dish_of_hummus_PikiWiki_Israel.jpg"
 },
 "Ceviche": {
  "history": "Ceviche is Latin America's citrus-cured raw fish, most associated with Peru, where it is the national dish. Coastal cooks have 'cooked' fish in lime juice for centuries.",
  "ingredients": [
   "sea bass",
   "lime juice",
   "red onion",
   "cilantro",
   "aji peppers",
   "sweet potato",
   "corn",
   "salt",
   "leche de tigre",
   "avocado",
   "celery",
   "garlic"
  ],
  "preparation": "Fresh fish is cut into cubes and marinated briefly in lime juice until the edges turn opaque. It is tossed with onion, chili, and cilantro, and served chilled with corn and sweet potato.",
  "flavor": "Bright and citrusy, spicy, with the clean sweetness of fresh fish.",
  "texture": "Firm yet tender fish with crisp onion and juicy lime.",
  "similar": [
   "Poke",
   "Tzatziki",
   "Tabbouleh",
   "Gazpacho"
  ],
  "variations": [
   "Peruvian ceviche",
   "Ecuadorian ceviche",
   "Mexican ceviche",
   "Shrimp ceviche"
  ],
  "nutrition": {
   "serving": "1 serving (250 g)",
   "calories": 220,
   "protein": 28,
   "carbs": 15,
   "fat": 6,
   "note": "approximate"
  },
  "pronunciation": "seh-VEE-chay",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Ceviche_de_camar%C3%B3n.jpg"
 },
 "Lobster Roll": {
  "history": "The lobster roll was born on the New England coast in the early 20th century, a simple roll of sweet lobster meat. Maine and Connecticut developed their rival buttered and mayonnaise styles.",
  "ingredients": [
   "lobster meat",
   "split-top buns",
   "butter",
   "mayonnaise",
   "celery",
   "lemon juice",
   "chives",
   "salt",
   "black pepper",
   "paprika",
   "tarragon",
   "Old Bay"
  ],
  "preparation": "Lobster is cooked, chilled, and tossed with warm butter or mayonnaise and lemon. The meat is piled into toasted, buttered split-top buns and served immediately.",
  "flavor": "Sweet, buttery, and briny, with lemon brightness.",
  "texture": "Tender chunks of lobster in a soft, toasted roll.",
  "similar": [
   "Lobster Bisque",
   "Hot Dog",
   "Bratwurst",
   "Cioppino"
  ],
  "variations": [
   "Maine-style lobster roll",
   "Connecticut-style lobster roll",
   "Lobster roll with tarragon",
   "Lobster BLT"
  ],
  "nutrition": {
   "serving": "1 roll (250 g)",
   "calories": 550,
   "protein": 30,
   "carbs": 35,
   "fat": 30,
   "note": "approximate"
  },
  "pronunciation": "lobster roll",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lobster_Roll_%2829497119026%29.jpg/960px-Lobster_Roll_%2829497119026%29.jpg"
 },
 "Gambas al Ajillo": {
  "history": "Gambas al ajillo is Spain's sizzling garlic shrimp, a classic tapa of Madrid and Andalusia. Served bubbling in olive oil, it is the essence of Spanish bar culture.",
  "ingredients": [
   "shrimp",
   "olive oil",
   "garlic",
   "dried chili",
   "paprika",
   "parsley",
   "lemon",
   "sherry",
   "salt",
   "black pepper",
   "crusty bread"
  ],
  "preparation": "Sliced garlic and chili are sizzled in abundant olive oil, then shrimp are added and cooked quickly. The dish is finished with parsley and lemon and served bubbling in its clay dish with bread.",
  "flavor": "Garlicky, peppery, and briny, with olive oil richness.",
  "texture": "Snappy shrimp in shimmering, garlicky oil.",
  "similar": [
   "Cioppino",
   "Lobster Bisque",
   "Poke",
   "Ceviche"
  ],
  "variations": [
   "Classic gambas al ajillo",
   "Gambas with sherry",
   "Spicy gambas",
   "Gambas pil pil"
  ],
  "nutrition": {
   "serving": "1 serving (200 g)",
   "calories": 350,
   "protein": 28,
   "carbs": 5,
   "fat": 24,
   "note": "approximate"
  },
  "pronunciation": "GAHM-bahs ahl ah-HEE-yoh",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cazuela_de_gambas_al_ajillo.jpg/960px-Cazuela_de_gambas_al_ajillo.jpg"
 },
 "Bouillabaisse": {
  "history": "Bouillabaisse is Marseille's famed fisherman's stew, born from the day's catch simmered with saffron and Provencal herbs. It grew from humble port fare into France's most celebrated seafood soup.",
  "ingredients": [
   "firm white fish",
   "mussels",
   "shrimp",
   "saffron",
   "fennel",
   "tomatoes",
   "onion",
   "garlic",
   "olive oil",
   "fish stock",
   "orange peel",
   "thyme",
   "rouille",
   "croutons"
  ],
  "preparation": "Aromatics are sauteed, then stock, saffron, and herbs are added. The fish goes in layered by firmness and simmers briefly, and the stew is served with rouille and croutons.",
  "flavor": "Saffron and fennel over deep, briny seafood.",
  "texture": "A rich broth holding varied tender seafood.",
  "similar": [
   "Cioppino",
   "Lobster Bisque",
   "Minestrone",
   "Hot and Sour Soup"
  ],
  "variations": [
   "Traditional Marseille bouillabaisse",
   "Bouillabaisse with rouille",
   "Modern bouillabaisse",
   "Bourride"
  ],
  "nutrition": {
   "serving": "1 bowl (400 g)",
   "calories": 400,
   "protein": 35,
   "carbs": 15,
   "fat": 20,
   "note": "approximate"
  },
  "pronunciation": "boo-yah-BESS",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/15-12-13-Bouillabaisse-RalfR-N3S_3085.jpg/960px-15-12-13-Bouillabaisse-RalfR-N3S_3085.jpg"
 },
 "Blodpalt": {
  "flavor": "Earthy and iron-rich with savory pork and warm spice, balanced by tart lingonberries.",
  "history": "Blodpalt are blood dumplings from Norrland in northern Sweden, part of a long tradition of using every part of slaughtered animals. Blood mixed with flour or groats formed an economical, nourishing food for farming families. They are still eaten in northern Sweden, especially in autumn and winter.",
  "ingredients": [
   "reindeer or pork blood",
   "barley flour",
   "diced pork",
   "onion",
   "salt",
   "black pepper",
   "marjoram",
   "lingonberries"
  ],
  "nutrition": {
   "calories": 480,
   "carbs": 55,
   "fat": 16,
   "note": "approximate",
   "protein": 28,
   "serving": "3 dumplings (300 g)"
  },
  "preparation": "Blood is whisked with barley flour and seasonings into a thick batter, then diced pork is folded in. The mixture is shaped into round dumplings and boiled in salted water until firm. They are served hot, typically with lingonberry jam.",
  "pronunciation": "BLOOD-palt",
  "similar": [
   "Blodplättar",
   "Żymlok",
   "Czernina",
   "Pig's Blood Cake"
  ],
  "texture": "Dense, soft, and pudding-like with chewy cubes of pork throughout.",
  "variations": [
   "with rye flour instead of barley",
   "smoked bacon instead of fresh pork",
   "fried slices the next day"
  ],
  "photo": null
 },
 "Blodplättar": {
  "flavor": "Savory and mineral-rich with onion and warm spice, mellowed by sweet-tart jam.",
  "history": "Blodplättar are Swedish blood pancakes, a traditional way of using fresh blood after autumn slaughter. They belong to the same frugal northern food culture as other blood dishes and are typically served with lingonberry jam. They are still made in homes across Sweden, particularly in the north.",
  "ingredients": [
   "pig or reindeer blood",
   "wheat flour",
   "milk or water",
   "onion",
   "salt",
   "black pepper",
   "allspice",
   "butter",
   "lingonberry jam"
  ],
  "nutrition": {
   "calories": 420,
   "carbs": 48,
   "fat": 14,
   "note": "approximate",
   "protein": 22,
   "serving": "4 pancakes (250 g)"
  },
  "preparation": "Blood is whisked smooth with flour, milk, and finely chopped onion until it forms a thin batter. The batter is fried in butter like small pancakes until set and browned. They are served warm with lingonberry jam.",
  "pronunciation": "BLOOD-plet-tar",
  "similar": [
   "Blodpalt",
   "Żymlok",
   "Sundae (Korean Blood Sausage)",
   "Buttermilk Pancakes"
  ],
  "texture": "Soft, thin, and slightly spongy, like a tender crepe.",
  "variations": [
   "with beer instead of milk in the batter",
   "crisped edges from a hotter pan",
   "served with bacon on the side"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Blodpl%C3%A4ttar.jpg/960px-Blodpl%C3%A4ttar.jpg"
 },
 "Chapalele": {
  "flavor": "Mild and starchy, essentially potato-forward; sweet versions taste lightly sugary.",
  "history": "Chapalele are boiled potato dumplings from Chiloé in southern Chile, part of the island's rich potato-based cooking. Like milcao, they reflect the centuries-old potato culture of the archipelago. They are often cooked in curanto earth ovens or simply boiled and served alongside stews.",
  "ingredients": [
   "potatoes",
   "wheat flour",
   "salt",
   "water",
   "sugar (for sweet versions)"
  ],
  "nutrition": {
   "calories": 380,
   "carbs": 80,
   "fat": 2,
   "note": "approximate",
   "protein": 8,
   "serving": "3 dumplings (250 g)"
  },
  "preparation": "Boiled potatoes are mashed and mixed with wheat flour into a firm dough. The dough is shaped into flat oval dumplings. They are boiled in salted water until they float, then served hot.",
  "pronunciation": "chah-pah-LEH-leh",
  "similar": [
   "Milcao",
   "Potato Gnocchi",
   "Wonton"
  ],
  "texture": "Soft, dense, and doughy with a smooth, slightly sticky bite.",
  "variations": [
   "sweet chapalele with sugar",
   "chapalele de curanto (earth-oven)",
   "stuffed with cheese or meat"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Asadera_de_chapaleles.jpg/960px-Asadera_de_chapaleles.jpg"
 },
 "Hon Mhai (Fried Silkworms)": {
  "flavor": "Nutty and savory with a mild, earthy richness like fried shrimp shells.",
  "history": "Hon mhai are silkworm pupae eaten as a snack in Thailand, where insects are a common and affordable source of protein. They are sold by street vendors and in markets across the country, especially in the northeast. Silkworms are a byproduct of Thailand's silk industry.",
  "ingredients": [
   "silkworm pupae",
   "vegetable oil",
   "salt",
   "black pepper",
   "lime leaves"
  ],
  "nutrition": {
   "calories": 290,
   "carbs": 12,
   "fat": 18,
   "note": "approximate",
   "protein": 20,
   "serving": "1 small bag (100 g)"
  },
  "preparation": "Silkworm pupae are deep-fried in hot oil until they puff and turn golden brown. They are drained and tossed with salt and pepper while hot. They are eaten warm as a snack, sometimes with lime leaves.",
  "pronunciation": "hon MY",
  "similar": [
   "Chapulines",
   "Fried Tarantula",
   "Stinky Tofu",
   "Salt and Pepper Squid"
  ],
  "texture": "Crisp and puffy outside with a soft, slightly creamy interior.",
  "variations": [
   "stir-fried with chili and basil",
   "salted and dried as a shelf snack",
   "served with spicy dipping sauce"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Fried_silkworms.jpg/960px-Fried_silkworms.jpg"
 },
 "Kugel Yerushalmi": {
  "flavor": "Simultaneously sweet like caramel and sharply peppery, with a roasted, toasty edge.",
  "history": "Kugel Yerushalmi is a baked noodle pudding from Jerusalem, associated with Ashkenazi Jewish communities there. Its signature is the clash of caramelized sugar sweetness with a heavy hand of black pepper. It is traditionally served at Shabbat meals and festive gatherings.",
  "ingredients": [
   "thin egg noodles",
   "sugar",
   "eggs",
   "black pepper",
   "vegetable oil",
   "salt"
  ],
  "nutrition": {
   "calories": 380,
   "carbs": 62,
   "fat": 12,
   "note": "approximate",
   "protein": 8,
   "serving": "1 slice (150 g)"
  },
  "preparation": "Sugar is caramelized in oil until dark, then cooked noodles are tossed through it so they take on a deep amber color. Beaten eggs and a generous amount of black pepper are mixed in. The mixture is baked until set with a crisp top.",
  "pronunciation": "KOO-gul yeh-roo-SHAL-mee",
  "similar": [
   "Kichel",
   "Sticky Toffee Pudding",
   "Christmas Pudding"
  ],
  "texture": "Firm, sliceable noodle cake with a chewy interior and a slightly crisp, caramelized crust.",
  "variations": [
   "extra-peppery versions",
   "individual muffin-sized kugels",
   "raisin-studded versions"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Kugel-Yerushalmi03.jpg/960px-Kugel-Yerushalmi03.jpg"
 },
 "Milcao": {
  "flavor": "Deeply potato-sweet and starchy, enriched with savory pork fat.",
  "history": "Milcao is a potato bread from the Chiloé Archipelago in southern Chile, where potatoes have been cultivated for centuries. It is a dense cake of grated raw and cooked potatoes, a staple of Chilote cuisine. Milcao is traditionally cooked in a curanto, the island's earth-oven feast, as well as fried or baked.",
  "ingredients": [
   "pork lard",
   "boiled potatoes",
   "grated raw potatoes",
   "salt",
   "pork cracklings",
   "water"
  ],
  "nutrition": {
   "calories": 520,
   "carbs": 78,
   "fat": 18,
   "note": "approximate",
   "protein": 8,
   "serving": "2 cakes (250 g)"
  },
  "preparation": "Some potatoes are boiled and mashed while others are grated raw, then the two are mixed into a stiff dough. Pork cracklings are often folded in, and the dough is shaped into thick cakes. They are fried, baked, or cooked in a curanto until golden.",
  "pronunciation": "meel-KOW",
  "similar": [
   "Chapalele",
   "Mashed Potatoes",
   "Potato Gnocchi",
   "Shepherd's Pie"
  ],
  "texture": "Very dense, heavy, and slightly gummy inside with a crisp, browned crust.",
  "variations": [
   "milcao de curanto (earth-oven cooked)",
   "sweet milcao with sugar and cinnamon",
   "baked milcao con chicharrones"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Milcao.png/960px-Milcao.png"
 },
 "Pizza Vulkanen": {
  "flavor": "Rich and meaty, with smoky cured meats, creamy bearnaise, and savory cheese over a classic tomato base.",
  "history": "Pizza Vulkanen is a novelty ring-shaped pizza from Piteå in northern Sweden, named for its volcano-like shape with french fries and salad piled in the center like an eruption. It belongs to a Swedish tradition of extravagant filled and topped pizzas found in small-town pizzerias. Its exact date of invention is not widely documented.",
  "ingredients": [
   "pizza dough",
   "tomato sauce",
   "mozzarella cheese",
   "ham",
   "salami",
   "bacon",
   "beef tenderloin",
   "french fries",
   "bearnaise sauce",
   "lettuce",
   "onion",
   "oregano"
  ],
  "nutrition": {
   "calories": 980,
   "carbs": 95,
   "fat": 46,
   "note": "approximate",
   "protein": 38,
   "serving": "1/4 pizza (350 g)"
  },
  "preparation": "A ring of pizza dough is baked with cheese, ham, salami, bacon, and beef tenderloin layered around the edges. Once out of the oven, french fries are piled into the hollow center. Bearnaise-style salad is spooned over the fries before serving.",
  "pronunciation": "PEET-sah vul-KAH-nen",
  "similar": [
   "Pizza Napoletana",
   "Calskrove",
   "Ramen Burger",
   "Luther Burger"
  ],
  "texture": "Crisp-edged crust and molten cheese contrasted with soft fries and cool, creamy salad.",
  "variations": [
   "half-and-half meat toppings",
   "extra bearnaise drizzle",
   "pepperoni instead of salami"
  ],
  "photo": null
 },
 "Svið": {
  "flavor": "Rich and lamb-like, mild and meaty with a clean, brothy savoriness.",
  "history": "Svið is a traditional Icelandic dish of singed sheep's head, rooted in the country's no-waste farming culture where every part of the animal was used. It has long been eaten year-round and is especially associated with the midwinter Þorrablót feasts. Singeing the fleece off the head before cooking gives the dish its name.",
  "ingredients": [
   "sheep's head",
   "salt",
   "water",
   "turnips",
   "butter",
   "pepper"
  ],
  "nutrition": {
   "calories": 520,
   "carbs": 18,
   "fat": 30,
   "note": "approximate",
   "protein": 42,
   "serving": "1/2 head with turnips (300 g)"
  },
  "preparation": "The sheep's head is singed to remove the fleece, then split in half and the brain removed. It is simmered in salted water until the meat is fully tender, which can take several hours. It is traditionally served warm with mashed turnips.",
  "pronunciation": "SVITH",
  "similar": [
   "Smalahove",
   "Haggis",
   "Thorramatur",
   "Chitterlings"
  ],
  "texture": "Tender, gelatinous meat that falls from the bone; the cheek is soft while the ear has a cartilage-like bite.",
  "variations": [
   "served cold as sliced meat",
   "with mashed potatoes instead of turnips",
   "smoked sheep's head"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Svi%C3%B0.jpg/960px-Svi%C3%B0.jpg"
 },
 "Thorramatur": {
  "flavor": "Intensely varied: pungent ammonia notes from the fermented shark, smoky richness from the lamb, and mild savory notes from the rest.",
  "history": "Þorramatur is an Icelandic platter assembled for Þorri, the midwinter month of the old Norse calendar, when traditional preservation-era foods are eaten at Þorrablót feasts. It gathers foods that kept Icelanders alive through long winters: fermented, smoked, dried, and cured products. The modern buffet-style presentation became popular in the 20th century.",
  "ingredients": [
   "fermented shark (hákarl)",
   "blood sausage",
   "sheep's head",
   "smoked lamb",
   "dried fish",
   "rye flatbread",
   "butter",
   "pickled herring"
  ],
  "nutrition": {
   "calories": 640,
   "carbs": 25,
   "fat": 32,
   "note": "approximate",
   "protein": 58,
   "serving": "1 platter portion (400 g)"
  },
  "preparation": "Each preserved component is prepared in its own traditional way: the shark is fermented and hung to dry, the lamb is smoked or cured, sausages are boiled, and the sheep's head is singed and simmered. The items are sliced or portioned and arranged together on a large platter. It is served with rye flatbread and butter.",
  "pronunciation": "THOR-rah-MAH-tur",
  "similar": [
   "Svið",
   "Hákarl",
   "Smalahove",
   "Surströmming"
  ],
  "texture": "A mix of firm, chewy shark cubes, soft sausage, tender head meat, and dry, dense lamb slices.",
  "variations": [
   "with Brennivín schnapps on the side",
   "including dried fish and flatkaka",
   "home-style vs. restaurant buffet presentations"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Thorramatur.jpg/960px-Thorramatur.jpg"
 },
 "Truchas a la Navarra": {
  "flavor": "Delicate, sweet trout meat enriched with the salty, cured depth of the ham.",
  "history": "Truchas a la Navarra is a classic dish from the Navarre region of northern Spain, where clear mountain rivers provide abundant trout. Stuffing the fish with cured ham is a traditional Navarrese pairing of river and farmhouse products. It remains a staple of regional restaurants and home cooking.",
  "ingredients": [
   "river trout",
   "serrano ham",
   "olive oil",
   "garlic",
   "flour",
   "salt",
   "black pepper",
   "lemon"
  ],
  "nutrition": {
   "calories": 460,
   "carbs": 8,
   "fat": 24,
   "note": "approximate",
   "protein": 48,
   "serving": "1 trout (300 g)"
  },
  "preparation": "Whole trout are cleaned and the cavity is stuffed with slices of cured ham. The fish are lightly floured and pan-fried in olive oil until the skin crisps. They are served hot with lemon wedges.",
  "pronunciation": "TROO-chas ah lah nah-VAR-rah",
  "similar": [
   "Grilled Salmon",
   "Smoked Salmon",
   "Goan Fish Curry",
   "Fish and Chips"
  ],
  "texture": "Crisp skin giving way to flaky, moist fish with chewy ribbons of ham inside.",
  "variations": [
   "with iberico ham instead of serrano",
   "baked instead of fried",
   "wrapped in ham rather than stuffed"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Trucha_a_la_Navarra.jpg/960px-Trucha_a_la_Navarra.jpg"
 },
 "Jellied Eels": {
  "flavor": "Mild, clean eel flavor in a subtly spiced, savory jelly.",
  "history": "Jellied eels are a traditional London working-class dish dating back to at least the 18th century, when eels were plentiful and cheap in the Thames. They were sold from pie-and-mash shops and street stalls across the East End. The dish has faded from everyday eating but is still served in a handful of traditional shops.",
  "ingredients": [
   "freshwater eels",
   "water",
   "salt",
   "white vinegar",
   "bay leaves",
   "peppercorns",
   "nutmeg",
   "parsley",
   "lemon"
  ],
  "nutrition": {
   "calories": 280,
   "carbs": 2,
   "fat": 16,
   "note": "approximate",
   "protein": 32,
   "serving": "1 portion (250 g)"
  },
  "preparation": "Chopped eels are boiled in spiced stock with vinegar and bay leaves until the flesh is tender. The pieces are left to cool in the cooking liquid, which sets into a natural jelly from the eel's own gelatin. It is served cold with vinegar and white pepper.",
  "pronunciation": "JELL-eed eels",
  "similar": [
   "Fish and Chips",
   "Gefilte Fish",
   "Pickled Herring"
  ],
  "texture": "Soft, flaky eel pieces suspended in a smooth, wobbly natural jelly.",
  "variations": [
   "with extra chili vinegar",
   "served warm in winter months",
   "pie, mash, and liquor shop style"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/2/23/Hot_Jellied_Eels_%283602737846%29.jpg"
 },
 "Aginares Salata": {
  "flavor": "Lightly bitter and fresh, lemony with grassy olive oil.",
  "history": "Aginares salata is a cold artichoke salad from Crete, part of the island's tradition of simple vegetable dishes dressed with olive oil and lemon. Artichokes grow well in the Cretan climate and appear in spring cooking. It is typically served as part of a spread of small plates.",
  "ingredients": [
   "artichokes",
   "lemon juice",
   "olive oil",
   "salt",
   "dill",
   "spring onions"
  ],
  "nutrition": {
   "calories": 180,
   "carbs": 14,
   "fat": 12,
   "note": "approximate",
   "protein": 4,
   "serving": "1 bowl (200 g)"
  },
  "preparation": "Artichokes are trimmed and boiled or steamed in lemon water until tender. They are cooled and sliced or left whole. The salad is dressed with olive oil, lemon juice, salt, and chopped dill and spring onions.",
  "pronunciation": "ah-yee-NAH-res sah-LAH-tah",
  "similar": [
   "Shopska Salad",
   "Mechouia Salad",
   "Caesar Salad",
   "Cobb Salad"
  ],
  "texture": "Tender artichoke hearts with a soft bite, slicked in oil.",
  "variations": [
   "with capers added",
   "served warm as a side dish",
   "with shaved fennel"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tunisian_Artichoke_Salad..jpg/960px-Tunisian_Artichoke_Salad..jpg"
 },
 "Ambuyat": {
  "flavor": "Almost flavorless on its own, a neutral starchy base meant to carry bold dipping sauces.",
  "history": "Ambuyat is the national dish of Brunei, made from the starch of the sago palm. Sago has long been a staple starch in parts of Borneo and eastern Indonesia, harvested from palm trunks. Eating ambuyat is a communal ritual, with diners twirling the starchy blob onto a special bamboo fork.",
  "ingredients": [
   "sago starch",
   "boiling water",
   "tempoyak (durian dip)",
   "sambal belacan",
   "sour fruit (binjai)"
  ],
  "nutrition": {
   "calories": 330,
   "carbs": 82,
   "fat": 0,
   "note": "approximate",
   "protein": 1,
   "serving": "1 portion (200 g)"
  },
  "preparation": "Sago starch is placed in a bowl and boiling water is poured over it while stirring vigorously. The mixture turns into a translucent, glue-like mass within minutes. It is twirled onto a bamboo fork called a candas and dipped into savory sauces.",
  "pronunciation": "am-boo-YAHT",
  "similar": [
   "Nasi Lemak",
   "Laksa",
   "Rendang",
   "Nasi Kandar"
  ],
  "texture": "Smooth, stretchy, and glue-like, clinging to the fork in long ribbons.",
  "variations": [
   "linut (Sarawak version)",
   "with tempoyak durian dip",
   "with sambal belacan and sour fruit"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/5/51/Ambuyat.jpg"
 },
 "Nervetti": {
  "flavor": "Mild and gelatinous with a clean, meaty savoriness lifted by sharp onion and vinegar.",
  "history": "Nervetti are a traditional Milanese dish of calf's foot tendons, a classic example of cucina povera nose-to-tail cooking. The tendons were a cheap cut that, with long boiling, turns tender. They are served cold as a salad, especially in warmer months.",
  "ingredients": [
   "calf's foot tendons",
   "white beans",
   "red onion",
   "white wine vinegar",
   "olive oil",
   "salt",
   "black pepper",
   "parsley"
  ],
  "nutrition": {
   "calories": 260,
   "carbs": 16,
   "fat": 10,
   "note": "approximate",
   "protein": 26,
   "serving": "1 plate (250 g)"
  },
  "preparation": "The tendons are boiled for several hours until completely tender, then cooled. They are sliced thin and tossed with cooked white beans, sliced onion, oil, and vinegar. The salad is chilled before serving.",
  "pronunciation": "nair-VET-tee",
  "similar": [
   "Lampredotto",
   "Pani ca Meusa",
   "Menudo",
   "Head Cheese"
  ],
  "texture": "Soft, gelatinous, and slightly chewy slices, creamy beans, and crisp onion.",
  "variations": [
   "with borlotti instead of cannellini beans",
   "with pickled vegetables",
   "warmed as a winter stew"
  ],
  "photo": null
 },
 "Ramen Burger": {
  "flavor": "Savory and umami-rich, with beefy char, sweet sauce, and the toasted wheat flavor of the noodle buns.",
  "history": "The ramen burger was created in Brooklyn, New York, in 2013 as a street-food novelty, combining Japanese ramen with the American hamburger. It quickly became a viral food-festival hit and inspired imitations worldwide. It is typically found at food fairs and pop-up stalls rather than traditional restaurants.",
  "ingredients": [
   "ramen noodles",
   "ground beef",
   "soy sauce",
   "sesame oil",
   "scallions",
   "arugula",
   "egg",
   "shoyu-based sauce",
   "vegetable oil"
  ],
  "nutrition": {
   "calories": 780,
   "carbs": 72,
   "fat": 34,
   "note": "approximate",
   "protein": 38,
   "serving": "1 burger (400 g)"
  },
  "preparation": "Cooked ramen noodles are mixed with egg and pressed into bun shapes, then pan-fried until crisp and golden. A seasoned beef patty is grilled and placed between the two noodle buns. It is finished with shoyu sauce, scallions, and arugula.",
  "pronunciation": "RAH-men BUR-ger",
  "similar": [
   "Luther Burger",
   "Calskrove",
   "Cheeseburger",
   "Tonkotsu Ramen"
  ],
  "texture": "Crisp, chewy noodle buns around a juicy, tender patty.",
  "variations": [
   "pork belly ramen burger",
   "spicy miso glaze",
   "mini slider versions"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Delecious_Food_at_Sugbo_Mercado_2.jpg/960px-Delecious_Food_at_Sugbo_Mercado_2.jpg"
 },
 "Żymlok": {
  "flavor": "Deep, earthy, and iron-rich with the mild sweetness of groats and a peppery finish.",
  "history": "Żymlok is a blood sausage from Silesia in southern Poland, made when pigs were slaughtered on family farms. Blood mixed with groats and offal produced a dense, dark sausage that kept well. It remains a regional specialty, often served at local festivals.",
  "ingredients": [
   "pork blood",
   "barley groats",
   "pork offal",
   "pork fat",
   "onion",
   "salt",
   "black pepper",
   "marjoram",
   "natural casing"
  ],
  "nutrition": {
   "calories": 540,
   "carbs": 32,
   "fat": 34,
   "note": "approximate",
   "protein": 26,
   "serving": "2 links (250 g)"
  },
  "preparation": "Cooked groats, chopped offal, and onion are mixed with fresh pork blood and seasonings. The mixture is stuffed into casings and simmered until set. It is typically sliced and pan-fried before serving.",
  "pronunciation": "ZHIM-lok",
  "similar": [
   "Blodpalt",
   "Blodplättar",
   "Sundae (Korean Blood Sausage)",
   "Black Pudding"
  ],
  "texture": "Dense and sliceable with a soft, grainy interior and a crisped skin when fried.",
  "variations": [
   "with buckwheat groats",
   "smoked versions",
   "served with fried onion"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/%C5%BBymloki.jpg/960px-%C5%BBymloki.jpg"
 },
 "Kichel": {
  "flavor": "Lightly sweet and buttery with a crisp, dry crunch.",
  "history": "Kichel are sweet, bow-tie-shaped crackers from Ashkenazi Jewish baking traditions, eaten in Israel and in diaspora communities. They are a simple tea cookie, often served with hot drinks on Shabbat or at gatherings. Their dry, crisp texture made them easy to store.",
  "ingredients": [
   "flour",
   "sugar",
   "eggs",
   "vegetable oil",
   "vanilla",
   "baking powder",
   "salt"
  ],
  "nutrition": {
   "calories": 220,
   "carbs": 38,
   "fat": 6,
   "note": "approximate",
   "protein": 4,
   "serving": "4 cookies (60 g)"
  },
  "preparation": "A simple sweet dough of flour, sugar, eggs, and oil is rolled out and cut into rectangles. Each piece is pinched in the middle to form a bow-tie shape. They are baked until pale gold and crisp.",
  "pronunciation": "KIH-khul",
  "similar": [
   "Kugel Yerushalmi",
   "Baklava",
   "Egg Tarts (Dan Tat)"
  ],
  "texture": "Dry, crisp, and delicate, shattering when bitten.",
  "variations": [
   "vanilla vs. plain",
   "larger tea-time size",
   "sprinkled with extra sugar"
  ],
  "photo": null
 },
 "Tortilla Paisana": {
  "flavor": "Savory and vegetable-sweet, with egg richness and the gentle sweetness of softened vegetables.",
  "history": "Tortilla paisana, or peasant's omelette, is a rustic Spanish variation of the classic tortilla española loaded with whatever vegetables are on hand. It reflects the resourceful home cooking of rural Spain. Unlike the minimalist potato version, it is packed with a colorful mix of vegetables.",
  "ingredients": [
   "eggs",
   "potatoes",
   "onion",
   "green pepper",
   "zucchini",
   "peas",
   "olive oil",
   "salt"
  ],
  "nutrition": {
   "calories": 420,
   "carbs": 32,
   "fat": 26,
   "note": "approximate",
   "protein": 16,
   "serving": "1 wedge (280 g)"
  },
  "preparation": "Potatoes and vegetables are slowly cooked in olive oil until soft. Beaten eggs are poured over and the mixture is cooked gently until set underneath, then flipped or finished to set the top. It is served warm or at room temperature.",
  "pronunciation": "tor-TEE-yah py-SAH-nah",
  "similar": [
   "Oyster Omelette",
   "Eggs Benedict",
   "Breakfast Taco"
  ],
  "texture": "Thick, soft, and custardy with tender chunks of vegetable throughout.",
  "variations": [
   "with chorizo added",
   "with artichokes in spring",
   "baked in the oven"
  ],
  "photo": null
 },
 "Heusuppe": {
  "flavor": "Grassy, floral, and mildly sweet, like a meadow distilled into broth.",
  "history": "Heusuppe is a Swiss specialty of broth infused with mountain hay, a traditional farmhouse dish from alpine regions. Using fragrant dried hay as an aromatic was a thrifty alpine practice. It is still served in some mountain inns as a rustic regional curiosity.",
  "ingredients": [
   "mountain hay",
   "vegetable or beef broth",
   "potatoes",
   "leeks",
   "carrots",
   "cream",
   "salt",
   "nutmeg"
  ],
  "nutrition": {
   "calories": 240,
   "carbs": 28,
   "fat": 12,
   "note": "approximate",
   "protein": 8,
   "serving": "1 bowl (300 ml)"
  },
  "preparation": "Clean dried mountain hay is briefly steeped or simmered in hot broth to infuse it, then strained out. Vegetables are simmered in the infused broth until tender. The soup is finished with cream and nutmeg.",
  "pronunciation": "HOY-zoo-peh",
  "similar": [
   "French Onion Soup",
   "Miso Soup",
   "Wonton Soup"
  ],
  "texture": "A light, clear-ish broth with soft vegetable pieces.",
  "variations": [
   "strained clear version",
   "with alpine cheese grated on top",
   "with barley added"
  ],
  "photo": null
 },
 "Kaeng Tai Pla": {
  "flavor": "Intensely salty, funky, and fiery, with deep fermented fish character and sharp chili heat.",
  "history": "Kaeng tai pla is a pungent curry from southern Thailand, built on tai pla, a paste of fermented fish entrails. It is a staple of southern Thai home cooking, eaten with rice to tame its intensity. The dish reflects the region's love of boldly fermented flavors.",
  "ingredients": [
   "fermented fish entrail paste",
   "fish",
   "chili paste",
   "galangal",
   "shrimp paste",
   "turmeric",
   "eggplant",
   "bamboo shoots",
   "kaffir lime leaves",
   "coconut milk"
  ],
  "nutrition": {
   "calories": 420,
   "carbs": 18,
   "fat": 24,
   "note": "approximate",
   "protein": 32,
   "serving": "1 bowl (350 g)"
  },
  "preparation": "The fermented fish paste is dissolved in water and boiled to form a deeply flavored stock. Chili paste, galangal, and shrimp paste are pounded in, then fish and vegetables are simmered until cooked through. It is served over rice with fresh vegetables.",
  "pronunciation": "geng ty plah",
  "similar": [
   "Massaman Curry",
   "Thai Green Curry",
   "Fish Head Curry",
   "Tom Yum Goong"
  ],
  "texture": "A thick, hearty curry with firm fish chunks and tender vegetables in a dense broth.",
  "variations": [
   "with extra bamboo shoots",
   "spicier Phatthalung style",
   "with added pork belly"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Kaeng_tai_pla.JPG/960px-Kaeng_tai_pla.JPG"
 },
 "Surströmming": {
  "flavor": "Intensely pungent, salty, and fishy, with a sharp fermented tang; fans eat it with bread and potatoes to balance it.",
  "history": "Surströmming is Swedish fermented Baltic herring, a tradition from the north of the country where fish were lightly salted and left to ferment in barrels. Canning began in the 19th century, and the ongoing fermentation makes the tins bulge. It is traditionally eaten outdoors in late summer, partly because of the smell released on opening.",
  "ingredients": [
   "Baltic herring",
   "salt",
   "water",
   "flatbread",
   "boiled potatoes",
   "red onion",
   "sour cream"
  ],
  "nutrition": {
   "calories": 250,
   "carbs": 1,
   "fat": 12,
   "note": "approximate",
   "protein": 30,
   "serving": "5 fillets with sides (200 g)"
  },
  "preparation": "Herring are caught in spring, lightly salted, and left to ferment in barrels for one to two months. They are then canned, where fermentation continues. The fish are served with thin flatbread, boiled potatoes, onion, and sour cream.",
  "pronunciation": "SOOR-strem-ming",
  "similar": [
   "Hákarl",
   "Fesikh",
   "Pickled Herring",
   "Smoked Salmon"
  ],
  "texture": "Soft, falling-apart fish flesh with a briny, juicy bite.",
  "variations": [
   "served as surströmmingsklämma (sandwich)",
   "with Västerbotten cheese",
   "filleted vs. whole"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Serving_Surstr%C3%B6mming.jpg/960px-Serving_Surstr%C3%B6mming.jpg"
 },
 "Hákarl": {
  "flavor": "Pungent and ammonia-sharp with a fishy, blue-cheese-like funk; the taste is milder than the smell.",
  "history": "Hákarl is Icelandic fermented Greenland shark, a survival food from times when fresh shark meat was poisonous due to urea and trimethylamine. Burial in gravel pits and months of hanging fermented and dried the flesh into something safe to eat. It is now a traditional food for Þorrablót midwinter feasts.",
  "ingredients": [
   "Greenland shark meat",
   "salt",
   "Brennivín (serving accompaniment)",
   "rye flatbread",
   "dried seaweed (optional garnish)"
  ],
  "nutrition": {
   "calories": 220,
   "carbs": 0,
   "fat": 8,
   "note": "approximate",
   "protein": 34,
   "serving": "6 cubes (100 g)"
  },
  "preparation": "Shark meat is buried in gravel and pressed for several weeks to drain fluids, then cut into strips. The strips are hung in drying sheds for two to four months until a brown crust forms. It is served in small cubes, often with Brennivín schnapps.",
  "pronunciation": "HOW-karl",
  "similar": [
   "Surströmming",
   "Thorramatur",
   "Shark Fin Soup",
   "Fesikh"
  ],
  "texture": "Firm, chewy, and slightly rubbery with a dry, crumbly edge.",
  "variations": [
   "glerhákarl (from the belly, milder)",
   "skyrrhákarl (from the body, stronger)",
   "fresh vs. aged"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/H%C3%A1karl2.jpg/960px-H%C3%A1karl2.jpg"
 },
 "Balut": {
  "flavor": "Rich, savory, and eggy with a deep, almost meaty brothiness.",
  "history": "Balut is a fertilized duck egg eaten in the Philippines, with similar versions across Southeast Asia. It is a popular street food, usually sold in the evening by vendors. The egg is incubated for about two weeks before boiling.",
  "ingredients": [
   "fertilized duck eggs",
   "salt",
   "spiced vinegar",
   "chili",
   "calamansi"
  ],
  "nutrition": {
   "calories": 190,
   "carbs": 2,
   "fat": 14,
   "note": "approximate",
   "protein": 14,
   "serving": "1 egg (70 g)"
  },
  "preparation": "Duck eggs with partially developed embryos are incubated for roughly 14 to 21 days. They are boiled and eaten warm straight from the shell. Diners sip the broth, then season the rest with salt, vinegar, or chili.",
  "pronunciation": "bah-LOOT",
  "similar": [
   "Century Egg",
   "Scotch Egg",
   "Eggs Benedict",
   "Egg Fried Rice"
  ],
  "texture": "A mix of warm broth, tender yolk, and soft, slightly firm embryonic textures.",
  "variations": [
   "penoy (less developed embryo)",
   "with spiced vinegar dip",
   "served in restaurants as balut dishes"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adobong_Balut.jpg/960px-Adobong_Balut.jpg"
 },
 "Casu Marzu": {
  "flavor": "Extremely pungent, sharp, and creamy, with an intense fermented bite that lingers.",
  "history": "Casu marzu is a Sardinian sheep's milk cheese aged until cheese-fly larvae colonize it, breaking the paste down into a soft, pungent mass. It comes from Sardinian shepherding traditions of long-aged pecorino. It is a protected traditional product eaten by aficionados, though its sale is restricted.",
  "ingredients": [
   "sheep's milk",
   "rennet",
   "salt",
   "flatbread",
   "cheese-fly larvae (Piophila casei)"
  ],
  "nutrition": {
   "calories": 380,
   "carbs": 2,
   "fat": 30,
   "note": "approximate",
   "protein": 22,
   "serving": "1 wedge (100 g)"
  },
  "preparation": "Pecorino is made in the usual way and aged, then left open so cheese flies can lay eggs in it. The larvae digest the cheese into a soft, creamy paste over weeks. It is traditionally spread on flatbread and eaten with strong red wine.",
  "pronunciation": "KAH-zoo MAR-zoo",
  "similar": [
   "Mac and Cheese",
   "Grilled Cheese Sandwich",
   "Head Cheese"
  ],
  "texture": "Extremely soft, almost liquid, with a creamy, spreadable body.",
  "variations": [
   "softer vs. firmer stages",
   "eaten with the larvae or strained",
   "paired with cannonau wine"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Casu_Marzu_cheese.jpg/960px-Casu_Marzu_cheese.jpg"
 },
 "Fesikh": {
  "flavor": "Intensely salty and pungent with a strong fermented fish character.",
  "history": "Fesikh is Egyptian salted, fermented grey mullet, traditionally eaten during Sham El Nessim, the spring festival celebrated since pharaonic times. The fish is salted in wooden barrels for weeks until it ferments. It is a beloved holiday food, eaten carefully because improper preparation can be unsafe.",
  "ingredients": [
   "grey mullet",
   "coarse salt",
   "water",
   "lemon",
   "olive oil",
   "green onions"
  ],
  "nutrition": {
   "calories": 300,
   "carbs": 2,
   "fat": 14,
   "note": "approximate",
   "protein": 38,
   "serving": "1 fish portion (200 g)"
  },
  "preparation": "Whole grey mullet are packed in coarse salt in wooden barrels for several weeks to ferment. The fish are cleaned, dressed with lemon juice and oil, and served with green onions and bread. Only properly prepared fesikh from trusted sources is eaten.",
  "pronunciation": "feh-SEEKH",
  "similar": [
   "Surströmming",
   "Hákarl",
   "Pickled Herring",
   "Gefilte Fish"
  ],
  "texture": "Firm, flaky, intensely brined flesh that shreds into fibers.",
  "variations": [
   "melouha (Sohag-style version)",
   "with tahini on the side",
   "served with pickled turnips"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Fesikh-Desouk.JPG/960px-Fesikh-Desouk.JPG"
 },
 "Smalahove": {
  "flavor": "Rich and deeply lamb-like, mild and savory with a clean roasted savoriness.",
  "history": "Smalahove is a Norwegian dish of singed sheep's head, traditionally eaten in the autumn after slaughter. It comes from the same no-waste farming culture as Iceland's svið. It is especially associated with the Voss region in western Norway, where it remains a celebrated local specialty.",
  "ingredients": [
   "sheep's head",
   "salt",
   "water",
   "rutabaga",
   "potatoes",
   "butter",
   "pepper"
  ],
  "nutrition": {
   "calories": 560,
   "carbs": 22,
   "fat": 32,
   "note": "approximate",
   "protein": 44,
   "serving": "1/2 head with sides (320 g)"
  },
  "preparation": "The sheep's head is singed to remove the fleece, split, and soaked, then simmered in salted water for several hours until tender. It is served hot, traditionally with mashed rutabaga and potatoes. The ear and eye are considered delicacies by enthusiasts.",
  "pronunciation": "smah-lah-HOO-veh",
  "similar": [
   "Svið",
   "Haggis",
   "Chitterlings",
   "Thorramatur"
  ],
  "texture": "Very tender, gelatinous meat that pulls easily from the bone.",
  "variations": [
   "with mashed rutabaga (classic)",
   "salted vs. unsalted versions",
   "smoked smalahove"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Sheep_head_-_Smalahove_-_kalleh_pacheh.jpg/960px-Sheep_head_-_Smalahove_-_kalleh_pacheh.jpg"
 },
 "Calskrove": {
  "flavor": "Rich, salty, and indulgent, with pizza cheese, burger beef, and crisp fries in every bite.",
  "history": "The calskrove is a Swedish calzone from Skellefteå in the north, stuffed with french fries and whole hamburgers, buns included. It belongs to Sweden's playful tradition of over-the-top pizzeria inventions. Its exact origins are not widely documented.",
  "ingredients": [
   "pizza dough",
   "tomato sauce",
   "mozzarella",
   "hamburgers with buns",
   "french fries",
   "onion",
   "oregano",
   "ketchup"
  ],
  "nutrition": {
   "calories": 1100,
   "carbs": 120,
   "fat": 48,
   "note": "approximate",
   "protein": 40,
   "serving": "1 calzone (450 g)"
  },
  "preparation": "Pizza dough is rolled out and filled with complete hamburgers, buns and all, plus a layer of french fries. Cheese and tomato sauce are added, and the dough is folded into a calzone and baked until golden. It is served whole and eaten by hand.",
  "pronunciation": "KAHLS-kroo-veh",
  "similar": [
   "Pizza Vulkanen",
   "Ramen Burger",
   "Luther Burger",
   "Pepperoni Pizza"
  ],
  "texture": "Crisp, chewy folded crust around soft burgers, fluffy fries, and molten cheese.",
  "variations": [
   "with bearnaise inside",
   "double burger version",
   "with jalapeños"
  ],
  "photo": null
 },
 "Luther Burger": {
  "flavor": "Sweet and savory at once: caramelized glaze against salty beef, cheese, and bacon.",
  "history": "The Luther burger is an American novelty named, by popular legend, after singer Luther Vandross, who was said to enjoy the combination. It is a bacon cheeseburger served on a glazed donut instead of a bun. It is found at state fairs, burger joints, and novelty menus across the United States.",
  "ingredients": [
   "glazed donut",
   "ground beef",
   "cheddar cheese",
   "bacon",
   "lettuce",
   "tomato",
   "mayonnaise"
  ],
  "nutrition": {
   "calories": 1050,
   "carbs": 78,
   "fat": 62,
   "note": "approximate",
   "protein": 42,
   "serving": "1 burger (420 g)"
  },
  "preparation": "A beef patty is grilled and topped with cheese and bacon. The patty is sandwiched between two halves of a glazed donut. It is served immediately while the donut is still soft.",
  "pronunciation": "LOO-ther BUR-ger",
  "similar": [
   "Ramen Burger",
   "Calskrove",
   "Cheeseburger",
   "Bacon Burger"
  ],
  "texture": "Soft, sticky-sweet donut against a juicy, savory patty with crisp bacon.",
  "variations": [
   "with a fried egg added",
   "maple donut version",
   "mini donut sliders"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Luther_Burger_Google.jpg/960px-Luther_Burger_Google.jpg"
 },
 "Pani ca Meusa": {
  "flavor": "Rich and deeply savory, with mild offal flavor brightened by lemon and salsa verde.",
  "history": "Pani ca meusa is a Palermo street-food sandwich of sliced veal spleen and lung, sold by vendors called meusari for generations. It is a classic of Sicilian cucina povera, making a meal from inexpensive cuts. The sandwich is a point of pride in Palermo's street-food culture.",
  "ingredients": [
   "veal spleen",
   "veal lung",
   "lard",
   "soft rolls",
   "lemon",
   "salsa verde",
   "salt",
   "black pepper"
  ],
  "nutrition": {
   "calories": 520,
   "carbs": 38,
   "fat": 22,
   "note": "approximate",
   "protein": 34,
   "serving": "1 sandwich (280 g)"
  },
  "preparation": "The spleen and lung are boiled, then sliced thin and fried in lard until crisp at the edges. The meat is piled into soft rolls and splashed with lemon juice. It is served either plain or with salsa verde.",
  "pronunciation": "PAH-nee kah meh-OO-sah",
  "similar": [
   "Lampredotto",
   "Nervetti",
   "Menudo",
   "Cuban Sandwich"
  ],
  "texture": "Tender, slightly crisp-edged meat in a soft, absorbent roll.",
  "variations": [
   "schietta (plain, just lemon)",
   "maritata (with salsa verde and cheese)",
   "with extra lard-fried crisp"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Panelle_e_pani_ca_meusa.jpg/960px-Panelle_e_pani_ca_meusa.jpg"
 },
 "Frog Eye Salad": {
  "flavor": "Sweet, creamy, and fruity, like a dessert fluff with tiny pasta pearls.",
  "history": "Frog eye salad is a Utah potluck dish named for the tiny acini di pepe pasta that resembles frog eyes. It belongs to the American Midwest tradition of sweet salads made with whipped topping, canned fruit, and marshmallows. It is a fixture at church suppers and family gatherings.",
  "ingredients": [
   "acini di pepe pasta",
   "crushed pineapple",
   "mandarin oranges",
   "whipped topping",
   "marshmallows",
   "egg yolks",
   "sugar",
   "coconut"
  ],
  "nutrition": {
   "calories": 420,
   "carbs": 78,
   "fat": 10,
   "note": "approximate",
   "protein": 6,
   "serving": "1 cup (250 g)"
  },
  "preparation": "The tiny pasta is cooked and cooled, then folded into a sweet custard made from pineapple juice, egg yolks, and sugar. Canned fruit, marshmallows, and whipped topping are mixed in. It is chilled for several hours before serving.",
  "pronunciation": "frog eye SAL-ad",
  "similar": [
   "Ambrosia Salad",
   "Jell-O Salad",
   "Banana Pudding"
  ],
  "texture": "Soft, creamy, and fluffy with tiny chewy pasta pearls.",
  "variations": [
   "with extra coconut",
   "with maraschino cherries",
   "sugar-free whipped topping versions"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Frogeye_salad.JPG/960px-Frogeye_salad.JPG"
 },
 "Lutefisk": {
  "flavor": "Mild and delicate, like the plainest white fish, with a faint soapy note from the lye treatment.",
  "history": "Lutefisk is dried cod reconstituted in lye, a Norwegian tradition with roots in medieval fish preservation. Dried stockfish was soaked in lye water to soften it for cooking. It became a Christmas-season dish in Norway and in Scandinavian-American communities, where lutefisk suppers are still held.",
  "ingredients": [
   "dried cod",
   "lye (sodium hydroxide)",
   "water",
   "salt",
   "butter",
   "peas",
   "bacon",
   "mustard"
  ],
  "nutrition": {
   "calories": 380,
   "carbs": 12,
   "fat": 18,
   "note": "approximate",
   "protein": 42,
   "serving": "1 portion (300 g)"
  },
  "preparation": "Dried cod is soaked in cold water for days, then in lye solution, which breaks down the proteins into a jelly-like texture. It is rinsed thoroughly, then baked or steamed until it flakes. It is served with butter, peas, and bacon.",
  "pronunciation": "LOO-teh-fisk",
  "similar": [
   "Fish and Chips",
   "Gefilte Fish",
   "Smoked Salmon"
  ],
  "texture": "Quiveringly gelatinous and jelly-like, falling apart at a touch.",
  "variations": [
   "baked vs. steamed",
   "with white sauce",
   "with syrup (Swedish style)"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Extra_Coop_Supermarket%2C_Amfi_Shopping_mall%2C_Os%C3%B8yro%2C_Hordaland%2C_Norway%2C_2018-03-22._Traditional_Norwegian_cod_food_dish_for_sale_%28%22lutefisk_av_skrei%22%29.jpg/960px-Extra_Coop_Supermarket%2C_Amfi_Shopping_mall%2C_Os%C3%B8yro%2C_Hordaland%2C_Norway%2C_2018-03-22._Traditional_Norwegian_cod_food_dish_for_sale_%28%22lutefisk_av_skrei%22%29.jpg"
 },
 "Haggis": {
  "flavor": "Peppery, earthy, and deeply savory, with oaty richness and warm spice.",
  "history": "Haggis is Scotland's national dish, made from sheep's pluck minced with oats and spices and boiled in the stomach. It has been eaten in Scotland for centuries as a thrifty way to use offal. Robert Burns's poem Address to a Haggis made it the centerpiece of Burns Night suppers every January.",
  "ingredients": [
   "sheep's heart",
   "sheep's liver",
   "sheep's lungs",
   "oatmeal",
   "suet",
   "onion",
   "salt",
   "black pepper",
   "nutmeg",
   "sheep's stomach casing"
  ],
  "nutrition": {
   "calories": 560,
   "carbs": 28,
   "fat": 36,
   "note": "approximate",
   "protein": 30,
   "serving": "1 portion (300 g)"
  },
  "preparation": "The pluck is simmered, then minced and mixed with toasted oatmeal, suet, onion, and spices. The mixture is packed into a cleaned sheep's stomach and boiled for several hours. It is traditionally served with mashed turnips and potatoes.",
  "pronunciation": "HAG-iss",
  "similar": [
   "Chitterlings",
   "Andouillette",
   "Svið",
   "Black Pudding"
  ],
  "texture": "Crumbly, moist, and hearty with a soft grain from the oats.",
  "variations": [
   "vegetarian haggis",
   "with whisky cream sauce",
   "haggis, neeps and tatties (classic plate)"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Boiling_haggis_for_Burns_night.jpg/960px-Boiling_haggis_for_Burns_night.jpg"
 },
 "Andouillette": {
  "flavor": "Strong, barnyardy, and intensely savory with a distinctive tripe funk that fans prize.",
  "history": "Andouillette is a French sausage of pork intestines and tripe, made in several regions with Troyes and Lyon among the most famous. It is a traditional charcuterie product of French pork butchery. Connoisseurs judge it by its strong, authentic aroma.",
  "ingredients": [
   "pork intestines",
   "pork tripe",
   "pork stomach",
   "salt",
   "black pepper",
   "nutmeg",
   "natural casing"
  ],
  "nutrition": {
   "calories": 480,
   "carbs": 4,
   "fat": 36,
   "note": "approximate",
   "protein": 32,
   "serving": "1 sausage (200 g)"
  },
  "preparation": "Pork intestines and tripe are cleaned thoroughly, seasoned, and stuffed into casings. The sausages are poached, then typically grilled or pan-fried. They are served hot, often with mustard and fries.",
  "pronunciation": "ahn-doo-YET",
  "similar": [
   "Haggis",
   "Chitterlings",
   "Sausage Roll",
   "Currywurst"
  ],
  "texture": "Firm but yielding, with a slightly chewy, layered interior.",
  "variations": [
   "andouillette de Troyes (coarser)",
   "andouillette de Lyon (finer)",
   "with mustard sauce"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Andouillette_de_Troyes.jpg/960px-Andouillette_de_Troyes.jpg"
 },
 "Tuna Casserole": {
  "flavor": "Creamy, mild, and comforting, with soft noodles and a savory canned-soup base.",
  "history": "Tuna casserole became an American staple in the mid-20th century, when canned tuna, canned soup, and packaged noodles were marketed as convenient family food. It was a budget-friendly weeknight dish and a church-supper classic. It remains a nostalgic comfort food for many Americans.",
  "ingredients": [
   "canned tuna",
   "egg noodles",
   "cream of mushroom soup",
   "milk",
   "peas",
   "cheddar cheese",
   "breadcrumbs",
   "butter",
   "onion"
  ],
  "nutrition": {
   "calories": 520,
   "carbs": 52,
   "fat": 22,
   "note": "approximate",
   "protein": 28,
   "serving": "1 plate (350 g)"
  },
  "preparation": "Cooked egg noodles are mixed with canned tuna, condensed soup, milk, and peas. The mixture is spread in a baking dish and topped with cheese and buttered breadcrumbs. It is baked until bubbling and golden.",
  "pronunciation": "TOO-nah KASS-er-ole",
  "similar": [
   "Chicken à la King",
   "Green Bean Casserole",
   "Meatloaf",
   "Shepherd's Pie"
  ],
  "texture": "Soft, creamy, and spoonable with a crisp breadcrumb topping.",
  "variations": [
   "with crushed potato chips on top",
   "with celery and water chestnuts",
   "with extra cheddar"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Tuna_Casserole2.jpg"
 },
 "Chicken à la King": {
  "flavor": "Mild, creamy, and gently savory with a whisper of sherry.",
  "history": "Chicken à la king is an American dish of diced chicken in a sherry-cream sauce, popular from the late 19th through the mid-20th century. Various origin stories credit New York hotel chefs, but none is firmly established. It was a fashionable restaurant and banquet dish, later a frozen-dinner staple.",
  "ingredients": [
   "chicken breast",
   "butter",
   "flour",
   "cream",
   "chicken broth",
   "sherry",
   "mushrooms",
   "pimentos",
   "peas",
   "toast or puff pastry"
  ],
  "nutrition": {
   "calories": 560,
   "carbs": 34,
   "fat": 30,
   "note": "approximate",
   "protein": 36,
   "serving": "1 plate with toast (350 g)"
  },
  "preparation": "Diced chicken is folded into a velouté of butter, flour, broth, and cream, finished with sherry. Mushrooms, pimentos, and peas are stirred in. It is spooned over toast points, rice, or puff pastry shells.",
  "pronunciation": "chicken ah lah KING",
  "similar": [
   "Tuna Casserole",
   "Chicken Paprikash",
   "Chicken Kiev",
   "Chicken Tikka Masala"
  ],
  "texture": "Silky, spoonable sauce with tender chicken pieces.",
  "variations": [
   "served in vol-au-vents",
   "with added bell peppers",
   "turkey à la king with leftovers"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Baked_Chicken_%C3%A0_la_King_Rice.JPG/960px-Baked_Chicken_%C3%A0_la_King_Rice.JPG"
 },
 "Chicken Riggies": {
  "flavor": "Spicy, creamy, and tomato-rich with a peppery kick and sweet pepper depth.",
  "history": "Chicken riggies are the signature dish of Utica, New York, combining chicken and rigatoni in a spicy creamy tomato sauce. Local restaurants claim its invention, with the dish emerging in the late 20th century. An annual Riggiefest in Utica celebrates it as a point of civic pride.",
  "ingredients": [
   "chicken",
   "rigatoni",
   "tomato sauce",
   "heavy cream",
   "hot peppers",
   "sweet peppers",
   "onion",
   "garlic",
   "olive oil",
   "parmesan"
  ],
  "nutrition": {
   "calories": 720,
   "carbs": 68,
   "fat": 32,
   "note": "approximate",
   "protein": 40,
   "serving": "1 plate (400 g)"
  },
  "preparation": "Chicken is browned with peppers and onion, then simmered in tomato sauce spiked with hot peppers. Cream is stirred in to make a pink, spicy sauce. Cooked rigatoni is tossed through and finished with parmesan.",
  "pronunciation": "chicken RIG-eez",
  "similar": [
   "Chicken Tikka Masala",
   "Murgh Makhani (Butter Chicken)",
   "Dan Dan Noodles",
   "Kare Raisu (Japanese Curry Rice)"
  ],
  "texture": "Hearty, creamy pasta with tender chicken and soft peppers.",
  "variations": [
   "extra hot with cherry peppers",
   "with sausage instead of chicken",
   "with added mushrooms"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Chicken_Riggies.jpg/960px-Chicken_Riggies.jpg"
 },
 "Cuy (Guinea Pig)": {
  "flavor": "Rich and gamey, often compared to dark poultry or rabbit with crisp skin.",
  "history": "Cuy, or guinea pig, has been raised for food in the Andes for thousands of years, long before European contact. It was domesticated in the region and remains a festive food in Peru and neighboring countries. Roasted whole, it is served at celebrations and in traditional restaurants.",
  "ingredients": [
   "whole guinea pig",
   "garlic",
   "cumin",
   "salt",
   "pepper",
   "ají panca",
   "oil",
   "lime"
  ],
  "nutrition": {
   "calories": 480,
   "carbs": 4,
   "fat": 28,
   "note": "approximate",
   "protein": 46,
   "serving": "1/2 cuy (250 g)"
  },
  "preparation": "The whole guinea pig is cleaned, marinated with garlic, cumin, and ají, then roasted over open flame or in an oven until the skin crisps. It is traditionally served splayed whole with potatoes. Diners eat it with their hands.",
  "pronunciation": "koo-ee",
  "similar": [
   "Piri Piri Chicken",
   "Tandoori Chicken",
   "Chicken 65"
  ],
  "texture": "Crisp skin over small amounts of dense, dark meat.",
  "variations": [
   "cuy chactado (flattened and fried)",
   "baked in a clay oven",
   "with huacatay sauce"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Cuy_-_guinea_pig_-_at_food_festival_Lima_Peru_%284869824759%29.jpg/960px-Cuy_-_guinea_pig_-_at_food_festival_Lima_Peru_%284869824759%29.jpg"
 },
 "Chitterlings": {
  "flavor": "Mildly porky and savory with a distinctive aroma that long cleaning and simmering tames.",
  "history": "Chitterlings, or chitlins, are pig intestines eaten in the American South, with roots in the foodways of enslaved people who made meals from the cuts plantation owners discarded. They require hours of careful cleaning before cooking. They remain a traditional holiday and soul-food dish.",
  "ingredients": [
   "pig intestines",
   "water",
   "vinegar",
   "onion",
   "garlic",
   "salt",
   "black pepper",
   "hot sauce"
  ],
  "nutrition": {
   "calories": 420,
   "carbs": 2,
   "fat": 30,
   "note": "approximate",
   "protein": 34,
   "serving": "1 bowl (250 g)"
  },
  "preparation": "The intestines are cleaned meticulously, often rinsed many times in vinegar water. They are simmered for hours with onion and seasonings until very tender. They are served hot with hot sauce and sides.",
  "pronunciation": "CHIT-linz",
  "similar": [
   "Haggis",
   "Andouillette",
   "Menudo",
   "Pickled Pigs' Feet"
  ],
  "texture": "Soft, silky, and slightly chewy ribbons of tender intestine.",
  "variations": [
   "fried after simmering",
   "with turnip greens",
   "in hog maws stew"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Chitterlings_%28frozen_food%29-01.jpg/960px-Chitterlings_%28frozen_food%29-01.jpg"
 },
 "Muktuk": {
  "flavor": "Mild, slightly nutty, and oily with a clean marine freshness.",
  "history": "Muktuk is the Inuit food of raw bowhead whale skin and blubber, eaten for centuries across the Arctic. It is a vital traditional source of vitamin C and energy in a region with few plant foods. It is shared communally after whale hunts and at celebrations.",
  "ingredients": [
   "bowhead whale skin",
   "bowhead whale blubber",
   "sea salt",
   "arctic willow (traditional garnish)",
   "soy sauce"
  ],
  "nutrition": {
   "calories": 380,
   "carbs": 0,
   "fat": 34,
   "note": "approximate",
   "protein": 18,
   "serving": "1 portion (150 g)"
  },
  "preparation": "The skin and attached blubber are cut from the whale in strips and cubes. It is eaten raw, sometimes lightly pickled or frozen. It is chewed slowly, traditionally shared among the community.",
  "pronunciation": "MUK-tuk",
  "similar": [
   "Lomi Salmon",
   "Jellyfish Salad",
   "Pickled Herring"
  ],
  "texture": "Chewy and rubbery skin layered with soft, oily blubber.",
  "variations": [
   "frozen and sliced thin",
   "lightly pickled",
   "with soy sauce (modern)"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/2013-365-282_Mmmmm_Muktuk_%2810184839444%29.jpg/960px-2013-365-282_Mmmmm_Muktuk_%2810184839444%29.jpg"
 },
 "Canned Whole Chicken": {
  "flavor": "Soft, mild, and distinctly canned, like tender stewed chicken in savory jelly.",
  "history": "Canned whole chicken is an American shelf-stable product, famously produced as a novelty and survival food. A whole cooked chicken is sealed in a can with its own broth, which sets into jelly. It became a curiosity item and a symbol of extreme convenience food.",
  "ingredients": [
   "whole chicken",
   "chicken broth",
   "salt",
   "gelatin",
   "black pepper"
  ],
  "nutrition": {
   "calories": 640,
   "carbs": 2,
   "fat": 36,
   "note": "approximate",
   "protein": 72,
   "serving": "1/2 chicken (350 g)"
  },
  "preparation": "A whole chicken is cooked and sealed in a can with broth and salt. The can is heat-processed for shelf stability, and the broth sets into jelly around the bird. It is served cold or warmed, usually picked from the bone.",
  "pronunciation": "canned whole CHICK-en",
  "similar": [
   "Chicken à la King",
   "Tuna Casserole",
   "Meatloaf"
  ],
  "texture": "Very soft, falling-apart meat in a wobbly savory jelly.",
  "variations": [
   "in gravy versions",
   "smaller canned hens",
   "with added vegetables"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Canned_foods._Modern_processes_of_canning_in_the_United_States%2C_general_system_of_grading%2C_and_description_of_products_available_for_export_%281917%29_%2814593319690%29.jpg/960px-thumbnail.jpg"
 },
 "Menudo": {
  "flavor": "Hearty and savory with a rich red-chili depth and the mild, honeycomb chew of tripe.",
  "history": "Menudo is a Mexican soup of beef tripe and hominy in red chili broth, traditionally eaten on weekends and as a restorative morning meal. It is a staple of Mexican home cooking and celebrations, simmered for hours until the tripe turns tender. Families often gather around it on Sundays and holidays.",
  "ingredients": [
   "beef tripe",
   "hominy",
   "dried red chiles",
   "garlic",
   "onion",
   "oregano",
   "lime",
   "cilantro",
   "radishes",
   "beef broth"
  ],
  "nutrition": {
   "calories": 450,
   "carbs": 38,
   "fat": 16,
   "note": "approximate",
   "protein": 36,
   "serving": "1 bowl (400 ml)"
  },
  "preparation": "Beef tripe is cleaned and simmered for hours with onion and garlic until tender. A puree of soaked dried chiles is added to form the red broth, and hominy goes in to finish. It is served with lime, chopped onion, cilantro, and warm tortillas.",
  "pronunciation": "meh-NOO-doh",
  "similar": [
   "Lampredotto",
   "Nervetti",
   "Pani ca Meusa",
   "Birria Taco"
  ],
  "texture": "Tender, slightly chewy tripe in a hearty broth with soft, puffy hominy.",
  "variations": [
   "menudo blanco (white, without chiles)",
   "with pig's feet added",
   "northern vs. central Mexican styles"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Menudo_on_the_Go%21.jpg/960px-Menudo_on_the_Go%21.jpg"
 },
 "Bird's Nest Soup": {
  "flavor": "Delicately savory and faintly sweet, prized more for its prized texture than strong flavor.",
  "history": "Bird's nest soup is a Chinese delicacy made from the solidified saliva nests of swiftlets, harvested from caves and coastal cliffs in Southeast Asia. It has been eaten in China for centuries as a luxury food. The cleaned nests dissolve into broth when simmered.",
  "ingredients": [
   "swiftlet nests",
   "chicken stock",
   "water",
   "rock sugar or salt",
   "egg white"
  ],
  "nutrition": {
   "calories": 120,
   "carbs": 10,
   "fat": 2,
   "note": "approximate",
   "protein": 16,
   "serving": "1 bowl (250 ml)"
  },
  "preparation": "The dried nests are soaked and painstakingly cleaned of feathers, then simmered in stock until they dissolve into fine strands. The soup is served in small bowls, savory or lightly sweetened. It is eaten as a tonic and a status dish.",
  "pronunciation": "bird's nest soup",
  "similar": [
   "Shark Fin Soup",
   "Hot and Sour Soup",
   "Wonton Soup",
   "Turtle Soup"
  ],
  "texture": "Silky and gelatinous with fine, melt-in-the-mouth strands.",
  "variations": [
   "sweet version with rock sugar",
   "with chicken and ham",
   "imperial-style clear broth"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Bird_nest_soup.png"
 },
 "Czernina": {
  "flavor": "Sweet-sour and fruity with a rich, iron-deep background and warm spice.",
  "history": "Czernina is a Polish duck-blood soup, once a traditional dish with a famous folk custom: serving it to a rejected suitor. It is made when ducks or geese are slaughtered, the fresh blood whisked into broth. It remains a regional specialty, especially in Greater Poland.",
  "ingredients": [
   "duck blood",
   "duck broth",
   "dried prunes",
   "dried apples",
   "vinegar",
   "sugar",
   "allspice",
   "bay leaves",
   "marjoram",
   "cooked duck meat"
  ],
  "nutrition": {
   "calories": 380,
   "carbs": 42,
   "fat": 12,
   "note": "approximate",
   "protein": 24,
   "serving": "1 bowl (350 ml)"
  },
  "preparation": "Fresh duck blood is whisked with vinegar to keep it fluid, then stirred into simmering broth. Dried fruits, sugar, and spices are added for the sweet-sour balance. It is served hot with pieces of duck and sometimes noodles.",
  "pronunciation": "cher-NEE-nah",
  "similar": [
   "Blodpalt",
   "Blodplättar",
   "Żurek",
   "Hot and Sour Soup"
  ],
  "texture": "A smooth, slightly thickened broth with soft fruit and tender meat.",
  "variations": [
   "with pears instead of apples",
   "with kluski noodles",
   "goose-blood version"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Czernina.zupa.jpg/960px-Czernina.zupa.jpg"
 },
 "Żurek": {
  "flavor": "Tangy, sour, and hearty with smoky sausage and a deep rye funk.",
  "history": "Żurek is a Polish sour rye soup, traditionally eaten at Easter. The sourness comes from zakwas, a fermented rye starter, a technique with deep roots in Polish peasant cooking. It is served with white sausage and halved eggs as part of the Easter breakfast.",
  "ingredients": [
   "rye flour starter",
   "white sausage",
   "smoked bacon",
   "eggs",
   "garlic",
   "marjoram",
   "horseradish",
   "sour cream",
   "potatoes"
  ],
  "nutrition": {
   "calories": 480,
   "carbs": 36,
   "fat": 28,
   "note": "approximate",
   "protein": 24,
   "serving": "1 bowl (400 ml)"
  },
  "preparation": "A rye flour starter is fermented for several days until pleasantly sour. The strained liquid is simmered with sausage, bacon, and garlic, then finished with marjoram. It is served with halved hard-boiled eggs and a spoon of sour cream.",
  "pronunciation": "ZHOO-rek",
  "similar": [
   "Okroshka",
   "Czernina",
   "French Onion Soup",
   "Miso Soup"
  ],
  "texture": "A hearty, slightly thick soup with chewy sausage and creamy egg.",
  "variations": [
   "served in a bread bowl",
   "white borscht (milder version)",
   "with added mushrooms"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/%C5%BBurek_z_jakiem.jpg/960px-%C5%BBurek_z_jakiem.jpg"
 },
 "Okroshka": {
  "flavor": "Tangy, refreshing, and lightly fizzy-sour from the kvass, with crisp vegetables.",
  "history": "Okroshka is a Russian cold soup of chopped vegetables, egg, and sausage served in kvass, a fermented bread drink. It dates back centuries as a summer dish when cold food was welcome. It remains a beloved warm-weather staple across Russia.",
  "ingredients": [
   "kvass",
   "cucumbers",
   "radishes",
   "potatoes",
   "eggs",
   "sausage or ham",
   "spring onions",
   "dill",
   "sour cream",
   "mustard"
  ],
  "nutrition": {
   "calories": 320,
   "carbs": 30,
   "fat": 16,
   "note": "approximate",
   "protein": 14,
   "serving": "1 bowl (400 ml)"
  },
  "preparation": "Boiled potatoes, eggs, cucumbers, radishes, and sausage are finely chopped. The mixture is chilled and covered with cold kvass just before serving. Each bowl is finished with dill, mustard, and a dollop of sour cream.",
  "pronunciation": "ahk-ROSH-kah",
  "similar": [
   "Żurek",
   "Kvass",
   "Chicken Noodle Soup"
  ],
  "texture": "Crisp, crunchy vegetables in a light, cold, slightly effervescent liquid.",
  "variations": [
   "with kefir instead of kvass",
   "vegetarian versions",
   "with boiled beef tongue"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kefir-okroshka.jpg/960px-Kefir-okroshka.jpg"
 },
 "Turtle Soup": {
  "flavor": "Rich, gamey, and deeply savory with a sherry warmth and a texture between beef and fish.",
  "history": "Turtle soup was a fashionable American dish in the 18th and 19th centuries, made from snapping turtles and finished with sherry. It was served at banquets and in fine restaurants as a luxury item. Mock turtle soup, made from calf's head, became the common substitute.",
  "ingredients": [
   "snapping turtle meat",
   "sherry",
   "beef stock",
   "onion",
   "celery",
   "tomato paste",
   "flour",
   "butter",
   "hard-boiled eggs",
   "lemon",
   "thyme"
  ],
  "nutrition": {
   "calories": 420,
   "carbs": 14,
   "fat": 20,
   "note": "approximate",
   "protein": 38,
   "serving": "1 bowl (350 ml)"
  },
  "preparation": "Turtle meat is simmered for hours with vegetables and stock until completely tender. The broth is thickened and enriched, then finished with sherry. It is served with chopped egg and lemon wedges.",
  "pronunciation": "TUR-tul soup",
  "similar": [
   "Bird's Nest Soup",
   "Gumbo",
   "Egusi Soup",
   "Hot and Sour Soup"
  ],
  "texture": "A thick, hearty soup with tender, shredding meat.",
  "variations": [
   "with extra sherry tableside",
   "Cajun-style snapper soup",
   "mock turtle soup (calf's head)"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mock_turtle_soup%2C_toast_sandwich_%287171985609%29.jpg/960px-Mock_turtle_soup%2C_toast_sandwich_%287171985609%29.jpg"
 },
 "Stinky Tofu": {
  "flavor": "Pungent and funky on the nose, but the taste is mild, savory, and nutty with chili and pickled cabbage.",
  "history": "Stinky tofu is Taiwanese fermented tofu, deep-fried and served at night markets. The tofu is fermented in a brine of vegetables and sometimes shrimp, developing its famous aroma. It is a beloved street food, with fans insisting the smellier the better.",
  "ingredients": [
   "fermented tofu",
   "vegetable oil",
   "pickled cabbage",
   "chili sauce",
   "soy sauce",
   "garlic"
  ],
  "nutrition": {
   "calories": 340,
   "carbs": 14,
   "fat": 24,
   "note": "approximate",
   "protein": 20,
   "serving": "1 plate (200 g)"
  },
  "preparation": "Tofu fermented in brine is deep-fried until the outside turns crisp and golden. It is cut into cubes and topped with pickled cabbage and chili sauce. It is eaten hot from night-market stalls.",
  "pronunciation": "STINK-ee TOH-foo",
  "similar": [
   "Mapo Tofu",
   "Hon Mhai (Fried Silkworms)",
   "Chapulines",
   "Century Egg"
  ],
  "texture": "Shatteringly crisp outside with a soft, custardy, almost creamy center.",
  "variations": [
   "steamed stinky tofu",
   "with extra-spicy sauce",
   "barbecued skewered cubes"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Black_and_Yellow_Stinky_Tofu.jpg/960px-Black_and_Yellow_Stinky_Tofu.jpg"
 },
 "Lampredotto": {
  "flavor": "Mild, beefy, and savory with a clean tripe savoriness lifted by salsa verde.",
  "history": "Lampredotto is a Florentine street food of slow-cooked cow's fourth stomach, sold from food carts for generations. It is the city's most famous tripe dish, rooted in working-class cooking. Vendors chop it to order and stuff it into rolls dipped in its own broth.",
  "ingredients": [
   "cow's fourth stomach",
   "beef broth",
   "tomatoes",
   "onion",
   "celery",
   "parsley",
   "salsa verde",
   "salt",
   "pepper",
   "tuscan rolls"
  ],
  "nutrition": {
   "calories": 460,
   "carbs": 34,
   "fat": 16,
   "note": "approximate",
   "protein": 36,
   "serving": "1 sandwich (300 g)"
  },
  "preparation": "The tripe is simmered for hours in broth with tomato and vegetables until very tender. It is chopped and piled into a roll that has been dipped in the cooking broth. Salsa verde and salt are added to taste.",
  "pronunciation": "lahm-preh-DOT-toh",
  "similar": [
   "Pani ca Meusa",
   "Nervetti",
   "Menudo",
   "Philly Cheesesteak"
  ],
  "texture": "Tender, slightly springy tripe in a soft, broth-soaked roll.",
  "variations": [
   "with spicy oil drizzled",
   "with extra salsa verde",
   "served as a plated stew"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Florentine_Lampredotto_Hot_Dog_at_Dongsi_Hotdog_and_Gelato_%2820260924125132%29.jpg/960px-Florentine_Lampredotto_Hot_Dog_at_Dongsi_Hotdog_and_Gelato_%2820260924125132%29.jpg"
 },
 "Chapulines": {
  "flavor": "Toasty, citrusy, and salty with a mild chili warmth, like crunchy seasoned popcorn.",
  "history": "Chapulines are toasted grasshoppers eaten in Oaxaca, Mexico, a tradition reaching back to pre-Hispanic times when insects were a regular protein. They are harvested from alfalfa and corn fields, especially after the rainy season. They are sold in markets and served in restaurants across the region.",
  "ingredients": [
   "grasshoppers",
   "lime juice",
   "salt",
   "chili powder",
   "garlic",
   "oil"
  ],
  "nutrition": {
   "calories": 230,
   "carbs": 10,
   "fat": 8,
   "note": "approximate",
   "protein": 32,
   "serving": "1 cup (80 g)"
  },
  "preparation": "Grasshoppers are cleaned, then toasted on a comal or in oil with garlic until crisp. They are tossed with lime juice, salt, and chili powder. They are eaten as a snack, in tacos, or with mezcal.",
  "pronunciation": "chah-poo-LEE-nes",
  "similar": [
   "Fried Tarantula",
   "Hon Mhai (Fried Silkworms)",
   "Stinky Tofu",
   "Baja Fish Taco"
  ],
  "texture": "Crisp and crunchy with a light, airy bite.",
  "variations": [
   "extra lime and salt",
   "in tlayudas",
   "chocolate-covered (modern novelty)"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/2/27/Chapulines.JPG"
 },
 "Fried Tarantula": {
  "flavor": "Mild and nutty with crispy seasoned legs and a soft, rich body.",
  "history": "Fried tarantulas became known from Skuon, Cambodia, where locals began eating spiders during the food shortages of the Khmer Rouge era. The practice stuck and became a regional specialty and tourist curiosity. Vendors sell them fried with garlic at markets and roadside stalls.",
  "ingredients": [
   "tarantulas",
   "garlic",
   "salt",
   "sugar",
   "oil"
  ],
  "nutrition": {
   "calories": 280,
   "carbs": 8,
   "fat": 16,
   "note": "approximate",
   "protein": 28,
   "serving": "2 spiders (100 g)"
  },
  "preparation": "Whole tarantulas are dredged and deep-fried with garlic until crisp. They are seasoned with salt and a pinch of sugar. The legs are eaten crisp while the body is soft; locals often discard the abdomen's contents.",
  "pronunciation": "fried tuh-RAN-choo-lah",
  "similar": [
   "Chapulines",
   "Hon Mhai (Fried Silkworms)",
   "Salt and Pepper Squid",
   "Fried Pickles"
  ],
  "texture": "Crisp, crackling legs around a soft, almost creamy body.",
  "variations": [
   "with extra garlic",
   "served with rice wine",
   "smaller crispier species"
  ],
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Fried_Tarantula_%285571271280%29.jpg/960px-Fried_Tarantula_%285571271280%29.jpg"
 },
 "Deep-Fried Mars Bar": {
  "history": "The deep-fried Mars bar is a Scottish chip-shop novelty said to have originated in the 1990s, with the town of Stonehaven often credited. It grew into a symbol of Scottish chip-shop culture and drew international media attention in the early 2000s. Mars itself noted the treat was never part of its own brand promotion.",
  "ingredients": [
   "Mars bar",
   "plain flour",
   "baking powder",
   "egg",
   "milk",
   "vegetable oil",
   "salt"
  ],
  "preparation": "The Mars bar is chilled so it holds its shape in the fryer. A thick batter is whisked from flour, egg, and milk or beer, and the chilled bar is dipped to coat it fully. It is deep-fried until golden, drained, and served immediately, often with salt and vinegar.",
  "flavor": "Warm, very sweet chocolate and caramel inside a savory fried-batter shell, with a tangy contrast when served chip-shop style.",
  "texture": "Crisp, puffy batter outside giving way to a molten, gooey chocolate, nougat, and caramel center.",
  "similar": [
   "Deep-Fried Twinkie",
   "Funnel Cake",
   "Churros"
  ],
  "variations": [
   "Snickers or other chocolate bars",
   "served with ice cream",
   "beer-battered version"
  ],
  "nutrition": {
   "serving": "1 bar (65 g)",
   "calories": 580,
   "protein": 7,
   "carbs": 68,
   "fat": 31,
   "note": "approximate"
  },
  "pronunciation": "DEEP-fryd MARZ bar",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Deep-fried_Mars_bar_advert.jpg/960px-Deep-fried_Mars_bar_advert.jpg"
 },
 "Mopane Worms": {
  "history": "Mopane worms are the caterpillars of the emperor moth Gonimbrasia belina, harvested from mopane trees across southern Africa, especially Botswana, Zimbabwe, and South Africa. They have long been an important seasonal protein source for rural communities. Dried mopane worms are also a major informal trade commodity.",
  "ingredients": [
   "mopane worms",
   "water",
   "salt",
   "onion",
   "tomato",
   "cooking oil",
   "chili",
   "garlic"
  ],
  "preparation": "Harvested caterpillars are degutted by squeezing, then washed and boiled in salted water. They are sun-dried for storage or fried with onion, tomato, and chili. Dried worms are rehydrated before cooking or eaten as a crunchy snack.",
  "flavor": "Earthy and meaty with a nutty, slightly leafy taste; seasoning and frying give it a savory, jerky-like character.",
  "texture": "Chewy like meat jerky when dried; softer and slightly slippery when freshly cooked.",
  "similar": [
   "Chapulines",
   "Hon Mhai (Fried Silkworms)",
   "Fried Tarantula"
  ],
  "variations": [
   "dried mopane worms as a snack",
   "fried with tomato and onion",
   "mopane worm stew"
  ],
  "nutrition": {
   "serving": "1 cup dried (50 g)",
   "calories": 180,
   "protein": 24,
   "carbs": 4,
   "fat": 7,
   "note": "approximate"
  },
  "pronunciation": "moh-PAH-nee wurmz",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Mahangu_Porridge_served_with_mopane_worms_and_spinach_stew.jpg/960px-Mahangu_Porridge_served_with_mopane_worms_and_spinach_stew.jpg"
 },
 "Escargot": {
  "history": "Snails have been eaten in Europe since prehistoric times, and escargot became a refined French dish in the 19th century. The Burgundy method with garlic butter is the most famous preparation. Escargot remains a classic appetizer in French bistros and restaurants worldwide.",
  "ingredients": [
   "land snails",
   "butter",
   "garlic",
   "parsley",
   "shallots",
   "white wine",
   "salt",
   "black pepper",
   "bread"
  ],
  "preparation": "Prepared snails are cooked, then placed back into shells with garlic-parsley butter. They are baked in special escargot dishes until the butter bubbles. Served hot with crusty bread for dipping.",
  "flavor": "Mild and earthy, mostly carrying the rich garlic-butter and herb seasoning; lovers describe a delicate, almost mushroom-like savoriness.",
  "texture": "Tender-chewy with a slight snap; the butter sauce keeps them succulent.",
  "similar": [
   "Green-Lipped Mussels",
   "Oysters Rockefeller",
   "Clam Chowder"
  ],
  "variations": [
   "escargot de Bourgogne with garlic butter",
   "with blue cheese",
   "in puff pastry shells"
  ],
  "nutrition": {
   "serving": "6 snails (90 g)",
   "calories": 200,
   "protein": 15,
   "carbs": 3,
   "fat": 14,
   "note": "approximate"
  },
  "pronunciation": "ess-kar-GOH",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Escargot_%C3%A0_la_Bourguignonne_-_eatingeast.jpg/960px-Escargot_%C3%A0_la_Bourguignonne_-_eatingeast.jpg"
 },
 "Witchetty Grub": {
  "history": "Witchetty grubs are the larvae of large moths, traditionally harvested by Aboriginal Australians from the roots of witchetty bushes and acacia trees. They have been a staple bush food for thousands of years, eaten raw or cooked. Today they appear on some restaurant menus as an example of native Australian ingredients.",
  "ingredients": [
   "witchetty grubs",
   "salt",
   "butter",
   "lemon",
   "native herbs"
  ],
  "preparation": "Grubs are dug from tree roots and can be eaten raw or roasted briefly in hot ashes. Roasting turns the inside creamy. Modern cooks sometimes saute them in butter with native herbs.",
  "flavor": "Mild and nutty when raw; roasting brings out an almond-like, savory richness often compared to roast chicken.",
  "texture": "Raw grubs are soft and jelly-like; roasted ones have a crisp skin with a creamy interior.",
  "similar": [
   "Mopane Worms",
   "Chapulines",
   "Hon Mhai (Fried Silkworms)"
  ],
  "variations": [
   "eaten raw",
   "roasted in coals",
   "sauteed with butter in modern kitchens"
  ],
  "nutrition": {
   "serving": "5 grubs (50 g)",
   "calories": 100,
   "protein": 8,
   "carbs": 3,
   "fat": 6,
   "note": "approximate"
  },
  "pronunciation": "WITCH-uh-tee grub",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Witchetty_Grub_Moth_%285272632155%29.jpg/960px-Witchetty_Grub_Moth_%285272632155%29.jpg"
 },
 "Century Egg": {
  "history": "Century eggs are a Chinese preserved egg with centuries of history, made by curing duck, chicken, or quail eggs in an alkaline mixture. They are a classic ingredient in congee and cold appetizers. Despite the name, the curing takes weeks to months, not a century.",
  "ingredients": [
   "duck eggs",
   "clay",
   "ash",
   "salt",
   "lime",
   "rice husks",
   "tea"
  ],
  "preparation": "Eggs are coated in a paste of clay, ash, salt, and lime, wrapped in rice husks, and left to cure for several weeks. The alkaline environment turns the white into a translucent amber jelly and the yolk into a creamy green-gray center. They are eaten cold, often sliced with pickled ginger.",
  "flavor": "Rich, intensely savory, and slightly sulfurous with a sharp tang that fans find deeply umami.",
  "texture": "The white is firm and jelly-like; the yolk is creamy and almost cheese-like.",
  "similar": [
   "Balut",
   "Stinky Tofu",
   "Natto"
  ],
  "variations": [
   "century egg with pickled ginger",
   "century egg and pork congee",
   "spicy century egg salad"
  ],
  "nutrition": {
   "serving": "1 egg (50 g)",
   "calories": 70,
   "protein": 7,
   "carbs": 0,
   "fat": 5,
   "note": "approximate"
  },
  "pronunciation": "SEN-chuh-ree egg",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Arranged_century_egg_on_a_plate.jpg"
 },
 "Durian": {
  "history": "Durian is a large spiky fruit native to Southeast Asia, cultivated for centuries in Malaysia, Thailand, and Indonesia. Devotees call it the king of fruits, while its smell has led to bans in many hotels and public transport systems. Durian season is a celebrated annual event across the region.",
  "ingredients": [
   "durian fruit"
  ],
  "preparation": "Ripe durians fall naturally and are split open along their seams. The creamy pods are eaten fresh with the hands. The flesh is also used in desserts, ice cream, and sticky rice dishes.",
  "flavor": "Intensely aromatic with notes of almond and custard; the famous pungent smell is sulfurous, while the taste is sweet and richly savory-sweet.",
  "texture": "Soft, creamy, and custard-like, almost like a rich avocado crossed with cheesecake.",
  "similar": [
   "Stinky Tofu",
   "Natto",
   "Surströmming"
  ],
  "variations": [
   "Monthong",
   "Musang King",
   "Chanee"
  ],
  "nutrition": {
   "serving": "1 cup flesh (150 g)",
   "calories": 220,
   "protein": 2,
   "carbs": 33,
   "fat": 8,
   "note": "approximate"
  },
  "pronunciation": "DOO-ree-an",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Durian_cake.jpg/960px-Durian_cake.jpg"
 },
 "Rocky Mountain Oysters": {
  "history": "Rocky Mountain oysters are bull or bison testicles, a ranch-country dish of the American West. They arose from the practical ranch tradition of using the whole animal after spring branding. They are now a novelty dish at festivals and Western-themed restaurants, usually breaded and fried.",
  "ingredients": [
   "bull testicles",
   "flour",
   "cornmeal",
   "eggs",
   "milk",
   "salt",
   "black pepper",
   "cayenne",
   "vegetable oil",
   "lemon"
  ],
  "preparation": "The outer membrane is removed and the meat is sliced, then soaked in salted water. Slices are dredged in seasoned flour, dipped in egg, and deep-fried until golden. Served hot with cocktail sauce or lemon.",
  "flavor": "Mild and slightly gamey, taking on the flavor of the seasoned breading; fans compare it to sweetbreads or veal.",
  "texture": "Crisp fried coating outside with a tender, slightly chewy interior.",
  "similar": [
   "Fried Calamari",
   "Chicharrones",
   "Chicken Feet (Phoenix Claws)"
  ],
  "variations": [
   "breaded and deep-fried",
   "sauteed with peppers",
   "served at Western festivals"
  ],
  "nutrition": {
   "serving": "1 plate (200 g)",
   "calories": 320,
   "protein": 26,
   "carbs": 12,
   "fat": 16,
   "note": "approximate"
  },
  "pronunciation": "ROK-ee MOUN-tin OY-sturz",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Rocky_mountain_oysters.jpg/960px-Rocky_mountain_oysters.jpg"
 },
 "Escamoles": {
  "history": "Escamoles are the edible larvae and pupae of ants, harvested from agave and maguey roots in central Mexico. They were eaten in pre-Hispanic times and are sometimes called Mexican caviar. The season is short, which makes them a prized and expensive delicacy.",
  "ingredients": [
   "escamoles (ant larvae)",
   "butter",
   "onion",
   "garlic",
   "epazote",
   "serrano chili",
   "lime",
   "tortillas",
   "salt"
  ],
  "preparation": "Fresh escamoles are rinsed and sauteed briefly in butter with onion, garlic, and epazote. They are traditionally served in warm tortillas with lime. Cooking is kept light so the delicate larvae do not break down.",
  "flavor": "Delicately nutty and buttery with a subtle sweetness; often compared to pine nuts.",
  "texture": "Soft, tiny grains with a slight pop; creamy when bitten.",
  "similar": [
   "Chapulines",
   "Hon Mhai (Fried Silkworms)",
   "Mopane Worms"
  ],
  "variations": [
   "in tacos with guacamole",
   "sauteed with epazote",
   "in omelets"
  ],
  "nutrition": {
   "serving": "1/2 cup (80 g)",
   "calories": 120,
   "protein": 10,
   "carbs": 4,
   "fat": 7,
   "note": "approximate"
  },
  "pronunciation": "ess-kah-MOH-less",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Escamoles.jpg/960px-Escamoles.jpg"
 },
 "Pickled Pigs' Feet": {
  "history": "Pickled pigs' feet are a traditional preserved meat in the American South, Germany, and parts of Asia, born from nose-to-tail cooking and the need to preserve meat without refrigeration. They were historically an inexpensive source of protein. They remain a staple in soul food cooking and Southern grocery delis.",
  "ingredients": [
   "pig's feet",
   "white vinegar",
   "water",
   "salt",
   "bay leaves",
   "black peppercorns",
   "garlic",
   "onion",
   "red pepper flakes",
   "mustard seed"
  ],
  "preparation": "Cleaned trotters are simmered until tender, then packed into jars with hot pickling brine. They rest in the brine for several days to absorb the vinegar flavor. Eaten cold, straight from the jar.",
  "flavor": "Tangy and salty with a rich porkiness from the gelatinous meat; the vinegar cuts the fattiness.",
  "texture": "Soft, gelatinous, and slightly sticky, with tender meat around small bones.",
  "similar": [
   "Pickled Herring",
   "Chitterlings",
   "Kool-Aid Pickles"
  ],
  "variations": [
   "Southern-style with red pepper",
   "German sulze-style",
   "spicy pickled trotters"
  ],
  "nutrition": {
   "serving": "1 foot (100 g)",
   "calories": 210,
   "protein": 13,
   "carbs": 0,
   "fat": 17,
   "note": "approximate"
  },
  "pronunciation": "PIK-uld pigz feet",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pickled_pigs%27_feet_in_red_stuff.jpg/960px-Pickled_pigs%27_feet_in_red_stuff.jpg"
 },
 "Chocolate-Covered Bacon": {
  "history": "Chocolate-covered bacon emerged in the United States in the 2000s as a novelty at state fairs, part of a wave of sweet-savory fair foods. It is typically sold by artisan chocolatiers and fair vendors. Fans enjoy it as a salty-sweet indulgence.",
  "ingredients": [
   "bacon",
   "dark chocolate",
   "sea salt",
   "brown sugar",
   "cayenne pepper",
   "chopped nuts"
  ],
  "preparation": "Thick-cut bacon is baked or candied until crisp, then cooled. It is dipped in melted tempered chocolate and set on parchment. Some versions add sea salt, chili, or crushed nuts before the chocolate sets.",
  "flavor": "Sweet chocolate against smoky, salty bacon; the contrast is the whole point, with a hint of pork savoriness.",
  "texture": "Snappy chocolate shell over crisp-chewy bacon.",
  "similar": [
   "Deep-Fried Mars Bar",
   "Deep-Fried Twinkie",
   "Kool-Aid Pickles"
  ],
  "variations": [
   "milk or white chocolate coating",
   "with sea salt and chili",
   "maple-candied bacon base"
  ],
  "nutrition": {
   "serving": "2 strips (60 g)",
   "calories": 330,
   "protein": 8,
   "carbs": 22,
   "fat": 24,
   "note": "approximate"
  },
  "pronunciation": "CHOK-lit KUV-urd BAY-kun",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Chocolate-covered_bacon.jpg"
 },
 "Deep-Fried Butter": {
  "history": "Deep-fried butter appeared at American state fairs in the late 2000s, associated with inventive fried-food contests such as those at the Texas State Fair. It is a novelty food more famous than widely eaten. Frozen butter is battered and fried so it melts inside the coating.",
  "ingredients": [
   "butter",
   "flour",
   "baking powder",
   "egg",
   "milk",
   "sugar",
   "cinnamon",
   "vegetable oil",
   "salt"
  ],
  "preparation": "Butter is frozen solid and cut into pieces, then dipped in a sweet batter. It is deep-fried quickly so the outside crisps while the butter melts inside. Served immediately while the center is liquid.",
  "flavor": "Buttery and rich with a sweet, doughnut-like batter; essentially a warm, molten butter center in fried dough.",
  "texture": "Crisp fried shell with a fully melted, liquid butter center.",
  "similar": [
   "Deep-Fried Mars Bar",
   "Deep-Fried Twinkie",
   "Funnel Cake"
  ],
  "variations": [
   "with cinnamon sugar",
   "with honey drizzle",
   "Texas State Fair style"
  ],
  "nutrition": {
   "serving": "4 pieces (80 g)",
   "calories": 450,
   "protein": 4,
   "carbs": 28,
   "fat": 36,
   "note": "approximate"
  },
  "pronunciation": "DEEP-fryd BUT-ur",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Hill_-_Salads%2C_Sandwiches%2C_and_Chafing-Dish_Dainties.djvu/page1-960px-Hill_-_Salads%2C_Sandwiches%2C_and_Chafing-Dish_Dainties.djvu.jpg"
 },
 "Kool-Aid Pickles": {
  "history": "Kool-Aid pickles, also called Koolickles, originated in the Mississippi Delta, where convenience stores began selling pickles soaked in sweet drink mix. They became a regional Southern snack, especially popular with kids. The bright red color and sweet-sour flavor are their signature.",
  "ingredients": [
   "dill pickles",
   "Kool-Aid drink mix",
   "sugar",
   "water",
   "pickle brine"
  ],
  "preparation": "Dill pickle spears are soaked in a mixture of Kool-Aid, sugar, and brine for several days in the refrigerator. The pickles absorb the sweet flavor and vivid color. Served chilled.",
  "flavor": "Sweet and tangy with the fruity punch of the drink mix layered over dill pickle sourness.",
  "texture": "Crunchy and juicy like a regular dill pickle.",
  "similar": [
   "Fried Pickles",
   "Pickled Herring",
   "Deep-Fried Twinkie"
  ],
  "variations": [
   "cherry Kool-Aid, the classic red",
   "tropical punch flavor",
   "grape Kool-Aid"
  ],
  "nutrition": {
   "serving": "1 spear (60 g)",
   "calories": 60,
   "protein": 0,
   "carbs": 15,
   "fat": 0,
   "note": "approximate"
  },
  "pronunciation": "KOOL-ayd PIK-ulz",
  "photo": null
 },
 "Fruitcake": {
  "history": "Fruitcake descends from ancient and medieval spiced, fruit-studded breads; the rich butter-cake version took shape in Britain. It became a fixture of Christmas and weddings, valued because it keeps for months. Its dense texture and long shelf life made it a joke target, though many families treasure old recipes.",
  "ingredients": [
   "flour",
   "butter",
   "sugar",
   "eggs",
   "candied cherries",
   "candied citrus peel",
   "raisins",
   "currants",
   "walnuts",
   "brandy or rum",
   "baking powder",
   "mixed spice"
  ],
  "preparation": "Dried and candied fruits are soaked, often in brandy or rum. The batter is mixed with the fruit and baked low and slow until dense and dark. The cake is aged for weeks, sometimes fed with more spirits.",
  "flavor": "Deeply sweet, spiced, and boozy, with concentrated dried-fruit notes and a rum-soaked warmth.",
  "texture": "Dense, moist, and heavy, studded with chewy fruit and nuts.",
  "similar": [
   "Christmas Pudding",
   "Panettone",
   "Stollen"
  ],
  "variations": [
   "dark Christmas fruitcake",
   "light golden fruitcake",
   "alcohol-free versions"
  ],
  "nutrition": {
   "serving": "1 slice (80 g)",
   "calories": 300,
   "protein": 3,
   "carbs": 50,
   "fat": 11,
   "note": "approximate"
  },
  "pronunciation": "FROOT-kayk",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/3_oz._fruitcake_-_commonwealth_zk51wj644.jpg/960px-3_oz._fruitcake_-_commonwealth_zk51wj644.jpg"
 },
 "Ambrosia Salad": {
  "history": "Ambrosia salad emerged in the American South in the late 19th century as canned fruit became widely available. Named for the food of the Greek gods, it was once a fashionable dessert for holidays. It remains a staple of Southern potlucks and Christmas tables.",
  "ingredients": [
   "canned mandarin oranges",
   "canned pineapple",
   "mini marshmallows",
   "shredded coconut",
   "sour cream",
   "whipped topping",
   "maraschino cherries",
   "pecans"
  ],
  "preparation": "Drained canned fruits are folded with marshmallows, coconut, and a creamy dressing of sour cream and whipped topping. It is chilled for several hours so the flavors meld. Served cold as a side or dessert.",
  "flavor": "Sweet, creamy, and tropical with tangy citrus notes and the vanilla softness of marshmallow.",
  "texture": "Soft and fluffy with juicy fruit pieces and chewy coconut.",
  "similar": [
   "Jell-O Salad",
   "Waldorf Salad",
   "Frog Eye Salad"
  ],
  "variations": [
   "with pecans",
   "with sour cream base",
   "with whipped topping base"
  ],
  "nutrition": {
   "serving": "1 cup (200 g)",
   "calories": 280,
   "protein": 2,
   "carbs": 45,
   "fat": 11,
   "note": "approximate"
  },
  "pronunciation": "am-BROH-zhuh SAL-ud",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Coconut_ambrosia_salad.jpg/960px-Coconut_ambrosia_salad.jpg"
 },
 "Tavuk Göğsü": {
  "history": "Tavuk Göğsü is a Turkish milk pudding made with shredded chicken breast, with roots in medieval Ottoman palace cuisine. Similar milk puddings existed across the medieval Middle East. It is still sold in Turkish dessert shops as a delicacy, often dusted with cinnamon.",
  "ingredients": [
   "chicken breast",
   "milk",
   "sugar",
   "rice flour",
   "cornstarch",
   "cinnamon",
   "mastic (optional)"
  ],
  "preparation": "Chicken breast is poached, then pounded and shredded into fine fibers. It is simmered with milk, sugar, and rice flour until thick and elastic. The pudding is poured into dishes, chilled, and often caramelized on top.",
  "flavor": "Milky, delicately sweet, and subtly rich; the chicken adds body but no meaty taste, with a faint mastic perfume in some versions.",
  "texture": "Silky, stretchy, and slightly chewy, with fine fibers that give it a unique pull.",
  "similar": [
   "Muhallabia",
   "Panna Cotta",
   "Tapioca"
  ],
  "variations": [
   "kazandibi, the caramelized version",
   "with mastic",
   "dusted with cinnamon"
  ],
  "nutrition": {
   "serving": "1 bowl (150 g)",
   "calories": 180,
   "protein": 8,
   "carbs": 30,
   "fat": 3,
   "note": "approximate"
  },
  "pronunciation": "tah-VOOK guh-OOS-oo",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tavuk_G%C3%B6%C4%9Fs%C3%BC_Dessert.jpg/960px-Tavuk_G%C3%B6%C4%9Fs%C3%BC_Dessert.jpg"
 },
 "Christmas Pudding": {
  "history": "Christmas pudding descends from medieval plum porridge, a savory dish eaten on Christmas Eve. By Victorian times it had become the rich steamed fruit pudding served flaming at Christmas dinner. It is traditionally made on Stir-up Sunday, weeks before Christmas.",
  "ingredients": [
   "suet or butter",
   "flour",
   "breadcrumbs",
   "dried figs",
   "raisins",
   "currants",
   "candied peel",
   "brown sugar",
   "eggs",
   "brandy",
   "mixed spice",
   "stout or ale"
  ],
  "preparation": "Fruits, suet, sugar, and spices are mixed into a dense batter, with family members traditionally taking turns stirring. It is steamed for hours, then aged for weeks. On Christmas Day it is reheated by steaming and served flaming with brandy.",
  "flavor": "Dark, rich, and intensely fruity with warming spices and a boozy depth.",
  "texture": "Dense, moist, and heavy, studded with plump fruit.",
  "similar": [
   "Fruitcake",
   "Stollen",
   "Mincemeat Pie"
  ],
  "variations": [
   "with brandy butter",
   "with custard",
   "alcohol-free versions"
  ],
  "nutrition": {
   "serving": "1 slice (120 g)",
   "calories": 380,
   "protein": 4,
   "carbs": 60,
   "fat": 14,
   "note": "approximate"
  },
  "pronunciation": "KRIS-mus PUD-ing",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/-2019-12-19_Cooked_Christmas_pudding%2C_Trimingham_%281%29.JPG/960px--2019-12-19_Cooked_Christmas_pudding%2C_Trimingham_%281%29.JPG"
 },
 "Mincemeat Pie": {
  "history": "Mince pies began in medieval England as savory pies of minced meat with dried fruit and spices, associated with Christmas. Over centuries the meat disappeared and the filling became the sweet-spiced mincemeat of today, sometimes still made with suet. They remain a British Christmas staple.",
  "ingredients": [
   "mincemeat (dried fruit mix)",
   "shortcrust pastry",
   "suet",
   "brown sugar",
   "apples",
   "raisins",
   "currants",
   "candied peel",
   "brandy",
   "mixed spice",
   "lemon zest"
  ],
  "preparation": "Mincemeat is made weeks ahead by mixing dried fruits, suet, sugar, and spices, and left to mature. Small pastry cases are filled and baked until golden. Served warm or cold, sometimes with cream or brandy butter.",
  "flavor": "Sweet, spiced, and boozy with concentrated fruit and citrus notes.",
  "texture": "Buttery, crumbly pastry around a sticky, jammy fruit filling.",
  "similar": [
   "Fruitcake",
   "Christmas Pudding",
   "Bakewell Tart"
  ],
  "variations": [
   "with puff pastry tops",
   "with frangipane",
   "deep-filled pies"
  ],
  "nutrition": {
   "serving": "1 pie (70 g)",
   "calories": 250,
   "protein": 2,
   "carbs": 40,
   "fat": 10,
   "note": "approximate"
  },
  "pronunciation": "MINTS-meet py",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mincemeat_pie.jpg/960px-Mincemeat_pie.jpg"
 },
 "Jell-O Salad": {
  "history": "Jell-O salads were a mid-20th-century American phenomenon, peaking in the 1950s and 60s when molded gelatin dishes signaled modern convenience cooking. Savory versions mixed gelatin with vegetables, tuna, or mayonnaise. They are now a nostalgic retro dish, still seen at church suppers and holiday tables.",
  "ingredients": [
   "flavored gelatin",
   "boiling water",
   "cold water",
   "canned fruit",
   "marshmallows",
   "cottage cheese",
   "whipped topping",
   "mayonnaise (savory versions)"
  ],
  "preparation": "Gelatin is dissolved in hot water, mixed with cold water, and combined with fruit or other additions. It is poured into a mold and chilled until set. Unmolded and served cold.",
  "flavor": "Sweet and fruity in dessert versions; savory versions are tangy and oddly creamy. Fans love the playful, refreshing taste.",
  "texture": "Wobbly, smooth, and cool, with suspended fruit or crunchy bits.",
  "similar": [
   "Ambrosia Salad",
   "Waldorf Salad",
   "Green Bean Casserole"
  ],
  "variations": [
   "lime gelatin with pears",
   "orange with carrots",
   "strawberry pretzel salad"
  ],
  "nutrition": {
   "serving": "1 cup (200 g)",
   "calories": 180,
   "protein": 4,
   "carbs": 35,
   "fat": 3,
   "note": "approximate"
  },
  "pronunciation": "JEL-oh SAL-ud",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Quick%2C_Easy_Jell-O_Wonder_Dishes_1930_Cover.jpg"
 },
 "Salmiakki": {
  "history": "Salmiakki is salty licorice flavored with ammonium chloride, popular in Finland and other Nordic countries. It developed in the 20th century as a confectionery flavor and became a defining Finnish candy. Finns are famously devoted to it, while newcomers often find it shocking.",
  "ingredients": [
   "sugar",
   "licorice extract",
   "ammonium chloride",
   "starch",
   "gelatin",
   "salt",
   "glucose syrup"
  ],
  "preparation": "Licorice mass is cooked with sugar, glucose, and ammonium chloride for the salty bite. It is molded into shapes and dusted or coated. Sold as hard candies, pastilles, or powder.",
  "flavor": "Intensely salty, sharp, and astringent with deep licorice notes; the ammonium chloride gives a distinctive tangy bite.",
  "texture": "Ranges from chewy pastilles to hard candies, often with a salty coating.",
  "similar": [
   "Black Licorice",
   "Liquorice Allsorts"
  ],
  "variations": [
   "salmiakki pastilles",
   "salty licorice ice cream",
   "salmiakki liqueur"
  ],
  "nutrition": {
   "serving": "1 bag (40 g)",
   "calories": 140,
   "protein": 1,
   "carbs": 34,
   "fat": 0,
   "note": "approximate"
  },
  "pronunciation": "sal-mee-AH-kee",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Pirkka_Salmiakki_sokeriton.jpg"
 },
 "Candy Corn": {
  "history": "Candy corn was created in the 1880s by the Wunderle Candy Company and popularized by Goelitz, now Jelly Belly. Its tri-color design imitated corn kernels to appeal to America's agrarian roots. It became the iconic Halloween candy of the United States.",
  "ingredients": [
   "sugar",
   "corn syrup",
   "fondant",
   "marshmallow",
   "vanilla",
   "salt",
   "food coloring",
   "beeswax"
  ],
  "preparation": "A fondant-like candy slurry is cooked and poured into cornstarch molds in three colored layers. The candies set, are tumbled to remove starch, and glazed. Production ramps up each fall for Halloween.",
  "flavor": "Very sweet with notes of vanilla, honey, and marshmallow; fans love the creamy, buttery sweetness.",
  "texture": "Waxy, dense, and slightly chewy with a smooth fondant bite.",
  "similar": [
   "Circus Peanuts",
   "Gummy Bears",
   "Jelly Beans"
  ],
  "variations": [
   "harvest corn with chocolate tip",
   "pumpkin-shaped mellowcremes",
   "Easter bunny corn"
  ],
  "nutrition": {
   "serving": "1 handful (40 g)",
   "calories": 150,
   "protein": 0,
   "carbs": 38,
   "fat": 0,
   "note": "approximate"
  },
  "pronunciation": "KAN-dee korn",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2019-11-11_15_20_43_A_sample_of_Brach%27s_Classic_Candy_Corn_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/960px-2019-11-11_15_20_43_A_sample_of_Brach%27s_Classic_Candy_Corn_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg"
 },
 "Black Licorice": {
  "history": "Licorice root has been used as a sweetener and medicine since ancient times, from Egypt to China. Black licorice candy became popular in Europe and North America in the 19th and 20th centuries. It remains beloved in Scandinavia and the Netherlands and divisive elsewhere.",
  "ingredients": [
   "licorice root extract",
   "sugar",
   "molasses",
   "wheat flour",
   "starch",
   "anise oil",
   "salt",
   "gelatin"
  ],
  "preparation": "Licorice extract is cooked with sugar, molasses, and flour into a thick dough. It is extruded into ropes or molded into shapes, then dried. Salted and sweet versions are both common.",
  "flavor": "Deep, earthy sweetness with anise notes and a slightly bitter, herbal finish.",
  "texture": "Dense and chewy, sometimes firm enough to be almost hard.",
  "similar": [
   "Salmiakki",
   "Liquorice Allsorts"
  ],
  "variations": [
   "Dutch salty licorice",
   "Finnish sweet licorice",
   "licorice wheels"
  ],
  "nutrition": {
   "serving": "1 pack (40 g)",
   "calories": 140,
   "protein": 1,
   "carbs": 35,
   "fat": 0,
   "note": "approximate"
  },
  "pronunciation": "blak LIK-ur-ish",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Black_Licorice-_Trick_or_Treat%3F_%286280412705%29.jpg/960px-Black_Licorice-_Trick_or_Treat%3F_%286280412705%29.jpg"
 },
 "Circus Peanuts": {
  "history": "Circus peanuts are a marshmallow candy dating to the 19th century, named for their peanut shape though they taste of banana. They were once a common penny candy. Their artificial banana flavor and orange color make them a nostalgic American sweet.",
  "ingredients": [
   "sugar",
   "corn syrup",
   "gelatin",
   "artificial banana flavor",
   "orange food coloring",
   "pectin"
  ],
  "preparation": "A marshmallow mixture is cooked, flavored, and extruded into peanut shapes. The candies are dusted to prevent sticking and packaged. They firm up slightly with age, which some fans prefer.",
  "flavor": "Intensely sweet artificial banana with a vanilla-marshmallow background.",
  "texture": "Soft, spongy, and foamy, becoming firmer and chewier as they stale.",
  "similar": [
   "Candy Corn",
   "Gummy Bears",
   "Jelly Beans"
  ],
  "variations": [
   "classic orange",
   "occasional other colors",
   "fresh vs aged debate"
  ],
  "nutrition": {
   "serving": "1 pack (40 g)",
   "calories": 140,
   "protein": 1,
   "carbs": 35,
   "fat": 0,
   "note": "approximate"
  },
  "pronunciation": "SUR-kus PEE-nuts",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Academics_and_Circus_Peanuts_-_The_cheers.jpg/960px-Academics_and_Circus_Peanuts_-_The_cheers.jpg"
 },
 "Natto": {
  "history": "Natto is fermented soybeans with a history in Japan stretching back over a thousand years, traditionally eaten at breakfast. The sticky beans are a staple of Japanese home cooking and a famous example of acquired taste. It is valued for its probiotics and distinctive character.",
  "ingredients": [
   "soybeans",
   "Bacillus subtilis natto culture",
   "water",
   "mustard",
   "soy sauce",
   "rice"
  ],
  "preparation": "Soybeans are soaked, steamed, and inoculated with natto bacteria, then fermented warm for about a day. The result is sticky, stringy beans. Served over rice with mustard and soy sauce, stirred vigorously.",
  "flavor": "Pungent, earthy, and deeply savory with a sharp tang and a strong umami that fans find addictive.",
  "texture": "Slimy and stringy with sticky threads; the beans themselves are soft.",
  "similar": [
   "Tempeh",
   "Stinky Tofu",
   "Miso Soup"
  ],
  "variations": [
   "hikiwari, chopped natto",
   "with raw egg",
   "natto maki rolls"
  ],
  "nutrition": {
   "serving": "1 pack (50 g)",
   "calories": 100,
   "protein": 8,
   "carbs": 6,
   "fat": 5,
   "note": "approximate"
  },
  "pronunciation": "NAHT-toh",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Japanese_okranatto_2014.jpg/960px-Japanese_okranatto_2014.jpg"
 },
 "Vegemite": {
  "history": "Vegemite is an Australian yeast-extract spread created in 1922 by Cyril Callister, developed when wartime shortages cut off British Marmite. It became an Australian cultural icon, especially after a famous jingle in the 1930s. Australians grow up on it; visitors often find it intensely salty.",
  "ingredients": [
   "yeast extract",
   "salt",
   "malt extract",
   "vegetable extract",
   "niacin",
   "thiamine",
   "riboflavin",
   "folate"
  ],
  "preparation": "Brewer's yeast extract is concentrated and blended with salt, malt, and B vitamins. The dark paste is jarred and sold ready to eat. It is spread very thinly on buttered toast.",
  "flavor": "Intensely salty, savory, and malty with a deep umami punch; a little goes a long way.",
  "texture": "Thick, smooth, sticky paste.",
  "similar": [
   "Marmite"
  ],
  "variations": [
   "on toast with butter",
   "in cheese scrolls",
   "Vegemite-flavored snacks"
  ],
  "nutrition": {
   "serving": "1 tsp (5 g)",
   "calories": 9,
   "protein": 1,
   "carbs": 1,
   "fat": 0,
   "note": "approximate"
  },
  "pronunciation": "VEJ-uh-myte",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Man_in_Australia_sitting_in_a_camping_chair_with_a_tinnie_%28can_of_beer%29_and_jar_of_vegemite.jpg/960px-Man_in_Australia_sitting_in_a_camping_chair_with_a_tinnie_%28can_of_beer%29_and_jar_of_vegemite.jpg"
 },
 "Marmite": {
  "history": "Marmite is a British yeast-extract spread invented in 1902, made from brewery byproducts. Its Love it or hate it advertising embraced its divisiveness. It is a staple of British pantries, spread thinly on toast.",
  "ingredients": [
   "yeast extract",
   "salt",
   "vegetable juice concentrate",
   "niacin",
   "thiamine",
   "spices",
   "celery extract"
  ],
  "preparation": "Yeast extract from brewing is concentrated and seasoned with salt and vegetable extracts. It is packed into jars ready to eat. Traditionally spread thinly on hot buttered toast.",
  "flavor": "Powerfully salty and savory with a yeasty, almost meaty depth.",
  "texture": "Thick, glossy, sticky paste.",
  "similar": [
   "Vegemite"
  ],
  "variations": [
   "on crumpets",
   "in Marmite rice cakes",
   "Marmite-flavored crisps"
  ],
  "nutrition": {
   "serving": "1 tsp (5 g)",
   "calories": 11,
   "protein": 2,
   "carbs": 1,
   "fat": 0,
   "note": "approximate"
  },
  "pronunciation": "MAR-myte",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Marmite_ou_faitout_en_pierre_Kaiser.jpg"
 },
 "Black Pudding": {
  "history": "Black pudding is a blood sausage made across Britain, Ireland, and Europe for centuries, born from using every part of the slaughtered pig. It is a cornerstone of the full English and Irish breakfast. Stornoway black pudding from Scotland holds protected status.",
  "ingredients": [
   "pig's blood",
   "pork fat",
   "oatmeal",
   "barley",
   "onion",
   "salt",
   "black pepper",
   "allspice",
   "natural casing"
  ],
  "preparation": "Blood is mixed with fat, oatmeal, and seasonings, then stuffed into casings and poached. The sausages are cooled, sliced, and fried or grilled until crisp. Served as part of a cooked breakfast.",
  "flavor": "Rich, earthy, and deeply savory with peppery spice and a mild, iron-rich depth.",
  "texture": "Crumbly-soft inside with a crisp fried exterior; the oatmeal gives body.",
  "similar": [
   "Haggis",
   "Chitterlings",
   "Sundae (Korean Blood Sausage)"
  ],
  "variations": [
   "Stornoway black pudding",
   "served with apple",
   "Spanish morcilla-style"
  ],
  "nutrition": {
   "serving": "2 slices (80 g)",
   "calories": 260,
   "protein": 12,
   "carbs": 15,
   "fat": 17,
   "note": "approximate"
  },
  "pronunciation": "blak PUD-ing",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/-2021-07-24_Black_pudding_sausage%2C_Trimingham%2C_Norfolk.JPG/960px--2021-07-24_Black_pudding_sausage%2C_Trimingham%2C_Norfolk.JPG"
 },
 "Scrapple": {
  "history": "Scrapple is a Pennsylvania Dutch pork loaf created by German immigrants to use every part of the pig. Cornmeal mush is cooked with pork scraps and formed into loaves. It remains a beloved breakfast meat in the Mid-Atlantic United States.",
  "ingredients": [
   "pork scraps",
   "cornmeal",
   "wheat flour",
   "salt",
   "black pepper",
   "sage",
   "thyme",
   "onion",
   "water"
  ],
  "preparation": "Pork trimmings are simmered, then ground and cooked with cornmeal into a thick mush. The mixture is poured into loaf pans and chilled until firm. Slices are pan-fried until crisp and golden.",
  "flavor": "Savory, peppery, and porky with herbal sage notes and a cornmeal sweetness.",
  "texture": "Crisp, browned crust with a soft, mushy interior.",
  "similar": [
   "Black Pudding",
   "Haggis",
   "Chitterlings"
  ],
  "variations": [
   "with maple syrup",
   "with ketchup",
   "with fried eggs"
  ],
  "nutrition": {
   "serving": "2 slices (110 g)",
   "calories": 240,
   "protein": 10,
   "carbs": 15,
   "fat": 14,
   "note": "approximate"
  },
  "pronunciation": "SKRAP-ul",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Plate_of_scrapple.jpg/960px-Plate_of_scrapple.jpg"
 },
 "Kippers": {
  "history": "Kippers are whole herring, split, salted, and cold-smoked, a staple of the British breakfast table. The Isle of Man and Northumberland are famous for traditional kipper smoking. They were once working-class fare, valued as cheap, filling protein.",
  "ingredients": [
   "herring",
   "salt",
   "oak smoke",
   "butter",
   "lemon"
  ],
  "preparation": "Herring are split, brined, and cold-smoked over oak until golden. They are gently heated, often in a jug of hot water or under the grill. Served with butter, lemon, and brown bread.",
  "flavor": "Smoky, salty, and richly fishy with a buttery depth.",
  "texture": "Flaky and moist with soft bones; the skin crisps when grilled.",
  "similar": [
   "Pickled Herring",
   "Smoked Salmon",
   "Gravlax"
  ],
  "variations": [
   "Manx kippers",
   "grilled kippers",
   "kipper pate"
  ],
  "nutrition": {
   "serving": "1 kipper (100 g)",
   "calories": 200,
   "protein": 22,
   "carbs": 0,
   "fat": 12,
   "note": "approximate"
  },
  "pronunciation": "KIP-urz",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Crab_and_smoked_kippers_on_lettuce%2C_with_mango_vinaigrette_and_black_pepper_-_Massachusetts.jpg/960px-Crab_and_smoked_kippers_on_lettuce%2C_with_mango_vinaigrette_and_black_pepper_-_Massachusetts.jpg"
 },
 "Kumis": {
  "history": "Kumis is fermented mare's milk with ancient roots among the nomadic peoples of Central Asia, drunk by Scythians and Mongols. It was traditionally made in leather sacks hung by the yurt door, churned by passersby. It remains the national drink of Kazakhstan, Kyrgyzstan, and Mongolia.",
  "ingredients": [
   "mare's milk",
   "kumis starter culture"
  ],
  "preparation": "Fresh mare's milk is combined with a starter of previous kumis and churned regularly for hours or days. The mild fermentation produces light alcohol and fizz. It is served cool and drunk fresh.",
  "flavor": "Tangy, lightly sour, and effervescent with a mild alcoholic warmth; fans find it refreshing and complex.",
  "texture": "Thin and slightly fizzy, lighter than cow's milk.",
  "similar": [
   "Ayran",
   "Kefir",
   "Skyr"
  ],
  "variations": [
   "mild one-day kumis",
   "strong multi-day kumis",
   "cow's milk versions"
  ],
  "nutrition": {
   "serving": "1 cup (240 ml)",
   "calories": 90,
   "protein": 5,
   "carbs": 9,
   "fat": 3,
   "note": "approximate"
  },
  "pronunciation": "koo-MISS",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kumis_li_kurdistane.jpg/960px-Kumis_li_kurdistane.jpg"
 },
 "Moxie": {
  "history": "Moxie began in 1876 as Moxie Nerve Food, a patent medicine created by Dr. Augustin Thompson in Maine, and became one of America's first mass-marketed soft drinks. Its bitter gentian-root flavor made it a New England icon. It was acquired by Coca-Cola in 2018 but remains a regional favorite.",
  "ingredients": [
   "carbonated water",
   "sugar",
   "gentian root extract",
   "caramel color",
   "natural flavors"
  ],
  "preparation": "Gentian root and other botanicals are brewed into a bitter base, sweetened, and carbonated. It is bottled or canned like other sodas. Served ice cold.",
  "flavor": "Distinctively bitter and medicinal with root-beer-like spice notes; fans prize the sharp, dry bite.",
  "texture": "Crisp carbonation like any soda.",
  "similar": [
   "Root Beer",
   "Dr Pepper",
   "Aperol Spritz"
  ],
  "variations": [
   "original",
   "diet Moxie",
   "Moxie floats"
  ],
  "nutrition": {
   "serving": "1 can (355 ml)",
   "calories": 150,
   "protein": 0,
   "carbs": 40,
   "fat": 0,
   "note": "approximate"
  },
  "pronunciation": "MOK-see",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Moxie_soda%2C_full_logo.svg/960px-Moxie_soda%2C_full_logo.svg.png"
 },
 "Fernet Branca": {
  "history": "Fernet Branca is an Italian amaro created in 1845 in Milan by Bernardino Branca, made from a secret blend of herbs and spices. It became a bartender's handshake drink and a digestif ritual, especially popular in Argentina and San Francisco. Its intense bitterness is legendary.",
  "ingredients": [
   "neutral spirit",
   "myrrh",
   "saffron",
   "chamomile",
   "gentian",
   "rhubarb",
   "aloe",
   "caramel color",
   "secret herbs"
  ],
  "preparation": "Dozens of botanicals are macerated in spirit and aged in oak barrels. The bitter liqueur is bottled at high proof. It is drunk neat, often as a shot, or mixed with cola in Argentina.",
  "flavor": "Aggressively bitter, herbal, and menthol-like with saffron warmth; fans describe a bracing, medicinal complexity.",
  "texture": "Syrupy, coating liqueur.",
  "similar": [
   "Malört",
   "Aperol Spritz"
  ],
  "variations": [
   "Fernet con Coca in Argentina",
   "as a digestif",
   "in cocktails"
  ],
  "nutrition": {
   "serving": "1 shot (45 ml)",
   "calories": 120,
   "protein": 0,
   "carbs": 8,
   "fat": 0,
   "note": "approximate"
  },
  "pronunciation": "fair-NAY BRAHN-kah",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Fernet_Branca.jpg"
 },
 "Malört": {
  "history": "Malort is a Swedish-style wormwood liqueur created in Chicago in the 1930s by Carl Jeppson, a Swedish immigrant. It became a cult rite of passage for Chicago drinkers, famous for its punishing bitterness. The brand leans into its fearsome reputation.",
  "ingredients": [
   "wormwood",
   "neutral spirit",
   "anise",
   "grapefruit peel",
   "caramel color"
  ],
  "preparation": "Wormwood and botanicals are steeped in neutral spirit, then filtered and bottled. It is traditionally served as a chilled shot. No mixers are expected; the bitterness is the point.",
  "flavor": "Extremely bitter and grapefruit-pithy with an earthy punch that fans call characterful.",
  "texture": "Thin, clean spirit.",
  "similar": [
   "Fernet Branca",
   "Aperol Spritz"
  ],
  "variations": [
   "chilled shot",
   "in bitter cocktails",
   "the Chicago ritual"
  ],
  "nutrition": {
   "serving": "1 shot (45 ml)",
   "calories": 100,
   "protein": 0,
   "carbs": 2,
   "fat": 0,
   "note": "approximate"
  },
  "pronunciation": "mah-LORT",
  "photo": null
 },
 "Aspic": {
  "history": "Aspic is savory meat jelly with roots in medieval European cookery, when jellied meats showed off a kitchen's skill. It reached its height in 19th-century French haute cuisine and mid-century aspic molds. It is still made for terrines, pates, and Eastern European kholodets.",
  "ingredients": [
   "meat stock",
   "gelatin",
   "egg whites",
   "vegetables",
   "herbs",
   "salt",
   "vinegar",
   "cooked meat or eggs"
  ],
  "preparation": "Rich stock is clarified with egg whites into a clear consomme, then set with gelatin. Meat, eggs, or vegetables are arranged in a mold and covered with the jelly. It is chilled until firm and unmolded.",
  "flavor": "Clean, savory, and meaty, carrying the flavor of the stock and garnishes.",
  "texture": "Cool, firm, wobbly jelly with tender suspended ingredients.",
  "similar": [
   "Jell-O Salad",
   "Foie Gras"
  ],
  "variations": [
   "tomato aspic",
   "egg and ham aspic",
   "kholodets, the Eastern European style"
  ],
  "nutrition": {
   "serving": "1 slice (120 g)",
   "calories": 90,
   "protein": 10,
   "carbs": 3,
   "fat": 4,
   "note": "approximate"
  },
  "pronunciation": "ASS-pik",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Aspic-with-eggs.jpg"
 },
 "Salo": {
  "history": "Salo is cured pork fat, a staple of Ukrainian and Eastern European peasant cuisine, valued as calorie-dense winter food. It is eaten on rye bread with garlic and pickles and features in Ukrainian national identity. Salted, smoked, and spiced versions are all traditional.",
  "ingredients": [
   "pork back fat",
   "salt",
   "garlic",
   "black pepper",
   "paprika",
   "bay leaves"
  ],
  "preparation": "Thick slabs of pork fat are rubbed heavily with salt and garlic, then cured for weeks in a cool place. Some versions are smoked or layered with meat. It is sliced thin and eaten cold, often with bread.",
  "flavor": "Rich, salty, and porky with garlic warmth; fans love its clean, creamy fattiness.",
  "texture": "Silky, buttery, and melt-in-the-mouth at room temperature.",
  "similar": [
   "Chicharrones",
   "Kielbasa"
  ],
  "variations": [
   "salted salo",
   "smoked salo",
   "salo with garlic and pepper"
  ],
  "nutrition": {
   "serving": "2 slices (50 g)",
   "calories": 400,
   "protein": 1,
   "carbs": 0,
   "fat": 44,
   "note": "approximate"
  },
  "pronunciation": "SAH-loh",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Meatballs_and_mashed_potatoes_for_lunch_in_Salo.jpg/960px-Meatballs_and_mashed_potatoes_for_lunch_in_Salo.jpg"
 },
 "Gefilte Fish": {
  "history": "Gefilte fish is a poached fish dumpling of Ashkenazi Jewish cuisine, developed centuries ago as a way to eat fish on Shabbat without picking bones. The name means stuffed fish in Yiddish, from when the mixture was stuffed back into the skin. It is a fixture of Passover and Shabbat tables.",
  "ingredients": [
   "whitefish",
   "pike",
   "carp",
   "eggs",
   "matzo meal",
   "onion",
   "carrots",
   "salt",
   "white pepper",
   "sugar",
   "fish stock"
  ],
  "preparation": "Ground fish is mixed with eggs, matzo meal, and onion into quenelles. They are poached gently in fish stock with carrots and onion. Served chilled with horseradish and a slice of cooked carrot.",
  "flavor": "Mild, sweet, and delicate with onion savoriness; the horseradish adds the classic sharp kick.",
  "texture": "Soft, light, and slightly springy, like a delicate fish dumpling.",
  "similar": [
   "Pickled Herring",
   "Smoked Salmon",
   "Gravlax"
  ],
  "variations": [
   "sweet Polish style",
   "peppery Lithuanian style",
   "with horseradish chrain"
  ],
  "nutrition": {
   "serving": "2 pieces (150 g)",
   "calories": 160,
   "protein": 18,
   "carbs": 10,
   "fat": 5,
   "note": "approximate"
  },
  "pronunciation": "guh-FIL-tuh fish",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gefilte_Fish.jpg/960px-Gefilte_Fish.jpg"
 },
 "Head Cheese": {
  "history": "Head cheese is a jellied loaf made from the meat of a pig's or calf's head, part of Europe's nose-to-tail charcuterie tradition. It is known as brawn in Britain and souse in the Caribbean and American South. Sliced cold, it is eaten on bread with mustard or vinegar.",
  "ingredients": [
   "pig's head",
   "onion",
   "bay leaves",
   "black peppercorns",
   "salt",
   "vinegar",
   "parsley",
   "gelatin (if needed)"
  ],
  "preparation": "The head is simmered for hours until the meat falls from the bone. The meat is picked, chopped, seasoned, and packed into a mold with the reduced cooking liquid. It sets into a sliceable loaf as the natural gelatin firms.",
  "flavor": "Mildly porky and savory with pepper and vinegar brightness; the seasoning carries it.",
  "texture": "Firm, sliceable jelly studded with tender bits of meat.",
  "similar": [
   "Foie Gras",
   "Chitterlings"
  ],
  "variations": [
   "British brawn",
   "Southern souse",
   "with pickled vegetables"
  ],
  "nutrition": {
   "serving": "2 slices (80 g)",
   "calories": 140,
   "protein": 14,
   "carbs": 1,
   "fat": 8,
   "note": "approximate"
  },
  "pronunciation": "hed cheez",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Hill_-_Salads%2C_Sandwiches%2C_and_Chafing-Dish_Dainties.djvu/page1-960px-Hill_-_Salads%2C_Sandwiches%2C_and_Chafing-Dish_Dainties.djvu.jpg"
 },
 "Overcooked Brussels Sprouts": {
  "history": "Brussels sprouts are a cabbage cultivar developed near Brussels, Belgium, and were a standard boiled vegetable in British and American cooking. Boiled to gray-green softness, they became a byword for disliked vegetables. Modern roasting has rehabilitated their reputation, but the overcooked version remains infamous.",
  "ingredients": [
   "Brussels sprouts",
   "water",
   "salt",
   "butter"
  ],
  "preparation": "The sprouts are trimmed and boiled in salted water well past tender, until soft and drab. They are drained and served plain or with butter. This is the traditional mid-century preparation.",
  "flavor": "Strongly sulfurous and bitter with a cabbagey intensity that mellows only slightly with butter.",
  "texture": "Mushy and waterlogged, falling apart at the touch.",
  "similar": [
   "Green Bean Casserole",
   "Coleslaw",
   "Potato Salad"
  ],
  "variations": [
   "boiled plain",
   "with butter",
   "creamed retro style"
  ],
  "nutrition": {
   "serving": "1 cup (150 g)",
   "calories": 60,
   "protein": 4,
   "carbs": 12,
   "fat": 1,
   "note": "approximate"
  },
  "pronunciation": "oh-vur-KUKT BRUS-ul sprouts",
  "photo": null
 },
 "Mushy Peas": {
  "history": "Mushy peas are a British staple made from dried marrowfat peas, traditionally served with fish and chips in the North of England. They date to at least the 19th century as cheap, filling fare. Bright green and comforting, they are defended fiercely by fans.",
  "ingredients": [
   "dried marrowfat peas",
   "water",
   "baking soda",
   "salt",
   "butter",
   "mint",
   "sugar"
  ],
  "preparation": "Dried peas are soaked overnight with a pinch of baking soda, then simmered until they collapse into a thick puree. They are seasoned with salt, butter, and sometimes mint. Served hot alongside fried fish.",
  "flavor": "Sweet, starchy, and earthy with a gentle pea sweetness.",
  "texture": "Thick, soft, and porridge-like with a few whole peas remaining.",
  "similar": [
   "Bangers and Mash",
   "Mashed Potatoes",
   "Shepherd's Pie"
  ],
  "variations": [
   "with mint",
   "with butter",
   "chip-shop style"
  ],
  "nutrition": {
   "serving": "1 cup (200 g)",
   "calories": 150,
   "protein": 9,
   "carbs": 27,
   "fat": 2,
   "note": "approximate"
  },
  "pronunciation": "MUSH-ee peez",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fish%2C_chips_and_mushy_peas.jpg/960px-Fish%2C_chips_and_mushy_peas.jpg"
 },
 "Pickled Herring": {
  "history": "Pickled herring has been a Northern European staple since the Middle Ages, when salted herring fueled Hanseatic trade. The Dutch, Germans, Swedes, and Poles each have beloved versions. It remains essential at Scandinavian Christmas and midsummer tables.",
  "ingredients": [
   "herring fillets",
   "white vinegar",
   "water",
   "sugar",
   "salt",
   "onion",
   "bay leaves",
   "mustard seed",
   "allspice",
   "dill"
  ],
  "preparation": "Salt-cured herring fillets are soaked to remove excess salt, then packed in jars with spiced vinegar brine. They marinate for days until flavored through. Served cold with potatoes, rye bread, or sour cream.",
  "flavor": "Tangy, salty, and sweet with warm spice notes and a clean fishiness.",
  "texture": "Firm yet silky fillets with a pleasant bite.",
  "similar": [
   "Gravlax",
   "Smoked Salmon",
   "Surströmming"
  ],
  "variations": [
   "mustard herring",
   "curried herring",
   "with sour cream and dill"
  ],
  "nutrition": {
   "serving": "3 fillets (100 g)",
   "calories": 160,
   "protein": 14,
   "carbs": 8,
   "fat": 9,
   "note": "approximate"
  },
  "pronunciation": "PIK-uld HAIR-ing",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/7/76/Twelve-dish_Christmas_Eve_supper.jpg"
 },
 "Creamed Chipped Beef": {
  "history": "Creamed chipped beef, nicknamed SOS by American soldiers, was standard military fare in the early 20th century and became a Depression-era comfort dish. Dried beef in white gravy over toast fed families cheaply. It remains a nostalgic diner and home breakfast.",
  "ingredients": [
   "dried chipped beef",
   "butter",
   "flour",
   "milk",
   "black pepper",
   "toast",
   "nutmeg",
   "peas (optional)"
  ],
  "preparation": "Dried beef is rinsed and sauteed in butter, then a roux is made and milk whisked in to form a thick gravy. The beef simmers briefly in the sauce. Served ladled over buttered toast.",
  "flavor": "Salty, creamy, and peppery with an intense cured-beef savoriness.",
  "texture": "Silky gravy with chewy shreds of beef over crisp-soft toast.",
  "similar": [
   "Chicken à la King",
   "Tuna Casserole",
   "Cream of Wheat"
  ],
  "variations": [
   "on toast, the classic",
   "over biscuits",
   "with peas"
  ],
  "nutrition": {
   "serving": "1 cup over toast (250 g)",
   "calories": 350,
   "protein": 20,
   "carbs": 30,
   "fat": 15,
   "note": "approximate"
  },
  "pronunciation": "kreemd chipt beef",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Creamed_chipped_beef.jpg"
 },
 "Sannakji": {
  "history": "Sannakji is a Korean dish of live octopus, cut and served immediately so the tentacles still move. It is a celebrated and controversial specialty, eaten as anju alongside drinks. Diners chew carefully, as the suction cups can stick.",
  "ingredients": [
   "live small octopus",
   "sesame oil",
   "sesame seeds",
   "salt",
   "scallions"
  ],
  "preparation": "A live octopus is quickly cut into pieces and served within moments. The pieces are seasoned with sesame oil and salt. Eaten immediately while still moving, often with a shot of soju.",
  "flavor": "Clean, briny, and mildly sweet with nutty sesame oil.",
  "texture": "Chewy and slippery, with the suction cups gripping as you chew.",
  "similar": [
   "Takoyaki",
   "Fried Calamari",
   "Salt and Pepper Squid"
  ],
  "variations": [
   "chopped san-nakji",
   "whole baby octopus",
   "with gochujang"
  ],
  "nutrition": {
   "serving": "1 octopus (150 g)",
   "calories": 120,
   "protein": 22,
   "carbs": 3,
   "fat": 2,
   "note": "approximate"
  },
  "pronunciation": "sahn-NAHK-jee",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Korean.cuisine-Sannakji.hoe-01.jpg/960px-Korean.cuisine-Sannakji.hoe-01.jpg"
 },
 "Shirako": {
  "history": "Shirako, the milt of cod or pufferfish, is a winter delicacy in Japan, prized for its creamy richness. It appears in high-end sushi and hot-pot restaurants in season. Devotees consider it one of Japan's great acquired tastes.",
  "ingredients": [
   "cod milt",
   "ponzu sauce",
   "scallions",
   "grated daikon",
   "dashi",
   "miso"
  ],
  "preparation": "Fresh milt sacs are briefly blanched or served raw as sashimi. They are also simmered in hot pots or tempura-fried. Served chilled with ponzu and grated daikon.",
  "flavor": "Mild, creamy, and oceanic with a delicate sweetness; the flavor is subtle and refined.",
  "texture": "Soft, custardy sacs that melt into creaminess.",
  "similar": [
   "Ankimo",
   "Fugu",
   "Kina (Sea Urchin)"
  ],
  "variations": [
   "raw with ponzu",
   "in hot pot",
   "tempura-fried"
  ],
  "nutrition": {
   "serving": "1 portion (80 g)",
   "calories": 60,
   "protein": 12,
   "carbs": 1,
   "fat": 2,
   "note": "approximate"
  },
  "pronunciation": "shee-rah-KOH",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chiba_prefectural_road_route_138_%28Masaki-Mobara_line%29_in_Minamihinata%2CShirako_town.JPG/960px-Chiba_prefectural_road_route_138_%28Masaki-Mobara_line%29_in_Minamihinata%2CShirako_town.JPG"
 },
 "Ankimo": {
  "history": "Ankimo is monkfish liver, steamed and pressed into a loaf, often called the foie gras of the sea in Japan. It is a winter specialty served as sashimi or in hot pots. Its rich, creamy character has won it devoted fans.",
  "ingredients": [
   "monkfish liver",
   "sake",
   "salt",
   "ponzu sauce",
   "grated daikon",
   "scallions"
  ],
  "preparation": "The liver is cleaned, salted, and rolled tightly, then steamed until firm. It is chilled, sliced, and served with ponzu and grated daikon. Sometimes briefly seared.",
  "flavor": "Rich, buttery, and deeply oceanic with a sweet, creamy depth.",
  "texture": "Dense, smooth, and velvety, melting like pate.",
  "similar": [
   "Shirako",
   "Foie Gras",
   "Fugu"
  ],
  "variations": [
   "sashimi-style with ponzu",
   "in hot pot",
   "seared"
  ],
  "nutrition": {
   "serving": "1 portion (80 g)",
   "calories": 110,
   "protein": 8,
   "carbs": 2,
   "fat": 9,
   "note": "approximate"
  },
  "pronunciation": "ahn-kee-MOH",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Ankimo.jpg/960px-Ankimo.jpg"
 },
 "Geoduck": {
  "history": "The geoduck is a giant burrowing clam native to the Pacific Northwest, harvested by divers and farmed for export. It is prized in Chinese and Japanese cuisine, where it is eaten raw. Its long siphon and impressive size make it famous beyond seafood circles.",
  "ingredients": [
   "geoduck clam",
   "ice",
   "lemon",
   "soy sauce",
   "wasabi"
  ],
  "preparation": "The clam is shucked and the siphon blanched briefly, then sliced thin for sashimi. The body meat is often chopped for stir-fries or hot pot. Served ice-cold and raw to show off its sweetness.",
  "flavor": "Sweet, clean, and briny with a crisp ocean freshness.",
  "texture": "Crunchy and snappy when raw, with a firm, satisfying bite.",
  "similar": [
   "Clam Chowder",
   "Green-Lipped Mussels",
   "Oysters Rockefeller"
  ],
  "variations": [
   "sashimi",
   "hot pot",
   "stir-fried with vegetables"
  ],
  "nutrition": {
   "serving": "1/2 clam (100 g)",
   "calories": 70,
   "protein": 14,
   "carbs": 3,
   "fat": 1,
   "note": "approximate"
  },
  "pronunciation": "GOO-ee-duk",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Joo-Ok_%28NYC-%29_Deul_Gi_Reum-_Spotted_shrimp_%E2%80%A2_Geoduck_%E2%80%A2_House_made_perilla_oil.jpg/960px-Joo-Ok_%28NYC-%29_Deul_Gi_Reum-_Spotted_shrimp_%E2%80%A2_Geoduck_%E2%80%A2_House_made_perilla_oil.jpg"
 },
 "Jellyfish Salad": {
  "history": "Jellyfish has been eaten in China for over a thousand years, prepared as a cold appetizer for banquets. The jellyfish is salted and dried, then rehydrated before serving. It is valued for its crunch rather than its flavor.",
  "ingredients": [
   "salted jellyfish",
   "sesame oil",
   "rice vinegar",
   "soy sauce",
   "sugar",
   "cucumber",
   "carrots",
   "sesame seeds",
   "chili oil"
  ],
  "preparation": "Salted jellyfish is soaked and rinsed repeatedly to remove salt, then blanched briefly. It is shredded and tossed with sesame oil, vinegar, and vegetables. Served cold as an appetizer.",
  "flavor": "Mild and neutral, taking on the sesame-vinegar dressing with a faint ocean note.",
  "texture": "Crunchy, springy, and noodle-like with a distinctive squeaky chew.",
  "similar": [
   "Spring Rolls",
   "Krupuk (Shrimp Crackers)",
   "Kimchi"
  ],
  "variations": [
   "with sesame dressing",
   "spicy with chili oil",
   "with cucumber"
  ],
  "nutrition": {
   "serving": "1 cup (100 g)",
   "calories": 60,
   "protein": 5,
   "carbs": 6,
   "fat": 2,
   "note": "approximate"
  },
  "pronunciation": "JEL-ee-fish SAL-ud",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jellyfish_and_roast_duck_salad.JPG/960px-Jellyfish_and_roast_duck_salad.JPG"
 },
 "Whelks": {
  "history": "Whelks are large sea snails eaten across coastal Europe and East Asia for centuries. In Britain they were classic seaside fare, sold from stalls with vinegar. In Korea and Japan they are prized as sashimi and in soups.",
  "ingredients": [
   "whelks",
   "water",
   "salt",
   "vinegar",
   "malt vinegar",
   "white pepper"
  ],
  "preparation": "Whelks are boiled in salted water until the meat firms, then extracted from the shells. In Britain they are eaten cold with vinegar and pepper. In East Asia they are sliced for sashimi or simmered in soups.",
  "flavor": "Briny and mildly sweet with a clean, oceanic taste.",
  "texture": "Firm, chewy, and meaty with a satisfying bite.",
  "similar": [
   "Green-Lipped Mussels",
   "Oysters Rockefeller",
   "Clam Chowder"
  ],
  "variations": [
   "with vinegar, British style",
   "as sashimi",
   "in Korean soup"
  ],
  "nutrition": {
   "serving": "1 cup meat (100 g)",
   "calories": 140,
   "protein": 24,
   "carbs": 8,
   "fat": 1,
   "note": "approximate"
  },
  "pronunciation": "welks",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/WhelksCookedWithPepper.jpg/960px-WhelksCookedWithPepper.jpg"
 },
 "Percebes": {
  "history": "Percebes, or goose barnacles, are harvested from wave-battered rocks in Galicia, Spain, and Portugal, a dangerous job that commands high prices. They have been eaten since Roman times along the Atlantic coast. Their briny flavor makes them one of Spain's most celebrated seafoods.",
  "ingredients": [
   "percebes (goose barnacles)",
   "water",
   "sea salt",
   "bay leaves"
  ],
  "preparation": "The barnacles are briefly boiled in well-salted water, sometimes with bay. They are served hot, and diners twist off the claw to pull out the tender neck meat. Eaten plain to savor the sea flavor.",
  "flavor": "Intensely briny and sweet, like the purest essence of the ocean.",
  "texture": "Tender, juicy neck meat with a slight snap.",
  "similar": [
   "Green-Lipped Mussels",
   "Oysters Rockefeller"
  ],
  "variations": [
   "simply boiled in seawater",
   "with lemon",
   "Galician style"
  ],
  "nutrition": {
   "serving": "10 barnacles (100 g)",
   "calories": 80,
   "protein": 15,
   "carbs": 2,
   "fat": 1,
   "note": "approximate"
  },
  "pronunciation": "pair-SAY-bess",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/7/74/Percebes.iguaria.jpg"
 },
 "Sea Cucumber": {
  "history": "Sea cucumbers, known as trepang or beche-de-mer, have been harvested and traded across Asia and the Pacific for centuries. Dried sea cucumber is a luxury ingredient in Chinese banquet cooking. It is prized for texture and supposed health properties rather than flavor.",
  "ingredients": [
   "dried sea cucumber",
   "water",
   "ginger",
   "scallions",
   "chicken stock",
   "soy sauce",
   "oyster sauce"
  ],
  "preparation": "Dried sea cucumbers are soaked for days, with the water changed, until they plump up. They are braised slowly in rich stock with aromatics until tender. Served in festive stews and braises.",
  "flavor": "Nearly flavorless on its own, absorbing the rich braising liquid; fans love the savory sauce it carries.",
  "texture": "Slippery, gelatinous, and slightly springy; the appeal is entirely about mouthfeel.",
  "similar": [
   "Kina (Sea Urchin)",
   "Shirako",
   "Ankimo"
  ],
  "variations": [
   "braised with mushrooms",
   "in hot pot",
   "with abalone sauce"
  ],
  "nutrition": {
   "serving": "1 piece braised (100 g)",
   "calories": 70,
   "protein": 13,
   "carbs": 3,
   "fat": 1,
   "note": "approximate"
  },
  "pronunciation": "see KYOO-kum-bur",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/20190905_185512_Sea_Cucumber_Dish_in_a_Restaurant_in_Zhumadian%2C_Henan%2C_China_anagoria.jpg/960px-20190905_185512_Sea_Cucumber_Dish_in_a_Restaurant_in_Zhumadian%2C_Henan%2C_China_anagoria.jpg"
 },
 "Bagoong": {
  "history": "Bagoong is Filipino fermented shrimp or fish paste, a cornerstone condiment of Philippine cooking. Fermentation preserved the seafood catch long before refrigeration. It seasons dishes like kare-kare and pinakbet, and fans love its powerful umami.",
  "ingredients": [
   "small shrimp or fish",
   "salt",
   "water",
   "sugar (sweet versions)"
  ],
  "preparation": "Tiny shrimp or fish are salted heavily and left to ferment in jars for weeks to months. The paste is then sauteed with garlic and sometimes sweetened. Used sparingly as a seasoning or dipping sauce.",
  "flavor": "Intensely salty, funky, and umami-rich with a powerful fermented punch.",
  "texture": "Thick, coarse paste.",
  "similar": [
   "Kimchi",
   "Stinky Tofu",
   "Sauerkraut"
  ],
  "variations": [
   "bagoong alamang, shrimp",
   "bagoong isda, fish",
   "sweet sauteed bagoong"
  ],
  "nutrition": {
   "serving": "1 tbsp (20 g)",
   "calories": 25,
   "protein": 3,
   "carbs": 2,
   "fat": 1,
   "note": "approximate"
  },
  "pronunciation": "bah-goh-ONG",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/BAEG_FLOWERS_USED_FOR_DINENGDENG_DISH_IN_PANGASINAN_WITH_BAGOONG.jpg/960px-BAEG_FLOWERS_USED_FOR_DINENGDENG_DISH_IN_PANGASINAN_WITH_BAGOONG.jpg"
 },
 "Dried Squid": {
  "history": "Dried squid is a traditional preserved seafood across East and Southeast Asia, made by sun-drying squid for storage. It is a beloved snack in Japan, Korea, China, and Hawaii, often shredded and chewed like jerky. Street vendors sell it grilled or plain.",
  "ingredients": [
   "squid",
   "salt",
   "sugar (seasoned versions)",
   "sesame oil"
  ],
  "preparation": "Fresh squid is cleaned, sometimes butterflied, and sun-dried or machine-dried. It is sold whole or shredded, and often toasted or grilled before eating. Seasoned versions are coated with sugar and salt.",
  "flavor": "Concentrated, sweet-savory, and intensely oceanic with a chewy umami depth.",
  "texture": "Tough and chewy like jerky; shredded versions are softer.",
  "similar": [
   "Salt and Pepper Squid",
   "Fried Calamari",
   "Krupuk (Shrimp Crackers)"
  ],
  "variations": [
   "shredded seasoned squid",
   "grilled whole dried squid",
   "spicy versions"
  ],
  "nutrition": {
   "serving": "1 pack (40 g)",
   "calories": 130,
   "protein": 24,
   "carbs": 6,
   "fat": 1,
   "note": "approximate"
  },
  "pronunciation": "dryd skwid",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Korean_cuisine-Banchan-07.jpg/960px-Korean_cuisine-Banchan-07.jpg"
 }
};
