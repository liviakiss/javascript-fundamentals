// ASYNC JAVASCRIPT - Learning Notes
// 1. WHY WE NEED ASYNC
// JavaScript doesn't wait — it keeps running
// ============================================

console.log("1. Start");

setTimeout(() => {
  console.log("2. This runs after 2 seconds");
}, 2000);

console.log("3. End - prints before setTimeout!");

///////////////////////////////////////////////////////////////////////////

// 2. PROMISES
// A promise = "I'll give you data eventually"
// resolve = success
// reject  = failure
// ============================================

function makePromise(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data received!");
      } else {
        reject("Failed!");
      }
    }, 1000);
  });
}

// Way 1: .then() and .catch()
makePromise(true)
  .then((data) => console.log(".then() got:", data))
  .catch((error) => console.log(".catch() got:", error));

// Way 2: async/await (cleaner, preferred)
async function getDataWithAwait() {
  try {
    const data = await makePromise(true);
    console.log("await got:", data);
  } catch (error) {
    console.log("catch got:", error);
  }
}
getDataWithAwait();

///////////////////////////////////////////////////////////////////////////
// 3. TRY / CATCH / FINALLY
// try     = attempt this
// catch   = if it fails, do this
// finally = always runs no matter what
// ============================================

async function tryCatchExample() {
  try {
    const data = await makePromise(false); // will fail!
    console.log(data);
  } catch (error) {
    console.log("Caught error:", error);
  } finally {
    console.log("This always runs!");
  }
}
tryCatchExample();

///////////////////////////////////////////////////////////////////////////
// 4. FETCH - get real data from the internet
// Step 1: fetch(url)      → get response
// Step 2: response.json() → convert to usable data
// Step 3: use the data!
// ============================================

// Single user
async function getUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0]; // [0] = first item in array

    console.log(`Name: ${user.name.first} ${user.name.last}`);
    console.log(`Email: ${user.email}`);
    console.log(`Country: ${user.location.country}`);
  } catch (error) {
    console.log("Error:", error.message);
  }
}
getUser();

// Multiple users
async function getMultipleUsers() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=3");
    const data = await response.json();

    data.results.forEach((user) => {
      console.log(`${user.name.first} ${user.name.last}`);
    });
  } catch (error) {
    console.log("Error:", error.message);
  }
}
getMultipleUsers();

///////////////////////////////////////////////////////////////////////////
// 5. REAL PROJECT EXAMPLE - Recipe Search
// Search recipes by ingredient using API
// ============================================

async function searchRecipes(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const data = await response.json();

    // data.meals = array of meal objects
    // each meal has: strMeal, strCountry, strMealThumb, idMeal
    data.meals.forEach((meal) => {
      console.log(`${meal.strMeal} from ${meal.strCountry}`);
    });
  } catch (error) {
    console.log("Error:", error.message);
  }
}

searchRecipes("salmon");
