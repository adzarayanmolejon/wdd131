//date:modification
document.getElementById("currentyear").textContent = new Date().getFullYear();

var lastModified = new Date(document.lastModified);
var formattedDate = lastModified.toLocaleDateString();
var formattedTime = lastModified.toLocaleTimeString();

document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate + " " + formattedTime;

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
