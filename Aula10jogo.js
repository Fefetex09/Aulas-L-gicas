const prompt = require("prompt-sync")();

console.log("================================="); 
console.log("😎   JOGO DA ADIVINHAÇÃO   😎")
console.log ("================================")

let nmrSecreto = Math.floor(Math.random() * 100) + 1;
let acertou = false; 
let tentativas = 0; 

while (acertou == false) {
    let chute = Number(prompt("digite um número entre 1 e 100: " ));
    tentativas++
    if (chute == nmrSecreto){
        console.log (`parabéns vc acertou em ${tentativas} tentativas, mandou bem!! 👌`);
        acertou = true; 
    } else if ( chute > nmrSecreto){
        console.log (`vc chutou ${chute}, tente um número menor`);
    } else if (chute < nmrSecreto){
        console.log (`vc chutou ${chute}, tente outro número maior`);

    }
}
console.log ("Fim, campeão!"); 