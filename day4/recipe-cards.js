const recipes = [
  {
    name: "Sushi",
    calories: 350,
    glutenFree: true,
    dairyFree: true,
    ingredients: ["rice", "fish", "seaweed"],
    author: null,
  },
  {
    name: "Pizza",
    calories: 800,
    glutenFree: false,
    dairyFree: false,
    ingredients: ["dough", "cheese", "tomato"],
    author: { name: "Chef Mario" },
  },
  {
    name: "Salad",
    calories: 150,
    glutenFree: true,
    dairyFree: true,
    ingredients: ["lettuce", "tomato", "cucumber"],
    author: { name: "Chef Anna" },
  },
];

const formatGluten = (recipe) => {
  const { name, glutenFree, calories } = recipe;
  return `${name} - ${calories} calories - Gluten free: ${glutenFree ? "✅" : "❌"}`;
};

const getGlutenFree = recipes.filter((recipe) => recipe.glutenFree);
getGlutenFree.map((recipe) => console.log(formatGluten(recipe)));

const getTotalCalories = recipes.reduce(
  (sum, recipe) => sum + recipe.calories,
  0,
);
console.log(getTotalCalories);

const formatRecipe = (recipe) => {
  const { name, calories, ingredients, author } = recipe;
  return `
    📋 ${name}
    Calories: ${calories}
    Ingredients: ${ingredients.join(", ")}
    Author: ${author?.name ?? "Unknown"}
    `;
};

const generateCards = (recipes) => {
  recipes.map((recipe) => console.log(formatRecipe(recipe)));
};
generateCards(recipes);
