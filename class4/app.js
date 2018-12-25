document.body.innerHTML = "";
document.writeln("<pre>")
for (var i = 1; i <= 20; i++) {
    var n = i.toString().length >= 2 ? i : "0" + i
    document.write(n + " ");
    if (i % 5 == 0) {
        document.writeln();
    }
}
// document.writeln("My friend")
document.writeln("</pre>")