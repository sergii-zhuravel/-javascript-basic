function comLi() {
    var commandList;
    do {
        commandList = parseInt(prompt("--->> Enter command number <<---\n1 -> Add new task\n2 -> Display tasks on the screen\n3 -> Finish the job with the app"));
    } while (commandList >= 4 && commandList != null);

    if (commandList === 1) {
        addTask();
    } else if (commandList === 2) {
        clearScreen();
        printTask();
    } else if (commandList === 3) {
        exitApp();
    }
}

var mas = new Array ();

function addTask() {
    mas.push(prompt("--->> Describe the task <<---"));
    comLi();
}

function printTask() {
    var i;
    var lineBreak = "<br/>";
    document.writeln("*** My To Do List ***" + lineBreak);
    for (i = 0; i < mas.length; i++) 
        document.write(mas[i] + lineBreak);
    setTimeout(comLi, 1000);
}

function exitApp() {
    clearScreen();
    document.writeln("*** Good Bye! ***");
    return false;
}

function clearScreen() {
    document.body.innerHTML = '';
}

comLi();