var taskArr = [];

while(true) {
    if(+taskCheck === 3) {
       break;
    } else {
        var taskCheck = prompt(
            `Введите номер команды:
            1 - Добавить новую задачу;
            2 - Вывести задачи на экран;
            3 - Закончить работу с приложением;
            `
        );
    }

    switch(taskCheck) {
        case '1':
        addTask();
        break;
    
        case '2':
        if(taskArr.length > 0) {
            print();
        } else {
            alert('Задач нет');
        }
        
        break;

        case '3':
        alert('Конец');
        break;

        default: alert('Попробуйте еще раз');
    }
}

function addTask(title, desc) {
    var nameTask = prompt('Введите название задачи');
    var descTask = prompt('Введите описание задачи');  
    taskArr.push({title: nameTask, desc: descTask}); 
}

function print() {
    taskArr.forEach(function(e, i) {
        document.write('id: ' + i + ', ' + 'Title: ' + e.title + ', ' + 'Description: ' + e.desc + '<br>');
    });
}
