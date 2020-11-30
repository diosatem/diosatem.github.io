//weather summary for fish haven page
const fishURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(fishURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const fishDesc = jsObject.weather[0].main;
        document.getElementById('fishCurrentWeather').textContent = fishDesc;

        const fishValNum = jsObject.main.temp_max;
        document.getElementById('fishHigh').textContent = fishValNum.toFixed(2);

        const fishHumid = jsObject.main.humidity;
        document.getElementById('fishHumidity').textContent = fishHumid;

        const fishWind = jsObject.wind.speed;
        document.getElementById('fishWindSpeed').textContent = fishWind;

        //windchill for fish haven
        const sodaChillResult = fishWindChill(fishValNum, fishWind);

        function fishWindChill(tempF, speedF) {
            let factor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedF, 0.16) + 0.4275 * tempF * Math.pow(speedF, 0.16);
            return factor;
        }

        if (fishValNum <= 50 & fishWind > 3) {
            document.getElementById("fishChill").textContent = sodaChillResult.toFixed(2) + " °F";
        } else {
            document.getElementById("fishChill").textContent = "N/A";
        }
    });

//5-day forecast for fish haven page
const fishForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(fishForecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const fishForecast = jsObject.list.filter(fishfcast => fishfcast.dt_txt.includes('18:00:00'));

        const fishWeekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        for (let day = 0; day < fishForecast.length; day++) {
            const fishD = new Date(fishForecast[day].dt_txt);

            document.getElementById(`dayId${day+1}`).textContent = fishWeekdays[fishD.getDay()];
            document.getElementById(`dayTemp${day+1}`).textContent = fishForecast[day].main.temp;

            const fishIconsrc = 'https://openweathermap.org/img/w/' + fishForecast[day].weather[0].icon + '.png';
            const fishAlttext = fishForecast[day].weather[0].description;
            document.getElementById(`ficon${day+1}`).setAttribute('src', fishIconsrc);
            document.getElementById(`ficon${day+1}`).setAttribute('alt', fishAlttext);
        }

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
        events('Fish Haven');
    });