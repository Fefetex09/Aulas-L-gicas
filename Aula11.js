//Estrutura de laço de repetição for
const prompt = require("prompt-sync")();

//incialização de variável, condição do for, incremento da variável
for(let contador = 1; contador <= 5; contador++) {
console.log (contador)
} 

console.log ("FIM")

//contando de 3 em 3
for(let curry_for_tree = 5; curry_for_tree <= 50; curry_for_tree++) {
    console.log (curry_for_tree)
    } 
    
    console.log ("Curry it s the G.O.A.T")

    
    
    
    
    //Utilizando o break para parar o for
    for(let contador = 1; contador <= 5; contador++) {
        console.log (contador)
    if (contador == 50){
        break; 
    } 
        
        } 
        
        console.log ("FIM")

    

        console.log("Entregando os notebooks");
        for(let nr = 1; nr <= 32; nr++){
            let nome = prompt(`quem é o ${nr}: `);
            let present = prompt(`O(A) ${nome} está presente ( S ou N)?`);
            
            if (present == "S"){
            console.log (`Pegar o note ${nr}`);
             console.log (`Levar o note até o(a) ${nome}`); 

            } else {
                console.log(`Não pegar o note ${nr}`)
            }
        }
        console.log ("FIM")

        //tabuado com o for
        let nr = 6
        for(let contadora = 1; contadora <= 10; contadora++){
            console.log(`${nr} x ${contadora} = ${nr * contadora}`);   
        }
             
    
