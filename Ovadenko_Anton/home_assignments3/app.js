

var startNumb = prompt('первое число : Введите число');
var a;
a = startNumb;
a++;
++a;
a = +a + 1;
a = a += 1;
a = a + +true;

document.writeln(`
Начальное число - ${startNumb} <br>
Рузельтат - ${a}
`);


var number =  prompt('Второе число : Напишите дробное число');

if(number.indexOf('.') > 0) {
    alert(~~number);
} else {
    alert('Это не дробное число');
}