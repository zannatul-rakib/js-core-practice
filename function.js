/* Anonymous function */
setTimeout(function () {
    console.log('letter response after 2 second')
}, 2000);

(function () {
    console.log('immediately response this function')
})();

let person = {
    firstName: 'Rakib',
    lastName: 'Z'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);

//arrow function
let check1 = function () {
    console.log('ES6 Function example')
}; check1();

let check2 = () => console.log('ES6 short function');
check2();


var a = 23;
var b = 234;
console.log(a + b)




/* ---------- Recursive Function --------- */
// function countDown(fromNum){
//     console.log(fromNum);
// }
// countDown(5);

//countDown with Recursive
function countDown(num) {
    console.log(num);

    let nextNum = num - 1;
    if (nextNum > 0) {
        countDown(nextNum);
    }
}
countDown(5);


// calculate the sum of natural number
function sum(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum(n - 1);
}
let result = sum(10);
console.log(result)