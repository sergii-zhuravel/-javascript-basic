// Task one
var lineBreak = "<br />";
var a = parseInt(prompt("Enter the first number"));
var b = parseInt(prompt("Enter the second number"));
var numOperation = parseInt(prompt("'1' - Ammount, '2' - Difference, '3' - Multiplication, '4' - Division"));

function sum() {
    return a + b;
}

function dif() {
    return a - b;
}

function mult() {
    return a * b;
}

function div() {
    return a / b;
}


if (numOperation === 1) {
    document.writeln(sum());
    }else if (numOperation === 2) {
        document.writeln(dif());
    }else if (numOperation === 3) {
        document.writeln(mult());
    }else if (numOperation === 4) {
        document.writeln(div());
    }
    else {document.writeln('Error!!!' + lineBreak);
    }

// Task two

var lineBreak = "<br />";

function isEven(number) {
    return number % 2 === 0;
}

while(numIn !== 0) {
    var numIn = parseInt(prompt("Enter any number"));
    if (isEven(numIn) === true) {
        document.writeln("You entered number is event = ", numIn + lineBreak);
    } else {
        document.writeln("You entered not an even number = ", numIn + lineBreak);
    }
}