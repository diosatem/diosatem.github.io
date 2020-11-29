//weather summary for preston page
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const weatherDesc = jsObject.weather[0].main;
        document.getElementById('currentWeather').textContent = weatherDesc;

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

//weather summary for soda springs page
const sodaURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(sodaURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const sodaDesc = jsObject.weather[0].main;
        document.getElementById('sodaCurrentWeather').textContent = sodaDesc;

        let sodaValNum = jsObject.main.temp_max;
        document.getElementById('sodaHigh').textContent = sodaValNum.toFixed(2);

        const sodaHumid = jsObject.main.humidity;
        document.getElementById('sodaHumidity').textContent = sodaHumid;

        const sodaWind = jsObject.wind.speed;
        document.getElementById('sodaWindSpeed').textContent = sodaWind;

        //windchill for soda springs
        let sodaChillResult = sodaWindChill(sodaValNum, sodaWind);

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
    });

//weather summary for fish haven page
const fishURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(fishURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const fishDesc = jsObject.weather[0].main;
        document.getElementById('fishCurrentWeather').textContent = fishDesc;

        let valNum = jsObject.main.temp_max;
        document.getElementById('fishHigh').textContent = valNum.toFixed(2);

        const fishHumid = jsObject.main.humidity;
        document.getElementById('fishHumidity').textContent = fishHumid;

        const fishWind = jsObject.wind.speed;
        document.getElementById('fishWindSpeed').textContent = fishWind;
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
    });

//town data for index.html
const reqURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(reqURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let indexBox = document.createElement('section');

                let title = document.createElement('h2');
                title.textContent = towns[i].name;
                indexBox.appendChild(title);

                let h3 = document.createElement('h3');
                h3.textContent = towns[i].motto;
                indexBox.appendChild(h3);

                let year = document.createElement('p');
                year.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
                indexBox.appendChild(year);

                let pop = document.createElement('p');
                pop.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
                indexBox.appendChild(pop);

                let rainfall = document.createElement('p');
                rainfall.textContent = 'Annual Rainfall:' + ' ' + towns[i].averageRainfall;
                indexBox.appendChild(rainfall);

                let image = document.createElement('img');
                image.setAttribute('src', '/lesson11/images/' + towns[i].photo);
                image.alt = towns[i].name;
                indexBox.appendChild(image);

                document.querySelector('div.towndata').appendChild(indexBox);
            }
        }
    });