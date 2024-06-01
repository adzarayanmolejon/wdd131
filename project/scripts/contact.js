
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', init);

function init() {
    // Event listener for the form submission
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const purpose = document.querySelector('input[name="purpose"]:checked').value;
    const message = document.getElementById('message').value.trim();
    const subscribe = document.getElementById('subscribe').checked;

    // Validate form inputs
    if (name === "" || email === "" || purpose === "" || message === "") {
        alert('Please fill out all fields.');
        return;
    }

    // Create an object for form data
    const formData = {
        name: name,
        email: email,
        purpose: purpose,
        message: message,
        subscribe: subscribe
    };

    // Save the data to localStorage
    saveFormData(formData);

    // Display confirmation message
    displayConfirmation(formData);

    // Clear the form
    document.getElementById('contactForm').reset();
}

// Function to save form data to localStorage
function saveFormData(data) {
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    submissions.push(data);
    localStorage.setItem('submissions', JSON.stringify(submissions));
}

// Function to display confirmation message
function displayConfirmation(data) {
    const confirmationMessage = `
        <h3>Thank you for your message, ${data.name}!</h3>
        <p>We have received your ${data.purpose} and will get back to you at ${data.email} soon.</p>
        ${data.subscribe ? '<p>You have been subscribed to our newsletter.</p>' : ''}
    `;

    const mainContent = document.querySelector('main');
    const confirmationDiv = document.createElement('div');
    confirmationDiv.classList.add('confirmation');
    confirmationDiv.innerHTML = confirmationMessage;

    mainContent.innerHTML = '';
    mainContent.appendChild(confirmationDiv);
}
