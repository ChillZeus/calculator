let number1 = "";
let number2 = "";
let number3 = "";
let number4 = "";
let operation = 1;
let newhtml = "<h1>enter your stuff</h1>"
let result = 0;
let symbol = "?";
let memory = 0;

//document.getElementById("calcdisplay").innerHTML = newhtml;

function refresh() {
    document.getElementById("calcdisplay").innerHTML = newhtml;
}

const numberArray = []


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
    operation = operation + 1;
    whichOne = "plus"
    symbol = "+";
    newhtml = "<h1>" + number1 + " " + symbol + "<h1>";    
    refresh();
    return null;
}
function minus() {
    operation = operation + 1;
    whichOne = "minus";
    symbol = "-";
    newhtml = "<h1>" + number1 + " " + symbol + "<h1>";
    refresh();
    return null;
}
function multiply() {
    operation = operation + 1;
    whichOne = "multiply";
    symbol = "x";
    newhtml = "<h1>" + number1 + " " + symbol + "<h1>";
    refresh();
    return null;
}
function divide() {
    operation = operation + 1;
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
    if (operation == 1) {
        number1 = number1 + '1';
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == 2) {
        number2 = number2 + '1';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 3) {
        number3 = number3 + '1';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 4) {
    		number4 = number4 + '1'
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
    }
    return null;
}
function two() {
    if (operation == 1) {
        number1 = number1 + '2';
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == 2) {
        number2 = number2 + '2';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 3) {
        number3 = number3 + '2';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 4) {
    		number4 = number4 + '2'
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
    }
    return null;
}

function three() {
    if (operation == 1) {
        number1 = number1 + '3';
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == 2) {
        number2 = number2 + '3';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 3) {
        number3 = number3 + '3';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 4) {
    		number4 = number4 + '3'
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
    }
    return null;
}
function four() {
    if (operation == 1) {
        number1 = number1 + '4';
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == 2) {
        number2 = number2 + '4';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 3) {
        number3 = number3 + '4';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 4) {
    		number4 = number4 + '4'
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
    }
    return null;
}
function five() {
    if (operation == 1) {
        number1 = number1 + '5';
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == 2) {
        number2 = number2 + '5';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 3) {
        number3 = number3 + '5';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 4) {
    		number4 = number4 + '5'
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
    }
    return null;
}
function six() {
    if (operation == 1) {
        number1 = number1 + '6';
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == 2) {
        number2 = number2 + '6';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 3) {
        number3 = number3 + '6';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 4) {
    		number4 = number4 + '6'
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
    }
    return null;
}
function seven() {
    if (operation == 1) {
        number1 = number1 + '7';
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == 2) {
        number2 = number2 + '7';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 3) {
        number3 = number3 + '7';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 4) {
    		number4 = number4 + '7'
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
    }
    return null;
}
function eight() {
    if (operation == 1) {
        number1 = number1 + '8';
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == 2) {
        number2 = number2 + '8';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 3) {
        number3 = number3 + '8';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 4) {
    		number4 = number4 + '8'
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
    }
    return null;
}
function nine() {
    if (operation == 1) {
        number1 = number1 + '9';
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == 2) {
        number2 = number2 + '9';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 3) {
        number3 = number3 + '9';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 4) {
    		number4 = number4 + '9'
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
    }
    return null;
}
function zero() {
    if (operation == 1) {
        number1 = number1 + '0';
        console.log(number1)
        newhtml = "<h1>" + number1 + "<h1>";
        refresh();
    } if (operation == 2) {
        number2 = number2 + '0';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 3) {
        number3 = number3 + '0';
        console.log(number2)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
        refresh();
    } if (operation == 4) {
    		number4 = number4 + '0'
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + "<h1>";
    }
    return null;
}
// end of number array

function equal() {    
    if (whichOne == "plus") {
        operation = 0
        parseInt(number1, number2, number3, number4)
        result = number1 + number2 + number3 + number4;
        console.log(result)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + " = " + result + "<h1>";
        operation = "false";
        refresh();
    } if (whichOne == "minus") {
        operation = "false"
        result = number1 - number2;
        memory = result;
        console.log(result)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + " = " + result + "<h1>";
        operation = "false";
        refresh();
    } if (whichOne == "multiply") { 
        operation = "false"
        result = number1 * number2;
        memory = result;
        console.log(result)
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + " = " + result + "<h1>";
        operation = "false";
        refresh();
    } if (whichOne == "divide") {
        operation = "false"
        result = number1 / number2;
        memory = result;
        newhtml = "<h1>" + number1 + " " + symbol +  " " + number2 + " = " + result + "<h1>";
        operation = "false";
        refresh();
    } if (whichOne == "pi") {
        operation = "false"
        result = number1 * 3.14;
        result = number1 * 3.1415926535;
        memory = result;
        newhtml = "<h1>" + number1 + " x π " + " = " + result + "<h1>";
        operation = "false";
        refresh();
    }
}

function getMemory() {
    newhtml = "<h1>" + memory + "<h1>";
    refresh();
}

refresh();