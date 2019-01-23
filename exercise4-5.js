const readlineSync = require("readline-sync");
function calcDistance(a,b){
  return Math.hypot(a,b);
}
let x1=parseFloat(readlineSync.question('Please, give me your coordonate x1.'));
let x2=parseFloat(readlineSync.question('Please, give me your coordonate x2.'));
let y1=parseFloat(readlineSync.question('Please, give me your coordonate y1.'));
let y2=parseFloat(readlineSync.question('Please, give me your coordonate y2.'));
let xx=x1-x2;
let yy=y1-y2;
console.log(calcDistance(xx,yy));
