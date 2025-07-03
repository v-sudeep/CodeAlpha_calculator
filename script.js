let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

// Bonus: Keyboard support
document.addEventListener("keydown", (e) => {
  const validKeys = "0123456789+-*/.=EnterBackspace";
  if (!validKeys.includes(e.key)) return;

  if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else {
    appendValue(e.key);
  }
});