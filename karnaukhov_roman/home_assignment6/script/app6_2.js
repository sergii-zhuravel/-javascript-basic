// var person = {nam: 'Dodo', erw: 20,};
// console.log (person);
// var newage = prompt ("Введите новый возраст");


function changePersonAge (person , newage) {
  if  ('age' in person) {person.age = newage; return true;}
  else {return false;};
}


// if (changePersonAge(person, newage) == true) {console.log (person)}
// else if (changePersonAge(person, newage) == false) {console.log ("No Age:")}
