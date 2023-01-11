// QUESTIONS

// how to call the array of forecast dates - do i need a for loop for each element i am calling?

// What is up with my formatting? am I not doing bootstrap right?

// why is my main weather content so huge? Is that a formatting thing?



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

 // fetching the API data for current weather of city searched
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
 
      // CITY NAME
      document.querySelector("#cityName").textContent = data.name;
      console.log(data.name);

      // TIMEZONE
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
      // need math.random() somewhere in here

      // ICONS
      // can pull other icons from another source if you want
      var weatherIcon = data.weather[0].icon;
      var weatherIconUrl =
        "https://openweathermap.org/img/wn/" + weatherIcon + ".png";
      document.querySelector("#main-icon").setAttribute("src", weatherIconUrl);
      console.log(weatherIconUrl);
    });


  //  fetching the API data for 5 day forecast
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=a411ef0030322e0862cd44cde300dd84&units=imperial"
  )
    .then((response) => response.json())
    .then((dataForecast) => {
      console.log(dataForecast);

      // 5 DAY FORECAST
      // need a for loop
      

      // for (let index = 0; index < 5; index++) {
      //   var temp = dataForecast.list[index].main.temp;
      // // need a for loop
      // document.querySelector(".forecast-5day").textContent = Math.round(temp) +"°";
      // console.log(Math.round(temp));
      // }});

  //     hard coded day by day 
  // DAY 1
      document.querySelector(".forecast-day-1-temp").textContent = Math.round(
        dataForecast.list[0].main.temp) +"°";
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
      document.querySelector(".forecast-day-2-temp").textContent = Math.round(
        dataForecast.list[1].main.temp) + "°";
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
      document.querySelector(".forecast-day-3-temp").textContent = Math.round(
        dataForecast.list[0].main.temp) + "°";
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
    document.querySelector(".forecast-day-4-temp").textContent = Math.round(
      dataForecast.list[3].main.temp) + "°";
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
    document.querySelector(".forecast-day-5-temp").textContent = Math.round(
      dataForecast.list[4].main.temp) + "°";
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

// var time = data.dt;
// var timeActual = (time * 1000);
// var actualTime = dayjs(timeActual).format("h:mm A");
// document.querySelector(".localTime").textContent =
//   "time: " + actualTime;
// console.log(actualTime);