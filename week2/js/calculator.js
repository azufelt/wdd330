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