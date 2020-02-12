//Zadanie 2
function Calculator(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    var operations = [];
    this.add = function(firstNumber, secondNumber) {
        var result = firstNumber + secondNumber;
        var text = "Adding: " + firstNumber + " to " + secondNumber + " Result: " + result;
        operations.push(text);
        return result;
    }
    this.multiply = function(firstNumber, secondNumber) {
        var result = firstNumber*secondNumber;
        var text = "Multiply: " + firstNumber + " with " + secondNumber + " Result: " + result;
        operations.push(text);
        return result;
    }   
    this.printOpearations = function() {
        for(var i=0; i<operations.length; i++)
            console.log(operations[i]);
    }
}

var calc = new Calculator();
console.log(calc.add(4, 4));
console.log(calc.multiply(12, 12));
calc.printOpearations();