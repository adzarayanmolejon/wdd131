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
