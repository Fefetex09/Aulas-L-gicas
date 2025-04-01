const prompt = require("prompt-sync")(); 


//operadores relacionais
// == quer dizer que igual, igualdade
// != quer dizer diferente 
//

let a = 2;
let b = 3; 
console.log(a > b) //false
console.log(a == b); //false
console.log (a != b); //true
console.log (a > 2); //false
console.log (a >= 2) //true 

// if estrutura de condição muito utilizada na programação
let ingresso = true;
if (ingresso == true ) { //Se a condição for verdadeira
    //entra no bloco de comando
    console.log("posso entra no show"); 
}


let idade = Number(prompt("qual é a sua idade?"));
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log ("menor de idade, cachorrão")
}


//Else = Senão

ingresso = false
if (ingresso == true) { //Se a condição for verdadeira 
    console.log("posso entra no show")
}else { //Se a primeira condição for false
    console.log("Estou barrado na portaria") 
}
