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
