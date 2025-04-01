let filminhos = ["Vingadores", 
    "John Wick 4", 
    "Velozes e Furiosos", 
    "Deadpool", 
    "Logan", 
    "Top Gun:Maverick", 
    "Tropa de Elite", 
    "Homem Aranha 3" ]; 
    console.log (filminhos[0]); 

    console.log (filminhos[4]);

    filminhos[7] = "Venom"; 
    console.log (filminhos)
    
    filminhos.push = ("O segredo do animais"); 
   filminhos = [...filminhos, "Logan"]
    console.log (filminhos);

    filminhos.spice (5,0, "coringa");
    console.log (filminhos);
    
    filminhos.shift ()
    console.log (filminhos);
    
    filminhos.pop ()
    console.log (filminhos);
    
    console.log (filminhos[0,1,2]);

    console.log (filminhos[4,5,6,7]);
    console.log (filminhos.length);
    filminhos.reverse()