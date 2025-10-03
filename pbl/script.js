document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    let name = document.getElementById("name").value;
    let service = document.getElementById("service").value;

    let message = Thank you, ${name}! Your ${service} service has been booked.;
    document.getElementById("confirmation").innerText = message;
});
