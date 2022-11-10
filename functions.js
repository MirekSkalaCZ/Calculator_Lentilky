/**** Functions used in script.js ****/

/**** Variables ****/

let display = document.getElementById("display");

/** Buttons Variables **/

let btn_divide = document.getElementById("btn_divide");

let btn_power = document.getElementById("btn_power");

let btn_times = document.getElementById("btn_times");

let btn_square = document.getElementById("btn_square");

let btn_reset = document.getElementById("btn_reset");

let btn_percent = document.getElementById("btn_percent");

let btn_equal = document.getElementById("btn_equal");

/**** Functions ****/

/** Other Functions **/

/* Replacing values */

function zeroing(){

    if(display.value == 0){
        display.value = "";
    }

}

zeroing();

/** Buttons Functions **/

/* Divide Function */

function divide(){

    btn_divide.addEventListener("click", function(){
        display.value += "/";
    })

}

divide();

/* Power Function */

function power(){

    btn_power.addEventListener("click", function(){
        display.value = Math.pow(display.value, 2).toFixed(2);
    })

}

power();

/* Times Function */

function times(){

    btn_times.addEventListener("click", function(){
        display.value += "*";
    })

}

times();

/* Square Function */

function square(){

    btn_square.addEventListener("click", function(){
        display.value = Math.sqrt(display.value).toFixed(2);
    })

}

square();

/* Reset Function */

function reset(){

    btn_reset.addEventListener("click", function(){
        display.value = "0";
    })

}

reset();

/* Percent Function */

function percent(){

    btn_percent.addEventListener("click", function(){
        display.value = eval(display.value / 100);
    })

}

percent();

/* Equal Function */

function equal(){

    btn_equal.addEventListener("click", function(){
        display.value = eval(display.value);
    })

}

equal();




