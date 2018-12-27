function printMessage(message, isLineBreak=true) {
  var lineBreak = "<br/>";
  var outMessage = isLineBreak === true ? message + lineBreak : message;
  document.write(outMessage);
}

function clearScreen() {
  document.body.innerHTML = '';
}