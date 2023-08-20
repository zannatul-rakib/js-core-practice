// Immediately Invoked Function Expression

// normal function
function display() {
  console.log("Just checked normal function");
}
display(); // output: just checked normal function

// IIFE with named function or normal function
(function output1() {
  console.log("checked iife function");
})(); // output: 'checked iife function'

// iife with arrow function
(() => {
  console.log("iife with arrow function checked");
})();

// with parameter
((name) => {
  console.log(name);
})("Zannatul Rakib");

// ((num1, num2) => {
//   return num1 + num2;
// })(2, 3);

((num1, num2) => {
  console.log(num1 * num2);
})(10, 2);
