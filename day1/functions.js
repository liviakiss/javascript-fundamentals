// BASIC FUNCTION
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Livia"));

// FUNCTION WITH MULTIPLE PARAMETERS
function add(a, b) {
  return a + b;
}
console.log(add(7, 8));

// DEFAULT PARAMETERS
function greetWithDefault(name = "stranger") {
  return `Hello, ${name}!`;
}
console.log(greetWithDefault());
console.log(greetWithDefault("Livia"));

// ARROW FUNCTIONS
const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); // 12

// ARROW FUNCTION with body
const divide = (a, b) => {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
};
console.log(divide(10, 2));
console.log(divide(10, 0));

// FUNCTION INSIDE FUNCTION
function calculate(a, b) {
  const double = (n) => n * 2;
  return double(a) + double(b);
}
console.log(calculate(6, 9));
