document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");
    const paragraphs = footer.querySelectorAll("p");
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified);

    paragraphs[0].textContent = `© ${currentYear} All Rights Reserved`;
    paragraphs[1].textContent = `Last modified: ${lastModified.toLocaleString()}`;
});
