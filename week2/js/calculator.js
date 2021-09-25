//Core Requirements JS
const getFirstInteger = () =>  {
    const userInput = parseInt(document.getElementById("userInput").value);
    return userInput;
}

const getSecondInteger = () =>  {
    const newInput = parseInt(document.getElementById("newInput").value);
    return newInput;
} 

function getNum(number) {
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum += i;
    }
    return sum;
}

function readContent() {
    const num = getFirstInteger(userInput);
    const full = getNum(num);
    document.getElementById("userOutput1").innerHTML = full;
}

function getNumber(number){
    const integer = document.getElementById(number).value;
    const fullNumber = parseFloat(integer);
    if (fullNumber !== NaN) {
    return fullNumber;
    } else return 0;
}

function getTotal(number) {
    const outputNum = document.getElementById('userOutput');
    outputNum.innerHTML = number;
}

const addFunction = function (number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

const multiply = (number1,number2) => number1 * number2;

const divide = (number1, number2) => number1 / number2;


function performOperation(operation) {
    const total = operation(
        getNumber('userInput'),
        getNumber('newInput')
    );
getTotal(total);
}



//start running when user clicks button function
//get values from user input
//pass parameters from get values through to the doMath function, based on which function user selected +-*/
//calculate
//return total and display to user


function numValue(number){
  const getNumber = document.getElementById(number).value;
  const floatNum = parseFloat(getNumber);
  if (floatNum !== NaN) {
    return floatNum;
  } else return 0;
}
function finalTotal(value){
  const outputValue = document.querySelector("#output");
  outputValue.innerHTML = "Total = " + value;
}
function add(numA, numB) {
  return numA + numB;
}
const sub = function (numA, numB) {
  return numA - numB;
}
const mult = (numA, numB)=> numA * numB;
const div = (numA, numB)=> numA / numB;

function doMath(operation) { //started by user clicking button
  const total = operation(//get values from 
    numValue("inputA"), numValue("inputB")
  );
  finalTotal(total);
}