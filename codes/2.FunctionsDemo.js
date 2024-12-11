function sum(v1, v2) {
  return v1 + v2;
}
console.log(sum(10, 20));
let n1 = 100;
let n2 = 20;
var result = sum(n1, n2);
document.write(`sum of ${n1} + ${n2} numbers is ${result} `);

//Anonymous function
var f1 = function (v1, v2) {
  return v2 - v1;
};
var result2 = f1(n1, n2);
document.write(`<br> diff of ${n1} , ${n2} numbers is ${result2} `);

//Immediately invoked functions
var r3 = (function multiply(v1, v2) {
  return v1 * v2;
})(20, 40);
document.write(`<br> IIFE function result is ${r3}`);

//arrow functions
//Here as this is a single line either keep both {} and return or remove both statements
var f4 = (v1, v2) => v1 * v2;
r4 = f4(5, 42);
document.write(`<br> Lambda function output is ${r4} `);

//Arrow functions for no arg functions
f11 = () => {
  document.write(" <br> NO arg function with  () paranthesis");
  return 1891;
};
result = f11();
document.write(`arrow functions with no arg using paran ${result}`);

//Here we are writing arrow function with doesnt take any arguments, so we kept underscore
var y = (_) => {
  return 711;
};
let y1 = y();
document.write(` <br> result is ${y1} `);

//<br>----------- passing function as an argument to another function
document.write(
  `<br>-----passing function as an argument to another function---<br>`
);
function helloTeller(name) {
  document.write(`<br> hello ${name}`);
}

function GoodMrngPrinter(name) {
  document.write(` <br> GoodMrng ${name}`);
}
//This function for 1st para u should pass function name
function callFunction(funName, Msg) {
  //we are just calling another function
  funName(Msg);
}
//Here we are passing function as an argument
callFunction(helloTeller, "bro", "dsf");
callFunction(GoodMrngPrinter, "bro");
