document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("response-message");

    // Validate the form fields
    if (!name || !email || !subject || !message) {
        msg.textContent = "Please fill in all fields.";
        msg.style.color = "red";
        return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        msg.textContent = "Please enter a valid email address.";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Thank you for your message!";
    msg.style.color = "green";

    this.reset(); // Reset the form fields
});
    