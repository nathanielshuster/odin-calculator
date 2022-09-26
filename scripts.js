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
  display.textContent += num;
}

function saveOperation(e) {
  operation += e.target.classList[1];
}

function clear(e) {
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