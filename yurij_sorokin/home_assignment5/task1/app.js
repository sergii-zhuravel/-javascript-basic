var a = parseInt(prompt('enter first number'));
var b = parseInt(prompt('enter second number'));
var op = parseInt(prompt('enter operation code: 1 - sum, 2 - subtract, 3 - multiply, 4 - divide'));


function sum(a,b){
    return a + b;
};

function sub(a,b){
    return a - b;
};

function mult(a,b){ 
    return a * b;
};

function div(a,b){
    return a / b;
};


function calc(a,b,op){
   /* if else approach*/
   
    // if(op === 1){
    //     return sum(a, b);
    // } else if(op === 2){
    //     return sub(a,b);
    // } else if(op === 3){
    //     return mult(a,b);
    // } else if(op === 4){
    //     return div(a,b);
    // } else {
    //     return 'operation doesn\'t exist';
    // }
   
    /*switch case approach*/
    switch(op){
        case 1:
        return sum(a, b);
        break;
        case 2:
        return sub(a,b);
        break;
        case 3:
        return mult(a,b);
        break;
        case 4:
        return div(a,b);
        break;
        default:
		return 'operation doesn\'t exist';
    };

}

console.log(calc(a,b,op));

