// for (var n = 0; n <= 10; n++) {
//     if (n % 2 > 0) {continue};
//     document.writeln(n);
// }


// for (var i = 1; i < 10; i++) {
//     for (var j = 1; j < 10; j++) {
//         document.write(i * j);
//     }
//      document.write("<br/>");
// }

//document.body.innerHTML = "" - очищает страницу браузера.

// function clearScrean() {
//     document.body.innerHTML = "";
//     document.write("rer")
// }
// clearScrean();  - оъявление функции и её вызов.


// document.write("rer");
// function clearScrean(message="defMessage") { // - параметр функкции по умолчанию
//     document.body.innerHTML = "";
// }
// clearScrean();
// document.write("tyt");


// var print = function(message) {document.write(message + "<br/>")}
// print("hell")

//==========================================================================
// Class 6==================================================================

//var test = 10;
//function myFunc(test) {
//   test = "test";
//    console.log (test);
//}
// вернет "10".
// параметры функции перекрывают глобальность при одинаковых названиях переменных и параметров функции.

// function summ() {
//     var prsum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//       prsum = prsum + arguments[i];
//     }
//     return prsum;
// }
// - складывает любоеколличество переданых аргументов.

// function calc(a, b, func) {
//     return func(a, b)
// }
// в функцию можно передавать другую функцию
// функции бывают именованные и анонимные.


// setTimeout (myCallback, 3000) {
//     function myCallback() {
//         console.log ("Hellow Hey")
//     }
// }

//Объекты.

// объявим объект
// var o = {};
// typeof o; = "object"

//delete Point.z - удалить свойство z из объекта point.

var todo = {
    id: 0,
    title: 'поспать',
    status: true,
}

// как посмотреть есть ли свойство в объекте:
//"title" in todo;
// отдает tru / false
//object.keys (todo) // все ключи объекта todo
//object.values (todo) // все значения ключей объекта todo

for (key in todo) {
    console.log(key + " = " + todo[key].toString().toUpperCase())
}





//==========================================================================
//var a = prompt ("Ведите число:");
//if (+a % 2 === 1) {document.write("не четное")} else {document.write("четное")};
