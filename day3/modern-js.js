// Review
// Arrow functions
const greet = (name) => `Hello ${name}!`;

// Template literals
const name = "Livia";
console.log(`My name is ${name}`);

// Default parameters
const greet2 = (name = "stranger") => `Hello ${name}!`;
console.log(greet2());

///////////////////////////////////////////////////////////////////////////

// Optional chaining ?.
const user = {
  name: "Livia",
  address: {
    city: "New York",
    country: "USA",
  },
};
console.log(user.address.city); // New York
console.log(user.address?.city); // New York
console.log(user.phone.number); // error
console.log(user.phone?.number); // undefined

//----------------------------------------------------------------
const recipe = {
  name: "Sushi",
  author: {
    name: "Chef Tanaka",
    social: {
      instagram: "@tanaka",
    },
  },
};
console.log(recipe.author?.social?.instagram); // @tanaka
console.log(recipe.author?.email?.address); // undefined

// Nullish coalescing operator ??
const user = {
  name: "Livia",
  age: null,
  score: 0,
};
console.log(user.name ?? "Anonymous"); // Livia
console.log(user.age ?? "Unknown"); // Unknown (age is null)
console.log(user.score ?? "No score"); // 0 (0 is not null!)
console.log(user.email ?? "No email"); // "No email" (undefined)

// ?? vs ||
console.log(score || "No score"); // "No score" (|| treats 0 as falsy!)
console.log(score ?? "No score"); // 0 (?? only triggers on null/undefined)

// Combining ?. and ?? (Safe access + fallback)
const user = {
  name: "Livia",
  settings: null,
};
const theme = user.settings?.theme ?? "dark";
console.log(theme); // "dark" (settings is null)

//----------------------------------------------------------------
const recipe = {
  name: "Sushi",
  nutrition: {
    calories: 350,
    protein: 20,
  },
};

// Safe access to nested properties
const calories = recipe.nutrition?.calories ?? "Unknown";
const fiber = recipe.nutrition?.fiber ?? "Not listed";
const allergens = recipe.allergens?.gluten ?? false;

console.log(calories); // 350
console.log(fiber); // "Not listed"
console.log(allergens); // false
