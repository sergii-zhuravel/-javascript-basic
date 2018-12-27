// Task 1

var number = prompt('// Task 1: Введите число', 10);

for(var i = 1; i < number; i++) {
    if(i % 2 > 0) {
        continue;
    }
    console.log(i + '<br>');
}

// Task 2

function checkFunc() {
    return prompt('// Task 2: Введите число', 5);
}

for(var checkNumber; checkNumber = checkFunc();) {
    if(checkNumber == 0 || checkNumber === null) {
        break;
        } else if(checkNumber % 2 === 0) {
            alert('Четное');
        } else {
            alert('Не четное');
    }
}
