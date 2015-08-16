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
    var text = this.name + ' working day is ' +  (to - from) + ' hours';
    console.log( text );
    return( text );
};
person.goToWork= function(work) {
    var text = 'Your cheif, ' + work.chiefName + ' wait for you at ' + work.chiefWorkDay[0];
    console.log( text );
    return( text );
};

//Создаем второй объект
work = {
    name: 'LTD engineering',
    chiefName: 'Vasily',
    chiefWorkDay:[8, 17]
};

// Создаем третий объект
freeTime = {
    hobby: 'programming',
    hobbyDetail: 'lean js',
    hobbyTime: function(person, work) {
        var text = person.name + ' ' + this.hobbyDetail + ' after ' + work.chiefWorkDay[0];
        console.log( text );
        return( text );
    }
}