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


// makes the weather box appear once it is clicked
searchBtnEl.addEventListener("click", function (event) {
  event.preventDefault();
  containerEl.style.display = "block";
  console.log(formInputEl.value);

  // need a try / catch here?

  searchCity(formInputEl.value);
  // claring the search box
  formInputEl.value = "";
});


// WEATHER API CALL
function searchCity(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=a411ef0030322e0862cd44cde300dd84&units=imperial"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // run the search
      saveCitySearch(data.name);
      // render history buttons
      renderHistory();

      //  CURRENT WEATHER
      // CITY NAME
      document.querySelector("#cityName").textContent = data.name;
      console.log(data.name);

      // TIMEZONE - need to pull local info to correlating city called
      // var time = data.timezone;
      // var timeActual = dayjs(time).format("h:mm A");
      // document.querySelector("#localTime").textContent = timeActual;
      // console.log(timeActual);

      // TEMPERATURE
      document.querySelector("#mainTemperature").textContent =
        Math.round(data.main.temp) + " °F";
      console.log(Math.round(data.main.temp));

      // WEATHER CONDITIONS
      document.querySelector("#tempDescription").textContent =
        data.weather[0].description;
      console.log(data.weather[0].description);

      // HUMIDITY
      document.querySelector("#humidity").textContent = Math.round(
        data.main.humidity
      );
      console.log(Math.round(data.main.humidity));

      // WIND
      document.querySelector("#wind").textContent = Math.round(data.wind.speed);
      console.log(Math.round(data.wind.speed));

      // ICONS
      // can pull other icons from another source if you want - but how?
      var weatherIcon = data.weather[0].icon;
      var weatherIconUrl =
        "https://openweathermap.org/img/wn/" + weatherIcon + ".png";
      document.querySelector("#main-icon").setAttribute("src", weatherIconUrl);
      console.log(weatherIconUrl);
    });

  //  5 DAY FORECAST FETCH
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=a411ef0030322e0862cd44cde300dd84&units=imperial"
  )
    .then((response) => response.json())
    .then((dataForecast) => {
      console.log(dataForecast);

      // 5 DAY FORECAST
      // need a for loop but can't figure it out because it's so nested inside the data. Here's the attempted logic

      //  let forecastTemp =[];
      //   for (
      //     let index = 0;
      //     index < dataForecast.list.length; index++) {
      //     console.log(dataForecast.list[index].weather[0]);

      //  forecastDesc.push(dataForecast.list[index].weather.description); //description
      //  forecastIcon.push(dataForecast.list[index].weather.icon); //icon
      //  forecastTemp(dataForecast.list[index].weather.main); // temp
      //   }

      // var ul = document.querySelector(".forecast-temp");
      // stationName.forEach((forecastTemp) => {
      //   var li = document.createElement("li");
      //   li.innerText = forecastTemp; //
      //   ul.appendChild(li);
      // });

      //   document.querySelector(".forecast-temp").textContent = Math.round(
      //     forecastTemp) +"°";
      //   console.log(Math.round(forecastTemp));


      //     hard coded day by day since i couldn't establilsh the for loop
      // DAY 1
      document.querySelector(".forecast-day-1-temp").textContent =
        Math.round(dataForecast.list[0].main.temp) + "°";
      console.log(Math.round(dataForecast.list[0].main.temp));

      //  HUMIDITY
      document.querySelector("#humidity-day-1").textContent =
        dataForecast.list[0].main.humidity;
      console.log(dataForecast.list[0].main.humidity);

      // WIND
      document.querySelector("#wind-1").textContent = Math.round(
        dataForecast.list[0].wind.speed
      );
      console.log(Math.round(dataForecast.list[0].wind.speed));

      // ICONS
      // can pull other icons from another source if you want
      var weatherIcon5 = dataForecast.list[0].weather[0].icon;
      var weatherIconUrl2 =
        "https://openweathermap.org/img/wn/" + weatherIcon5 + ".png";
      document
        .querySelector("#forecast-day-1-icon")
        .setAttribute("src", weatherIconUrl2);
      console.log(weatherIconUrl2);

      //  DAY 2
      document.querySelector(".forecast-day-2-temp").textContent =
        Math.round(dataForecast.list[1].main.temp) + "°";
      console.log(Math.round(dataForecast.list[1].main.temp));

      //  HUMIDITY
      document.querySelector("#humidity-day-2").textContent =
        dataForecast.list[1].main.humidity;
      console.log(dataForecast.list[0].main.humidity);

      // WIND
      document.querySelector("#wind-2").textContent = Math.round(
        dataForecast.list[1].wind.speed
      );
      console.log(Math.round(dataForecast.list[1].wind.speed));

      // ICONS
      // can pull other icons from another source if you want
      var weatherIcon5 = dataForecast.list[1].weather[0].icon;
      var weatherIconUrl2 =
        "https://openweathermap.org/img/wn/" + weatherIcon5 + ".png";
      document
        .querySelector("#forecast-day-2-icon")
        .setAttribute("src", weatherIconUrl2);
      console.log(weatherIconUrl2);

      //  DAY 3
      document.querySelector(".forecast-day-3-temp").textContent =
        Math.round(dataForecast.list[0].main.temp) + "°";
      console.log(Math.round(dataForecast.list[2].main.temp));

      //  HUMIDITY
      document.querySelector("#humidity-day-3").textContent =
        dataForecast.list[2].main.humidity;
      console.log(dataForecast.list[2].main.humidity);

      // WIND
      document.querySelector("#wind-3").textContent = Math.round(
        dataForecast.list[2].wind.speed
      );
      console.log(Math.round(dataForecast.list[2].wind.speed));

      // ICONS
      // can pull other icons from another source if you want
      var weatherIcon5 = dataForecast.list[2].weather[0].icon;
      var weatherIconUrl2 =
        "https://openweathermap.org/img/wn/" + weatherIcon5 + ".png";
      document
        .querySelector("#forecast-day-3-icon")
        .setAttribute("src", weatherIconUrl2);
      console.log(weatherIconUrl2);

      //  DAY 4
      document.querySelector(".forecast-day-4-temp").textContent =
        Math.round(dataForecast.list[3].main.temp) + "°";
      console.log(Math.round(dataForecast.list[3].main.temp));

      // HUMIDITY
      document.querySelector("#humidity-day-4").textContent =
        dataForecast.list[3].main.humidity;
      console.log(dataForecast.list[3].main.humidity);

      // WIND
      document.querySelector("#wind-4").textContent = Math.round(
        dataForecast.list[3].wind.speed
      );
      console.log(Math.round(dataForecast.list[3].wind.speed));

      // ICONS
      // can pull other icons from another source if you want
      var weatherIcon5 = dataForecast.list[3].weather[0].icon;
      var weatherIconUrl2 =
        "https://openweathermap.org/img/wn/" + weatherIcon5 + ".png";
      document
        .querySelector("#forecast-day-4-icon")
        .setAttribute("src", weatherIconUrl2);
      console.log(weatherIconUrl2);

      //  DAY 5
      document.querySelector(".forecast-day-5-temp").textContent =
        Math.round(dataForecast.list[4].main.temp) + "°";
      console.log(Math.round(dataForecast.list[3].main.temp));

      // HUMIDITY
      document.querySelector("#humidity-day-5").textContent =
        dataForecast.list[4].main.humidity;
      console.log(dataForecast.list[3].main.humidity);

      // WIND
      document.querySelector("#wind-5").textContent = Math.round(
        dataForecast.list[4].wind.speed
      );
      console.log(Math.round(dataForecast.list[4].wind.speed));

      // ICONS
      // can pull other icons from another source if you want
      var weatherIcon5 = dataForecast.list[4].weather[0].icon;
      var weatherIconUrl2 =
        "https://openweathermap.org/img/wn/" + weatherIcon5 + ".png";
      document
        .querySelector("#forecast-day-5-icon")
        .setAttribute("src", weatherIconUrl2);
      console.log(weatherIconUrl2);
    });
}


