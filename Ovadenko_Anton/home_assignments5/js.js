// Task one //
var a = parseInt(prompt("введите первое число"));
var b = parseInt(prompt("введите второе число"));
var numOperation = parseInt(prompt("'1' - добавление, '2' - вычетание, '3' - множение, '4' - деление"));

function dob() {
    return a + b;
}

function vich() {
    return a - b;
}

function mnoj() {
    return a * b;
}

function del() {
    return a / b;
}


if (numOperation === 1) {
    document.writeln(dob());
    }else if (numOperation === 2) {
        document.writeln(vich());
    }else if (numOperation === 3) {
        document.writeln(mnoj());
    }else if (numOperation === 4) {
        document.writeln(del());
    }
    else {document.writeln('ошибка');
    }

// Task two //


function isNumber(number) {
    return number % 2 === 0;
}

while(numIn !== 0) {
    var numIn = parseInt(prompt("введите любое число"));
    if (isNumber(numIn) === true) {
        document.writeln("это четное число  = ", numIn);
    } else {
        document.writeln("это не четное число  = ", numIn);
    }
}