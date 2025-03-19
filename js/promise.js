//arrow function and normal(traditional) function
//promise

//  normal function
// function multiply(x, y) {
//   return x * y;
// }
// const result = multiply(5, 6);
// console.log(result);

//arrow function
// const multiply = (x, y) => {
//   return x * y;
// };
// const result1 = multiply(5, 6);
// console.log(result1);

// const car = (brand) => {
//   setTimeout(() => {
//     console.log(brand);
//   }, 1000);
//   return brand;
// };
// const result2 = car("tesla");
// console.log(result2);

///////////promise /////////
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // reject("internal server error  ||  error on line 23");

//     resolve({
//       data: "data from promise",
//     });
//   }, 2000);
// });

// promise
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log(error);
//   });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let success = false;
//     if (success) {
//       resolve("data from promise");
//     } else {
//       reject("error on line 43");
//     }
//   }, 2000);
// });
// myPromise.then((m) => console.log(m)).catch((error) => console.log(error));

// async and await
// const fetchData = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let data = response.json();
//   console.log("this is response", data);
// };
// fetchData();

const fetchData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
    let data = response.json();
    console.log("this is response", data);
  } catch (error) {
    throw new Error("internal server error");
  }
};
fetchData();
