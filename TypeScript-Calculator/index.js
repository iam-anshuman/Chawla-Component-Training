"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = (0, readline_sync_1.question)("Enter First Number:\n");
    var operator = (0, readline_sync_1.question)("Enter Operator:\n");
    var secondString = (0, readline_sync_1.question)("Enter Second Number:\n");
    var validInput = isNumer(firstString) && isNumer(secondString) && isOperator(operator);
    if (!validInput) {
        console.log("Invalid Input");
        main();
    }
    else {
        var firstNumber = parseInt(firstString);
        var secondNumber = parseInt(secondString);
        var result = calculate(firstNumber, secondNumber, operator);
        console.log("Result: ".concat(result));
    }
}
function calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
        default:
            return 0;
    }
}
function isNumer(value) {
    var number = parseInt(value);
    var isNum = !isNaN(number);
    return isNum;
}
function isOperator(value) {
    switch (value) {
        case "+":
            return true;
        case "-":
            return true;
        case "*":
            return true;
        case "/":
            return true;
        default:
            return false;
    }
}
main();
