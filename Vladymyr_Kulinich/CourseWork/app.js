var todo = [];
function toDoList () {
    var newRequest = prompt("Выберите опцию: \n 1. Добавить новую задачу \n 2. Вывести задачи на экран \n 3. Завершить работу приложения");
 if (newRequest == "" || newRequest == null || newRequest == false || newRequest > 3 || newRequest < 1) {alert ("Введите команду из предлагаемого диапазона"); toDoList();}
 else if (isNaN(newRequest)) {alert("Вы должны ввести число!"); toDoList();}
 else if (newRequest == 1) {newElement();}
 else if (newRequest == 2)  {doList();}
 else if (newRequest == 3) {finishList();}
};
toDoList();
function newElement () {
    var newTask = prompt("Введите новую задачу");
    todo.push("<br/>" + newTask); toDoList()};
function doList() {document.writeln(todo); setTimeout(toDoList, 1000);};
function finishList() {return document.writeln ("Вы завершили работу с приложением!");} 