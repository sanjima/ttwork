// Function to handle registering a new train
document.getElementById('registerTrainForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    const trainName = document.getElementById('trainName').value;
    const numberOfSeats = document.getElementById('numberOfSeats').value;
    const destination = document.getElementById('destination').value;
    const origin = document.getElementById('origin').value;
    const ownership = document.getElementById('ownership').value;

    // Logic to register the train (e.g., API call)
    alert(`Train Registered: ${trainName}, Seats: ${numberOfSeats}, To: ${destination}, From: ${origin}, Ownership: ${ownership}`);

    // Reset form
    document.getElementById('registerTrainForm').reset();
});

// Function to handle deleting a customer
document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function () {
        const clientId = this.getAttribute('data-id');
        if (confirm(`Are you sure you want to delete Customer ID: ${clientId}?`)) {
            // Logic to delete the customer (e.g., API call)
            alert(`Customer ID: ${clientId} deleted.`);
            // Optionally, remove the row from the table here
        }
    });
});

// Logout button functionality
document.getElementById('logout').addEventListener('click', function () {
    window.location.href = 'login.html'; // Redirect to login page
});
