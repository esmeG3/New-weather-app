function displayCityName(event) {
event.preventDefault();
let searchInput = document.querySelector("#form-search-input");
let cityWeatherElement = document.querySelector("#city-weather");
cityWeatherElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayCityName);