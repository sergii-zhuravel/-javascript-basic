var a = prompt ("Введите число А");
var b = prompt ("Введите число B");
var oprtn = prompt ("Выберите математическое действие: 1-сложение; 2-вычитание; 3-умножение; 4-деление.");
a = +a; b = +b; oprtn = +oprtn;

function sum(a, b) {return a + b};
function sub(a, b) {return a - b};
function mult(a, b) {return a * b};
function divv(a, b) {return a / b};

if (oprtn == 1) {document.write ("A + B = " + sum(a, b))}
else if (oprtn == 2) {document.write ("A - B = " + sub(a, b))}
else if (oprtn == 3) {document.write ("A * B = " + mult(a, b))}
else if (oprtn == 4) {document.write ("A / B = " + divv(a, b))}
else {document.write ("Вы не ввели номер операции")};