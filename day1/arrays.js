const hobbies = ["yoga", "reading", "coding"];

// Access by index
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

// Length
console.log(hobbies.length);

// Add to end
hobbies.push("gaming");
console.log(hobbies);

// Remove from end
hobbies.pop();
console.log(hobbies);

// Add to start
hobbies.unshift("swimming");
console.log(hobbies);

// Remove from start
hobbies.shift();
console.log(hobbies);
// Find index of item
console.log(hobbies.indexOf("reading"));

// Check if item exists
console.log(hobbies.includes("yoga"));
console.log(hobbies.includes("gaming"));

// Slice
console.log(hobbies.slice(0, 2));
