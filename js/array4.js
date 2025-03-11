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

let courses = [
  {
    class: "Pyhton",
    completedStatus: false,
  },
  {
    class: "Mern",
    completedStatus: true,
  },
  {
    class: "Ui/UX",
    completedStatus: false,
  },
  {
    class: "Data science",
    completedStatus: false,
  },
  {
    class: "Devops",
    completedStatus: true,
  },
];

let completed = [];
let inComplete = [];
courses.forEach((course) => {
  if (course.completedStatus) {
    completed.push(course.class);
  } else {
    inComplete.push(course.class);
  }
});
console.log("this is course compelted array", completed);
console.log("this is course not compelted array", inComplete);
