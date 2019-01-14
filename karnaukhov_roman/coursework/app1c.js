document.body.innerHTML = "";
var tipList = "1 - Просмотреть список задач <br/> 2 - Добавить новую задачу <br/> 3 - Редактировать задачу или статус <br/> 4 - Удалить задачу. <br/> 9 - Вывести список команд <br/> 10 - Выйти из программы";
document.write(tipList);
var toDoList = [];

while (true) {
  var tipChoice = prompt("Введите номер команды. Список команд-9. Выход-10.");
  if (tipChoice == 1) {printToDoList(toDoList)}//выводит список тудушек.
    else if (tipChoice == 2) {addToDo(toDoList)}//добавляет тудушку.
    else if (tipChoice == 3) {editToDo(toDoList)}//редактирует тудушку.
    else if (tipChoice == 4) {delToDo(toDoList)}//удаляет тудушку с заданным индексом.
    else if (tipChoice == 9) {document.body.innerHTML = ""; document.write(tipList); console.log(tipList)}//выводит в консоль список комманд.
    else if (tipChoice == 10) {alert("Вы вышли из программы."); break}
    else {tipChoice = prompt("Не верный номер команды. Введите номер из списка. Список команд-9. Выход-10.")};
}

function printToDoList (toDoList) {//вывод в консоль списка тудушек.
  document.body.innerHTML = "";
  //document.write (toDoList); 
  console.table (toDoList);//prompt блочит вывод в документ, значит будем выводить в консоль.
}

function setStat() {//функция установки статуса
  while (true) {
    var statToDo = prompt("Статус задачи: 1 - Planned, 2 - In progress, 3 - Done.");
    if (statToDo == 1) {statToDo = "Planned"; break}
      else if (statToDo == 2) {statToDo = "In progress"; break}
      else if (statToDo == 3) {statToDo = "Done"; break}
      else {statToDo = prompt("Статус не введен. Статус задачи: 1 - Planned, 2 - In progress, 3 - Done.")}
  };
return  statToDo;
}

function setIndex (indexTo) {//функция проверки наличия индекса в массиве.
  while (true) {
    if (indexTo > toDoList.length - 1) {
     indexTo = prompt("Индекс превышает колличество задач. Введите ещё раз.")}
    else if (indexTo == "") {indexTo = prompt("Нужно ввести число. Введите ещё раз.")}
    else break;
  };
return indexTo;
}

function addToDo (toDoList) {//добавляет в массив тудушку
  var whatToDo = prompt("Опишите суть задачи");
  toDoList.push ({toDo: whatToDo, status: setStat()});
  return toDoList;
}

function editToDo (toDoList) {//редактирует существующую тудушку
  var indexToEdit = prompt("Введите индекс задачи которую хотите редактировать");
  indexToEdit = setIndex(indexToEdit);
  var keyToEdit = prompt("1 - Редактировать задачу. 2 - Редактировать статус.");
  while (true) {
    if (keyToEdit == 1) {toDoList[indexToEdit].toDo = prompt("Измените задачу"); break}
    else if (keyToEdit == 2) {toDoList[indexToEdit].status = setStat(); break}
    else {keyToEdit = prompt("Возможны только два варианта. 1 - Редактировать задачу. 2 - Редактировать статус.")}
  };
  return toDoList;
}

function delToDo (toDoList) {//удаляет тудушку
  var indexToDel = prompt("Введите индекс задачи которую хотите удалить.");
  indexToDel = setIndex(indexToDel);
  toDoList.splice(indexToDel, 1); alert("Вы удалили " + indexToDel + " задачу");
return toDoList;
}

