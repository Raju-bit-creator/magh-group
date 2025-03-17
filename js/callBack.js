function add(x, y) {
  return x + y;
}
const addNumber = add(10, 20);
console.log("sum of x and y is:", addNumber);

function multiply(x, y) {
  return x * y;
}
const multiplyNumber = multiply(10, 20);
console.log("product of x and y is:", multiplyNumber);

// call back function

function callBackFunction() {
  console.log("Callback function called");
}

const nestedArray = (arr, action) => {
  for (let i = 0; i < arr.length; i++) {
    return (arr[i] = action(arr[i]));
  }
};
const array = [1, 2, 5, 7];
const result = nestedArray(array, (x) => x * 2);
//output =[2, 4, 10, 14]
console.log(result);
