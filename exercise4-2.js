// let randomNumb=Math.floor(Math.random()*10);
// function rand10() {
//   while (randomNumb==0) {
//     randomNumb=Math.floor(Math.random()*10);
//   }
//     console.log(randomNumb);
// }
// rand10();

function rand10(a,b){
  return Math.floor(Math.random()*(b-a)+a);
}
console.log(rand10(1,10));
