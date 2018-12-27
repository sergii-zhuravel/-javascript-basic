document.write('Test');


clearScreen()

var myOuterLineBreak = "";

printMessage();

printMessage("Hello world", true);
printMessage("Hello world", true);



function printMessage(message="DEFAULT MESSAGE", isLineBreak=true) {
  var lineBreak = "<br/>";
  myOuterLineBreak = lineBreak;
  var outMessage = isLineBreak === true ? message + myOuterLineBreak : message;
  document.write(outMessage);
}

console.log(myOuterLineBreak);

function clearScreen() {
  document.body.innerHTML = '';
}