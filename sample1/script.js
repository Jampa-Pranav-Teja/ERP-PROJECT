let display = document.getElementById("display");
let currentValue = "";

function appendValue(value) {
    if (display.textContent === "0") {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
    currentValue = display.textContent;
}

function calculate() {
    try {
        display.textContent = eval(currentValue);
        currentValue = display.textContent;
    } catch {
        display.textContent = "Error";
    }
}

function clearDisplay() {
    display.textContent = "0";
    currentValue = "";
}

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle("light-theme");
}