const prompt = require("prompt-sync")(); 

let vendas = Number(prompt('qual foi a quantidade de vendas?'));
if (vendas > 5000) {
    let Comissao = (vendas * 0.05)
    console.log ("ele ganhará uma comissão de " + Comissao )
} else {
    let Comissao = (vendas * 0.03)
    console.log ("ele ganhará uma comissão de " + Comissao)
}