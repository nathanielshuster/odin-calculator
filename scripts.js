let a = null;
let b = null;
let operation = "";
const display = document.querySelector('.display p');

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
  let num = e.target.dataset.number

  if (display.textContent === "0") {
    display.textContent = num;
  } else {
    display.textContent += num;
  }
}

function saveOperation(e) {
  operation = e.target.dataset.operator;
  a = Number(display.textContent);
}

function clear() {
  a = null;
  b = null;
  display.textContent = "0";
}

const numbers = document.querySelectorAll('.number');
numbers.forEach(button => button.addEventListener('click', displayNumber))

const operators = document.querySelectorAll('.operator');
operators.forEach(button => button.addEventListener('click', saveOperation))

const allClear = document.querySelector('.clear');
allClear.addEventListener('click', clear)

const performOp = document.querySelector('.operate');
performOp.addEventListener('click', operate)