const prompt = require("prompt-sync") ();

let car = 'Gol,Corsa,Palio,Monza,Fusca'
let lista = car.split(',')
for(const [pos,list] of lista.entries()){
    console.log(`${pos} e ${list}`)
}