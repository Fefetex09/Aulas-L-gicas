const prompt = require("prompt-sync")();

let distancia = Number(prompt('qual é o valor em metros?'));
let centimetros = distancia * 100 
console.log ("a distância em cm é de" + centimetros)
let milimetros = distancia * 1000
console.log ("a distância em mm é de" + milimetros)
let kilometros = distancia * 1000
console.log ("a distância em km é de" + kilometros)


// Não se esqueã ${} é para mostra o conteúdo de uma variável