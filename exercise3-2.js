let o=[1,2,3,4,5];
let a=[100,101,102];
function getTotal(total,numb) {
  return total+numb;
}
let sum1=o.reduce(getTotal);
let sum2=a.reduce(getTotal);
console.log(sum1/o.length);
console.log(sum2/a.length);
