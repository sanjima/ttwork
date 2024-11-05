document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Get values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example: Basic validation (you can expand this)
    let isValid = true;
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Reset errors
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Simple validation checks (you can implement more robust checks)
    if (username.trim() === '') {
        usernameError.textContent = 'Username is required.';
        isValid = false;
    }

    if (password.trim() === '') {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    }

    // If valid, alert success (you can implement actual authentication here)
    if (isValid) {
        alert('Login successful!');
        // Redirect to another page or perform authentication logic here
    }
});
