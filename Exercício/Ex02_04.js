const prompt = require("prompt-sync")(); 

let num = Number(prompt('qual é o número?'));
if (num >= 0) {
    console.log ("o nº é positivo")
} else {
    console.log ("o nº é negativo")
} 