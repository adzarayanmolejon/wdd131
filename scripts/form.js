const products = [
  {
    'id': 'fc-1888',
    'name': 'flux capacitor',
    'avgRating': 4.5
  },
  {
    'id': 'fc-2050',
    'name': 'power laces',
    'avgRating': 4.7
  },
  {
    'id': 'fs-1987',
    'name': 'time circuits',
    'avgRating': 3.5
  },
  {
    'id': 'ac-2000',
    'name': 'low voltage reactor',
    'avgRating': 3.9
  },
  {
    'id': 'jj-1969',
    'name': 'warp equalizer',
    'avgRating': 5.0
  }
];

// Populate product names in the select element
const productSelect = document.getElementById('product');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Update current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();

var lastModified = new Date(document.lastModified);
var formattedDate = lastModified.toLocaleDateString();
var formattedTime = lastModified.toLocaleTimeString();
document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate + " " + formattedTime;

// Star rating functionality
document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', function() {
    const rating = this.getAttribute('data-value');
    document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
    this.classList.add('selected');
    document.querySelector(`#rating${rating}`).checked = true;
  });
});
