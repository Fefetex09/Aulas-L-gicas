const prompt = require("prompt-sync")();

let inteiro = Number(prompt('qual é o número')); 
if (inteiro % 2 == 0) {
    console.log("o nº é par")
} else {
    console.log ("o nº é ´mpar")
}