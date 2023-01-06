// GIVEN a weather dashboard with form inputs

// GLOBAL VARIABLES
// const key = "a411ef0030322e0862cd44cde300dd84";
// this is hard coded for dallas at the moment
var apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=a411ef0030322e0862cd44cde300dd84";

// var apiUrlByCity = "http://api.openweathermap.org/geo/1.0/direct?q=" + form-input + "&appid=a411ef0030322e0862cd44cde300dd84"

// fields to call temp, temp_min, temp_max, humidity, wind: speed, "weather": [ // {
//   "id": 500,
//   "main": "Rain",
//   "description": "light rain",
//   "icon": "10d"

var searchBoxEl = document.getElementById("search-box");
var citySearchEl = document.getElementsByClassName("city-search");
var formInputEl = document.querySelector(".form-input");
var searchBtnEl = document.querySelector(".btn");
var pastSearchEl = document.getElementById("past-search");
var containerEl = document.querySelector(".container");

// hides the weather box until the search button is clicked
containerEl.style.display = "none";

// makes the search button appear once it is clicked
searchBtnEl.addEventListener("click", function (event) {
  event.preventDefault();
  containerEl.style.display = "block";
});

// fetched API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));

// initiates the search button to save the city name searched into local storage
function saveCity() {
  document.querySelector(".form-input").innerHtml = formInputEl;

  searchBtnEl.addEventListener("click", function saveCitySearch(event) {
    event.preventDefault();
    formInputEl = formInputEl.value;
    console.log(formInputEl);

    localStorage.setItem("formInputEl", formInputEl);

    saveCitySearch();
  });
}
saveCity();
// need to make this be able to just continuously add to local storage. when i type in a 2nd city it gives me a value of undefined.



// Maps the API's icons to the ones from https://erikflowers.github.io/weather-icons/
var weatherIconsMap = {
  "01d": "wi-day-sunny",
  "01n": "wi-night-clear",
  "02d": "wi-day-cloudy",
  "02n": "wi-night-cloudy",
  "03d": "wi-cloud",
  "03n": "wi-cloud",
  "04d": "wi-cloudy",
  "04n": "wi-cloudy",
  "09d": "wi-showers",
  "09n": "wi-showers",
  "10d": "wi-day-hail",
  "10n": "wi-night-hail",
  "11d": "wi-thunderstorm",
  "11n": "wi-thunderstorm",
  "13d": "wi-snow",
  "13n": "wi-snow",
  "50d": "wi-fog",
  "50n": "wi-fog",
};

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city. needs to be like a button that will bring back the search
