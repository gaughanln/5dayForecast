// GIVEN a weather dashboard with form inputs

// GLOBAL VARIABLES
const key = "a411ef0030322e0862cd44cde300dd84";
var citySearchBoxEl = $("#city-search");
var formInputEl = $(".form-input")
var pastSearchEl = $("#past-search");
var searchBoxEl = document.getElementById(".search-box");
var searchBtn = document.querySelector(".btn");

searchBtn.addEventListener("click", function () {
  console.log(this.innerHTML);
});


$(document).ready(function () {
$(".btn").click(function() {

var searchBoxEl = $(this).parent.attr("id");

var cityEl = $(this).prev("input").val();

localStorage.setItem(searchBoxEl, cityEl);

});
})

// line 29 is not proper syntax. we don't want the info to stay in the box,
$(document).ready(function () {
$("#search-box").each(function (){

var searchBoxEl =$(this).attr("id");

var savedSearch = localStorage.getItem(searchBoxEl);
$(this).find("input").val(savedSearch)
});
})

// function showPastSearch(event) {
//   event.preventDefault();

//   var city = $('input[name="city-input"]').val();

//   if (!city) {
//     console.log('No searches have been made');
//     return;
//   }

//   var cityName = $('<li class="flex-row justify-space-between align-center p-2 text-dark">');
  
//   cityName.text(city);

//   // print to the page
//   pastSearchEl.append(cityName);

//   // clear the form input element
//   $('input[name="city-input"]').val('');
// }

// API Key
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={a411ef0030322e0862cd44cde300dd84}











// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history



// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city