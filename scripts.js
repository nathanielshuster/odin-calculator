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
  display = Number(e.target.classList[0]);
  let displayPara = document.querySelector('.calc-display p');
  displayPara.textContent = display.toString();
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', displayNumber))