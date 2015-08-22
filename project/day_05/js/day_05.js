// Работа в аудитории

// Функция копирования объектов
function copy(o) {
  var copy = Object.create(Object.getPrototypeOf(o));
  var propNames = Object.getOwnPropertyNames(o);

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(o, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
}

// Вызов функции
work = {
    work: 'engineering'
};
b = {
    name: 'Ivan'
};

var work_2 = copy(work);
var b_2 = b;

work_2.work = 'cook';
b_2.name = 'Anna';


// Получение объекта
var app = function(arg) {
  return document.querySelectorAll(arg)
};

// Решение домашки

function Square() {
    this.width = '100px';
    this.height = '100px';
    this.background = 'grey';
    this.color = 'white';
    //this.text = 'This is, square!';

    this.render = function () {
        var squareDiv = document.createElement(('div'));
        squareDiv.style.width = this.width;
        squareDiv.style.height = this.height;
        squareDiv.style.background = this.background;
        squareDiv.style.color = this.color;
       // squareDiv.innerHTML = this.color;
        return (document.body.appendChild(squareDiv))
    };

    this.move = function(move) {
        move = 'left' || 'right' || 'up' || 'down'
        return move
    };
}

var a = new Square();

/*
// Создаем объект в JS, который описывает в HTML квадрат
var squareDiv = document.createElement("div");
squareDiv.style.width = '100px';
squareDiv.style.height = '100px';
squareDiv.style.background = 'grey';
squareDiv.style.color = 'white';
squareDiv.innerHTML = 'Hello';

// Создаем объект в JS, который описывает в HTML круг
// Этот вариант предпочтительней чем прошлый
var circleDiv = document.createElement('div')   // создаем узел элемента
circleDiv.className = 'circle';
*/

