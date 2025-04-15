//Escopo de variáveis
//Variável global pode ser acessada por todo mundo
//Variável local só pode ser acessada dentro do bloco
var escola2 = "Senai"

function NomeEscola(){
    let escola2 = "Sesi"
    console.log(`Valor dentro da função: ${escola2}`);
}
var escola = "Senai"; 
console.log(`Valor fora da função: ${escola2}`);
NomeEscola()
console.log(`Valor após a função:  ${escola2}`);
console.log(escola2);

//documentando funções usando o JSDoc
/**
 * Soma de dois números
 * @param {number} a - primeiro número
 * @param {number} b - segundo número
 * @param {number} c - terceiro número
 */
function soma(a, b){
    return a + b;
}
soma (10,4); 