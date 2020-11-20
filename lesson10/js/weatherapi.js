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

        let weatherDesc = jsObject.weather[0].main;
        document.getElementById('currentWeather').textContent = weatherDesc;

        let valNum = jsObject.main.temp_max;
        document.getElementById('high').textContent = (((valNum - 273.15) * 1.8) + 32).toFixed(2);

        let humid = jsObject.main.humidity;
        document.getElementById('humidity').textContent = humid;

        let windS = jsObject.wind.speed;
        document.getElementById('windSpeed').textContent = windS;
    });

//5-day forecast for preston page
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        for (let i = 0; i <= 5; i++) {
            let day = jsObject.list[0].dt;
            document.getElementById('dayId').textContent = day;

            const iconSrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.list[0].weather[0].description;
        document.getElementById('dayIcon').setAttribute('src', iconSrc);
        document.getElementById('dayIcon').setAttribute('alt', desc);


        }



        



        

        let day1temp = jsObject.list[0].main.temp;
        document.getElementById('dayOnetemp').textContent = day1temp;


    });