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
background = function(color) {
    if (color){
        return ({background: color});
    } else {
        return ({background: 'black'});
    }
};

function Square() {
    this.width = '100px';
    this.height = '100px';
    this.color = 'black';
    //this.text = 'This is, square!';

    this.render = function () {
        var squareDiv = document.createElement(('div'));
        squareDiv.style.width = this.width;
        squareDiv.style.height = this.height;
        squareDiv.style.background = this.background;
        squareDiv.style.color = this.color;
       // squareDiv.innerHTML = this.color;
        console.log('Выводим квадрат на страницу');
        return (document.body.appendChild(squareDiv))
    };

    this.move = function(move) {
        move = 'left' || 'right' || 'up' || 'down';
        return move
    };

    /*
    this.changeColor = function(color) {
        background.__proto__background = 'color';

        console.log('Меняем цвет квадрата, должен пометься и цвет круга');
        return (document.body.modifiers(this.render()));
    }
    */
}

// Назначаем прототип
Square.prototype = background;

function Circle() {
    this.width = '100px';
    this.height = '100px';
    /*-moz-border-radius: 25px;
    -webkit-border-radius: 25px;*/
    this.border = '50px';

    this.render = function() {
        var circleDiv = document.createElement('div')
        circleDiv.style.width = this.width;
        circleDiv.style.height = this.height;
        circleDiv.style.background = this.background;
        circleDiv.style.borderRadius = this.border;
        console.log('Выводим круг на страницу');
        return (document.body.appendChild(circleDiv))
    }
}

//Назначаем прототип
Circle.prototype = background;

var square = new Square();
var circle = new Circle();


/*
// Создаем объект в JS, который описывает в HTML квадрат
var squareDiv = document.createElement("div");
squareDiv.style.width = '100px';
squareDiv.style.height = '100px';
squareDiv.style.background = 'grey';
squareDiv.style.color = 'white';
squareDiv.innerHTML = 'Helllo';

// Создаем объект в JS, который описывает в HTML круг
// Этот вариант предпочтительней чем прошлый
var circleDiv = document.createElement('div')   // создаем узел элемента
circleDiv.className = 'circle';
*/
