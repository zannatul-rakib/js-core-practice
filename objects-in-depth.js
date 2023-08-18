// const tinderUser = new Object();  //single object
const tinderUser = {}; // non single object

tinderUser.id = "234hi";
tinderUser.name = "sam";
tinderUser.isLoggedIn = true;
// console.log(tinderUser);

const obj1 = { 1: "A", 2: "b" };
const obj2 = { 3: "C", 4: "D" };

// const obj = { obj1, obj2 };
// const obj = Object.assign({}, obj1, obj2);
const obj = { ...obj1, ...obj2 };
console.log(obj);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));
