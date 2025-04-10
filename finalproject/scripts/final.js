fetch('data/rentals.json')
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector("#rentals-table tbody");
    data.forEach(rental => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${rental.type}</td>
        <td>${rental.maxPersons}</td>
        <td>$${rental.halfDayRes}</td>
        <td>$${rental.fullDayRes}</td>
        <td>$${rental.halfDayWalk}</td>
        <td>$${rental.fullDayWalk}</td>
      `;
      tbody.appendChild(row);
    });
  });

  // 🔑 Replace with your OpenWeatherMap API key
const apiKey = "dcae74e55f03d1f32a5867f820bc1437";
const lat = 20.422983; // Cozumel latitude
const lon = -86.922343; // Cozumel longitude
const units = "metric"; // Celsius
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

fetch(weatherURL)
  .then((response) => response.json())
  .then((data) => {
    // 🌞 Temp Banner - Today’s max temp
    const today = new Date().getDate();
    const todayTemps = data.list.filter(item => new Date(item.dt_txt).getDate() === today);
    if (todayTemps.length > 0) {
      const maxTemp = Math.max(...todayTemps.map(item => item.main.temp_max));
      document.getElementById("#temp-max").textContent = maxTemp.toFixed(1);
    }

    // 🌤 Current weather
    const current = data.list[0];
    document.getElementById("weather-main").textContent = current.weather.map(w => w.main).join(", ");
    document.getElementById("weather-desc").textContent = current.weather.map(w => w.description).join(", ");
    document.getElementById("weather-temp").textContent = current.main.temp.toFixed(1);
    document.getElementById("weather-humidity").textContent = current.main.humidity;

    // 🌦 Weather Icon
    const iconCode = current.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const weatherIcon = document.getElementById("weather-icon");

    if (weatherIcon) {
    weatherIcon.innerHTML = `<img src="${iconURL}" alt="weather icon">`;
    }

    // 📅 Tomorrow @ 3PM forecast
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const targetForecast = data.list.find(item => {
      const date = new Date(item.dt_txt);
      return date.getDate() === tomorrow.getDate() && date.getHours() === 15;
    });

    if (targetForecast) {
      document.getElementById("weather-forecast").textContent = targetForecast.main.temp.toFixed(1);
    } else {
      document.getElementById("weather-forecast").textContent = "N/A";
    }
  })
  .catch((error) => {
    console.error("Weather data error:", error);
  });