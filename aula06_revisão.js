const prompt = require("prompt-sync")();



//Declarando variável sem dados (undefined)
let nota;
//declarando variável com informação
let nome = "Carlos"; 

//Reatribuindo um valor a variável nome
nome = "roberto"; 
nota = 8.5; 

//Entrada de dados em nosso programa
let sobrenome = (prompt ("digite seu sobrenome:"));
let nota1 = Number (prompt("digite a nota da primeira prova:")); 
let nota2 = Number (prompt("digite a nota da segunda prova:")); 

//Processamento dos dados
let media = (nota1 + nota2) / 2; 
let nomecompleto = nome + " " + sobrenome; 
let idade = prompt('digite sua idade');
let idade2 = parseInt(idade); 

//saída dos dados
console.log("---Relatório final---")


let n = 0; 
n = n + 1 //1
n = n + 1 //2
n = n + 1 //3
n = n + 1 //4
n++; //5+
