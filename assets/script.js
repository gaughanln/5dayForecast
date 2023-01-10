// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// GLOBAL VARIABLES
var searchBoxEl = document.getElementById("search-box");
var citySearchEl = document.getElementsByClassName("city-search");
var formInputEl = document.querySelector(".form-input");
var searchBtnEl = document.querySelector(".btn");
var pastSearchEl = document.getElementById("past-search");
var containerEl = document.querySelector(".container");
var cityNameEl = document.querySelector("#cityName");

var iconEl = document.getElementById("main-icon");
var mainTempEl = document.getElementById("mainTemperature");
var mainTempDescEl = document.getElementById("tempDescription");

var localDateEl = $("#localDate");
var localTimeEl = $("#localTime");

// hides the weather box until the search button is clicked
containerEl.style.display = "none";

// makes the search button appear once it is clicked
searchBtnEl.addEventListener("click", function (event) {
  event.preventDefault();
  containerEl.style.display = "block";

  if (formInputEl.value.trim() || formInputEl.value.trim() !== "") {
    let city = formInputEl.value.trim();
    // do the actual search
    saveCitySearch(city);

    // render history buttons
    renderHistory();
  }
  console.log(formInputEl.value);


  // WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

  // fetching the API data
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      formInputEl.value +
      "&appid=a411ef0030322e0862cd44cde300dd84&units=imperial"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // CITY NAME
      document.querySelector("#cityName").textContent = data.name;
      console.log(data.name);

      // TEMPERATURE
      document.querySelector("#mainTemperature").textContent = data.main.temp;
      // need math.random() somewhere in here to round the number
      console.log(data.main.temp);

      //  HUMIDITY
      document.querySelector("#humidity").textContent = data.main.humidity;
      console.log(data.main.humidity);

      // WIND
      document.querySelector("#wind").textContent = data.wind.speed;
      console.log(data.wind.sppeed);
      // need math.random() somewhere in here

      // ICONS
      // can pull other icons from another source if you want
      var weatherIcon = data.weather[0].icon;
      var weatherIconUrl =
        "https://openweathermap.org/img/wn/" + weatherIcon + ".png";
      document.querySelector("#main-icon").setAttribute("src", weatherIconUrl);
      console.log(weatherIconUrl);
    });

  // claring the search box
  formInputEl.value = "";
});


// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city. needs to be like a button that will bring back the search

// setting up city searches as arrays to save in local storage
function saveCitySearch(city) {
  let previousHistory = JSON.parse(localStorage.getItem("searchHistory")) || {};
  previousHistory[city] = true;
  localStorage.setItem("searchHistory", JSON.stringify(previousHistory));
}

// showing the search history on the page
function renderHistory() {
  let previousHistory = JSON.parse(localStorage.getItem("searchHistory")) || {};
  pastSearchEl.innerHTML = "";
  // creating a button for the previiously searched citiesYes, they wi
  for (const cityName in previousHistory) {
    let button = document.createElement("button");
    button.innerText = cityName;

    // making the search history clickable - This isn't working

    // WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city. needs to be like a button that will bring back the search

    button.addEventListener("click", function (event) {
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





// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city. needs to be like a button that will bring back the search
