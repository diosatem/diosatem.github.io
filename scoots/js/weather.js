//weather summary for fish haven page
const reqURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.5072&lon=-86.9446&exclude=hourly,daily&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(reqURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(reqURL);

        const iconSrc = 'https://openweathermap.org/img/w/' + jsObject.current.weather[0].icon + '.png';
        const altText = jsObject.current.weather[0].description;
        document.getElementById(`icon`).setAttribute('src', iconSrc);
        document.getElementById(`icon`).setAttribute('alt', altText);
        console.log(iconSrc);

        const temp = jsObject.current.temp;
        document.getElementById('temperature').textContent = temp;

        const desc = jsObject.current.weather[0].main;
        console.log(desc);
        document.getElementById('description').textContent = desc;

        const humid = jsObject.current.humidity;
        document.getElementById('humidity').textContent = humid;
    });

//3-day forecast
const forecastURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.5072&lon=-86.9446&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(forecastURL);
        const forecast = jsObject.daily.filter(fcast => fcast.temp.day);
        console.log(forecast);
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].temp.day);
            console.log(d);
            document.getElementById(`dayId${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`dayTemp${day+1}`).textContent = forecast[day].temp.day;

            const imgSrc = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
            const altDesc = forecast[day].weather[0].description;
            document.getElementById(`ficon${day+1}`).setAttribute('src', imgSrc);
            document.getElementById(`ficon${day+1}`).setAttribute('alt', altDesc);
        }

        //alerts
        const alertEvent = jsObject.alert.event;
        document.getElementById('alertevent').textContent = alertEvent;
        console.log(alertEvent);
        const alertText = jsObject.alert.description;
        document.getElementById('alertdesc').textContent = alertText;
        console.log(alertText);
    });