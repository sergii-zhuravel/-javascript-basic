function checkNumber(a) {
    return a % 2 === 0;
 }

while(true) {
    var number = prompt('Введите первое число', '1');

    if(number == 0) {
        break;   
    } else if (checkNumber(number)) {
        console.log('Четное') 
    } else {
        console.log('Не четное'); 
    } 
}
