// map()- transform every item
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const prices = [10, 20, 30];
const withTax = prices.map((price) => price * 1.21);
console.log(withTax);

// filter()- keep only matching items
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

const food = ["pizza", "suchi", "pasta", "sashimi"];
const japaneseFood = food.filter(
  (food) => food === "sushi" || food === "sashimi",
);
console.log(japaneseFood);

// reduce()- combine everything into one value
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);

const prices = [10, 20, 30, 40];
const totalPrice = prices.reduce((sum, price) => sum + price, 0);
console.log(totalPrice);

// find()- get FIRST matching item
const users = [
  { name: "Livia", age: 25 },
  { name: "John", age: 30 },
  { name: "Kate", age: 28 },
];
const user = users.find((user) => user.age === 25);
console.log(user);

// combine methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((sum, num) => sum + num, 0);

console.log(result);

// practice
const recipes = [
  { name: "Pizza", calories: 800, hasGluten: true },
  { name: "Sushi", calories: 350, hasGluten: false },
  { name: "Pasta", calories: 600, hasGluten: true },
  { name: "Salad", calories: 150, hasGluten: false },
];

const withoutGluten = recipes
    .filter(recipe => !recipe.hasGluten)
    .map(recipe => recipe.name);
console.log(withoutGluten);
