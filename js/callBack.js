// function add(x, y) {
//   return x + y;
// }
// const addNumber = add(10, 20);
// console.log("sum of x and y is:", addNumber);

// function multiply(x, y) {
//   return x * y;
// }
// const multiplyNumber = multiply(10, 20);
// console.log("product of x and y is:", multiplyNumber);

// // call back function

// function callBackFunction() {
//   console.log("Callback function called");
// }

// const add1 = (x) => {
//   return x;
// };
// const addNumber1 = add1(10);
// console.log(addNumber1);/////

function fetchData(c) {
  console.log("api is fetching...");
  setTimeout(() => {
    c("api successfully fetched");
  }, 5000);
}
fetchData((m) => {
  console.log(m);
});

// const mutateArray = (arr, action) => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = action(arr[i]);
//   }
//   return arr;
// };
// const array = [1, 2, 5, 7];
// const result = mutateArray(array, (x) => x * 2);
// //output =[2, 4, 10, 14]
// console.log("this is result", result);
