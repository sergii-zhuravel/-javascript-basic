var number;
var oddEvenCheck;

function stopWhenZero(x,y){
    while(x !== 0){
        x = parseInt(prompt('please enter number'));
        y = x%2;

        if(y == 0){
            console.log('even');
        } else if (y !== 0){
            console.log('odd');
        };
    };
};

stopWhenZero(number, oddEvenCheck);