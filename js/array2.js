let student3 = [
  { name: "sanjay", age: 20, roll: 1 },
  { name: "jhon", age: 20, roll: 2 },
  { name: "ram", age: 20, roll: 3 },
  { name: "shyam", age: 20, roll: 4 },
];

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50];
let oddNumber = [];
let evenNumber = [];
//using for loop
// for (let i = 0; i < number.length; i++) {
//   let element = number[i];
//   if (element % 2 == 0) {
//     evenNumber.push(number[i]);
//   } else {
//     oddNumber.push(number[i]);
//   }
// }
// console.log("this is odd numbers", oddNumber);
// console.log("this is even numbers", evenNumber);

// separate using foreach
// number.forEach((e) => {
//   if (e % 2 == 0) {
//     evenNumber.push(e);
//   } else {
//     oddNumber.push(e);
//   }
// });

// console.log("this is odd numbers", oddNumber);
// console.log("this is even numbers", evenNumber);

// using Map
let evenNumberMap = number.map((e) => {
  if (e % 2 == 0) {
    evenNumber.push(e);
  } else {
    oddNumber.push(e);
  }
});
console.log("this is odd numbers", oddNumber);
console.log("this is even numbers", evenNumber);
