const BEST = [
  { name: "Vori Vori", origin: "Paraguay", emoji: "🍲", tag: "TasteAtlas #1 dish 2025/26",
    why: "Voted the single best dish in the world for 2025 and 2026 by TasteAtlas. Golden cornmeal-and-cheese dumplings float in a rich chicken broth — a direct line to Guaraní tradition, where the name comes from 'borita,' meaning little ball. It is humble farming food elevated to perfection: velvety, warming, and eaten as restorative family fare in colder months." },
  { name: "Pizza (Margherita)", origin: "Naples, Italy", emoji: "🍕", tag: "UNESCO heritage icon",
    why: "The Margherita was born in Naples in 1889 and its craft, the art of the Neapolitan pizzaiolo, is on UNESCO's intangible heritage list. San Marzano tomatoes, fior di latte, basil, and a blistered wood-fired crust are a formula so perfect it conquered every country on Earth — the most universally loved dish ever created." },
  { name: "Sushi", origin: "Japan", emoji: "🍣", tag: "Centuries of mastery",
    why: "Born from a Southeast Asian fish-preservation method and refined over centuries into edible art. Japanese washoku cuisine holds UNESCO heritage status, and sushi is its crown jewel: vinegared rice, pristine fish, and knife work that takes a decade to master. It turned raw fish — once unthinkable to many Westerners — into the ultimate luxury." },
  { name: "Cağ Kebabı", origin: "Erzurum, Turkey", emoji: "🍖", tag: "TasteAtlas #5 dish 2025/26",
    why: "Ranked the 5th best dish in the world for 2025/26. Marinated lamb or veal is stacked with lamb tail fat and roasted horizontally over open wood fire in the high-altitude districts of Oltu and Tortum. Sheep raised on wild mountain herbs flavor the meat naturally — a regional technique so specific it cannot be imitated elsewhere." },
  { name: "Tacos al Pastor", origin: "Mexico", emoji: "🌮", tag: "UNESCO heritage cuisine",
    why: "Traditional Mexican cuisine is UNESCO heritage, and tacos al pastor show why: Lebanese immigrants brought the vertical spit to Mexico, and locals reinvented it with marinated pork, pineapple, onion, and cilantro. It is a whole migration story you can hold in one hand — the perfect street food." },
  { name: "Phanaeng Curry", origin: "Thailand", emoji: "🍛", tag: "TasteAtlas #2 best stew",
    why: "Ranked the 2nd best stew in the world by TasteAtlas. A thick, rich red curry simmered with coconut cream, peanuts, and makrut lime — drier and more intense than other Thai curries. Every spoonful balances sweet, salty, and heat in a way few dishes on Earth manage." },
  { name: "Murgh Makhani (Butter Chicken)", origin: "India", emoji: "🍗", tag: "TasteAtlas #4 best stew",
    why: "Invented in 1950s Delhi at Moti Mahal, this is the dish that introduced Indian cuisine to the world. Tandoor-charred chicken folded into a silky tomato-butter-fenugreek sauce — ranked the 4th best stew globally by TasteAtlas. Its creamy, mildly spiced profile made it the gateway curry for millions." },
  { name: "Rendang", origin: "Indonesia", emoji: "🥘", tag: "CNN's #1 dish in the world",
    why: "Topped CNN's reader poll of the world's 50 best foods — twice. Beef slow-braised for hours in coconut milk and a dozen spices until the liquid caramelizes into a dark, intensely flavored coating. Minangkabau cooks say true rendang takes half a day; the result is arguably the deepest flavor in all of cooking." },
  { name: "Massaman Curry", origin: "Thailand", emoji: "🍜", tag: "CNN's most delicious 2017",
    why: "Crowned the most delicious food on the planet in CNN's 2017 reader vote. A Persian-influenced Thai curry of braised beef, potatoes, peanuts, and dried spices — sweet, sour, and warmly spiced all at once. It is the dish chefs most often call the best curry in the world." },
  { name: "Ramen", origin: "Japan", emoji: "🍥", tag: "Broth science",
    why: "A bowl built on broths simmered 12–18 hours, alkaline noodles with perfect chew, and tare seasoning calibrated to the gram. From tonkotsu to shoyu to miso, ramen turned a Chinese noodle import into a Japanese obsession with entire museums dedicated to it. Comfort food with a PhD." },
  { name: "Pho", origin: "Vietnam", emoji: "🥣", tag: "Aromatic masterpiece",
    why: "A crystal-clear broth perfumed with charred ginger, star anise, and cinnamon, simmered for hours until it tastes like pure essence of beef. Topped with herbs, lime, and chili at the table, pho is Vietnam's gift to the world — and consistently ranked among the best soups ever made." },
  { name: "Biryani", origin: "India", emoji: "🍚", tag: "Royal Mughal legacy",
    why: "Born in the royal kitchens of the Mughals, biryani layers fragrant basmati with saffron, fried onions, and marinated meat, then steams it sealed (dum style) so every grain absorbs the aroma. Hyderabad alone has entire neighborhoods devoted to it — a celebration dish that never left the throne." },
  { name: "Paella", origin: "Valencia, Spain", emoji: "🥘", tag: "The socarrat factor",
    why: "Farmers' rice from Valencia's Albufera lagoon, cooked wide and shallow so the bottom caramelizes into the prized crispy socarrat. Saffron, rabbit, chicken, and beans in the authentic version — paella is a whole landscape served in a pan, and the communal ritual around it is half the flavor." },
  { name: "Croissant", origin: "France", emoji: "🥐", tag: "81 layers of butter",
    why: "A proper croissant is laminated over three days: butter folded into dough again and again until it shatters into dozens of honeycomb layers. The French take it so seriously there are national competitions for it. Flaky, golden, and gone in ninety seconds — pastry engineering at its peak." },
  { name: "Gelato", origin: "Italy", emoji: "🍨", tag: "Denser than ice cream",
    why: "Churned slower and served warmer than ice cream, gelato packs more flavor per spoonful with less fat. Sicilian pistachio and stracciatella are the benchmarks — made fresh daily in thousands of gelaterie. Italy turned frozen dessert into a daily ritual the whole world copied." },
];

