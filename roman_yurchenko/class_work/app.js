
function myFunc() {
    var accum = 0;
    for(var i = 0; i < arguments.length; i ++) {
        accum = accum + arguments[i];
    }

    return accum;
}

console.log(myFunc(1+1));

function calc(a, b, mult) {
    return mult(a+b);
}

function mult(a,b) {
    return a + b;
}

var res = calc(3,3,mult);
console.log(res);

var toDo = {
    id: 1,
    tittle: 'text',
    description: 'Купить',
    status: 'To do',
}


for(key in toDo) {
    console.log(toDo[key].toString().toUpperCase());
}