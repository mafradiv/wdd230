const apiKey = "dcae74e55f03d1f32a5867f820bc1437"; // Replace with your OpenWeatherMap API key
const city = "Lima"; // Change to your preferred city
const country = "PE"; // Country code for Peru
const units = "metric"; // Use "imperial" for Fahrenheit

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=${units}`;

async function getWeather() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("Weather data not available");
    
    const data = await response.json();
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const weatherElement = document.getElementById("weather");
    weatherElement.innerHTML = `${temperature}°C - ${description}`;
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

getWeather();

