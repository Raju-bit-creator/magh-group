let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//filter method in array
let filterNumber = number.filter((num) => {
  return num > 2;
});
console.log("filter", filterNumber);

//find method in array
let findNumber = number.find((num) => {
  return num > 2;
});
console.log("find", findNumber);

//spread operator
let a = [1, 2, 3, 4];
let b = [...a, 10];
console.log("this is spread operator", b);

let student1 = ["ram", "shyam", "sita", "gita"];
let student2 = [...student1, "ram"];
console.log("spread operator students", student2);

//push and pop method in array
let fruits = ["apple", "banana", "cherry", "cherry"];
let fruitsLength = fruits.length;
console.log("total items in fruits array is:", fruitsLength);
// push fruits
let fruits1 = fruits.push("sugarcane");
console.log(fruits);

//pop mehtod
let frouts2 = fruits.pop();
console.log(fruits);

// join mehtod in array
let fruits3 = ["apple", "banana", "cherry"];
let fruits4 = fruits3.join(" ");
console.log(fruits4);
let fruits5 = fruits3.slice(0, 3);
console.log("slice", fruits5);

//array method assignment

// unshift
// shift
// splice
// indexOf
// findIndex
