
/* =================================
   CYBERSAFE - PASSWORD CHECKER
================================= */

function checkPassword() {

// Get the password input element
const passwordInput = document.querySelector("#password");

// Get the result area
const result = document.querySelector("#password-result");

// Check that both HTML elements exist
if (!passwordInput || !result) {
    console.error("Password checker HTML elements not found.");
    return;
}

// Get the entered password
const password = passwordInput.value || "";

    // Check whether a password has been entered
    if (password.length === 0) {
        result.textContent = "Please enter a password.";
        return;
    }

    // Security checks
    let score = 0;

    if (password.length >= 12) {
        score++;
    }

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[a-z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }

    // Display the result
    if (score <= 2) {
        result.textContent = "Needs improvement";
        result.style.color = "#ef4444";
    } else if (score <= 4) {
        result.textContent = "Moderate password";
        result.style.color = "#eab308";
    } else {
        result.textContent = "Good password characteristics";
        result.style.color = "#22c55e";
    }

    console.log("Password check completed.");
}
