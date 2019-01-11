var staff1 = [{name: 'Vasya', age: 17},{name: 'Kolya', age: 15},{name: 'Igor', age: 20},{name: 'Dima', age: 17}];
var lookForAge = 12;
var i;
function findByAge (staff1, lookForAge) {// если в массиве больше одного совпадения, то функция вернет их все в виде массива.
    var staff2 = []; 
    var j = 0;
    for (i = 0; i < staff1.length; i++) {
        if (staff1[i].age == lookForAge) {
            staff2[j] = staff1[i]; j++}
        };
    return staff2;
};
console.log (findByAge (staff1, lookForAge));


