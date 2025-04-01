const prompt = require("prompt-sync")();

let total = 0
let qtde = 0
let somaPares = 0 
let somapImparesr = 0

while (true) {
    let valor = Number(prompt("Digite o valor do produto (0 para encerrar): "));
if (valor == 0)
    break;
else 
total = valor + total
qtde = qtde++
}
console.log ("Fim"); 
