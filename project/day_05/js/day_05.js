/*
// Пример создания HTML элемента
var elem = document.createElement('p')
    content = document.createTextNode( 'Это динамический элемент' );

elem.appendChild( content );
wrappedP = document.getElementById('wrapper');
wrappedP.parentNode.appendChild(elem);
console.log( elem );
*/

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
background = {
    background: function(color) {
        if(color) {
            return ( color );
        } else {
            return ('pink');
        }
    },
    move: function(where) {

    }
};

// Конструктоор объекта квадрат
function Square() {
    this.width = '100px';
    this.height = '100px';
    this.color = 'red';
     this.position = 'absolute';
    this.top = '50px';
    this.left = '450px';
    this.element = document.createElement('div');
    //this.text = 'This is, square!';

    this.render = function () {
        var squareDiv = this.element;

        squareDiv.style.width = this.width;
        squareDiv.style.height = this.height;
        squareDiv.style.background = this.background();
        squareDiv.style.color = this.color;
        squareDiv.style.position = this.position;
        squareDiv.style.top = this.top;
        squareDiv.style.left = this.left;

       // squareDiv.innerHTML = this.color;
        console.log('Выводим квадрат на страницу');
        console.log( squareDiv );
        document.body.appendChild(squareDiv)
    };

     this.move = function(where) {
        console.log('Перемещаем квадрат');
        var tempSize = 0;
        switch(where) {
          case 'down':
            tempSize =  parseInt(this.element.style.top, 10);
            tempSize = tempSize + 100;
            this.element.style.top = tempSize + 'px';
            break;
          case 'up':
            tempSize =  parseInt(this.element.style.top, 10);
            tempSize = tempSize - 100;
            this.element.style.top = tempSize + 'px';
            break;
          case 'left':
            tempSize =  parseInt(this.element.style.left, 10);
            tempSize = tempSize - 100;
            this.element.style.left = tempSize + 'px';
            break;
          case 'rigth':
          default:
            tempSize =  parseInt(this.element.style.left, 10);
            tempSize = tempSize + 100;
            this.element.style.left = tempSize + 'px';
        }
    };
}

// Назначаем прототип
Square.prototype = background;

//Конструктор объекта круг
function Circle() {
    this.width = '100px';
    this.height = '100px';
    this.border = '50px';
    this.position = 'absolute';
    this.top = '50px';
    this.left = '150px';
    this.id = 'circle';
    this.element = document.createElement( 'div' );

    this.render = function() {
        var circleDiv = this.element;

        circleDiv.style.width = this.width;
        circleDiv.style.height = this.height;
        circleDiv.style.background = this.background();
        circleDiv.style.borderRadius = this.border;
        circleDiv.style.position = this.position;
        circleDiv.style.top = this.top;
        circleDiv.style.left = this.left;
        circleDiv.style.id= this.id;

        console.log('Выводим круг на страницу');
        console.log(circleDiv);
        document.body.appendChild(circleDiv)
    };

    this.move = function(where) {
        console.log('Перемещаем круг');
        var tempSize = 0;
        switch(where) {
          case 'down':
            tempSize =  parseInt(this.element.style.top, 10);
            tempSize = tempSize + 100;
            this.element.style.top = tempSize + 'px';
            break;
          case 'up':
            tempSize =  parseInt(this.element.style.top, 10);
            tempSize = tempSize - 100;
            this.element.style.top = tempSize + 'px';
            break;
          case 'left':
            tempSize =  parseInt(this.element.style.left, 10);
            tempSize = tempSize - 100;
            this.element.style.left = tempSize + 'px';
            break;
          case 'rigth':
          default:
            tempSize =  parseInt(this.element.style.left, 10);
            tempSize = tempSize + 100;
            this.element.style.left = tempSize + 'px';
        }
    }
}

//Назначаем прототип
Circle.prototype = background;

//Создаем объекты
var square = new Square();
var circle = new Circle();
square.render();
circle.render();
circle.move('down');
square.move('down');


/*
//Анимация и таймеры (разбор темы)
var delay = 1000;
i = 0;

var startTimer = function() {
    if (i < 5) {
        console.log( 'функция startTimer сработала ' + i + ' раз' );
        setTimeout(startTimer, delay);
    }
    i++;
};

var timer = setTimeout(startTimer, delay); //вызываем функцию, 3000 - задержка 3 секудны

//alert('Alert!!!');

//clearTimeout(timer);  // останавливаем таймер

*/

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
