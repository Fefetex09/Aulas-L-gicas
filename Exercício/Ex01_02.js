const prompt = require("prompt-sync")(); 

let nintendo = Number(prompt('qual é o número?'));
let antecessor = nintendo - 1 
let sucessor = nintendo + 1
console.log ("o antecessor é:" + antecessor)
console.log ("o sucessor é:" + sucessor)
