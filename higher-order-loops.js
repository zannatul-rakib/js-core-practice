// for of
const numbers = [1, 2, 3, 4, 5, 6];

for (const num of numbers) {
  // console.log(num);
}

const grettings = "Hi sexy!";

for (const greet of grettings) {
  // console.log(greet);
}

const arrNames = ["rakib", "kishor", "maisha", "bristy"];

for (const names of arrNames) {
  // console.log(names);
}

// ---------- Maps ----------- //
const map = new Map();
map.set("Bn", "Bangladesh");
map.set("Jp", "Japan");
map.set("Uk", "United Kingdom");
map.set("In", "India");

// const map = new Map();
// map.set = {
//   name: "Rakib",
//   designation: "Computer Operator",
//   salary: 12000,
// };
// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":", value);
}

// for in loop
const myProduct = {
  name: "Laptop",
  model: "Lenovo ThinkPad T470s",
  price: 97800,
  releaseDate: 2018,
};

// it's doesn't work
// for (const [key, value] of myProduct) {
//   console.log(key, value);
// }

for (const key in myProduct) {
  // console.log(`${key} : ${myProduct[key]}`);
}

const myArrayList = [
  "phone",
  "laptop",
  "bags",
  "earphones",
  "water bottle",
  "mouse",
  "hi-speed fan",
];
for (const key in myArrayList) {
  // console.log(myArrayList[key]);
}

// const map = new Map();
// map.set("Bn", "Bangladesh");
// map.set("Jp", "Japan");
// map.set("Uk", "United Kingdom");
// map.set("In", "India");

// console.log(map);

// ---------- ForEach -------------- //
const cousinsName = ["kishor", "soikot", "nayeem", "sawol", "maisha"];

// cousinsName.forEach(function (abc) {
//   console.log(abc);
// });

// actual system to write ForEach loop with arrow function
cousinsName.forEach((items) => {
  // console.log(items);
});

function printMe(item) {
  // console.log(item);
}
cousinsName.forEach(printMe);

cousinsName.forEach((item, index, arr) => {
  console.log(index, item, arr);
});
