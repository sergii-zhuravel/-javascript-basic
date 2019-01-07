var a = prompt ("Введите любое целое число");
document.writeln ("a = " + +a + "<br/>");
var b = 1;
if (a == 1) {console.log ("no result");}
else if (a < 1) {while (a <= b) {if (b % 2 == 0) {console.log (b)}; b--;}} 
else {while (a >= b) {if (b % 2 == 0) {console.log (b)}; b++;}}
