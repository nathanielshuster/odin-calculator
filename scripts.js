let a = null;
let b = null;
let operation = "";
let startNewNumber = false;
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

function operate() {
  b = Number(display.textContent);

  if (operation === "add") {
    display.textContent = add(a, b).toString();
    a = add(a, b)
    b = null;
  } else if (operation === "subtract") {
    display.textContent = subtract(a, b).toString();
    a = subtract(a, b)
    b = null;
  } else if (operation === "multiply") {
    display.textContent = multiply(a, b).toString();
    a = multiply(a, b)
    b = null;
  } else if (operation === "divide") {
    display.textContent = divide(a, b).toString();
    a = divide(a, b)
    b = null;
  }
}

function displayNumber(e) {
  let num = e.target.dataset.number

  if (display.textContent === "0" || startNewNumber === true) {
    display.textContent = num;
    startNewNumber = false;
  } else {
    display.textContent += num;
  }
}

function saveOperation(e) {
  if (a) {
    b = Number(display.textContent);
    operate();
  } else {
    a = Number(display.textContent);
  }
  operation = e.target.dataset.operator;
  startNewNumber = true;
}

function clear() {
  a = null;
  b = null;
  display.textContent = "0";
}

const numbers = document.querySelectorAll('.number');
numbers.forEach(button => button.addEventListener('click', displayNumber))

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', saveOperation))

const allClear = document.querySelector('.clear');
allClear.addEventListener('click', clear)

const performOp = document.querySelector('.operate');
performOp.addEventListener('click', operate)