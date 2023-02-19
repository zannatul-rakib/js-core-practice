//              ------------- array part ----------

// adding an element end of the array using 'push()' method
let citys = ['Rangpur', 'Dhaka', 'Chottogram', 'Dinajpur'];
citys.push('Khulna');
console.log(citys);

//adding an element to the beginning of an array using 'unshift()' method
citys.unshift('Barishal');
console.log(citys);

//remove an element from the end using 'shift()' method & remove an element from the beginning using 'pop()' method
citys.shift();

// to find an array of an element using 'indexOf()' method
let index = citys.indexOf('Dinajpur');
console.log(index)

//check if a value is an array or not using 'Array.isArray()' method
console.log(Array.isArray(citys))