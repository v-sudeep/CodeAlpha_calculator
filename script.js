let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Bonus: keyboard support
document.addEventListener("keydown", function(e) {
  if (e.key.match(/[0-9+\-*/.=]/)) {
    if (e.key === "=" || e.key === "Enter") {
      calculate();
    } else {
      appendValue(e.key);
    }
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});