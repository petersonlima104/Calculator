function appendCharacter(character) {
  document.getElementById("result").value += character;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  try {
    const result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Erro";
  }
}

function togglePositiveNegative() {
  const currentValue = document.getElementById("result").value;
  if (currentValue.startsWith("-")) {
    document.getElementById("result").value = currentValue.slice(1);
  } else {
    document.getElementById("result").value = "-" + currentValue;
  }
}

function deleteCharacter() {
  const currentValue = document.getElementById("result").value;
  document.getElementById("result").value = currentValue.slice(0, -1);
}

function handleKeyDown(event) {
  const key = event.key;
  if (key.match(/[0-9+\-*/]/)) {
    appendCharacter(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Escape" || key === " ") {
    clearResult();
  } else if (key === "Backspace") {
    event.preventDefault();
    const currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
  } else if (key === "-") {
    event.preventDefault();
    togglePositiveNegative();
  }
}
