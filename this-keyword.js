// implicit binding
// explicit binding
// new binding
// window binding

// -------- Implicit Way ----------- //
let rakib = {
  name: "Rakib",
  age: 23,
  getfullName: function () {
    return this.name + " " + this.age;
  },
};
console.log(rakib.getfullName());

// another way defined obj
const playerNameFunction = function (obj) {
  obj.playerName = function () {
    console.log(this.name);
  };
};

var akas = {
  name: "Akas",
  age: 30,
};
var bikas = {
  name: "Bikas",
  age: 23,
};
playerNameFunction(akas);
akas.playerName();
playerNameFunction(bikas);
bikas.playerName();

// constructor way
let Person = function (name, age) {
  return {
    name: name,
    age: age,
    getName: function () {
      console.log(this.name);
    },
  };
};

let mango = Person("Mango", 35);
mango.getName();

// -------- Explicit Way ----------- //

// with call function
// 01.
var getA = function () {
  console.log(this.name);
};

var licchi = {
  name: "Licchi",
};
getA.call(licchi);

// 02.
var getB = function (v1, v2) {
  console.log(`${this.name} is a ${v1} & ${v2}`);
};

var rangpur = {
  name: "Rangpur",
};
var v1 = "City";
var v2 = "My Home Town";

getB.call(rangpur, v1, v2);

// with Apply function

// 01.
var getC = function (a1, a2) {
  console.log(`${this.name}, ${a1} & ${a2}`);
};

var kishor = {
  name: "Kishor",
};

var a1 = "Handsome";
var a2 = "Dedicated";

var a = [a1, a2];

getC.apply(kishor, a);

// with Bind Function
var getD = function (d1, d2) {
  console.log(`${this.name} ${d1} & ${d2}`);
};

var bristy = {
  name: "Bristy",
};

var d1 = "very shy";
var d2 = "lazy";

var callBind = getD.bind(bristy, d1, d2);
callBind();

// -------- New Binding Way ----------- //
