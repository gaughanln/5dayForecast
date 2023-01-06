// GIVEN a weather dashboard with form inputs

// GLOBAL VARIABLES
// const key = "a411ef0030322e0862cd44cde300dd84";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=a411ef0030322e0862cd44cde300dd84";
// reference activity 24 for this 
var searchBoxEl = document.getElementById("search-box");
var citySearchEl = document.getElementsByClassName("city-search");
var formInputEl = document.getElementsByClassName("form-input");
var searchBtnEl = document.getElementsByClassName("btn");
var pastSearchEl = document.getElementById("past-search")


// fetched API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));

// searchBtn.addEventListener("click", function () {
//   console.log(this.innerHTML);
// });


















// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history



// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city. needs to be like a button that will bring back the search

var unitIsCelcius = true;
var globalForecast = [];

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
  "50n": "wi-fog"
};


$(function(){
  getClientPosition();
  startClock();  
});


function startClock(){
  setInterval(function(){
    $("#localTime").text(new Date().toLocaleTimeString());
  }, 1000);
}


function getClientPosition(){
  $.getJSON("https://ipapi.co/json/", function(position) {
    $("#cityName").text(position.city);
    $("#cityCode").text(position.country);
    
    getWeatherData(position.latitude, position.longitude);
  });
}


function getWeatherData(latitude, longitude){
  $.ajax({
    type: "GET",
    url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "appid=a411ef0030322e0862cd44cde300dd84",
    cache: true,
    headers: {
      "Access-Control-Allow-Headers": "x-requested-with"
    },
    success: function(forecast){
      globalForecast = forecast;
      updateForecast(forecast);

    },
    error: function(error){
      console.log("Error with ajax: "+ error);
    }
  });
}


// Update view values from passed forecast
function updateForecast(forecast){

  // Present day
  var today = forecast.list[0];
  $("#tempDescription").text(toCamelCase(today.weather[0].description));
  $("#humidity").text(today.humidity);
  $("#wind").text(today.speed);
  $("#localDate").text(getFormattedDate(today.dt));
  $("#main-icon").addClass(weatherIconsMap[today.weather[0].icon]);
  $("#mainTemperature").text(Math.round(today.temp.day));
  $("#mainTempHot").text(Math.round(today.temp.max));
  $("#mainTempLow").text(Math.round(today.temp.min));


  // Following days data
  for(var i = 1; i < (forecast.list).length; i++){
    var day = forecast.list[i];

    // Day short format e.g. Mon
    var dayName = getFormattedDate(day.dt).substring(0,3);

    // weather icon from map
    var weatherIcon = weatherIconsMap[day.weather[0].icon];

    $("#forecast-day-" + i + "-name").text(dayName);
    $("#forecast-day-" + i + "-icon").addClass(weatherIcon);
    $("#forecast-day-" + i + "-main").text(Math.round(day.temp.day));
    $("#forecast-day-" + i + "-ht").text(Math.round(day.temp.max));
    $("#forecast-day-" + i + "-lt").text(Math.round(day.temp.min));
  }
}


// Refresh button handler
$("#refreshButton").on("click", function(){
  // Starts Refresh button's spinning animation
  $("#refreshButton").html("<i class='fa fa-refresh fa-spin fa-fw'></i>");
  getWeatherData();
});



// Farenheit button handler
// Converts every shown value to Farenheit
// $("#farenheit").on("click", function(){  
//   if(unitIsCelcius){
//     $("#celcius").removeClass("active");
//     this.className = "active";
    
//     // main day
//     var today = globalForecast.list[0];
//     today.temp.day = toFerenheit(today.temp.day);
//     today.temp.max = toFerenheit(today.temp.max);
//     today.temp.min = toFerenheit(today.temp.min);
//     globalForecast.list[0] = today;

//     // week
//     for(var i = 1; i < 5; i ++){
//       var weekDay = globalForecast.list[i];
//       weekDay.temp.day = toFerenheit(weekDay.temp.day);
//       weekDay.temp.max = toFerenheit(weekDay.temp.max);
//       weekDay.temp.min = toFerenheit(weekDay.temp.min);
//       globalForecast[i] = weekDay;
//     }

//     // update view with updated values
//     updateForecast(globalForecast);
    
//     unitIsCelcius = false;
//   }
// });


// Applies the following format to date: WeekDay, Month Day, Year
function getFormattedDate(date){
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date * 1000).toLocaleDateString("en-US",options);
}


// Formats the text to CamelCase
function toCamelCase(str) {
  var arr = str.split(" ").map(
    function(sentence){
      return sentence.charAt(0).toUpperCase() + sentence.substring(1);
    }
  );
  return arr.join(" ");
}



// // Converts to Farenheit
// function toFerenheit(val){
//   var degrees = (val * 1.8) + 32;
//   var rounded = Math.round(degrees);
//   return rounded;
// }