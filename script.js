const BEST = [
  { name: "Pizza", origin: "Italy", emoji: "🍕", score: 98, tag: "Crowd favorite",
    desc: "The undisputed heavyweight champion. Crispy crust, molten cheese, endless toppings — there is no argument that survives a fresh slice." },
  { name: "Sushi", origin: "Japan", emoji: "🍣", score: 96, tag: "Art on a plate",
    desc: "Centuries of craft in one bite. Fresh fish, seasoned rice, and a precision that turns dinner into a ceremony." },
  { name: "Tacos", origin: "Mexico", emoji: "🌮", score: 95, tag: "Perfect format",
    desc: "The ideal food delivery system: warm tortilla, anything delicious inside. Street food perfected over generations." },
  { name: "Ramen", origin: "Japan", emoji: "🍜", score: 93, tag: "Comfort king",
    desc: "A steaming bowl of soul-healing broth, springy noodles, and toppings that never miss. Science's best answer to a bad day." },
  { name: "Chocolate Cake", origin: "Worldwide", emoji: "🍫", score: 92, tag: "Pure joy",
    desc: "Rich, dark, decadent. The one dessert that ends debates — nobody has ever been sad holding a fork and chocolate cake." },
  { name: "Croissant", origin: "France", emoji: "🥐", score: 90, tag: "Flaky perfection",
    desc: "Eighty-one layers of buttery engineering. Shattering, golden, and worth every crumb on your shirt." },
  { name: "Butter Chicken", origin: "India", emoji: "🍛", score: 89, tag: "Curry royalty",
    desc: "Silky tomato-butter sauce, charred chicken, warm spices. Served with naan it becomes a religious experience." },
  { name: "Burger", origin: "USA", emoji: "🍔", score: 88, tag: "Icon",
    desc: "The great unifier. Juicy patty, melted cheese, crisp veg, soft bun — engineered for maximum happiness per bite." },
  { name: "Pho", origin: "Vietnam", emoji: "🍲", score: 87, tag: "Broth legend",
    desc: "A clear, fragrant broth simmered for hours, silky noodles, fresh herbs. Proof that soup can be a masterpiece." },
  { name: "Gelato", origin: "Italy", emoji: "🍨", score: 86, tag: "Sweet finish",
    desc: "Denser, silkier, and more intense than ice cream. Pistachio alone justifies the entire concept of dessert." },
];

const WORST = [
  { name: "Surströmming", origin: "Sweden", emoji: "🐟", score: 5, tag: "Smell hazard",
    desc: "Fermented herring opened outdoors — for reasons you will understand within seconds. Famously one of the smelliest foods on Earth." },
  { name: "Hákarl", origin: "Iceland", emoji: "🦈", score: 8, tag: "Acquired taste",
    desc: "Fermented Greenland shark, buried for months. Ammonia-rich and chewy. Gordon Ramsay once spat it out on camera." },
  { name: "Balut", origin: "Philippines", emoji: "🥚", score: 12, tag: "Fear factor",
    desc: "A fertilized duck egg, boiled and eaten whole. Beloved locally, but the texture surprise ruins most first-timers." },
  { name: "Casu Marzu", origin: "Sardinia, Italy", emoji: "🧀", score: 15, tag: "Legally banned",
    desc: "Cheese containing live insect larvae. Yes, live. Banned in the EU. The larvae can jump up to 15 cm when disturbed." },
  { name: "Natto", origin: "Japan", emoji: "🫘", score: 22, tag: "Stringy situation",
    desc: "Fermented soybeans in slimy, sticky strings with a pungent aroma. Nutritional powerhouse; textural nightmare for newcomers." },
  { name: "Vegemite (straight)", origin: "Australia", emoji: "🫙", score: 28, tag: "Misused icon",
    desc: "Eaten by the spoonful it is a salt bomb of despair. On buttered toast in a whisper-thin layer, it is actually great." },
  { name: "Fruitcake", origin: "Worldwide", emoji: "🍰", score: 33, tag: "Holiday joke",
    desc: "Dense, boozy, and seemingly immortal — the same fruitcake has allegedly been regifted since 1978." },
  { name: "Lutefisk", origin: "Norway", emoji: "🐠", score: 35, tag: "Jelly fish",
    desc: "Cod soaked in lye until it turns gelatinous. A traditional dish that tastes like a chemistry experiment gone festive." },
  { name: "Overcooked Brussels Sprouts", origin: "Everywhere", emoji: "🥬", score: 40, tag: "Childhood trauma",
    desc: "Boiled into sulfurous mush, they ruined a generation. Roasted crispy with bacon, they are innocent — the boiling was the crime." },
  { name: "Canned Tuna in Water (plain)", origin: "Everywhere", emoji: "🥫", score: 45, tag: "Sad desk lunch",
    desc: "Eaten straight from the can with a plastic fork at 12:04 pm. Technically food. Emotionally, a cry for help." },
];

function medal(i) {
  return i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}`;
}

function render(list, gridId, kind) {
  const grid = document.getElementById(gridId);
  list.forEach((f, i) => {
    const card = document.createElement("article");
    card.className = `card ${kind}` + (i < 3 ? " top3" : "");
    card.innerHTML = `
      <div class="rank">${medal(i)}</div>
      <div class="emoji">${f.emoji}</div>
      <h3>${f.name}</h3>
      <div class="origin">${f.origin}</div>
      <p class="desc">${f.desc}</p>
      <span class="tag">${f.tag}</span>
      <div class="score">${kind === "best" ? "Deliciousness" : "Edibility"}: ${f.score}/100</div>
      <div class="score-bar"><div style="width:${f.score}%"></div></div>`;
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
  });
});
