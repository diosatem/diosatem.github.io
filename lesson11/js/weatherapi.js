//api test
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        let vNum = jsObject.main.temp;
        document.getElementById('current-temp').textContent = vNum;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    });

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
                let box = document.createElement('section');

                let title = document.createElement('h2');
                title.textContent = towns[i].name;
                box.appendChild(title);

                let h3 = document.createElement('h3');
                h3.textContent = towns[i].motto;
                box.appendChild(h3);

                let year = document.createElement('p');
                year.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
                box.appendChild(year);

                let pop = document.createElement('p');
                pop.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
                box.appendChild(pop);

                let rainfall = document.createElement('p');
                rainfall.textContent = 'Annual Rainfall:' + ' ' + towns[i].averageRainfall;
                box.appendChild(rainfall);

                let image = document.createElement('img');
                image.setAttribute('src', '/lesson11/images/' + towns[i].photo);
                image.alt = towns[i].name;
                box.appendChild(image);

                document.querySelector('div.towndata').appendChild(box);
            }
        }
    });