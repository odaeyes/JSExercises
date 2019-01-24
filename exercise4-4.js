const readlineSync = require("readline-sync");
function average(arr) {
  return (arr.reduce(getTotal))/arr.length;
}
function min(arr) {
  return Math.min.apply(null, arr);
}
function max(arr) {
  return Math.max.apply(null, arr);
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
