var numb = prompt ( "Enter number", "");

while(+numb != 0 ){
 if (+numb%2 === 0){ 
     document.write("Number " + numb + " even<br/><br/>");
     numb = prompt ( "Enter number again", "");
  } else if (+numb%2 === 1){
    document.write("Odd number " + numb + "<br/><br/>");
    numb = prompt ( "Enter number again", "");
  }
}

if (+numb === 0 || numb === undefined || numb === null){ document.write("Last input number 0 or NaN or you cancel input.<br/><br/>Please refresh page.<br/>") }