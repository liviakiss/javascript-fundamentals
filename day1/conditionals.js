const age = 20;

// IF / ELSE IF / ELSE
if (age < 18) {
  console.log("You are a minor.");
} else if (age === 18) {
  console.log("You just turned 18!");
} else {
  console.log("You are an adult.");
}

// TERNARY OPERATOR
const isAdult = age >= 18 ? "adult" : "minor";
console.log(isAdult);

// SWITCH
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    condole.log("Weekend!");
    break;
  default:
    console.log("Regular day");
}
