const prompt = require("prompt-sync")(); 

let larguraMetros = Number (prompt ('Digite a largura em metros:'));
let alturaMetros = Number (prompt ('Digite a altura em metros:'));
let area = larguraMetros*alturaMetros;
let litros = area/2;
console.log(area);

