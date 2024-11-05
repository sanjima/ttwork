document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    let isValid = true;

    // Username validation
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    if (username.length < 6 || /[^a-zA-Z]/.test(username)) {
        usernameError.textContent = "Username must be at least 6 characters and contain only letters.";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be 8+ characters, with an uppercase, a number, and a special character.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    // Submit form if all fields are valid
    if (isValid) {
        alert("Registration successful!");
        // Perform form submission or redirect to another page
    }
});
