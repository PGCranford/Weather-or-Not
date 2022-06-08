function weatherBalloon(cityID) {
    var key = 'b5500c263aef32c220366266b83504b5';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            console.log(data);
        })
        .catch(function () {
            // catch any errors
        });
}

window.onload = function () {
    weatherBalloon(6167865);
}