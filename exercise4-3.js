function rand10() {
  let randomNumb=Math.floor(Math.random()*10);
  while (randomNumb==0) {
    randomNumb=Math.floor(Math.random()*10);
  }
}
let numbArray= [];
function multiRand(n) {
  numbArray.push(n);
}
