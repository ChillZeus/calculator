let newhtml = "<h1>enter your stuff</h1>"
let result = 0;
let symbol = "?";
let memory = 0;

//document.getElementById("calcdisplay").innerHTML = newhtml;

function refresh() {
    document.getElementById("calcdisplay").innerHTML = newhtml;
}

let equation = [];
let toPush = 0;

function clearDisplay() {
    console.log("cleared");
    equation = [];
    result = 0;
    operation = "false";
    newhtml = "<h1>enter your stuff</h1>";
    refresh();
    return null;
}


function plus() {
    equation.push(toPush)
    equation.push("+")
    refresh();
    toPush = 0;
}
function minus() {
    equation.push(toPush)
    equation.push("-")
    refresh();
    toPush = 0;
}
function multiply() {
    equation.push(toPush)
    equation.push("x")
    refresh();
    toPush = 0;
}
function divide() {
    equation.push(toPush)
    equation.push("/")
    refresh();
    toPush = 0;
}

// number functions
function one() { toPush = toPush * 10; toPush += 1; }
function two() { toPush = toPush * 10; toPush += 2; }
function three() { toPush = toPush * 10; toPush += 3; }
function four() { toPush = toPush * 10; toPush += 4; }
function five() { toPush = toPush * 10; toPush += 5; }
function six() { toPush = toPush * 10; toPush += 6; }
function seven() { toPush = toPush * 10; toPush += 7; }
function eight() { toPush = toPush * 10; toPush += 8; }
function nine() { toPush = toPush * 10; toPush += 9; }
function zero() { toPush = toPush * 10; }

// end of number array


// this definitely does not work
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