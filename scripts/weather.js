const currentTemp = document.querySelector ("#current-temp");
const weatherIcon = document.querySelector ("#weather-icon");
const captionDesc = document.querySelector ("figcaption");
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-12.0432&lon=-77.0282&appid=dcae74e55f03d1f32a5867f820bc1437&units=metric';

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