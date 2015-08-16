// Создаем первый объект
person = {};
person.name = 'Ivan';
person.age = '34';
person.adress = null;
person.profession = 'engineer';
person.say = function(say) {
    say = say || 'I am engineer';
    console.log( say );
    alert(say)
};
person.workDay = function(from, to) {
    from = from || 9;
    to = to || 18;
    var text = this.name + ' working day is ' +  (to - from) + ' часов';
    console.log( text );
    return( text );
};
person.goToWork= function(work) {
    var text = 'Your cheif, ' + work.chief_name + ' wait for you at ' + work.workDay[0];
    console.log( text );
    return( text );
};

//Создаем второй объект
work = {
    name: 'LTD engineering',
    chief_name: 'Vasily',
    chiefWorkDay:[8, 17],
    new_worker: function() {
        var name = prompt('Как вас зовут?', 'Alelsey');
        var age = prompt('Сколько вам лет', 25);
        return[name, age]
    }
};

// Создаем третий объект