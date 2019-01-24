const readlineSync = require("readline-sync");

let x1=parseFloat(readlineSync.question('Please, give me your coordonate ax.'));
let y1=parseFloat(readlineSync.question('Please, give me your coordonate bx.'));
let x2=parseFloat(readlineSync.question('Please, give me your coordonate ay.'));
let y2=parseFloat(readlineSync.question('Please, give me your coordonate by.'));

function calcDistance(ax, ay, bx, by) {
  let a=ax-ay;
  let b=bx-by;
  return Math.hypot(a,b);
}

console.log(calcDistance(x1, y1, x2, y2));
