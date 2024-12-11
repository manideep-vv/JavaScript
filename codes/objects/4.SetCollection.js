let s = new Set("Manideep");
// here for each method expects a 3-parameterized/minimum 1 param function to be passed
//This is like passing a method reference to a functional interface
s.forEach(print);
function print(ele, index, sett) {
  document.write(`${ele},`);
}
document.write(`</br> `);
// this add method will return set as return type hence we are able to perform method chaining
s.add("Kumar").add("HTC").add("-->Virtusa").add("-->TCS");
s.forEach(print);
document.write(`</br>  ${s.add("Kumar")} `);

// Demo for  boolean delete(ele)
document.write(`<br> -------Demo for  boolean delete(ele) -------<br>`);
document.write("before delete <br>");
s.forEach(print);

s.delete("e");
document.write("<br> after delete <br>");
s.forEach(print);

document.write(` <br> Set.has() method demo --> ${s.has("HTC")} `);
// s.clear();

let ss = s.size;
document.write(`<br> size is ${ss} and type is ${typeof ss} `);
//1 Entry will have 2 components- 1) value 2) also value
//This entries() method will return an iterator
const itr = s.entries();
document.write(`<br>entries return tye is  ${itr} <br>`);
//This itr.next() will give the next entry
document.write(`<br> ${itr.next().value}`);
document.write(` <br> ------- Iterator demo ---------- <br> `);
// for (const element of itr) {
//   document.write(`${element}`);
// }
// let currentEntry = itr.next();
// while (!currentEntry.done) {
//   const [key, value] = currentEntry.value;
//   console.log(`Key: ${key}, Value: ${value}`);
//   currentEntry = setIterator.next();
// }

//Set is by default iterable -- u dont need iterator also
document.write(
  `<br> Set is by default iterable -- u dont need iterator also <br>`
);
for (ele of s) {
  document.write(`${ele} ,`);
}
