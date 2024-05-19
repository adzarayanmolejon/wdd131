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
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
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
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-lds-83007-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Quezon City Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/7-Rome-Temple-2160340.jpg"
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
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x225/adelaide-australia-temple-lds-866420-wallpaper.jpg"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo Japan",
        dedicated: "2016, August, 21",
        area: 48480,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/13-11-2017-sapporo-temple-front-view.jpg"
    },
    {
        templeName: "Kinshasa Democratic Republic of the Congo",
        location: "Kinshasa Democratic Republic of the Congo",
        dedicated: "2019, April, 14",
        area: 12570,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kinshasa-democratic-republic-of-the-congo/400x250/1-Kinshasa-DR-Congo-Temple-Exteriror.jpg"
    },
    {
        templeName: "Papeete Tahiti",
        location: "Papeete Tahiti",
        dedicated: "1983, October, 27",
        area: 10000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/papeete-tahiti/400x250/papeete_tahiti_temple_exterior_01.jpg"
    },
    {
        templeName: "Porto Alegre Brazil",
        location: "Porto Alegre Brazil",
        dedicated: "2000, December, 17",
        area: 10659,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/porto-alegre-brazil/400x250/porto-alegre-temple-lds-601515-wallpaper.jpg"
    },
    {
        templeName: "Sydney Australia",
        location: "Sydney Australia",
        dedicated: "1984, September, 20",
        area: 30177,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/400x250/sydney_australia_temple_exterior_03.jpg"
    }
];

function createTempleCard(temple) {
    const card = document.createElement('figure');
    card.className = 'temple-card';

    const name = document.createElement('h2');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedication = document.createElement('p');
    dedication.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area} sq ft`;

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = 'lazy';

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(image);

    return card;
}

function displayTempleCards(temples, filter = 'all') {
    let filteredTemples = temples;
    
    if (filter !== 'all') {
        switch (filter) {
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() <= 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 50000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area <= 50000);
                break;
        }
    }
    
    const container = document.querySelector('.temple-grid');
    container.innerHTML = '';
    filteredTemples.forEach(temple => {
        const card = createTempleCard(temple);
        container.appendChild(card);
    });
}

document.getElementById('temple-filter').addEventListener('change', (event) => {
    displayTempleCards(temples, event.target.value);
});

// Initial display
displayTempleCards(temples, 'all');
  