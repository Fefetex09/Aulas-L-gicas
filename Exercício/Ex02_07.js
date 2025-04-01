const prompt = require("prompt-sync")(); 

let mcqueen = Number(prompt('qual é a velocidade do mcqueen?'));
if (mcqueen > 80) {
    let difMult = (mcqueen - 80)
    let multaFinal = (difMult * 7)
    console.log ("ele pagará uma multa " + multaFinal)
} else {
    console.log ("ele não pagará uma multa ")
} 