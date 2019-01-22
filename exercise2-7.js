const readlineSync = require("readline-sync");
let n = parseInt(readlineSync.question('Please, give me a number.'));
var o = [];
for (var i = 0; n!==i; i++) {
  let m = o.push(parseInt(readlineSync.question('Please, give me a number.')));
}
function getTotal(total,numb) {
  return total+numb;
}
console.log(o.reduce(getTotal));
