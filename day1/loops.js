// FOR LOOP
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// WHILE LOOP
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// FOR...OF (like Python's for x in list)
const hobbies = ["yoga", "reading", "coding"];
for (const hobby of hobbies) {
  console.log(hobby);
}

// FOR...IN (for objects)
const person = {
  name: "Lívia",
  age: 25,
  city: "Heerlen",
};
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ARRAY forEach
hobbies.forEach((hobby) => {
  console.log(hobby);
});
