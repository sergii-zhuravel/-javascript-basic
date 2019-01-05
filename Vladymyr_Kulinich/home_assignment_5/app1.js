a = prompt("Введите первое число");
b = prompt("Введите второе число");
c = prompt("Введите номер функции: 1. Сумма  2. Умножение  3. Деление 4. Вычитание");
var a = parseInt (a);
var b = parseInt (b);
var c = parseInt (c);
var d = parseInt (d);
if (c == 1) {sum();}
else if (c == 2) {mult();}
else if (c == 3) {div();}
else if (c == 4) {sub();}
function sum() {d = a + b};
function mult() {d = a * b};
function div() {d = a / b};
function sub() {d = a - b};
document.writeln(d);
