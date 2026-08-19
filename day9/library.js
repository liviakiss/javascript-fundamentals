// PERSONAL LIBRARY - library.js

// 1. ELEMENTS
// Select all DOM elements at the top
const message = document.querySelector("#message");
const results = document.querySelector("#results");
const addBtn = document.querySelector("#add-btn");
const filterBtns = document.querySelectorAll(".filter-btn");

// 2. LOCALSTORAGE
// saveItems → converts array to string and saves
// getItems  → loads string and converts back to array
// || []     → returns empty array if nothing saved yet
function saveItems(items) {
  localStorage.setItem("items", JSON.stringify(items));
}

function getItems() {
  return JSON.parse(localStorage.getItem("items")) || [];
}

// 3. ADD ITEM
// Gets values from form, creates new item object,
// saves to localStorage, clears form, refreshes display
// Date.now() = unique ID based on current timestamp
function addItem() {
  const title = document.querySelector("#title-input").value;
  const type = document.querySelector("#type-input").value;
  const status = document.querySelector("#status-input").value;
  const rating = document.querySelector("#rating-input").value;
  const notes = document.querySelector("#notes-input").value;

  // validate - title is required
  if (!title) {
    message.textContent = "Please enter a title";
    return;
  }

  const newItem = {
    id: Date.now(),
    title,
    type,
    status,
    rating,
    notes,
  };

  const items = getItems();
  items.push(newItem);
  saveItems(items);

  // clear form
  document.querySelector("#title-input").value = "";
  document.querySelector("#notes-input").value = "";

  message.textContent = `${title} added to library!`;
  displayItems();
}

addBtn.addEventListener("click", addItem);

// 4. DISPLAY ITEMS
// itemsToShow → optional parameter for filtered items
// ?? getItems() → if no argument, show all items
// Creates a card for each item and appends to results
function displayItems(itemsToShow) {
  updateStats();
  const items = itemsToShow ?? getItems();
  results.innerHTML = "";

  if (items.length === 0) {
    message.textContent = "No items found!";
    return;
  }

  message.textContent = `Showing ${items.length} items`;

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <h3>${item.title}</h3>
            <p>Type: ${item.type}</p>
            <p>Status: ${item.status}</p>
            <p>Rating: ${"⭐".repeat(item.rating)}</p>
            <p>${item.notes ?? ""}</p>
            <div class="card-buttons">
                <button class="complete-btn">✅ Complete</button>
                <button class="delete-btn">🗑️ Delete</button>
            </div>
        `;
    results.appendChild(card);

    card
      .querySelector(".delete-btn")
      .addEventListener("click", () => deleteItem(item.id));
    card
      .querySelector(".complete-btn")
      .addEventListener("click", () => completeItem(item.id));
  });
}

// 5. DELETE ITEM
// filter() keeps everything EXCEPT matching id
// item.id !== id = "keep everything that is NOT this id"
function deleteItem(id) {
  const items = getItems();
  const updated = items.filter((item) => item.id !== id);
  saveItems(updated);
  displayItems();
}

// 6. COMPLETE ITEM
// find() gets the item with matching id
// Changes status to "completed" then saves
function completeItem(id) {
  const items = getItems();
  const item = items.find((item) => item.id === id);
  item.status = "completed";
  saveItems(items);
  displayItems();
}

// 7. STATS
// Counts total, completed and in progress items
// Updates the stat numbers in the HTML
function updateStats() {
  const items = getItems();
  const total = items.length;
  const completed = items.filter((item) => item.status === "completed").length;
  const inProgress = items.filter(
    (item) =>
      item.status === "reading" ||
      item.status === "watching" ||
      item.status === "playing",
  ).length;

  document.querySelector("#total-count").textContent = total;
  document.querySelector("#completed-count").textContent = completed;
  document.querySelector("#inprogress-count").textContent = inProgress;
}

// 8. FILTERS
// data-filter attribute on each button tells us
// what to filter by (all, book, anime, game, completed)
// classList.remove/add = toggle active button style
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    // update active button
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const items = getItems();

    if (filter === "all") {
      displayItems();
    } else if (filter === "completed") {
      displayItems(items.filter((item) => item.status === "completed"));
    } else {
      // filter by type (book, anime, game)
      displayItems(items.filter((item) => item.type === filter));
    }
  });
});

// 9. INIT
// Load and display items when page first opens
displayItems();
