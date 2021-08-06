let number1 = 0;
let number2 = 0;
let operation = "false";
const newhtml = "<h1>enter your stuff</h1>"

document.getElementById("calcdisplay").innerHTML = "<h1>asdf</h1>";

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
    return null;
}
function minus() {
    operation = "true";
    return null;
}
function multiply() {
    operation = "true";
    return null;
}
function divide() {
    operation = "true";
    return null;
}

function one() {
    if (operation = "false") {
        number1 = 1;
        console.log(number1);
    } if (operation) {
        number2 = 2;
        console.log(number2);
    }
}