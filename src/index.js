function refreshWeather(responce) {
let temperatureElement = document.querySelector("#temperature-today")
let temperature = responce.data.temperature.current;
let cityWeatherElement = document.querySelector("#city-weather");

cityWeatherElement.innerHTML = responce.data.city;
temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
let apiKey = "982865b6c020427a6364ef4b31o6dt0f";
let apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}


function displayCityName(event) {
event.preventDefault();
let searchInput = document.querySelector("#form-search-input");

searchCity(searchInput.value)
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayCityName);

searchCity("Sydney");