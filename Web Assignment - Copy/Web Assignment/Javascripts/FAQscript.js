// Collapsible FAQ Sections
document.querySelectorAll('.faq-question').forEach(function (faq) {
    faq.addEventListener('click', function() {
        const answer = this.nextElementSibling;

        // Toggle visibility of the answer
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

// Feedback Form Submission (Optional)
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('feedback-name').value;
    const email = document.getElementById('feedback-email').value;
    const message = document.getElementById('feedback-message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate feedback submission
    alert('Thank you for your feedback, ' + name + '! We will get back to you shortly.');
    document.getElementById('feedback-form').reset();  // Reset the form after submission
});
