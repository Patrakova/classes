class Calculator {
        constructor() {
            let data = new Controller().getValues();
            this.name = Number(data.name);
        }
};

//function Calculator (valueOne, valueTwo, action) { 
//        this.valueOne = valueOne;
//        this.valueTwo = valueTwo;
//        this.action = action; 
//        this.calculate = function () {        
//        switch (this.action) {
//            case '+' :
//                this.sum();
//                break;
//            case '-' :
//                this.min();
//                break;
//            default :
//                this.result = 'Ошибка. Неизвестный оператор';
//        }
//        console.log(this.result);
//    };
//    this.sum = function () {
//        this.result = this.valueOne + this.valueTwo;
//    };
//    this.min = function() {
//        this.result = this.valueOne - this.valueTwo;
//    };
//};