//example all data type --->

// 1. string
const name = 'Hamim';
// 2. number
const age = 20;
// 3. boolean
const isMarried = false;
// 4. null
const car = null;
// 5. undefined
let test;

// 6. object
const person = {
  name: 'Hamim',
  age: 20,
  isMarried: false,
};
console.log(person);
console.log(person.name);

// 7. array
const favColors = ['black', 'green', 'blue', 'white'];
console.log(favColors[0]);

// 8. function
function add(a, b) {
  return a + b;
}
console.log(add(45, 85));

//9. for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
