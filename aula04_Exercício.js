const prompt = require("prompt-sync")(); 

//Exercício de Variáveis
let nomeAluno = "Fellipe" 
let Altura = 1.73
let Escola = "Sesi"
let AnoAtual = "2°ano B"
console.log (nomeAluno, Altura, Escola, AnoAtual);


let nomeProfessor = prompt("Qual é o nome do professor?");
let matéria = prompt("Qual é a matéria do professor?");
let AnoprofIngressou = prompt("Em que o ano o professor ingressou?");
console.log (nomeProfessor, matéria, AnoprofIngressou);


nomeAluno = prompt("qual é o nome do aluno?");
Altura = parseFloat(prompt("qual é a sua altura?"));
Escola = prompt("qual é a sua escola?");
AnoAtual = parseInt(prompt("qual é a o seu ano atual?"));
console.log (nomeAluno, Altura, Escola, AnoAtual);
