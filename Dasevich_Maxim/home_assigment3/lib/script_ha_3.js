var numb = prompt ( "Enter number", "");

var parseNumb = parseInt(numb);

var incrementNumb1 = +numb + 1;
var incrementNumb2 = (parseNumb += 1);
var incrementNumb3 = ++numb;

alert("Version 1 (Numb + 1) = " + incrementNumb1 + "");
alert("Version 2 (Numb += 1) = " + incrementNumb2 + "");
alert("Version 3 (++Numb) = " + incrementNumb3 + "");