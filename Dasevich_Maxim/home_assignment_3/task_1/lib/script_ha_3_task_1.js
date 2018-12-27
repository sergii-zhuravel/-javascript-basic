var numb = prompt ( "Enter number", "");

document.write("Input number = " + numb + "<br/><br/>");

var parseNumb = parseInt(numb);

var incrementNumb1 = +numb + 1;
var incrementNumb2 = +numb + +true;
var incrementNumb3 = (parseNumb += 1);
var incrementNumb4 = ++numb;
var incrementNumb5 = numb++;

document.write("Version 1 (Numb + 1) = " + incrementNumb1 + "<br/>");
document.write("Version 2 (Numb + +true) = " + incrementNumb1 + "<br/>");
document.write("Version 3 (Numb += 1) = " + incrementNumb2 + "<br/>");
document.write("Version 4 (++Numb) = " + incrementNumb3 + "<br/>");
document.write("Version 5 (Numb++) = " + incrementNumb3 + "<br/>");