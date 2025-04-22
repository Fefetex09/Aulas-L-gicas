const prompt = require("prompt-sync")(); 

function num(){
    for(let x = 50; x >= 0; x--){
        if (x % 2 == 1){
            console.log(x)
        }
    }
}
num()