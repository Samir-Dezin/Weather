async function fetchWeather(city = "Lahore") {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "de400cff03mshd636b6f46cca699p15cec1jsn675599bc1f0c",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const tempElement = document.getElementById("temp");
    const feelsLikeElement = document.getElementById("feels_like");
    const minTemp = document.getElementById("min_temp");
    const windSpeed = document.getElementById("wind_speed");
    const cloudPctElement = document.getElementById("cloud_pct");
    const windDegrees = document.getElementById("wind_degrees");
    const maxTemp = document.getElementById("max_temp");
    const humidity = document.getElementById("humidity");
    const cityname = document.getElementById("city");

    tempElement.innerHTML = result.temp;
    feelsLikeElement.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    maxTemp.innerHTML = result.max_temp + "°C";
    minTemp.innerHTML = result.min_temp + "°C";
    cloudPctElement.innerHTML = result.cloud_pct + "%";
    windSpeed.innerHTML = result.wind_speed + " km/h";
    windDegrees.innerHTML = result.wind_degrees + " degrees";
    cityname.innerHTML = `${city}`;
  } catch (error) {
    console.error(error);
  }
}

async function searchWeather() {
  const searchInput = document.getElementById("search-input");
  const city = searchInput.value.trim();

  if (city) {
    await fetchWeather(city);
  } else {
    await fetchWeather();
  }
}

// Call fetchWeather() on page load with the default city "Lahore"
fetchWeather();

// time
function createDigitalClock() {
  // Get the clock element from the DOM
  const clockElement = document.getElementById("clock");

  // Function to update the clock
  function updateClock() {
    // Get the current time
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let hour_twelve;
    if (hours >= 12) {
      hour_twelve = hours - 12;
    }
    // Format the time as a string
    let timeString = `${padNumber(hour_twelve)}:${padNumber(
      minutes
    )}:${padNumber(seconds)}`;

    if (hours >= 12) {
      timeString += " PM";
    } else {
      timeString += " AM";
    }

    // Update the clock element
    clockElement.textContent = timeString;
  }

  // Helper function to pad single-digit numbers with a leading zero
  function padNumber(number) {
    return number.toString().padStart(2, "0");
  }

  // Update the clock every second
  setInterval(updateClock, 1000);
}

// Call fetchWeather() on page load with the default city "Lahore"
fetchWeather();

// Start the digital clock
createDigitalClock();
