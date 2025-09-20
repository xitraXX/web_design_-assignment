// ================= FORM VALIDATION =================
const form = document.getElementById('membershipForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for demo

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value;
    const membershipType = document.getElementById('membershipType').value;

    // Simple validation
    if (!firstName || !lastName || !email || !phone || !dob || !membershipType) {
        alert('Please fill out all required fields!');
        return;
    }

    // Phone number basic validation
    if (!/^\d{10,12}$/.test(phone)) {
        alert('Please enter a valid phone number (10-12 digits)');
        return;
    }

    // Email basic validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Success message
    alert(`Thank you ${firstName} ${lastName}!\nYou are now a Sweet Scoops member.\nEnjoy your perks!`);

    // Reset form
    form.reset();
});
