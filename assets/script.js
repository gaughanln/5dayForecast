// GIVEN a weather dashboard with form inputs

// GLOBAL VARIABLES
// const key = "a411ef0030322e0862cd44cde300dd84";
// this is hard coded for dallas at the moment
// var apiUrl =
//   "https://api.openweathermap.org/data/2.5/forecast?q=dallas&appid=a411ef0030322e0862cd44cde300dd84";

// // fetched API - needs work
// fetch(apiUrlForecast)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// var apiUrlForecast = "http://api.openweathermap.org/geo/1.0/direct?q=" + form-input.value + "&appid=a411ef0030322e0862cd44cde300dd84"

// fields to call temp, temp_min, temp_max, humidity, wind: speed, "weather": [ // {
//   "id": 500,
//   "main": "Rain",
//   "description": "light rain",
//   "icon": "10d"

// GLOBAL VARIABLES
var searchBoxEl = document.getElementById("search-box");
var citySearchEl = document.getElementsByClassName("city-search");
var formInputEl = document.querySelector(".form-input");
var searchBtnEl = document.querySelector(".btn");
var pastSearchEl = document.getElementById("past-search");
var containerEl = document.querySelector(".container");
var cityNameEl = document.querySelector("#cityName")

var localDateEl = $("#localDate")
var localTimeEl = $("#localTime")

// hides the weather box until the search button is clicked
containerEl.style.display = "none";

// makes the search button appear once it is clicked
searchBtnEl.addEventListener("click", function (event) {
  event.preventDefault();
  containerEl.style.display = "block";

  if (formInputEl.value.trim() || formInputEl.value.trim() !== '') {
    let city = formInputEl.value.trim();
    // do the actual search
    saveCitySearch(city);
    formInputEl.value = '';
    // render history buttons
    renderHistory();
  }
  // console.log(formInputEl.value)

  // fetching the API data
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+ formInputEl.value +"&appid=a411ef0030322e0862cd44cde300dd84")
    .then((response) => response.json())
    .then((data) => console.log(data));
  
    // var nameValue = data["name"];
    // cityName.innerHTML = nameValue
});

// setting up city searches as arrays to save in local storage
function saveCitySearch(city) {
  let previousHistory = JSON.parse(localStorage.getItem('searchHistory')) || {};
  previousHistory[city] = true;
  localStorage.setItem("searchHistory", JSON.stringify(previousHistory));
}

// showing the search history on the page
function renderHistory() {
  let previousHistory = JSON.parse(localStorage.getItem('searchHistory')) || {};
  pastSearchEl.innerHTML = '';
  // creating a button for the previiously searched citiesYes, they wi
  for(const cityName in previousHistory){
    let button = document.createElement('button');
    button.innerText = cityName;
// making the search history clickable
    button.addEventListener('click', function (event) {
      let cityName = event.target.innerText;
      console.log(cityName);
      // serachCity(cityName);
    });
// HOW DO I STYLE THIS
    pastSearchEl.append(button);
  }
}


// can maybe do Date + time within the API

// display date function * need to make sure it's set to date of the city called
function displayDate() {
  var todaysDate = dayjs().format("dddd, MMM DD, YYYY");
  localDateEl.text(todaysDate);
}
displayDate();

// display time function * need to make sure it's set to local time of the city called
function displayTime() {
  var todaysTime = dayjs().format("h:mm A");
  localTimeEl.text(todaysTime);
}
displayTime();


// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city. needs to be like a button that will bring back the search
