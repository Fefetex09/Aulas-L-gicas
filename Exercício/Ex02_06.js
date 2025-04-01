const prompt = require("prompt-sync")(); 

let num1 = Number(prompt('qual é o 1º número?'));
let num2 = Number(prompt('qual é o 2º número?'));
if (num1 == num2) {
    console.log ("eles são iguais mano")
} else {
    console.log ("eles são diferentes mano")
}