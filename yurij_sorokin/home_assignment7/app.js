var colleagues = [
    {name: 'yurij', age: 27},
    {name: 'alex',  age: 45},
    {name: 'tanya', age: 23},
    ];

var findByAge = function(objArr, age){
    for (var i = 0; i < objArr.length; i++){
        if (objArr[i].age == age){
            return objArr[i];
        }
    }
    return null;
};

findByAge(colleagues, 27)
