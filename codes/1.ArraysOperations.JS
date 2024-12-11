let trains = new Array(`krishna`, `vandeBharath`, `pinakini`);

// printing an array
// for (const element of trains) {
//   document.write(`${element}  <br> `);
// }

//replacing at any position
document.write(`----Replacing at any position- <br>`);
trains[1] = "intercity";
document.write(`${trains}  <br> `);

// Adding an ele at last
trains.push("sunday special train");
document.write(`${trains}  <br> `);

//Adding at first
trains.unshift("Early morning train ");
document.write(`${trains} <br> `);

//Adding at specific position
document.write(`----Adding at specific position- <br>`);
trains.splice(2, 0, "Dasara special ");
document.write(`${trains} <br> `);

// Deleting at last
document.write(`trains list after deleting at last is <br> `);
trains.pop();
document.write(`${trains} <br> `);

// Deleting at first
document.write(`trains list after 1st ele is <br> `);
trains.shift();
document.write(`${trains} <br> `);

//Deleting at specific position
document.write(`Deleting at specific position`);

// Here from index 1 we want to delete 2 elements
document.write(trains.splice(1, 2) + `<br>`);
document.write(`${trains}`);

// methods that take callback function as a argument
const arr = [-30, -40, -50, -60, 1, 2, 3, -50, 4, 5, -20];
function callbackf1(ele, index, arr) {
  console.log(typeof ele);
  return ele * ele;
}
//Here this map is talking this callback function as an
//argument that function should take and return a value
let arrPower = arr.map(callbackf1);
console.log("map function output is ", arrPower);

//filter(callback) method demo- which takes callback function as argument
// that callback function takes 3 params and it should return boolean
function callbackf2(ele, index, arr) {
  return ele % 2 == 0;
}
console.log(`filter method op`, arr.filter(callbackf2));

//reduce method demo - which takes callback function & accumulator initial value
//callback function takes 4 params
function callbackF3Reduce(acc, ele, index, arr) {
  console.log(`exec callback function.`);
  if (acc > ele) {
    return acc;
  } else {
    return ele;
  }
}
console.log(`reduce method o/p`, arr.reduce(callbackF3Reduce, arr[0]));

//find()- takes a 3 param callback function that function returns boolean value
let train = trains.find(callbackf4find);
function callbackf4find(ele, index, arr) {
  console.log(`ele type is --> ${typeof ele}, excec callback function `);
  var eleStr = new String(ele);
  return eleStr.startsWith("V");
}

//some(3 param callback function) - that function should return true
function callbackf5Some(a, b, c) {
  console.log(a);
  if (a > 0) {
    return true;
  }
}
console.log("some() result-->", arr.find(callbackf5Some));

function callback6Every(ele, index, arr) {
  console.log(`executing Array.every() callback method`);
  if (ele > 0) {
    return true;
  }
}
//every(3 param callback function)
//that 3 param callback function will return true when all ele satisfies the condition
console.log(`array.every() result is -->`, arr.every(callback6Every));
console.log(typeof callback6Every);

//callback function demo
function add(e1, e2) {
  console.log("add() function called");
  return e1 + e2;
}
function multiply(e1, e2) {
  console.log("multiply() function called");
  return e1 * e2;
}
//calling multiply function, for calculator function we are passing multiply as argument

// calculator(5, 6, multiply);
var fname = prompt("enter function name");
//here if we are talking function name from prompt if we pass add, then add method will be called ..
eval(fname + "()");

function calculator(e1, e2, operation) {
  //here we are calling that function with name stored in operation variable
  operation(e1, e2);
}

//Higher order function which returns another function
