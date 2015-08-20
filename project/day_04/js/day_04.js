// объявление функции-конструтор (добавить)
function Person() {
    this.name = 'Ivan';
    this.age = '34';
    this.adress = null;
    this.profession = 'engineer';
}

// объявление функции-конструтор
function Work(work) {
    this.name = work;
    this.chiefName = 'Vasily';
    this.chiefWorkDay = [8, 17];
}

// вызов
var ltd_engineering = new Work('LTD engineering');


// объявление второй функции-конструтор
function FreeTime() {
    this.hobby = 'programming';
    this.hobbyDetail = 'lean js';
    this.hobbyTimeChief = function hobbyTimeChief (work) {
        var text = work.chiefName + ' ' + this.hobbyDetail + ' after ' + work.chiefWorkDay[1];
        console.log( text );
        return( text );
    };
    this.hobbyTimePerson = function(person, work) {
        person.name = "Ivan Simeyko";
        var text = person.name + ' ' + this.hobbyDetail + ' after ' + work.chiefWorkDay[1];
        console.log( text );
        return( text );
    };
}

// добавление метода в prototype
FreeTime.prototype.hobbyTimePerson = function(person, work) {
    person.name = "Ivan Simeyko";
    var text = person.name + ' ' + this.hobbyDetail + ' after ' + work.chiefWorkDay[1];
    console.log( text );
    return( text );
};

// пример
function Magic(stick, name) {
    this.stick = stick || 'wood';
    this.person = {
        name: name || 'Harry Potter'
    };
    this.getName = function() {
        return this.person.name;
    }
}

var harry = new Magic();
var menInBlack = new Magic('desrt Eagle', 'Sam');
harry.prototype__proto__.getName()=function(){
    return ( 'Mr. Harry')
};


