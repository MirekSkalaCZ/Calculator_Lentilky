/**** Functions used in script.js ****/

/**** Variables ****/

let display = document.getElementById("display");

let btn_reset = document.getElementById("btn_reset");

let btn_equal = document.getElementById("btn_equal");

/**** Functions ****/

/* Reset Function */

function reset(){

    btn_reset.addEventListener("click", function(){
        display.innerText = "0";
    })

}

/* Equal Function */

function equal(){

    btn_equal.addEventListener("click", function(){
        display.innerText += "=";
    })

}

/* Replacing values */

function zeroing(){

    if(display.innerText == "0"){
        display.innerText = "";
    }

}

