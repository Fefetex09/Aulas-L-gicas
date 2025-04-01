const prompt = require("prompt-sync")(); 

//Criando nossa pimeira variável
//Uma variável serve p/ armazenar uma informação/valor
//Memória crie um espaço com o nome curso e receba o valor "desenvolvimento de sistemas"
var curso = "Desenvolvimento de Sistemas";
console.log ("curso");
console.log (curso); //Jeito correto de usar uma variável
console.log ("curso", curso);
var idade  = 16; //inteira
console.log (idade) 
// criando e atribuindo valores e variável

var temperatura = 24.5; //real //float
var nome = "Fellipe" //str //string 

console.log ("Olá" , nome , "voce tem" ,  idade , "anos");
console.log ("está cursando" , curso , "hoje faz" , temperatura , "ºc");

console.log(`olá ${nome} voce tem ${idade} anos
    está cursando ${curso} hoje faz ${temperatura} ºc`); 


//declarando uma variável lógica/boolean (true/false)
var Podedirigir = true; 
var estáChovendo = false; 

//Declarando nenhum valor a variável 

//Exercício 1
//Nota1: valido
//nomeCompleto: valido
//Nome Completo: invalido
//Média: invalido
// console: invalido (palavra reservada)
// _salario: valido
// 9dade: invalido
// Minha_Variavel: valido
// var: invalido
// valor$: invalido
// nome-completo: invalido
// escola_: valido
//TELEFONE: valido
//true: invalido 




let cidade = "Andradina"
var turma = "2ºB"
const ano = 2025

console.log(turma); 
turma = "3ºB" //Reatribuindo o valor de uma variável
console.log(turma);
// ano = 2026; 

var nomeCompleto = "Fellipe" 

let _nome = "Fofão"
let _idade = 22
let _peso = 64.7
console.log(_nome , _idade , _peso); 

//mostrando no console quais são os tipos de dados
console.log(typeof _nome, typeof _idade, typeof _peso);

_nome = prompt("qual é o nome?");
_idade = prompt("qual é a idade?");
_peso = prompt("qual é o peso?");
console.log( _nome, _idade, _peso); 

//criem duas variáveis num1 e num2 e recebam as informações pelo prompt

let num1 
let num2 

num1 = prompt ("Digite o primeiro número")
num2 = prompt ("digite o segundo número") 
console.log (num1 + num2)

console.log(typeof num1); //str /string
num1 = number(num1); //convertendo a variavel do tipo string para number 
console.log(typeof num1) //number

//recebendo uma informação ja convertendo o seu tipo de dados
let nr1 = Number(prompt("digite o primeiro número")); //number
let nr2 = Number(prompt("digite o segundo número"));  //number
console.log (nr1 + nr2)

//convertendo uma variável
nr1 = "100.14";  //string
nr1 = Number('100.14')  //convertendo string para Number
nr1 = parseInt("100.14"); //convertendo string para inteiro 
nr1 = parseFloat ("100") //convertendo str para float 100.00
nr1 = String(100.14); //convertendo um Number para String

_nome = prompt("qual é o nome?");  //string
_idade = parseInt(prompt("qual é a sua idade?"));  //int
_peso = parseFloat(prompt("qual é o seu peso?"));  //float
console.log( _nome, _idade, _peso); n
