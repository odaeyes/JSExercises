function rand10(a,b){
  return Math.floor(Math.random()*(b-a)+a);
}
rand10(1,10);
let numbArray= [];
function multiRand(n) {
  numbArray.push(n);
}

for (var i = 0; i < rand10(1,10); i++) {
  multiRand(rand10(1,10));
  rand10(1,10);
}

console.log(numbArray);
