const readlineSync = require("readline-sync");
function average(arr) {
  console.log((arr.reduce(getTotal))/arr.length);
}
function min(arr) {
  console.log(Math.min.apply(null, arr));
}
function max(arr) {
  console.log(Math.max.apply(null, arr));
}
function getTotal(total,numb) {
  return total+numb;
}

let numbArray= [];
function multiRand(n) {
  numbArray.push(n);
}
function rand10(a,b){
  return Math.floor(Math.random()*(b-a)+a);
}
let numb = parseInt(readlineSync.question('Please, give me a number.'));
for (var i = 1; i <= numb; i++) {
  multiRand(rand10(1,10));
}
console.log(numbArray);
average(numbArray);
min(numbArray);
max(numbArray);
