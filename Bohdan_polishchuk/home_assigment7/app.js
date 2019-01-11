function findByAge(array, number) {
    array.forEach(function(array) {
        if (array.age === number) {
            console.log("Search successful: ", array);
            // console.log(array);
        }
    })
}


var arr1 = [{name: "name1", age: 6}, {name: "name2", age: 7}, {name: "name3", age: 8}, {name: "name4", age: 9}];
var arr2 = [{name: "name1", age: 33}, {name: "name2", age: 32}, {name: "name3", age: 31}, {name: "name4", age: 30}];
var arr3 = [{name: "name1", age: 344}, {name: "name2", age: 355}, {name: "name3", age: 366}, {name: "name4", age: 377}];
var arr4 = [{name: "name1", age: 2690}, {name: "name2", age: 2634}, {name: "name3", age: 2656}, {name: "name4", age: 2634}];
var arr5 = [{name: "name1", age: 79876}, {name: "name2", age: 54321}, {name: "name3", age: 12345}, {name: "name4", age: 49876}];

findByAge(arr1, 9);