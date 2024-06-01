
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', init);

function init() {
    // Displaying new delicacies
    displayNewDelicacies();
    
    // Displaying best sellers
    displayBestSellers();
    
    // Event listener for the form submission
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
}

const delicacies = [
    { src: 'images/pastelitos.jpeg', alt: 'Delicacies 1', caption: 'Pastelitos' },
    { src: 'images/greenery.jpeg', alt: 'Delicacies 2', caption: 'Greenery' },
    { src: 'images/salvadorian.jpg', alt: 'Delicacies 3', caption: 'Salvadorian Delights' }
];

const bestSellers = [
    { src: 'images/GKBicolExpress.webp', alt: 'Best Seller 1', caption: 'Bicol Express' }
];

// Function to display new delicacies
function displayNewDelicacies() {
    const container = document.getElementById('new-delicacies');
    delicacies.forEach(item => {
        const figure = document.createElement('figure');
        
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = item.caption;
        
        figure.appendChild(img);
        figure.appendChild(figcaption);
        container.appendChild(figure);
    });
}

// Function to display best sellers
function displayBestSellers() {
    const container = document.getElementById('best-sellers');
    bestSellers.forEach(item => {
        const figure = document.createElement('figure');
        
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = item.caption;
        
        figure.appendChild(img);
        figure.appendChild(figcaption);
        container.appendChild(figure);
    });
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
    let inquiries = JSON.parse(localStorage.getItem('inquiries')) || [];
    inquiries.push(data);
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
}

// Function to display confirmation message
function displayConfirmation(data) {
    alert(`Thank you, ${data.name}, for your ${data.purpose}. We will get back to you soon!`);
}
