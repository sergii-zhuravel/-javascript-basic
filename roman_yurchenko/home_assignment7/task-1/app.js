function findByAge(arr, age) {
    arr.forEach(function(arr) {
        if(arr.yearOld == age) {
            console.log(arr);
        }
    });
}

var array = [{name: 'name1', yearOld: '110'}, {name: 'name2', yearOld: '10'}, {name: 'name3', yearOld: '10'}]
var array2 = [{name: 'name1', yearOld: '111'}, {name: 'name2', yearOld: '11'}, {name: 'name3', yearOld: '10'}]

findByAge(array, 10);
findByAge(array2, 11);
