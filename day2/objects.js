const person = {
  name: "Livia",
  age: 25,
  city: "New York",
};

// Object.keys()- get all the keys
console.log(Object.keys(person));

// Object.values()- get all the values
console.log(Object.values(person));

// Object.entries()- get key-value pairs
console.log(Object.entries(person));

// Looping with Object.entries()
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// Check if key exists
console.log("name" in person);
console.log("email" in person);

// Add new property
person.email = "livia@email.com";
console.log(person);

// Delete property
delete person.email;
console.log(person);

// Spread operator- copy and object
const personCopy = { ...person };
personCopy.name = "Anna";
console.log(person.name);
console.log(personCopy.name);

// Merge two objects
const job = { title: "Developer", company: "IT Solutions" };
const fullProfile = { ...person, ...job };
console.log(fullProfile);
