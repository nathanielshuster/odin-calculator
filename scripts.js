let display = 0;

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
  display = e.target.value;
  let displayPara = document.querySelector('.calc-display p');
  displayPara.textContent = displayValue;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', displayNumber))