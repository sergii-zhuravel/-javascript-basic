//task 2
var person = {name: 'yurij', age: 30};

var changePersonAge = function(personObj, age) {
    if (!personObj.age) {
      return false;
    } 
    personObj.age = age;
    return true;
};

changePersonAge(person, 32);
