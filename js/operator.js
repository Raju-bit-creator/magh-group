// operator
// 1. arithmetic operator
// 2. comparison operator
// 3. logical operator
// 4. assignment operator

let scorchinSun = false;
let rain = false;
let cloudyDay = true;

// if (scorchinSun) {
//   console.log("take umbrella");
// } else {
//   console.log("no need to take umbrella");
// }

// if (!scorchinSun) {
//   console.log("take umbrella");
// } else {
//   console.log("no need to take umbrella");
// }
if (scorchinSun || rain) {
  console.log("take umbrella");
} else {
  console.log("no need to take umbrella");
}

if (!scorchinSun && !rain) {
  console.log("take umbrella");
} else {
  console.log("no need to take umbrella");
}

let a = 5;
let b = 10;
let name2 = "5"; //string
let name1 = 5; //number

if (name1 == name2) {
  console.log("they are same:", typeof name2);
} else {
  console.log("they are different");
}
if (name1 === name2) {
  // tripple equal to is strict in type checking
  console.log("they are same:", typeof name2);
} else {
  console.log("they are different");
}

// ternary operator (shortcut of if/else)
let age = 19;
// if (age < 18) {
//   console.log("you cannot vote");
// } else {
//   console.log("you can vote");
// }
const canVote = age < 18 ? "you cannot vote" : "you can vote";
console.log(canVote);
