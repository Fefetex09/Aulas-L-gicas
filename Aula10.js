//Estrutura de laço de repetição While
const prompt = require("prompt-sync")();

let resposta = "S"; 
while (resposta == "S") {
    console.log ("Vc está dentro do bloco");
    resposta = prompt("Deseja continuar? S/N")
}
console.log ("Fim"); 


let senhaSecreta = "senai"
let senhaDigitada
while (senhaSecreta != senhaDigitada) {
    console.log ("Senha errada bobão kkkkkkkk")
    senhaDigitada = prompt("Qual é a senha?")
}

console.log ("Fim")


//exemplo 3 - executando um numero determinado vezes
let contador = 1
while (contador <= 5){
    console.log ("o contador está no número" + contador)
    contador++ //contador = contador + 1
}

//Exemplo 4
// Posso deixar meu laço executando sem uma condição específica, apenas
// com while (true) e encerrar o loop com o comando break
let total = 0
let qtde = 0

while (true) {
    let valor = Number(prompt("Digite o valor do produto (0 para encerrar): "));
if (valor == 0)
    break;
else 
total = valor + total
qtde = qtde++
}

console.log(`vc comprou no total ${qtde} produtos`)
console.log (`valor total da comopra R$ ${total.toFixed(2)}`); 