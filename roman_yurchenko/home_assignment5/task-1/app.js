var a = prompt('Введите первое число', '1');
var b = prompt('Введите второе число', '2');

a = +a;
b = +b;

var action = prompt('1 - сумма; 2 - разница; 3 - умножение; 4 - деление;', '2');

function sum(a, b) {
    return console.log(a + b);
}

function sub(a, b) {
    return console.log(a - b);
}

function mult(a, b) {
    return console.log(a * b);
}

function div(a, b) {
    return console.log(a / b);
}

switch (action) {
    case '1':
    sum(a, b);
    break;

    case '2':
    sub(a, b);
    break;

    case '3':
    mult(a, b);
    break;

    case '4':
    div(a, b);
    break;
}