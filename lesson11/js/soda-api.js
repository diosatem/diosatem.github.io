//weather summary for soda springs page
const sodaURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(sodaURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const sodaDesc = jsObject.weather[0].main;
        document.getElementById('sodaCurrentWeather').textContent = sodaDesc;

        const sodaValNum = jsObject.main.temp_max;
        document.getElementById('sodaHigh').textContent = sodaValNum.toFixed(2);

        const sodaHumid = jsObject.main.humidity;
        document.getElementById('sodaHumidity').textContent = sodaHumid;

        const sodaWind = jsObject.wind.speed;
        document.getElementById('sodaWindSpeed').textContent = sodaWind;

        //windchill for soda springs
        const sodaChillResult = sodaWindChill(sodaValNum, sodaWind);

        function sodaWindChill(tempF, speedF) {
            let factor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedF, 0.16) + 0.4275 * tempF * Math.pow(speedF, 0.16);
            return factor;
        }

        if (sodaValNum <= 50 & sodaWind > 3) {
            document.getElementById("sodaChill").textContent = sodaChillResult.toFixed(2) + " °F";
        } else {
            document.getElementById("sodaChill").textContent = "N/A";
        }
    });

//5-day forecast for soda springs page
const sodaForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(sodaForecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const sodaForecast = jsObject.list.filter(sodafcast => sodafcast.dt_txt.includes('18:00:00'));

        const sodaWeekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        for (let day = 0; day < sodaForecast.length; day++) {
            const sodaD = new Date(sodaForecast[day].dt_txt);

            document.getElementById(`dayId${day+1}`).textContent = sodaWeekdays[sodaD.getDay()];
            document.getElementById(`dayTemp${day+1}`).textContent = sodaForecast[day].main.temp;

            const sodaIconsrc = 'https://openweathermap.org/img/w/' + sodaForecast[day].weather[0].icon + '.png';
            const sodaAlttext = sodaForecast[day].weather[0].description;
            document.getElementById(`ficon${day+1}`).setAttribute('src', sodaIconsrc);
            document.getElementById(`ficon${day+1}`).setAttribute('alt', sodaAlttext);
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
        events('Soda Springs');
    });