// Demo to create object
document.write(`<br>---Demo to create object</br>`);
//create a dummy object
let e1 = {};
document.write(e1);
// create a object with value
let e2 = { name: "mani", sal: 20000 };
//Accessing the values using dot operator
document.write(e2.name);
//Accessing the values using array operator
document.write(e2["name"]);

//Adding the properties using dot operator
e2.address = "kavali";
document.write(e2.address);

//Adding the properties using array operator
e2["zipcode"] = 524201;
document.write(e2["zipcode"]);

function user(n, a, r) {
  this.carName = n;
  this.ManufacturerCountry = a;
  this.Range = r;
}

//IIFE- immediately invocable function
(function print() {
  //creating an object
  let u1 = new user("nexon", "india", "high range");
  printer(u1);
})();

//This function will accept an object and it will print the properties of an object
function printer(obj) {
  //This will give the keys as a list of objects
  const keys = Object.keys(obj);
  for (k of keys) {
    document.write("<br>" + k + ":  " + obj[k]);
  }
}
// --print using for in loop
document.write(" <br> --print using for in loop <br> <br>");
let u1 = new user("punch", "india", "Mid range");
for (key in u1) {
  document.write(key + " : " + u1[key] + "<br>");
}

//Printing using Object.entries() method
document.write(" <br> print using Object.entries() method <br> <br>");
let u2 = new user("Civic", "India", "Premium");
const entries = Object.entries(u2);
for (entry of entries) {
  //Here each entry is an array , 1st ele will be the key and 2nd ele is value
  document.write(`${entry[0]} : ${entry[1]} <br>`);
}
console.table([
  { name: "Alice", age: 25, city: "hyd" },
  { name: "Bob", age: 30 },
]);

// Dom object demo
// console.log(document);
// there are many properties in document object like head, body
console.log(document.body);