// setting up city searches as arrays to save in local storage
function saveCitySearch(city) {
  let previousHistory = JSON.parse(localStorage.getItem("searchHistory")) || {};
  if (!previousHistory[city]) {
    previousHistory[city] = true;
    localStorage.setItem("searchHistory", JSON.stringify(previousHistory));
  }
}


// showing the search history on the page
function renderHistory() {
  let previousHistory = JSON.parse(localStorage.getItem("searchHistory")) || {};
  pastSearchEl.innerHTML = "";
  // creating a button for the previiously searched citiesYes, they wi
  for (const cityName in previousHistory) {
    let button = document.createElement("button");
    button.innerText = cityName;

    // sets up past searches as clickable to recall their weather
    button.addEventListener("click", function (event) {
      let cityName = event.target.innerText;
      console.log(cityName);
      searchCity(cityName);
    });
    pastSearchEl.append(button);
  }
}


// can maybe do Date + time within the API

// display date function * need to make sure it's set to date of the city called
function displayDate() {
  var todaysDate = dayjs().format("dddd, MMM DD");
  localDateEl.text(todaysDate);
}
displayDate();


// display time function * need to make sure it's set to local time of the city called
function displayTime() {
  var todaysTime = dayjs().format("h:mm A");
  localTimeEl.text(todaysTime);
}
displayTime();

