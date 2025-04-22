const prompt = require("prompt-sync")(); 

function valor(){
    let valor = Number(prompt("Digite um valor"));
    if (valor < 0){
        console.log ("Negativo")
    } else {
        console.log ("Positivo");
    }
}

valor()