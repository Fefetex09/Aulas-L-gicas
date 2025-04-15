const prompt = require("prompt-sync")();
function tabuada(x){
    for (let br = 1; br<=10; br++){
        console.log (br*x);
    }

}

tabuada (x=Number(prompt("Qual é o nmr?")));
 

