// Task 1
var startNumb = prompt('Task - 1: Введите число');
var a;
a = startNumb;
a = +a + 1;
a++;
++a;
a = a += 1;
a = a + +true;

document.writeln(`
Начальное число - ${startNumb} <br>
Рузельтат - ${a}
`);

// Task 2
var number =  prompt('Task - 2: Напишите дробное число');

if(number.indexOf('.') > 0) {
    alert(~~number);
} else {
    alert('Это не дробное число');
}
