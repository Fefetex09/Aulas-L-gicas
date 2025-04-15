function SenhaAleatoria(qtdeCaracteres) {
    let listaCaracteres = ['!','a','R','$','#',5]
    let senha = ','; 

    for (let x = 1; x <= qntedeCaracteres; x++){
        let posSorteada = Math.floor(Math.random() * listaCaracteres.length);
    senha = senha + listaCaracteres [posSorteada];
    } 

    return senha
} 
let senhaGerada = SenhaAleatoria(989898989898);
console.log (senhaGerada); 