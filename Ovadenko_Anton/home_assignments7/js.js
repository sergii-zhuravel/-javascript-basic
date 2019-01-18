var colleagues = [
    {name: 'tolik', age: 26},
    {name: 'andrey',  age: 35},
    {name: 'ulya', age: 24},
    ];

var findByAge = function(objArr, age){
    for (var i = 0; i < objArr.length; i++){
        if (objArr[i].age == age){
            return objArr[i];
        }
    }
    return null;
};

findByAge(colleagues, 26)