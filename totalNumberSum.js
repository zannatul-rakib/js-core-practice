// addition
let sum = 0;
for (let i = 0; i <= 9; i++) {
  sum = sum + i;
  // console.log(i, sum);
}

// with function
function sumNumbers(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum = sum + i;
    // console.log(i, sum);
  }
  return sum;
}
sumNumbers(5);

// multiplication
function multiplicationOfNumber(nums) {
  let abc = 1;
  for (let i = 1; i <= nums; i++) {
    abc = abc * i;
  }
  return abc;
}
// multiplicationOfNumber(5);
const result = multiplicationOfNumber(4);
console.log(result);
