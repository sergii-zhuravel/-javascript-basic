// Task one
var userInput = parseInt(prompt("Enter any number"));
var lineBreak = "<br />";

for (var i = 1; i <= userInput; i++) {
    if (i % 2 == 0) {
        document.writeln(i);
    }
}

// Task two

while(userInput !== 0){
    var userInput = parseInt(prompt("Enter any number "));
    if (userInput % 2 === 0) {
        document.writeln("You entered an even number, it is = ", userInput + lineBreak);
    }
    else{
        document.writeln("You entered not an even number, it is = ", userInput + lineBreak);
    }
}
    