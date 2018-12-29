function comparison(inputNumber) {
    var inputNumber = prompt("Введите число", 10);
    var inputNumber1 = parseInt(inputNumber);
    if (isNaN(inputNumber1)) {alert("Вы должны ввести число!");}
    else if (inputNumber1 === 0 || inputNumber1 == null) {return document.writeln("Вы ввели 0 и остановили работу функции")} 
    else if (inputNumber1 % 2 == 0 && inputNumber1 != 0) {alert ("Вы ввели четное число");}
    else if (inputNumber1 % 2 != 0) {alert ("Вы ввели нечетное число");}
    setTimeout(comparison, 1000);
};
comparison();