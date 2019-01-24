const readlineSync = require("readline-sync");

function calcSurface(a, b) {
  return a*b;
}
let length=parseInt(readlineSync.question("Please, give me the length of your rectangle"));
let width=parseInt(readlineSync.question("Please, give me the width of your rectangle"));
calcSurface(length, width);
console.log(calcSurface(length, width));
