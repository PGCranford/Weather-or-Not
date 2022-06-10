var button = document.querySelector(".button")
var inputCity = document.querySelector(".inputCity")
var city = document.querySelector(".city")
var temp = document.querySelector(".temp")
var humidity = document.querySelector(".humidity")
var windSpeed = document.querySelector(".windSpeed")
var unIndex = document.querySelector(".uvIndex")
var icon = document.querySelector("weatherIcon")

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
        })
        .catch(function () {
            window.alert("Please enter a valid city")
            // catch any errors
        });



    var = fiveDay = "api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid==b5500c263aef32c220366266b83504b5&units=imperial"
    fetch(fiveDay)




    //save searches to local storage

    // var saveCity = localStorage.getItem(cityValue)
    // console.log(saveCity)


    // localStorage.setItem((saveCity));
    // console.log(localStorage)

})



