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

//const var let --> defference

// var --> global scope,re-declare and function scope and old ,, use not recommended
var x = 78;
var x = 89;
// let --> block scope and value chage possible but re-declare not possible
let y = 78;
y = 89;
// const --> block scope and value not change possible and re-declare not possible
const z = 78;
// z = 89; // not possible

//10. conditional statement
let a = 190;
let b = 240;
if (a > b) {
  console.log('a is greater than b');
} else {
  console.log('b is greater than a');
}

//conditional statement with object value check
if (person.isMarried) {
  console.log('person is married');
} else {
  console.log('person is not married');
}

if (person.age >= 18) {
  console.log('person is eligible to vote');
} else {
  console.log('person is not eligible to vote');
}

//11. switch statement
switch (person.age) {
  case 18:
    console.log('person is 18 years old');
    break;
  case 20:
    console.log('person is 20 years old');
    break;
  default:
    console.log('person is not 18 or 20 years old');
    break;
}

//12. ternary operator
person.age >= 18
  ? console.log('person is eligible to vote')
  : console.log('person is not eligible to vote');

//13. typeof operator
console.log(typeof person);

//14.filter method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(evenNumbers, oddNumbers);

//15. map method
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = numbers1.map((number) => number * number);
console.log(squaredNumbers);

//16. deffrance == and ===
const a1 = 10;
const b1 = '10';

//== check only value
console.log(a1 == b1); //true
//=== check value and type
console.log(a1 === b1); //false

//17. template literal
const name1 = 'Hamim';
const age1 = 20;
console.log(`My name is ${name1} and I am ${age1} years old`);

//18. rest operator
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...rest] = numbers2;
console.log(first, second, rest);
