//weather summary for preston page
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const weatherDesc = jsObject.weather[0].main;
        document.getElementById('prestonCurrentWeather').textContent = weatherDesc;

        let valNum = jsObject.main.temp_max;
        document.getElementById('high').textContent = valNum.toFixed(2);

        const humid = jsObject.main.humidity;
        document.getElementById('humidity').textContent = humid;

        const windS = jsObject.wind.speed;
        document.getElementById('windSpeed').textContent = windS;

        //windchill for preston
        let chillResult = windChill(valNum, windS);

        function windChill(tempF, speedF) {
            let factor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedF, 0.16) + 0.4275 * tempF * Math.pow(speedF, 0.16);
            return factor;
        }

        if (valNum <= 50 & windS > 3) {
            document.getElementById("chill").textContent = chillResult.toFixed(2) + " °F";
        } else {
            document.getElementById("chill").textContent = "N/A";
        }
    });

//5-day forecast for preston page
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject.list.filter(fcast => fcast.dt_txt.includes('18:00:00'));

        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].dt_txt);

            document.getElementById(`dayId${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`dayTemp${day+1}`).textContent = forecast[day].main.temp;

            const iconsrc = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
            const alttext = forecast[day].weather[0].description;
            document.getElementById(`ficon${day+1}`).setAttribute('src', iconsrc);
            document.getElementById(`ficon${day+1}`).setAttribute('alt', alttext);
        }
    });

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function events(city) {
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        }).then(function (jsonObject) {
            const town = jsonObject['towns'];
            const filtered = town.filter(town => (town.name == city));
            let paragraph = document.createElement('div');

            for (let i = 0; i < filtered[0].events.length; i++) {
                let eventCity = document.getElementsByClassName("city");
                let eventItem = document.createElement('p');
                let city = filtered[0].name.includes(eventCity);
                eventItem.textContent = filtered[0].events[i];
                paragraph.appendChild(eventItem);
            }
            document.querySelector('div.events').appendChild(paragraph);
        });
}
events('Preston');