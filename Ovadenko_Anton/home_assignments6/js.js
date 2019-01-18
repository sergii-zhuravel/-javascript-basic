// Task one //

var person = {};
person.nam = prompt ("Введите Ваше имя");
person.age = prompt ("Введите Ваш возраст");
console.log (person);

// Task two //

function agePerson (person , newage) {
    if  ('age' in person) {person.age = newage; return true;}
    else {return false;};
  }
  