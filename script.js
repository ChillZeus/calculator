let number1 = 0;
let number2 = 0;
let operation = "false";
const newhtml = "<h1>enter your stuff</h1>"
let result = 0;

function clear() {
    number1 = 0;
    number2 = 0;
    operation = "nothing";
    newhtml = "<h1>cleared</h1>";
    // cleared is placeholder
    return null;
}

function refresh() {
    number1 = 0;
    number2 = 0;
    // will include new html
    return null;
}

function plus() {
    operation = "true";
    whichOne = "plus"
    return null;
}
function minus() {
    operation = "true";
    whichOne = "minus"
    return null;
}
function multiply() {
    operation = "true";
    whichOne = "multiply"
    return null;
}
function divide() {
    operation = "true";
    whichOne = "divide"
    return null;
}


// number functions
function one() {
    if (operation == "false") {
        number1 = 1;
        console.log(number1)
    } if (operation == "true") {
        number2 = 1;
        console.log(number2)
    }
    return null;
}

function two() {
    if (operation == "false") {
        number1 = 2;
        console.log(number1)
    } if (operation == "true") {
        number2 = 2;
        console.log(number2)
    }
    return null;
}

function three() {
    if (operation == "false") {
        number1 = 3;
        console.log(number1)
    } if (operation == "true") {
        number2 = 3;
        console.log(number2)
    }
    return null;
}

function four() {
    if (operation == "false") {
        number1 = 4;
        console.log(number1)
    } if (operation == "true") {
        number2 = 4;
        console.log(number2)
    }
    return null;
}

function five() {
    if (operation == "false") {
        number1 = 5;
        console.log(number1)
    } if (operation == "true") {
        number2 = 5;
        console.log(number2)
    }
    return null;
}

function six() {
    if (operation == "false") {
        number1 = 6;
        console.log(number1)
    } if (operation == "true") {
        number2 = 6;
        console.log(number2)
    }
    return null;
}

function seven() {
    if (operation == "false") {
        number1 = 7;
        console.log(number1)
    } if (operation == "true") {
        number2 = 7;
        console.log(number2)
    }
    return null;

}

function eight() {
    if (operation == "false") {
        number1 = 8;
        console.log(number1)
    } if (operation == "true") {
        number2 = 8;
        console.log(number2)
    }
    return null;
}

function nine() {
    if (operation == "false") {
        number1 = 9;
        console.log(number1)
    } if (operation == "true") {
        number2 = 9;
        console.log(number2)
    }
    return null;
}

function zero() {
    if (operation == "false") {
        number1 = 0;
        console.log(number1)
    } if (operation == "true") {
        number2 = 0;
        console.log(number2)
    }
    return null;
}

// end of number array

function equal() {    
    if (whichOne == "plus") {
        result = number1 + number2;
        console.log(result)
    } if (whichOne == "minus") {
        result = number1 - number2;
        console.log(result)
    } if (whichOne == "multiply") {
        result = number1 * number2;
        console.log(result)
    } if (whichOne == "divide") {
        result = number1 / number2;
        console.log(result);
    }
}