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

// scripts/about.js

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
  });

  // Set the current year
  document.getElementById("currentyear").innerHTML = new Date().getFullYear();

  // Set the last modified date
  const lastModifiedDate = new Date(document.lastModified);
  const formattedDate = lastModifiedDate.toLocaleDateString();
  document.getElementById("lastModified").innerHTML += formattedDate ? formattedDate : "Unknown";
});
