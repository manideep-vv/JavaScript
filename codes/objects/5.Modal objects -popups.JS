let x = prompt("Bro enter a number", "30");
document.write(`Entered value is ${x} <br>`);
let sure = confirm(`Are you sure you have entered ${x}`);
if (sure) {
  document.write(`You have finalized the number as ${x} <br>`);
} else {
  document.write(`You will get another chance to enter `);
}
