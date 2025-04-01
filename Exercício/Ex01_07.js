const prompt = require("prompt-sync")();


let carteira = Number(prompt('quanto ele tem de grana?'));
let dolar = carteira / 5.79 
console.log ("vc tem, convertendo em dolar, exatamente: " + dolar.toFixed(2)); 