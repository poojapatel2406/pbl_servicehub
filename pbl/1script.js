document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get form data
    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Create URL parameters for worker details page
    const queryParams = `?name=${encodeURIComponent(name)}&service=${encodeURIComponent(service)}&date=${date}&time=${time}`;

    // Redirect to worker details page
    window.location.href = "worker-details.html" + queryParams;
});
