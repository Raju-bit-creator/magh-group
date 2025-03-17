// local storage set items and get items

let user = {
  name: "John",
  age: 30,
  occupation: "Software Engineer",
  email: "john@example.com",
};

// localStorage.setItem("name", "John");
// localStorage.setItem("token", response.token);
// localStorage.setItem("token1", "dfds2errtfegdfi3r543656575676576");
// localStorage.setItem("user", JSON.stringify(user)); // convert user object to string

// console.log("name of user", user.name);
// let stringUser = JSON.stringify(user);
// // console.log("this is strign format", stringUser);
// localStorage.setItem("user-first", stringUser);

// now get setItem
let storedUser = localStorage.getItem("user-first");
console.log("stored user", storedUser);
console.log("stored user new", storedUser.name); // undefined this is in string format
let objectUser = JSON.parse(storedUser);
console.log("stored user new", objectUser.name);

// let stringUser = {
//   name: "John",
//   age: 30,
//   occupation: "Software Engineer",
//   email: "john@example.com",
// };
// console.log(user1.name);

// // get items from local storage
// let token1 = localStorage.getItem("token1");
// let user1 = localStorage.getItem("user1");
// let user2 = JSON.parse(user1);
// console.log(user2.name); // access the name property of the user object
