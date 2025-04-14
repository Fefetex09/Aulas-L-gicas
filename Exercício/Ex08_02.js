const prompt = require("prompt-sync")();

function ParImpar (nmr){
    if (nmr % 2 == 0){
        console.log ("O número é par")
    } if (nmr % 2 == 1){
        console.log ("O número é ímpar")
    }
}

ParImpar (5);