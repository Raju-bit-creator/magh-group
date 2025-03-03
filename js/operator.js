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
let name2 = "five";
let name1 = 5;

// if (a == b) {
//   console.log("a is greater than b");
// } else {
//   console.log("b is greater than a");
// }
if (name1 == name2) {
  console.log("they are same");
} else {
  console.log("they are different");
}
