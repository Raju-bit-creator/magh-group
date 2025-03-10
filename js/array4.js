let cartItems = [
  {
    name: "Ramesh",
    product: [
      { title: "labtop", price: 1000 },
      { title: "mouse", price: 50 },
      { title: "keyboard", price: 200 },
    ],
  },
  {
    name: "Rahul",
    product: [
      { title: "jeans", price: 3300 },
      { title: "shoe", price: 50 },
      { title: "tshirt", price: 20 },
    ],
  },
  {
    name: "Rajesh",
    product: [
      { title: "pc", price: 10 },
      { title: "earpod", price: 50 },
      { title: "mobile", price: 2000 },
    ],
  },
  {
    name: "chering",
    product: [
      { title: "pc", price: 100 },
      { title: "earpod", price: 50 },
      { title: "mobile", price: 100 },
    ],
  },
  {
    name: "Nisa",
    product: [
      { title: "pc", price: 200 },
      { title: "earpod", price: 50 },
      { title: "mobile", price: 100 },
    ],
  },
];
// to calculate total expenditure  individually
cartItems.map((prod) => {
  let total = prod.product.reduce((acc, curr) => acc + curr.price, 0);
  //   console.log(`${prod.name}, total expenditure is, ${total}`);
  if (total < 500) {
    console.log(`${prod.name}, total expenditure is, ${total}`);
  }
});
