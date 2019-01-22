let o=[1,2,3,4,5];
let a=[100,101,102];
function getTotal(total,numb) {
  return total+numb;
}
console.log(o.reduce(getTotal));
console.log(a.reduce(getTotal));
