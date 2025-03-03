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
