let display = "";
let operation = "";

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
  display += e.target.classList[1];
  let displayPara = document.querySelector('.calc-display p');
  displayPara.textContent = display;
}

function saveOperation(e) {
  operation += e.target.classList[1];
}

function clear(e) {
  display = "0";
  operation = "";
  let displayPara = document.querySelector('.calc-display p');
  displayPara.textContent = display;
}

const numbers = document.querySelectorAll('.number');
numbers.forEach(button => button.addEventListener('click', displayNumber))

const operators = document.querySelectorAll('.operator');
operators.forEach(button => button.addEventListener('click', saveOperation))

const allClear = document.querySelectorAll('.clear');
allClear.forEach(button => button.addEventListener('click', clear))
