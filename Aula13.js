const prompt = require("prompt-sync")(); 

//inteiração sobre os nossos vetores (arrays/listas)

let frutas =[ "maçã", `banana`, `uva`, `abacaxi`]; 
//para iterar sobre um vetor, utilizamos o for
for (let x = 0; x < frutas.length; x++) {
     let = frutaAtuais = frutas
    console.log(`A fruta da posição ${x} é ${frutas[x]}`); 
}
console.log ("FIM"); 


//Iterando sobre uma lista usando o for of
let listaJogadores = ["Pelé", "maradona", "messi", "cr7"];
for (let jogador of listaJogadores) {
    console.log(`o jogador ${jogador}`); 
} 

let listaNumeros = [1, 2, 3, 4, 5];
for (let nr of listanrs) {
    console.log(`o jogador ${nr}`); 
} 

//verificando se um element existe em um array
let vogais = ["a","e", "i", "o", "u" ];
let letraParaverificar = prompt("Digite um letra: ") 
if (vogais.includes(letraParaverificar.toLowerCase())) {
    console.log(`A letra ${letraParaverificar} é uma vogal`); 
} else {
    console.log(`A letra ${letraParaverificar} não é uma vogal`); 
}


let numero = ["1","2","3","4","5","6","7","8","9"];
let vogais2 = ["a","e", "i", "o", "u" ];
let consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p",
     "q", "r", "s", "t", "v", "w", "x", "y", "z"];
let letraParaverificar2 = prompt("Digite um letra: ") 
if (vogais2.includes(letraParaverificar2.toLowerCase())) {
    console.log(`A letra ${letraParaverificar2} é uma vogal`); 
} else if (consoantes.includes(letraParaverificar2.toLowerCase())) {
    console.log(`A letra ${letraParaverificar2} é uma consoante`); 
} else if (numero.includes(letraParaverificar2)){
    console.log(`${letraParaverificar2} é um número`); 
} else {
    console.log (`${letraParaverificar2} não é uma letra e nem um númerooo`)
} 

//
let listaFrutas = ['Maçã', 'Banana', 'abacaxi', 'uva'];
for (const [pos, fruta] of listaFrutas.entries()) {
    console.log(`A fruta da posição ${pos} é ${fruta}`); 
}


//separando uma string utilizando o split ()
let produtos = "celular,notebook,TVtablet,monitor";
let listadeprodutos = produtos.split (" "); 
console.log(produtos);
console.log(listadeprodutos); 

let escola = "SENAI";["S","E", "N", "A", "I"]
for (let letra01 of escola){
    console.log (letra)
} 