// Array: it is defined as collection of similar datatypes
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50];
// lets separate odd number and even numbers
// using for loop
let oddNumber = [];
let evenNumber = [];

for (let i = 0; i < number.length; i++) {
  let element = number[i];
  if (element % 2 == 0) {
    evenNumber.push(number[i]);
  } else {
    oddNumber.push(number[i]);
  }
}
console.log("this is odd numbers", oddNumber);
console.log("this is even numbers", evenNumber);

// let name=["sanjay", "bijaya", 1, 2, 4] //wrong array
let a = "binod";
let f = 1;
let fullMoon = true;
let student = { name: "sanjay", age: 20, roll: 1 }; //object
let student2 = ["sanjay", "jhon", "ram", "shyam"]; //array

console.log("type of fullmoon : ", typeof fullMoon);
console.log("type of f : ", typeof f);
console.log("type of sutdent is: ", typeof student);

let c = 2.5;
