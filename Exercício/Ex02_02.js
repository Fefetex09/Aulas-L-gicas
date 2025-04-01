const prompt = require("prompt-sync")(); 

let inteiro = Number(prompt('qual é o número?'));
let inteiro2 = Number(prompt('qual é o segundo número?'));
if (inteiro >= inteiro2) {
    console.log ("o 1º é maior que o 2º número")
} else {
    console.log ("o 2º é maior que o 1º número")
} 



