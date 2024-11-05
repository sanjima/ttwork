// Sample data for user's tickets
const tickets = [
    { ticketID: 1, trainID: "TR123", userID: "U001", userName: "John Doe", boardingStation: "Station A", destinationStation: "Station B", boardingDateTime: "2024-11-10T09:00", arrivalDateTime: "2024-11-10T11:00", numberOfTickets: 2 },
    // Add more ticket data as needed
];

// Function to display tickets
function displayTickets() {
    const ticketsTableBody = document.getElementById('ticketsTable').querySelector('tbody');
    ticketsTableBody.innerHTML = ''; // Clear existing rows

    tickets.forEach(ticket => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ticket.ticketID}</td>
            <td>${ticket.trainID}</td>
            <td>${ticket.userID}</td>
            <td>${ticket.userName}</td>
            <td>${ticket.boardingStation}</td>
            <td>${ticket.destinationStation}</td>
            <td>${new Date(ticket.boardingDateTime).toLocaleString()}</td>
            <td>${new Date(ticket.arrivalDateTime).toLocaleString()}</td>
            <td>${ticket.numberOfTickets}</td>
            <td><button class="cancel-btn" data-ticket-id="${ticket.ticketID}">Cancel Ticket</button></td>
        `;
        ticketsTableBody.appendChild(row);
    });

    // Add event listeners for cancel buttons
    document.querySelectorAll('.cancel-btn').forEach(button => {
        button.addEventListener('click', function() {
            const ticketID = this.getAttribute('data-ticket-id');
            if (confirm(`Are you sure you want to cancel Ticket ID: ${ticketID}?`)) {
                // Logic to cancel ticket
                alert(`Ticket ID: ${ticketID} canceled.`);
                // Remove the ticket from the tickets array (example logic)
                const index = tickets.findIndex(ticket => ticket.ticketID == ticketID);
                if (index > -1) {
                    tickets.splice(index, 1);
                    displayTickets(); // Refresh the displayed tickets
                }
            }
        });
    });
}

// Event listeners for forms
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    // Implement booking logic here (e.g., API call)
