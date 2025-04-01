const prompt = require("prompt-sync")();

let notas = Number(prompt('qual é a primeira nota?'));
let notas2 = Number(prompt('qual é a segunda nota?'));
let media = (notas + notas2) /2

if (media >= 7) {
    console.log ("Boa, vc passou")
} else {
    console.log("muito ruim, não passou kkkkkkkkk")
}