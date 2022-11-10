/**** Main Code ****/

/* Start display value */

display.value = 0;

/* Getting the number value from the button and adding into the calculator */

for(let i = 0; i <= 9; i++){
    
    let number_btn = document.getElementById("btn_" + i);
    
    number_btn.addEventListener("click", function(e){
            
        zeroing();
    
        display.value += Number(e.target.innerText);

    })
    
}

/* Getting the symbols value from the button and adding into the calculator */

for(let i = 0; i <= 2; i++){
    
    let symbol_btn = document.getElementById("symbol_" + i);
    
    symbol_btn.addEventListener("click", function(e){
                
        display.value += e.target.innerText;

    })
    
}







