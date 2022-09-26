let num1 = 0;
let num2 = 0;
let operation = "";
const displayPara = document.querySelector('.calc-display p');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  return a/b;
}

function operate(operator, a, b) {
  return operator(a, b);
}

function displayNumber(e) {
  let num = e.target.classList[1];
  displayPara.textContent += num;
}

function saveOperation(e) {
  operation += e.target.classList[1];
  num1 = Number(displayPara.textContent)
}

function clear(e) {
  inputs = [];
  operations = [];
  displayPara.textContent = "0";
}

const numbers = document.querySelectorAll('.number');
numbers.forEach(button => button.addEventListener('click', displayNumber))

const operators = document.querySelectorAll('.operator');
operators.forEach(button => button.addEventListener('click', saveOperation))

const allClear = document.querySelector('.clear');
allClear.addEventListener('click', clear)

const performOp = document.querySelector('.operate');
performOp.addEventListener('click', operate)