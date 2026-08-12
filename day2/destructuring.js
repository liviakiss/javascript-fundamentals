const person = {
  name: "Livia",
  age: 25,
  city: "New York",
};

// Old way
const name1 = person.name;
const age1 = person.age;

// Destructuring way
const { name, age, city } = person;
console.log(name);
console.log(age);

// Rename while destructuring
const { name: fullName, age: years } = person;
console.log(fullName);
console.log(years);

// Default values
const { name: n, country = "USA" } = person;
console.log(country);

// Array destructuring
const hobbies = ["yoga", "reading", "coding"];
const [first, second, third] = hobbies;
console.log(first);
console.log(second);

// Skip items
const [, , last] = hobbies;
console.log(last);

// destructuring in functions
function greet({ name, age }) {
  return `Hi ${name}, you are ${age}!`;
}
console.log(greet(person));
