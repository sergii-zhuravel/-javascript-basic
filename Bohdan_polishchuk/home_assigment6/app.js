// Task 1

var inputName = prompt("Enter you name ->");
var inputAge = prompt("Enter you age ->");

var outputPerson = {
    name: inputName,
    age: parseInt(inputAge)
};

console.table(outputPerson);

// Task 2

function changePersonAge(obj, number) {
    if ('age' in obj) {
        obj.age = number;
        console.log(obj);
    } else {
        console.log("There is no field 'age' in the object");
        return false;
    }
}

changePersonAge({name: "Nick", age: 20}, 30);