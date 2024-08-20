// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Ideally, you would send form data to a server here
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
 