let students = [
  { name: "John", age: 20, grade: 90 },
  { name: "Jane", age: 21, grade: 85 },
  { name: "Bob", age: 19, grade: 95 },
  { name: "Alice", age: 20, grade: 80 },
];
const studentsName = students.map((e) => e.name);
console.log(studentsName);

// average age

let cartItems = [
  { name: "Apple", price: 100, quantity: 2 }, //value of acc is zero
  { name: "Banana", price: 100, quantity: 3 }, // value of acc is 200
  { name: "Orange", price: 100, quantity: 1 }, // value of acc is 500
  { name: "Grapes", price: 100, quantity: 2 }, // value of acc is 600
  { name: "Grapes", price: 100, quantity: 2 },
  { name: "Grapes", price: 100, quantity: 2 },
  { name: "Grapes", price: 100, quantity: 2 },
];
const total = cartItems
  .slice(0, 3)
  .reduce((acc, xyz) => acc + xyz.price * xyz.quantity, 0);
console.log("total price is : Rs. ", total);

// Math.ceil
let num = 3.7;
console.log(Math.ceil(num));

// math.random
let num1 = Math.random();
console.log(num);

// math.floor
let num2 = 3.7;
console.log(Math.floor(num2));

//assignment
let courses = [
  { name: "javascript", completeStatus: true, schoolaship: true },
  { name: "python", completeStatus: false, schoolaship: false },
  { name: "java", completeStatus: true, schoolaship: false },
  { name: "c++", completeStatus: false, schoolaship: true },
  { name: "MERN", completeStatus: false, schoolaship: true },
];

let countries = [
  {
    name: "Nepal",
    code: "NP",
  },
  {
    name: "India",
    code: "IN",
  },
  {
    name: "Australia",
    code: "AU",
  },
  {
    name: "America",
    code: "US",
  },
  {
    name: "Japan",
    code: "JP",
  },
];

function findCountryCode(countryName) {
  for (let index = 0; index < countries.length; index++) {
    const element = countries[index];

    if (element.name.toLocaleLowerCase() === countryName) {
      return element.code;
    }
  }
}
console.log(findCountryCode("India"));

// function sum(a, b) {
//   return a * b;
// }
// let total1 = sum(5, 10);
// console.log(total1);
