// make a login attempt tracker
function makeLoginTracker(maxAttempts) {
  let attempts = 0;

  return function (password) {
    if (attempts >= maxAttempts) {
      console.log("Already locked!");
      return;
    }
    if (password !== "correctpass") {
      attempts++;
      const left = maxAttempts - attempts;
      if (attempts >= maxAttempts) {
        console.log("Already locked!");
      } else {
        console.log(`Wrong! ${left} attempts left`);
      }
    } else {
      console.log("Correct password!");
    }
  };
}

const tracker = makeLoginTracker(3);
tracker("wrongpassword");
tracker("wrongpassword");
tracker("wrongpassword");
tracker("correctpass");

// make calorie filter
function makeCalorieFilter(maxCalories) {
  return (recipe) => {
    return recipe.calories < maxCalories;
  };
}

const under400 = makeCalorieFilter(400);
const under600 = makeCalorieFilter(600);

const recipes = [
  { name: "Sushi", calories: 350 },
  { name: "Pizza", calories: 800 },
  { name: "Salad", calories: 150 },
];

console.log(recipes.filter(under400).map((r) => r.name));
console.log(recipes.filter(under600).map((r) => r.name));
