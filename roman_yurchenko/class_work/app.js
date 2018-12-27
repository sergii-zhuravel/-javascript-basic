// Task 2
var number =  prompt('Напишите число');

// if (number % 2 > 0) {
    
// } else {
   
// }


// Написать программу для числа N. выведет все четные числа.

for (var i = 0; i <= number; i++) {
    var final = +number - i;

    if (final % 2 == 0) {
        console.log(final);
    }

}