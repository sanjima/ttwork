// Function to handle form submission and update profile
document.getElementById('profileForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    
    const username = document.getElementById('username').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const email = document.getElementById('email').value;
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;

    // Simple validation (you can extend this)
    if (newPassword !== confirmNewPassword) {
        alert("New passwords do not match.");
        return;
    }

    // Logic to update user profile (e.g., API call)
    alert(`Profile updated:\nUsername: ${username}\nMobile: ${mobileNumber}\nEmail: ${email}`);

    // Reset form
    document.getElementById('profileForm').reset();
});

// Function to handle account deletion
document.getElementById('deleteAccount').addEventListener('click', function () {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
        // Logic to delete the account (e.g., API call)
        alert("Account deleted.");
        window.location.href = 'login.html'; // Redirect to login page
    }
});

// Logout button functionality
document.getElementById('logout').addEventListener('click', function () {
    window.location.href = 'login.html'; // Redirect to login page
});
