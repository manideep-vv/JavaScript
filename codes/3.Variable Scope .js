{
  //If u define a var type variable inside a block then those are
  // considered as global variables
  var x = 900;
}
//Immediately invoked function
(function abcd() {
  document.write(`<br> IIFE function result isss -->  ${x}`);
})();

//Demo for block scoped variable
{
  //If u define a let/const type variable inside a block then those are
  // NOT considered as global variables, those are block level var only
  //those are treated as local variables only
  let y = 900;
  const z = 100;
}
//Immediately invoked function
(function abcdef() {
  //These will not print bec these 2 were considered as local var
  //Commented below line for compilation error
  // document.write(`<br> IIFE function result is .. ${y} ${z}`);
})();

// Default parameters demo
//with this syntax u can assign the default values for the parameters
function multiply(n1, n2 = 10) {
  document.write(`<br> values received are ${n1} , ${n2}`);
}
//see here even though we passed 1 parameter we could see the second value
multiply(2);

//------Demo for rest parameters == var args in java
function varArgsDemo(n1, ...n2) {
  document.write(`<br> ------Demo for rest parameters == var args in java`);
  document.write(` <br> values received in var args method is `);

  //to print all values we are using for of loop
  for (ele of n2) {
    document.write(`${ele}  ,`);
  }
}
varArgsDemo(2, 3, 4, 5, 9, 5, 6, 1, 2);

//------Demo for arguments object inside a method
document.write(`<br> ------Demo for arguments object inside a method <br>`);
function argObjDemo() {
  document.write(`<br> all ele inside argument object are  <br>`);
  for (const element of arguments) {
    document.write(` ${element},  `);
  }
  document.write(`<br> total args length is -->`, arguments.length);
  document.write(` <br> second argument value is --> ${arguments[1]}`);
}
argObjDemo(10, 20, 30);
