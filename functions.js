function userMsg(user) {
  if (user === undefined) {
    console.log("Please enter a user name");
  } else {
    return `${user} just logged in`;
  }
}
// userMsg("Rakib");
// console.log(userMsg("Rakib"));
// console.log(userMsg(" "));
// console.log(userMsg());
console.log(userMsg());

//rest operator & spread operators
function calculateCartPrice(...num) {
  return num;
}

console.log(calculateCartPrice(12, 34, 34));

// function with object

const user = {
  userName: "Rakib",
  id: "iu78n",
  price: 567,
};

function handleObject(anyObj) {
  console.log(
    `Username is ${anyObj.userName} his id ${anyObj.id} and total price ${anyObj.price}`
  );
}
handleObject(user);

// function with array
const newArray = [34, 646, 34];

function returnValue(myArray) {
  return myArray[1];
}
console.log(returnValue(newArray));
