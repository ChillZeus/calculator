let number1 = null;
let number2 = null;
let operation = "false";
let newhtml = "<h1>enter your stuff</h1>"
let result = 0;
let symbol = "?";

//document.getElementById("calcdisplay").innerHTML = newhtml;

function refresh() {
    document.getElementById("calcdisplay").innerHTML = newhtml;
}

function clearDisplay() {
    console.log("cleared");
    number1 = 0;
    number2 = 0;
    result = 0;
    operation = "false";
    newhtml = "<h1>enter your stuff</h1>";
    refresh();
    return null;
}

function plus() {
    operation = "true";
    whichOne = "plus"
    symbol = "+";
    newhtml = "<h1>" + number1 + " " + symbol + "<h1>";    
    refresh();
    return null;
}
function minus() {
    operation = "true";
    whichOne = "minus";
    symbol = "-";
    newhtml = "<h1>" + number1 + " " + symbol + "<h1>";
    refresh();
    return null;
}
function multiply() {
    operation = "true";
    whichOne = "multiply";
    symbol = "x";
    newhtml = "<h1>" + number1 + " " + symbol + "<h1>";
    refresh();
    return null;
}
function divide() {
    operation = "true";
    whichOne = "divide"
    symbol = "/";
    newhtml = "<h1>" + number1 + " " + symbol + "<h1>";
    refresh();
    return null;
}

function pi() {
    if (number1 == null) {
        newhtml = "<h1>enter your stuff</h1>";
        whichOne = "pi";
        refresh();
    } if (number1 > 0) {
        whichOne = "pi";
        newhtml = "<h1>" + number1 + " x " + " π " + "</h1>"
        refresh();
    }
}

// number functions
function one() {
    if (operation == "false") {
        number1 = 1;
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == "true") {
        number2 = 1;
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    }
    return null;
}
function two() {
    if (operation == "false") {
        number1 = 2;
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == "true") {
        number2 = 2;
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    }
    return null;
}
function three() {
    if (operation == "false") {
        number1 = 3;
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == "true") {
        number2 = 3;
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    }
    return null;
}
function four() {
    if (operation == "false") {
        number1 = 4;
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == "true") {
        number2 = 4;
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    }
    return null;
}
function five() {
    if (operation == "false") {
        number1 = 5;
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == "true") {
        number2 = 5;
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    }
    return null;
}
function six() {
    if (operation == "false") {
        number1 = 6;
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == "true") {
        number2 = 6;
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    }
    return null;
}
function seven() {
    if (operation == "false") {
        number1 = 7;
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == "true") {
        number2 = 7;
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    }
    return null;

}
function eight() {
    if (operation == "false") {
        number1 = 8;
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == "true") {
        number2 = 8;
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    }
    return null;
}
function nine() {
    if (operation == "false") {
        number1 = 9;
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == "true") {
        number2 = 9;
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    }
    return null;
}
function zero() {
    if (operation == "false") {
        number1 = 0;
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == "true") {
        number2 = 0;
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    }
    return null;
}
// end of number array

function equal() {    
    if (whichOne == "plus") {
        result = number1 + number2;
        console.log(result)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + " = " + result + "<h1>";
        refresh();
    } if (whichOne == "minus") {
        result = number1 - number2;
        console.log(result)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + " = " + result + "<h1>";
        refresh();
    } if (whichOne == "multiply") { 
        result = number1 * number2;
        console.log(result)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + " = " + result + "<h1>";
        refresh();
    } if (whichOne == "divide") {
        result = number1 / number2;
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + " = " + result + "<h1>";
        refresh();
    } if (whichOne == "pi") {
        result = number1 * 3.14;
        newhtml = "<h1>" + number1 + " x π " + " = " + result + "<h1>";
        refresh();
    }
}

refresh();