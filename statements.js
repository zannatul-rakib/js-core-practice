//if.......else statements

let age = 17;
let country = 'Bangladesh';

if (age >= 18) {
    console.log('you can sign up');
} else {
    console.log('tor boyos ekhono hoynai');
}

if (age >= 16 && country === 'Bangladesh') {
    console.log('You can get a driving license');
} else {
    console.log('tor ekhono gari chalanor boyos hoinai')
}

//if..else..if statements
let month = 8;
let monthName;

if (month === 1) {
    monthName = 'Jan';
} else if (month === 2) {
    monthName = 'Feb';
} else if (month === 3) {
    monthName = 'Mar';
} else if (month === 4) {
    monthName = 'Apr';
} else if (month === 5) {
    monthName = 'May';
} else if (month === 6) {
    monthName = 'Jun'
} else {
    monthName = 'Invalid month';
}
console.log(monthName);

//Calculate the body mass index (BMI)
let weight = 70; //kg
let height = 1.57; //meter

let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
    weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
    weightStatus = 'Perfect weight';
} else if (bmi >= 25 && bmi <= 29.9) {
    weightStatus = 'Overweight';
} else {
    weightStatus = 'Obesity';
}

console.log(weightStatus);



//Ternary Operator(?)

//using simple style
let age1 = 21;
let msg1;

if (age1 >= 16) {
    msg1 = 'You can drive';
} else {
    msg1 = 'You cannot drive';
}
console.log(msg1);


//using ternary to do this
let age2 = 15;
let msg2;

age2 >= 16 ? (msg2 = 'tui gari chalaite parbi') : (msg2 = 'tui chalaite parbina');
console.log(msg2);

//too short method using ternary
msg2 = age2 >= 16 ? 'You can drive also' : 'You cannot drive.';
console.log(msg2)


//JS Object Operator (...)

let colors = ['red', 'green', 'blue'];
let products = ['leptop', 'phone', 'charger'];
let mixed = [...colors, ...products];
console.log(mixed);

const circle = {
    radius: 10
};
const coloredCircle = {
    ...circle,
    color: 'BLACK'
}
console.log(coloredCircle);


const details = {
    name: 'Zannatul F Rakib',
    age: 23,
    job: 'Programmer',
    address: {
        city: 'Rangpur',
        village: 'King Sechakandi'
    }
}

const person = {
    ...details
}
console.log(person);



//JavaScript switch case


/* ----- For Loop ------- */

// The for loop statement creates s loop with three optional expressions
//     for (initializer; condition; iterator) {
//     //statements
//  }

// example
for (let i = 1; i < 5; i++) {
    console.log(i);
}

let sum = 0;
for (let a = 0; a <= 9; a++, sum += a) {
    // console.log(sum);
}



/* ----- JavaScript Break statement ----- */

for (let i = 23; i < 29; i++) {
    console.log(i);
    if (i === 26) {
        break;
    }
}

//nested loop with break
for (let a = 1; a <= 5; a++) {
    for (let i = 6; i <= 10; i++) {
        if (i === 8) {
            break;
        }
        console.log(a, i);
    }
}


// while loop with break
let i = 27;
 while (i < 33){
    i++;
    console.log(i);
    if(i === 31){
        break;
    }
 }

 //do...while loop with break
 let d = 112;

 do {
    d++;
    console.log(d);
    if(d === 115){
        break;
    }
 } while(d < 117);

 let x = 3 % 2;
 console.log(x)