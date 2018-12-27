var numb = prompt ( "Enter number", "");

document.write("Input number = " + numb + "<br/><br/>");

for(var i = 1; i <= numb; i++)
{
    if (i%2 === 0) document.write("Even number = " + i + "<br/>");
}