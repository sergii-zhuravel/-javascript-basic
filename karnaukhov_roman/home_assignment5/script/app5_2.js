var a = prompt ("Введите число. Выход: 0");
a = +a;
function evenoddcheck (a) {if (a % 2 == 0) {return true} else {return false}};
while (true) {
  if (a == "") {a = prompt ("Необходимо ввести число. Выход: 0")}
  else if (a == 0) {alert ("Вы вышли из программы"); break}
  else if (evenoddcheck (a) == true) {a = prompt ("Вы ввели ЧЕТНОЕ число. Введите число. Выход: 0")}
  else {a = prompt ("Вы ввели НЕЧЕТНОЕ число. Введите число. Выход: 0")}
}
