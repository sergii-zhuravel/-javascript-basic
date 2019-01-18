var arr = [];

while(true) {
    if(+tudu === 3) {
       break;
    } else {
        var tudu = prompt(
            `Введите команду:
            1 - Добавить задачу;
            2 - Вывести задачи;
            3 - Закончить;
            `
        );
    }

    switch(tudu) {
        case '1':
        addTask();
        break;
    
        case '2':
        if(arr.length > 0) {
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