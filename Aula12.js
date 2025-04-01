//variaveis compostas / vetores / arrays 


//Variável simples, cabe apenas 1 dado vez
let fruta = "maçã"; 
fruta = "banana";

let frutas = ["maçã", "banana", "uva", "abacaxi"]

console.log (frutas)
console.log (frutas[1])

//Declarando uma lista vazia
let listavazia = []

//declaração de uma lista de números
let numero = [1,2,3,4,5,6,6,7,8,9,10]

//declaração de uma lista mista
let listaMista = [4, "feijao", true, 7.55]; 

let listaDeVeteros = [["cola-cola",  "hot-dog"],[5.00, 10.00]]; 
console.log(listaDeVeteros[0],[1])

console.log (frutas)
//Alterando o conteúdo de um item da lista
frutas[3] = "melancia";
console.log (frutas); 

//Inserindo um novo item na lista
//frutas[4] = "laranja"
frutas.push("laranja");
frutas = [...frutas, "laranja"]; //utilizando o operador spread

frutas.splice(2,0,"morango"); 
// 2 - posição
// 0 - quantidade de itens a serem removidos

//Excluindo itens da lista
frutas.splice(3,1);
// 3 - posição
// 1 - quantidade de itens a serem removidos
frutas.shift(); //remove o primeiro item da lista
frutas.pop(); //remove o ultimo item da lista

frutas = ["maçã", "banana", "morango", "abacaxi", "melancia", "laranja", "uva"]; 
console.log(frutas[4]); //posição especifica
console.log(frutas(0,4)) //da posição 0 pegar 4 itens
console.log(frutas.slice(1))//da posição 1 até o ultimo
console.log(frutas.lastIndexOf(-1))//nº de itens no fim pro ínicio
console.log (frutas.length) //total de itens na lista

frutas.sort() //ordenando lista em ordem crescente
console.log (frutas)
frutas.reverse() //ordenando lista em ordem descrecente
console.log(frutas); 
