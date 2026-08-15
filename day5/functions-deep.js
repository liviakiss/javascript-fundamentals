// Scope - where variables live
// Global Scope: accessible everywhere
const globalName = "Livia";

function greet() {
  // Local Scope: only accessible inside this function
  const localName = "Anna";
  console.log(globalName);
  console.log(localName);
}

greet();
console.log(globalName);
console.log(localName); // Error

// Block Scope
// let and const are block scoped
if (true) {
  let blockVar = "I'm inside";
  const blockConst = "Me too";
  console.log(blockVar); // works
}
console.log(blockVar); // Error, outside the block

// var is not block scoped
if (true) {
  var leaky = "I escape";
}
console.log(leaky); // works, but don't us it

///////////////////////////////////////////////////////////////////////////

// Higher Order Functions - a function that takes an another function as an argument or returns a function
function doTwice(fn) {
  fn();
  fn();
}

const sayHello = () => console.log("Hello!");
doTwice(sayHello);

///////////////////////////////////////////////////////////////////////////

// Callbacks - a function passed to another function to be called later
function greet(name, callback) {
  console.log(`Hello ${name}!`);
  callback(); // call the function that was passed in
}

const sayBye = () => console.log("Goodbye!");
greet("Livia", sayBye);

///////////////////////////////////////////////////////////////////////////

// Closures - a function that remembers variables from its outer scope
function makeCounter() {
  let count = 0; // this variable is "closed over"

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3
// count is remembered between calls


