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
  "ram",
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
