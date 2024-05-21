import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main() :void
{
    const firstString: string =  question("Enter First Number:\n");
    const operator: string = question("Enter Operator:\n");
    const secondString: string = question("Enter Second Number:\n");


    const validInput = isNumer(firstString) && isNumer(secondString) && isOperator(operator);

    if(!validInput)
    {
        console.log("Invalid Input");
        main();
    }
    else{
        const firstNumber = parseInt(firstString);
        const secondNumber = parseInt(secondString);

        const result = calculate(firstNumber, secondNumber, operator as Operator);
        console.log(`Result: ${result}`);
    
    }
}

function calculate(firstNumber:number, secondNumber:number, operator:Operator):number
{
    switch(operator)
    {
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


function isNumer(value:string):boolean
{
    const number = parseInt(value);
    const isNum = !isNaN(number)
    return isNum;
}

function isOperator(value:string):boolean
{
    switch(value)
    {
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