/**** Main Code ****/


/* Start display value */

display.innerText = "0";

/* Getting the number value from the button and adding into the calculator */

for(let i = 0; i <= 9; i++){
    
    let number_btn = document.getElementById("btn_" + i);
    
    number_btn.addEventListener("click", function(e){
            
        e.preventDefault();

        zeroing();
    
        display.innerText += Number(e.target.innerText);
    })
    
}

/* Getting the symbol value from the button and adding into the calculator */

for(let i = 1; i <= 8; i++){
    
    let symbol_btn = document.getElementById("symbol_" + i);
    
    symbol_btn.addEventListener("click", function(e){
            
        e.preventDefault();
    
        display.innerHTML += e.target.innerText;
    })
    
}

reset();

equal();






