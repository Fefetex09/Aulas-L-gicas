const prompt = require("prompt-sync")();

//Operações com variáveis

let num3 = Number(prompt("Qual é o primeiro número?")); 
let num4 = Number(prompt("Qual é o segundo número?"));
let soma = (num3 + num4); 
console.log ("O resultado da soma é", soma)

let multiplicacao = (num3 * num4); 
console.log ("O resultado da multiplicação é", multiplicacao)
let subtracao = (num3 - num4); 
console.log ("O resultado da subtração é", subtracao)
let divisao = (num3 / num4); 
console.log ("O resultado da divisão é", divisao)
let exponenciacao = (num3 ** num4);
console.log ("O resultado da exponenciação é", exponenciacao) 

let Valordocell = Number(prompt("Qual é o valor do celular?"))
let descontoCell = Number(prompt("Qual é o valor do desconto?"))
subtracao = (Valordocell - descontoCell)
console.log ("o valor final do celular é de", subtracao)

let numero = 4/2 
numero = numero**3 
numero = numero * (50 - 20)

console.log ("o valor é de", numero)


let nr4 = Number(prompt("Qual é o número que vc deseja?"))
nr4 = nr4*nr4
console.log ("esse é o dobro do número", nr4)

nr4 = Number(prompt("Qual é o número que vc deseja?"))
nr4 = nr4/2 
console.log("esse é a metade do número", nr4) 


let HorasdTrampo = Number(prompt("Qual é a quantidade de horas que trabalhei?"))
let DiasdTrampo = Number(prompt("quantos dias eu trabalhei?"))
let dinheiroporhora = Number(prompt("quanto eu devo cobrar r$100/h?")) 
HorasdTrampo = HorasdTrampo * dinheiroporhora
dinheiroporhora = dinheiroporhora * DiasdTrampo
console.log ("por dia ele ganha r$800 reais, então durante 15 dias ele recebe", dinheiroporhora) 