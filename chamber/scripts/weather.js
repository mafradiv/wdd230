const currentTemp = document.querySelector ("#current-temp");
const weatherIcon = document.querySelector ("#weather-icon");
const captionDesc = document.querySelector ("figcaption");
const forecastContainer = document.querySelector ("#forecast");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-12.0432&lon=-77.0282&appid=dcae74e55f03d1f32a5867f820bc1437&units=metric';
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-12.0432&lon=-77.0282&appid=dcae74e55f03d1f32a5867f820bc1437&units=metric';

async function apiFetch () {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        console.log(data); //testing only
        displayResults (data); // uncomment when ready
        } else {
            throw Error (await response.text());
        }

        // Fetch 3-day forecast
        const forecastResponse = await fetch(forecasturl);
        if (!forecastResponse.ok) throw new Error(await forecastResponse.text());
        const forecastData = await forecastResponse.json();
        displayForecast(forecastData);

    } catch (error) {
        console.log("Error fetching data:",error);
    }
    
}

apiFetch ();

function displayResults (data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}

function displayForecast(data) {
    const forecast = {};
    data.list.forEach(item => {
        const date = item.dt_txt.split(" ")[0]; // Extract the date (YYYY-MM-DD)
        if (!forecast[date] && item.dt_txt.includes("12:00:00")) { // Pick 12:00 PM readings
            forecast[date] = item.main.temp;
        }
    });

    // Display 3-day forecast
    forecastContainer.innerHTML = "<h3>3-Day Forecast:</h3>";
    Object.entries(forecast).slice(0, 3).forEach(([date, temp]) => {
        const forecastItem = document.createElement("p");
        forecastItem.textContent = `${date}: ${temp}°C`;
        forecastContainer.appendChild(forecastItem);
    });
}