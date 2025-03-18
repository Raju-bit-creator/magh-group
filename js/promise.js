//arrow function and normal(traditional) function
//promise

//  normal function
function multiply(x, y) {
  return x * y;
}
const result = multiply(5, 6);
console.log(result);

//arrow function
// const multiply = (x, y) => {
//   return x * y;
// };
// const result1 = multiply(5, 6);
// console.log(result1);

const car = (brand) => {
  setTimeout(() => {
    console.log(brand);
  }, 1000);
  return brand;
};
const result2 = car("tesla");
console.log(result2);

///////////promise /////////
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("internal server error  ||  error on line 23");

    resolve({
      data: "data from promise",
    });
  }, 2000);
});

promise
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });
