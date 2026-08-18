const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const results = document.querySelector("#results");
const message = document.querySelector("#message");

btn.addEventListener("click", () => {
  btn.style.background = "green";
});

async function getRecipes(ingredient) {
  try {
    message.textContent = "Searching...";
    results.innerHTML = ""; // clear previous result

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const data = await response.json();

    if (!data.meals) {
      message.textContent = "No recipes found!";
      return;
    }
    message.textContent = `Found ${data.meals.length} recipes!`;

    data.meals.forEach((meal) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <div class="card-info">
                    <h3>${meal.strMeal}</h3>
                    <p>${meal.strCountry ?? "Unknown origin"}</p>
                </div>
            `;
      results.appendChild(card);
    });
  } catch (error) {
    message.textContent = "Something went wrong!";
    console.log("Error:", error.message);
  }
}

btn.addEventListener("click", () => {
  const ingredient = input.value;
  if (!ingredient) {
    message.textContent = "Please enter an ingredient!";
    return;
  }
  getRecipes(ingredient);
});
