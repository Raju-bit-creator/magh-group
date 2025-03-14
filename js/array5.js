let users = [
  {
    name: "John",
    product: [
      { name: "mackbook", price: 1000 },
      { name: "iphone", price: 500 },
      { name: "watch", price: 200 },
    ],
  },
  {
    name: "Jane",
    product: [
      { name: "mackbook", price: 1000 },
      { name: "watch", price: 200 },
      { name: "headphones", price: 50 },
    ],
  },
  {
    name: "Bob",
    product: [
      { name: "iphone", price: 500 },
      { name: "watch", price: 200 },
      { name: "headphones", price: 50 },
    ],
  },
];

users.forEach((user) => {
  user.product.forEach((product) => {
    if (product.name == "Headphones") {
      console.log(
        `${user.name} bought ${product.name} which cost Rs. ${product.price}` //template literal
      );
    }
  });
});

let users1 = [
  // {
  //   name: "John",
  //   age: 20,
  //   class: 10,
  //   password: "xxxxxx",
  //   email: "jhon@gmail.com",
  //   phone: "1234567890",
  // },
  "shyam",
  "hari",
  "gopal",
  "krishna",
  "sanjay",
  "sita",
  "radha",
  "gita",
  "savitri",
];

//welcome back! you are register user
//  else you are not register user so you are not allowed to access this page

const registerUser = (name) => {
  const user = users1.find((u) => {
    return u == name;
  });
  if (user) {
    console.log(`you are register user `);
  } else {
    console.log(`you are not register user `);
  }
};
const findUser = registerUser("sita1");

// assignment
let phoneNumber = "1234567890";

// output should be xxxxxxxx90

// accout number masking

const accountNumber = 344565677889;

function maskAccountNumber(accountNumber) {
  const numberToString = accountNumber.toString();
  const lastFour = numberToString.slice(-4);
  const maskedPart = "x".repeat(numberToString.length - 4);
  return maskedPart + lastFour;
}
console.log(maskAccountNumber(accountNumber));
