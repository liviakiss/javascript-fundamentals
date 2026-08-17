// DOM MANIPULATION - Learning Notes
// ============================================

// 1. SELECTING ELEMENTS
// querySelector  → selects ONE element
// querySelectorAll → selects ALL matching elements
// Selectors work like CSS:
//   #id    → select by ID
//   .class → select by class
//   div    → select by element type
// ============================================

const titleEl = document.querySelector("#title"); // by ID
const texts = document.querySelectorAll(".text"); // by class (all)
const btn = document.querySelector("#btn"); // by ID
const input = document.querySelector("#input"); // by ID
const list = document.querySelector("#list"); // by ID

console.log("JavaScript connected!");

// 2. CHANGING CONTENT AND STYLES
// textContent → change the text inside element
// style.x     → change CSS property
// ============================================

// change text
titleEl.textContent = "I changed this with JavaScript!";

// change styles
titleEl.style.color = "red";
titleEl.style.fontSize = "50px";

// style the button
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.style.padding = "10px 20px";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";

// 3. EVENT LISTENERS
// addEventListener(event, callback)
// Common events:
//   "click"     → mouse click
//   "mouseover" → mouse hover
//   "keydown"   → keyboard press
//   "submit"    → form submit
//   "input"     → typing in input field
// ============================================

// click event - change title when button clicked
btn.addEventListener("click", () => {
  titleEl.textContent = "Button was clicked!";
  titleEl.style.color = "green";
});

// input event - update title as user types
input.addEventListener("input", () => {
  titleEl.textContent = input.value;
});

// 4. CREATING AND REMOVING ELEMENTS
// createElement() → creates a new HTML element
// appendChild()   → adds element to the page
// remove()        → removes element from page
// input.value     → gets what user typed
// ============================================

btn.addEventListener("click", () => {
  // only add if input is not empty
  if (input.value === "") return;

  // create new list item
  const newItem = document.createElement("li");
  newItem.textContent = input.value;
  newItem.style.cursor = "pointer";

  // click item to delete it
  newItem.addEventListener("click", () => {
    newItem.remove();
  });

  // add to list
  list.appendChild(newItem);

  // clear input
  input.value = "";
});
