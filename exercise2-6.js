const readlineSync = require("readline-sync");
let numb = parseInt(readlineSync.question('Please, give me a number between 1 and 7.'));
let day = ["Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"];
if ((1<=numb)&&(numb<=7)) {
  console.log(day[numb-1]);
}