const WORST = [
  { name: "Pizza Vulkanen", origin: "Piteå, Sweden", emoji: "🌋", tag: "TasteAtlas worst food #1 (1.6/5)",
    why: "Rated the worst food on Earth (1.6/5) by TasteAtlas's 2026 ranking. Invented by chef Halmat Givra, it is a ring-shaped pizza stuffed with cheese, ham, salami, bacon, and beef tenderloin — with french fries and Béarnaise salad erupting from the center like a volcano. Maximum chaos, minimum restraint; voters found it grotesque rather than fun." },
  { name: "Svið", origin: "Iceland", emoji: "🐑", tag: "TasteAtlas #2 (1.7/5)",
    why: "A singed, halved sheep's head — cooked with the face staring back at you. Born from a time when no part of the animal could be wasted, it is served at the midwinter Þorrablót festival with mashed turnips. Locals insist it is tasty, but most voters could not get past literally looking their dinner in the eye." },
  { name: "Thorramatur", origin: "Iceland", emoji: "🦈", tag: "TasteAtlas #3 (1.8/5)",
    why: "A full buffet platter of Iceland's most challenging foods: fermented shark, blood sausages, seared lamb head, smoked lamb, and soured everything, eaten during the month of Þorri. It is less a dish than a survival gauntlet of preservation-era flavors — and voters punished it accordingly." },
  { name: "Truchas a la Navarra", origin: "Navarre, Spain", emoji: "🐟", tag: "TasteAtlas #4",
    why: "Trout stuffed with ham sounds reasonable until the execution: river fish wrapped around cured pork creates a muddy, confused flavor that satisfies neither craving. TasteAtlas voters ranked it the 4th worst food in the world — proof that two good things do not always make one." },
  { name: "Blodpalt", origin: "Norrland, Sweden", emoji: "🩸", tag: "TasteAtlas #5",
    why: "Dumplings made with reindeer blood, barley flour, and diced pork, boiled and served with lingonberries. A historic survival food of the far north, but the metallic, iron-heavy flavor and dark appearance make it a hard sell for anyone who did not grow up with it." },
  { name: "Kugel Yerushalmi", origin: "Jerusalem, Israel", emoji: "🍝", tag: "TasteAtlas #6",
    why: "A baked noodle pudding that is simultaneously sweet (caramelized sugar) and aggressively peppery — a combination most palates read as a mistake. Beloved in Jerusalem's ultra-Orthodox community as Sabbath food, but outsiders consistently rate it as one of the most confusing things they have ever tasted." },
  { name: "Blodplättar", origin: "Sweden", emoji: "🥞", tag: "Blood pancakes",
    why: "Pancakes made with pig or reindeer blood, onions, and spices, fried and served with lingonberry jam. Once everyday food across the Nordics, the iron-rich metallic taste now reads as shocking to modern eaters — TasteAtlas voters keep blood dishes near the very bottom year after year." },
  { name: "Milcao", origin: "Chiloé, Chile", emoji: "🥔", tag: "TasteAtlas #8",
    why: "A dense potato bread from Chile's Chiloé archipelago, made from grated raw and cooked potatoes fried into heavy cakes. It is filling peasant fuel, but its gluey, leaden texture and blandness leave first-timers wondering what the point was." },
  { name: "Hon Mhai (Fried Silkworms)", origin: "Thailand", emoji: "🐛", tag: "TasteAtlas #9",
    why: "Silkworm pupae deep-fried with salt and pepper — a protein-rich Isaan snack. The problem is the pop: a soft, pulpy interior that bursts in the mouth. Even adventurous eaters who love crispy insects often draw the line at the texture of these." },
  { name: "Chapalele", origin: "Chiloé, Chile", emoji: "🍞", tag: "TasteAtlas #10",
    why: "Another Chiloé staple: boiled dumplings of potato and wheat flour, sometimes sweetened. Soft, pale, and starchy to the point of vanishing — voters found it the definition of forgettable, a dish that tastes like the absence of flavor." },
  { name: "Jellied Eels", origin: "London, England", emoji: "🐍", tag: "Since the 1700s",
    why: "Chopped eels boiled in spiced stock that sets into a natural jelly — a working-class London street food since the 1700s. The flavor is mild; the texture of cold, wobbling fish jelly is what ends careers. Even most Londoners under 50 have never willingly eaten it." },
  { name: "Ambuyat", origin: "Brunei", emoji: "🫠", tag: "Glue-like texture",
    why: "Sago palm starch stirred with boiling water into a translucent, glue-like blob, eaten with a bamboo fork called chandas. It has almost no flavor of its own — the entire experience is texture, and the texture is wallpaper paste. Brunei's national dish is a dare disguised as dinner." },
  { name: "Surströmming", origin: "Sweden", emoji: "🐟", tag: "Smell hazard",
    why: "Fermented Baltic herring canned while still fermenting, so the tin bulges and sprays when opened — always opened outdoors, by law of common sense. Studies have ranked it among the smelliest foods on the planet. The taste is milder than the smell, but nobody gets past the smell." },
  { name: "Hákarl", origin: "Iceland", emoji: "🦈", tag: "Ammonia cubes",
    why: "Greenland shark is poisonous when fresh, so Icelanders ferment it for months and hang it to dry — producing cubes that smell strongly of ammonia. Anthony Bourdain called it the single worst thing he ever ate. It is less a food than a Viking-era chemistry solution that never got repealed." },
  { name: "Ramen Burger", origin: "New York City, USA", emoji: "🍔", tag: "TasteAtlas #15",
    why: "A 2013 Brooklyn invention: a beef patty sandwiched between two 'buns' of fried ramen noodles. The gimmick broke the internet for a week, but the reality is a greasy, falling-apart mess that is worse than both a burger and a bowl of ramen. Novelty is not flavor." },
];

function medal(i) {
  return i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}`;
}

function render(list, gridId, kind) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = "";
  list.forEach((f, i) => {
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
}

render(BEST, "bestGrid", "best");
render(WORST, "worstGrid", "worst");

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".board").forEach(b => b.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
