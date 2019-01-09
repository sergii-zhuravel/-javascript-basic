function changePersonAge(obj, number) {
    if('age' in obj) {
        obj.age = number;
        console.log(obj);
    } else {
        console.log(false);
    }
};

changePersonAge({name: 'Nick', age: 20}, 30);
