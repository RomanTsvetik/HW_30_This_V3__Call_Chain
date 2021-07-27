 "use strict"

let ladder = {
    step: 0,
    up: function() {
        this.step++; // увеличиваем степ.
        return this; // возвращаем и перезаписываем объект с новым значением свойства степ
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() { // показываем текущий степ
        console.log(this.step);
        return this;
    }
};

ladder.up().up().up().showStep().down().down().up().down().showStep(); 

