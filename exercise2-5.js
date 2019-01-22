const readlineSync = require("readline-sync");
let favNumb = parseInt(readlineSync.question('Please, give me your favourite number.'));
while (favNumb!==42) {
  console.log('Are you sure?');
  favNumb = parseInt(readlineSync.question('Please, give me your favourite number.'));
}
