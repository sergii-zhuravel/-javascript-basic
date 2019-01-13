//C
var toDoList = [];

var addToDoItem = function() {
    var obj = {};
    obj.title = prompt('Please enter ToDo item title');
    obj.id = toDoList.length;
    obj.status = 'ToDo';
    toDoList.push(obj);
    requestAction();
};


var getToDoList = function(lineBreak) {
    var str = '';
    for(var i = 0; i < toDoList.length; i++) {
        str += JSON.stringify(toDoList[i]) + lineBreak;
    }
    return str;
};


var displayToDoList = function() {
    document.body.innerHTML = "";
    document.write(getToDoList('<br>'));
};


var requestAction = function() {
    
    var actionNumber = parseInt(prompt('Please enter action number: \n1: Add ToDo Item\n2: Show list of items\n3: Close application'));

    if (actionNumber === 1) {
        addToDoItem();
    } else if (actionNumber === 2) {
        alert(getToDoList('\n'));
        requestAction();
    } else if (actionNumber === 3) {
        displayToDoList();
        setTimeout(startApp, 5000);
    }
};


var startApp = function() {
    toDoList = [];
    requestAction();
}; 
    startApp();