/**** Functions used in script.js ****/

/**** Variables ****/

let display = document.getElementById("display");

let btn_reset = document.getElementById("btn_reset");

let btn_equal = document.getElementById("btn_equal");

/**** Functions ****/

/* Reset Function */

function reset(){

    btn_reset.addEventListener("click", function(){
        display.value = "0";
    })

}

/* Equal Function */

function equal(){

    btn_equal.addEventListener("click", function(){
        display.value = eval(display.value);
    })

}

/* Replacing values */

function zeroing(){

    if(display.value == 0){
        display.value = "";
    }

}

