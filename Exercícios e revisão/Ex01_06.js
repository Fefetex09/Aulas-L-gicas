const prompt = require("prompt-sync")(); 

let sex = prompt("Qual é o seu sexo? (F/M), SÓ ACEITAMOS LETRAS MAIÚSCULA, SEU OREIA");
let altura = prompt("Qual é a sua altura?");

if (sexo == "F"){
console.log ((62.1 * altura) - 44.7); 
} else (sexo == "M");{
    console.log ((72.7 * altura) - 58)
}