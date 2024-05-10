// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if conditions are suitable for wind chill calculation
    if (temperature <= 10 && windSpeed > 4.8) {
        // Calculate wind chill factor
        let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2); // Return the result rounded to 2 decimal places
    } else {
        return 'N/A'; // Return 'N/A' if conditions are not met
    }
}

// Example static values for temperature and wind speed in the Philippines (replace with actual values)
let temperature = 25; // Celsius
let windSpeed = 10; // km/h

// Display wind chill factor on page load
window.onload = function() {
    let windChill = calculateWindChill(temperature, windSpeed);
    document.querySelector('.weather').innerHTML += `<p>Wind Chill Factor: ${windChill} °C</p>`;
}

// Other JavaScript code for interactions or dynamic content
// Add your code here as needed

//date:modification
document.getElementById("currentyear").textContent = new Date().getFullYear();

var lastModified = new Date(document.lastModified);
var formattedDate = lastModified.toLocaleDateString();
var formattedTime = lastModified.toLocaleTimeString();

document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate + " " + formattedTime;
/*for menu*/
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector("nav ul").classList.toggle("show");
});


// Function to calculate wind chill factor
function calculateWindChill(temp, windSpeed) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16))).toFixed(1);
}

// Display wind chill factor in the Weather section of the page
document.addEventListener("DOMContentLoaded", function() {
    if (temp <= 10 && windSpeed > 4.8) {
        let windChill = calculateWindChill(temp, windSpeed);
        document.getElementById("weather").textContent = `Weather: ${temp}°C, ${windSpeed} km/h wind, Wind Chill Factor: ${windChill} °C`;
    } else {
        document.getElementById("weather").textContent = `Weather: ${temp}°C, ${windSpeed} km/h wind, Wind Chill Factor: N/A`;
    }
});
