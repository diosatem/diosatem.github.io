//api test
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let valNum = jsObject.main.temp;
        document.getElementById('current-temp').textContent = (((valNum - 273.15) * 1.8) + 32).toFixed(2);

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    });

//weather summary for preston page
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const weatherDesc = jsObject.weather[0].main;
        document.getElementById('currentWeather').textContent = weatherDesc;

        let valNum = jsObject.main.temp_max;
        document.getElementById('high').textContent = (((valNum - 273.15) * 1.8) + 32).toFixed(2);

        const humid = jsObject.main.humidity;
        document.getElementById('humidity').textContent = humid;

        const windS = jsObject.wind.speed;
        document.getElementById('windSpeed').textContent = windS;
    });

//5-day forecast for preston page
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const forecast = jsObject.list.filter(fcast => fcast.dt_txt.includes('18:00:00'));
        console.log(forecast);

        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast.dt_txt);
        }


    });