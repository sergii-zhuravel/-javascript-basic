var n = prompt("Введите число", 10);
for (var i = 1; i <= n; i++) {
  if (i % 2 != 0) continue;
  document.writeln(i);
}