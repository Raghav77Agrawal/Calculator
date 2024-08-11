let op = document.querySelectorAll(".no");
let dis = document.querySelector(".dis");
let equal = document.querySelector(".tr");
let res = document.querySelector(".res");
let clear = document.querySelector(".clear");
let dot = document.querySelector(".dot");
let mul = document.querySelector(".mul");
let per = document.querySelector(".per");
let back = document.querySelector(".back");
let operation = document.querySelectorAll(".operat");

let b = false; // Indicates if the last character was an operator
let s = ""; // The expression
let lastNumberHasDot = false; // Track if the last number contains a dot

// Update the display with the result or "0" if the expression is empty
function updateDisplay() {
    try {
        res.textContent = eval(s) || "0";
    } catch (e) {
        res.textContent = "";
    }
}

// Handle dot insertion
dot.addEventListener("click", () => {
    if (b || s === "") {
        // If the expression is empty or ends with an operator, start a new number with "0."
        s += "0.";
        dis.textContent += "0.";
        lastNumberHasDot = true; // Set the flag as a dot is added
    } else if (!lastNumberHasDot) {
        // Add a dot only if the last number doesn't already have one
        s += ".";
        dis.textContent += ".";
        lastNumberHasDot = true; // Set the flag as a dot is added
    }
    updateDisplay();
});

// Handle number button clicks
op.forEach((eve) => {
    eve.addEventListener("click", () => {
        s += eve.textContent;
        dis.textContent += eve.textContent;
        b = false; // Reset operator flag
        updateDisplay();
    });
});

// Handle percentage button click
per.addEventListener("click", () => {
    if (s !== "" && !b) {
        s += "/100";
        dis.textContent += per.textContent;
        b = true;
        lastNumberHasDot = false; // Reset dot flag as we are moving to a new number
        updateDisplay();
    }
});

// Handle operator button clicks
operation.forEach((operatio) => {
    operatio.addEventListener("click", () => {
        if (s !== "" && !b) {
            s += operatio.textContent;
            dis.textContent += operatio.textContent;
        } else if (s !== "" && b) {
            s = s.substring(0, s.length - 1) + operatio.textContent;
            dis.textContent = dis.textContent.substring(0, dis.textContent.length - 1) + operatio.textContent;
        }
        b = true;
        lastNumberHasDot = false; // Reset dot flag as we are moving to a new number
        updateDisplay();
    });
});

// Handle multiplication button click
mul.addEventListener("click", () => {
    if (s !== "" && !b) {
        s += "*";
        dis.textContent += mul.textContent;
    } else if (s !== "" && b) {
        s = s.substring(0, s.length - 1) + "*";
        dis.textContent = dis.textContent.substring(0, dis.textContent.length - 1) + mul.textContent;
    }
    b = true;
    lastNumberHasDot = false; // Reset dot flag as we are moving to a new number
    updateDisplay();
});

// Handle clear button click
clear.addEventListener("click", () => {
    dis.textContent = "";
    res.textContent = "";
    s = "";
    lastNumberHasDot = false; // Reset the flag as everything is cleared
    b = false;
    updateDisplay();
});

// Handle backspace button click
back.addEventListener("click", () => {
    if (s.charAt(s.length - 1) === ".") {
        lastNumberHasDot = false; // Reset dot flag if a dot is removed
    }
    s = s.substring(0, s.length - 1);
    dis.textContent = dis.textContent.substring(0, dis.textContent.length - 1);
    res.textContent = eval(s);
   
});
equal.addEventListener("click",()=>{
    s = res.textContent;
    dis.textContent = res.textContent;
    res.textContent = "";
    
})

