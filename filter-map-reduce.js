// const cousinsName = ["kishor", "soikot", "nayeem", "sawol", "maisha"];

// const values = cousinsName.forEach((item) => {
//   //   console.log(item);
//   return item;
// });
// console.log(values);

// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = myNums.filter((num) => num < 5);
// console.log(newNumbers);

const newNum = myNums.filter((num) => num > 6);
// console.log(newNum);

const newNums = myNums.filter((num) => {
  return num >= 5;
});
console.log(newNums);
