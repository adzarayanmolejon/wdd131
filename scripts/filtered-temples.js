// Sample array of temple objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    
    {
        templeName: "Manila Philippines",
        location: "Quezon City Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg"
    },
    {
        templeName: "Cebu City Philippines",
        location: "Cebu City Philippines",
        dedicated: "2010, June, 13",
        area: 29556,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cebu-city-philippines/400x640/cebu-philippines-temple-lds-852643-wallpaper.jpg"
    },
   
    {
        templeName: "Vernal Utah",
        location: "Vernal Utah",
        dedicated: "1997, November, 2",
        area: 38771,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vernal-utah/400x250/vernal-temple-lds-1078594-wallpaper.jpg"
    },
    {
        templeName: "Adelaide Australia",
        location: "Adelaide Australia",
        dedicated: "2000, June, 15",
        area: 38771,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x225/adelaide-australia-temple-lds-866420-wallpaper.jpg"
    },
];
// Function to create a temple card
function createTempleCard(temple) {
    const card = document.createElement('figure');
    card.className = 'temple-card';

    const name = document.createElement('h2');
    name.textContent = temple.templeName; // Corrected property name

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedication = document.createElement('p');
    dedication.textContent = `Dedicated: ${temple.dedicated}`; // Corrected property name

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area} sq ft`;

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.templeName; // Corrected property name
    image.loading = 'lazy';

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(image);

    return card;
}

// Function to display all temple cards
function displayTempleCards(temples) {
    const container = document.querySelector('.temple-grid');
    container.innerHTML = ''; // Clear any existing content
    temples.forEach(temple => {
        const card = createTempleCard(temple);
        container.appendChild(card);
    });
}

// Initial display of all temples
displayTempleCards(temples);

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});
//date:modification
document.getElementById("currentyear").textContent = new Date().getFullYear();

var lastModified = new Date(document.lastModified);
var formattedDate = lastModified.toLocaleDateString();
var formattedTime = lastModified.toLocaleTimeString();

document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate + " " + formattedTime;
