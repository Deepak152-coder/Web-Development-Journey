document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const GetWeatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("Weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const tempDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMsg = document.getElementById("error-message");

  const API_KEY = "6f58e37b5b6e0b58826c877abe520e6d"; //env variables

  GetWeatherButton.addEventListener("click", async () => {
    const cityName = cityInput.value.trim();
    if (cityName === "") return;

    // it may throw an error
    // Server/database is in another continent

    try {
      const weatherData = await FetchWeatherData(cityName);
      GetWeatherData(weatherData);
    } catch (error) {
      DisplayError();
    }
  });

  async function FetchWeatherData(city) {
    // Get the Data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    if (response.ok === false) {
      DisplayError();
    }
    const data = await response.json();
    return data;
  }

  function GetWeatherData(data) {
    console.log(data);
    const { name, main, weather } = data;
    cityNameDisplay.textContent = `Name : ${name}`;
    tempDisplay.textContent = `temperature : ${main.temp}`;
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

    // Unlock the Display
    weatherInfo.classList.remove("hidden");
    errorMsg.classList.add("hidden");
  }

  function DisplayError() {
    weatherInfo.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
});
