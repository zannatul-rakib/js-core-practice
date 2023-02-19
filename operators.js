//      ----- Remainder Operators or Modulus Operator ------
// javascript use the '%' to represent the 'remainder' operator . the remainder operator returns the remainder left over the over when one value is divided by other value.

//example
let rslt1 = 5 % 2;
// console.log(rslt1);

//is Odd
let num1 = 9876980 % 2;
// console.log(num1)

function isOdd(num) {
    // return num % 2;
}
let result2 = isOdd(298990);
// console.log(result2)

//unary operators (x+) operation return to number from string, boolean
let a = false;
b = true;
console.log('unary operator', +a);

let person1 = {
    name: 'Shaila',
    class: '9th',
    toString: function () {
        return '15';
    }
}
console.log('unary operator result', +person1);


//Comparison operator - its compare to values.There are some comparison values.
/*
    < less than
    > greater than
    <= less than or equal to
    >= greater than or equal to
    == equal to
    === equal to (extreme/strict)
    != not equal to
    !== not strict equal to
*/



//Logical Operators - The logical operators are important in Javascript because they allow you to compare variable and do something based on the result of that comparison. Here are 3 logical operators -- 
/*
    logical NOT - (!)
    logical AND - (&&)
    logical OR  - (||)
*/


// logical not !
let counter1 = 20;
console.log('logical not ans ' ,!!counter1)

let ar = 10;
console.log('logical not ans 2', !ar);

// AND (&&) operators example
let eligible = true;
    required = true;
console.log('and operator ans', eligible && required);

//Exponentiation Operator
let expo1 = Math.pow(34, 2);
console.log(expo1);

let expo2 = 20 ** 3;
console.log(expo2);

let ab = 5;
ab **= 3;
console.log(ab);

let expo3 = -(20**2);
console.log(expo3)