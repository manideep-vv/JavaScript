function disableAdBlocker(arg) {
  window.alert(`${arg} method exec successfully`);
}
//This function will be exec only once that to after 5 sec from page loading
let timerId = window.setTimeout(disableAdBlocker, 5000, "AdBlocker");
//if u wish to prevent that function to start then clear with timerId
window.clearTimeout(timerId);
console.log("timer id -->", timerId);

var times = 0;
//means this notifier method will be called for every 2 sec with same arguments
// var timerid = window.setInterval(notifier, 2000, "Leadership");
// console.log(typeof timerid);
// function notifier(name) {
//   console.log(`received times as ${times}`);
//   times++;

//   document.write(
//     `Reminder ${times} ->Complete your mandatory training name --> ${name} <br>`
//   );
//   if (times > 10) {
//     document.write(
//       ` 10 reminders already over, no more left, Now escalation only`
//     );
//     //Here we are clearing the recursion program with help of timer id
//     window.clearInterval(timerid);
//   }
// }
