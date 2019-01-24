// Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:
//
// Name
// Production year
// Names of the cast members (there can be as much as the user want)
// That function must gather all the data in a single object and return it. The data structure must be elegant.
//
// Create a program that use that function to generate a TV serie object and display it to the user in JSON format.
const readlineSync = require("readline-sync");

let tvSerie ={
  "Name":"",
  "Production year":"",
  "Names of cast members":[],
}

function askTvSerie() {
  tvSerie.Name= readlineSync.question("Quel est le nom de ta série favorite?")
  tvSerie["Production year"]=readlineSync.question("Quelle année de production?")
  let actor = readlineSync.question("Veux-tu ajouter un acteur?")
  while (actor === "oui") {
      tvSerie["Names of cast members"]["Firstname"]=readlineSync.question("Quel est son prénom?")
      tvSerie["Names of cast members"]["Last name"]=readlineSync.question("Quel est son nom?")
      actor = readlineSync.question("Veux-tu ajouter un acteur?")
  }

  return tvSerie;
}
console.log(askTvSerie());
