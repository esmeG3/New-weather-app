function refreshWeather(responce) {
let temperatureElement = document.querySelector("#temperature-today")
let temperature = responce.data.temperature.current;
let cityWeatherElement = document.querySelector("#city-weather");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let timeElement = document.querySelector("#time");
let date = new Date (responce.data.time * 1000);

let iconElement = document.querySelector("#weather-icon");

iconElement.innerHTML = `<img src="${responce.data.condition.icon_url}" class = "weather-emoji" />`;
timeElement.innerHTML = formatDate(date);
cityWeatherElement.innerHTML = responce.data.city;
descriptionElement.innerHTML = responce.data.condition.description;
humidityElement.innerHTML = `${responce.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${responce.data.wind.speed} km/h`;
temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "Sunday", 
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday", 
        "Friday", 
        "Saturday"
    ];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
if (hours < 10 ) {
    hours = `0${hours}`
}
    return `${day}, ${hours}:${minutes}`;
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