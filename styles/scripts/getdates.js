document.addEventListener("DOMContentLoaded", function() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedParagraph = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified);

    currentYearSpan.textContent = currentYear;
    lastModifiedParagraph.textContent += lastModifiedDate.toLocaleString();
});
