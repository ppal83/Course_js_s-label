var x = function(){
    return ( 1 );
};

var y = function() {
    return ( 'Hello world' );
};

var z = function() {
    return ( true );
};

var a = function() {
    return (nool) ;
};

var b = function() {
    return ( [a, 'abs'] );
};

var c = function() {
    return({a: '123'});
};


// решение примеров с https://learn.javascript.ru/constructor-new
// Задача 1
var obj = {};

function A() { return obj; }
function B() { return obj; }

// Задача 2
// Создать Calculator при помощи конструктора
function Calculator() {
    this.read = function() {
        this.a = prompt('Введите первоке число', '0');
        this.b = prompt('Введите второе число', '0');
    };
    this.sum = function() {
        return( +this.a + +this.b)
    };
    this.mul = function() {
        return( +this)
    }
}
