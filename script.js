let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let reset = false;

const number = document.querySelectorAll("[data-number]");
const currentScreen = document.getElementById("result");
const lastop = document.getElementById("last-input");

// equal

const equal = document.getElementById("equal");

equal.addEventListener("click", ev);
// ....

// operate

const operator = document.querySelectorAll("[data-operator]");

operator.forEach((button) =>
  button.addEventListener("click", () => operate(button.textContent))
);

function operate(op) {
  if (currentOperation !== null) ev();
  firstOperand = currentScreen.textContent;
  currentOperation = op;
  lastop.textContent = `${firstOperand} ${currentOperation}`;
  reset = true;
}

function ev() {
  if (currentOperation === null || reset) return;
  if (currentOperation === "/" && currentScreen.textContent === "0") {
    alert("cant devide by 0");
    return;
  }
  secondOperand = currentScreen.textContent;
  currentScreen.textContent = roundRes(
    count(currentOperation, firstOperand, secondOperand)
  );
  lastop.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

function roundRes(number) {
  return Math.round(number * 1000) / 1000;
}

function count(o, a, b) {
  a = Number(a);
  b = Number(b);
  switch (o) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) return null;
      else return a / b;
    default:
      return null;
  }
}
// ......

// adding comma
const comma = document.getElementById("comma");
comma.addEventListener("click", addcomma);

function addcomma() {
  if (currentScreen.textContent === "") currentScreen.textContent = "0";
  if (currentScreen.textContent.includes(".")) return;
  currentScreen.textContent += ".";
}
// ......

const temp = document.getElementById("last-input");

// clear button
const clearbtn = document.getElementById("ac");
clearbtn.addEventListener("click", clear);

function clear() {
  currentScreen.textContent = "0";
  temp.textContent = "";
}

// .....

// append number
number.forEach((button) =>
  button.addEventListener("click", () => bringNumber(button.textContent))
);

function bringNumber(number) {
  if (currentScreen.textContent === "0" || reset) resetScreen();
  currentScreen.textContent += number;
}
// .....

function resetScreen() {
  currentScreen.textContent = "";
  reset = false;
}
