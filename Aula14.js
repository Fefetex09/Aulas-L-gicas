function Linha () {
    console.log ("- - - - - - - - - - - - - -");
}

Linha (); 
console.log("SESI / SENAI");           
Linha ();


function cabecario(){
    Linha ();
    console.log("SESI / SENAI");
    Linha ();
}


function cabecarioEscola(nomeEscola){
    Linha ();
    console.log(nomeEscola);
    Linha ();
} 

cabecarioEscola ("USP");
cabecarioEscola (`Sesi`);

function Soma (nr1, nr2){
    let resultado = nr1 + nr2;
    console.log (resultado);
}
Soma (98,2); 
Soma (754863, 66666); 


function Media (nr1, nr2){
    let resultado = (n1 + n2) / 2
    return resultado
} 
let valor = Media(5,8); 



