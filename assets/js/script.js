
//today vars
var button = document.querySelector(".button")
var inputCity = document.querySelector(".inputCity")
var city = document.querySelector(".city")
var temp = document.querySelector(".temp")
var humidity = document.querySelector(".humidity")
var windSpeed = document.querySelector(".windSpeed")
var uvIndex = document.querySelector(".uvIndex")
var showIcon = document.querySelector("weatherIcon")
var today = document.querySelector("currentDay")
var search = []

//five day vars
// var fiveDayDate = document.querySelector("dayContainer")
// var fiveDaytemp = 
// var fiveDayWind = 
// var fiveDayHumidity = 


var date =
    moment().format("MM/DD/YY");
console.log(date)
// need to display 

button.addEventListener("click", function () {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputCity.value + '&appid=b5500c263aef32c220366266b83504b5&units=imperial')
        .then(function (response) { return response.json() }) // Convert data to json
        .then(function (data) {
            var cityValue = data["name"];
            var tempValue = data["main"]["temp"] + "°F";
            var humidityValue = "Humidty:" + data["main"]["humidity"];
            var windSpeedValue = "Windspeed:" + data["wind"]["speed"] + "mph";
            // var uvIndex = data[""];

            city.innerHTML = cityValue;
            temp.innerHTML = tempValue;
            humidity.innerHTML = humidityValue;
            windSpeed.innerHTML = windSpeedValue;

            console.log(data);

            var iconId = data.weather[0].icon;
            var iconUrl = " https://openweathermap.org/img/w/" + iconId + ".png"
            dayIcon.setAttribute('src', iconUrl)


        });
    // .catch (function (err) {
    // window.alert("Please enter a valid city");

    // });
    localStorage.setItem("inputCity", JSON.stringify(inputCity))

    //localStorage.setItem("inputCity", JSON.stringify(inputCity))


    // console.log(saveCity)

    previousCities.addEventListener("click", function () {
        let oldCity = inputCity.value;
        localStorage.setItem(oldCity, JSON.stringify(inputCity));
        if (previousCities) {
            search = search + previousCities
        }
        //cities showing up as numbers not words 
        console.log(search.length)
        search.innerHTML = window.localStorage.getItem(search);


    });


});





// var forecastFive = ("https://api.openweathermap.org/data/2.5/forecast?q=" + inputCity.value + "&appid=b5500c263aef32c220366266b83504b5&units=imperial")
// fetch(forecastFive)
//     .then(function (response) { return response.json() }) // Convert data to json
//     .then(function (data) {

//         console.log(forecastFive);

//         var setUpFiveDay function()
//         // var fiveDayDate = data.list[0].dt_txt;
//         // var fiveDaytemp = data.list[0]["main"[0]]
//         // var fiveDayWind = data.list[0]["wind"]["speed"]
//         // var fiveDayHumidity = data.list[0]["main"]["humidity"]



//     }



