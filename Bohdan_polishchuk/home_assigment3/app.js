// Task one
var userInput = parseInt(prompt("Enter any number ", 0));
var lineBreak = "<br />";
document.writeln('The number you entered = ', userInput + lineBreak);

var oneWay = userInput + parseInt("1");
document.writeln('Now the number is = ', oneWay + lineBreak);

var secondWay = ++oneWay;
document.writeln('Now the number is = ', secondWay + lineBreak);

var thirdWay = secondWay+=1;
document.writeln('Now the number is = ', thirdWay + lineBreak);

var fourthWay = thirdWay + true;
document.writeln('Now the number is = ', fourthWay + lineBreak);

var fifthWay = fourthWay++;
document.writeln('Now the number is = ', fourthWay + lineBreak);

var sixWay = math.add(fourthWay, 1);
document.writeln('Now the number is = ', sixWay + lineBreak);


// Task two
var usIn = parseInt(prompt("Enter a fractional number in format '1.1'"));
document.writeln(~~usIn);