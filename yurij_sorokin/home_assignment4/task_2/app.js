
var number;
var oddEvenCheck;

while(number !== 0){
    number = parseInt(prompt('please enter number'));
    oddEvenCheck = number%2;

    if(oddEvenCheck == 0){
    console.log('even');
    } else if (oddEvenCheck !== 0){
    console.log('odd');
    };
};