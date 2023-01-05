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