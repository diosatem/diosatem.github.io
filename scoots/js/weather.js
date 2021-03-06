//weather summary
const reqURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.5072&lon=-86.9446&exclude=hourly,daily&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(reqURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const iconSrc = 'https://openweathermap.org/img/w/' + jsObject.current.weather[0].icon + '.png';
        const altText = jsObject.current.weather[0].description;
        document.getElementById(`icon`).setAttribute('src', iconSrc);
        document.getElementById(`icon`).setAttribute('alt', altText);

        const temp = jsObject.current.temp;
        document.getElementById('temperature').textContent = temp;

        const desc = jsObject.current.weather[0].main;
        document.getElementById('description').textContent = desc;

        const humid = jsObject.current.humidity;
        document.getElementById('humidity').textContent = humid;
    });

//3-day forecast
const forecastURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.5072&lon=-86.9446&units=imperial&appid=78e17b7d76d50d7fdea902505c1a1377';
fetch(forecastURL)
    .then((res) => res.json())
    .then(res => {
        const {
            daily
        } = res;

        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        for (let day = 0; day < daily.length; day++) {
            document.getElementById(`dayTemp${day+1}`).textContent = daily[day].temp.day;
            const imgSrc = 'https://openweathermap.org/img/w/' + daily[day].weather[0].icon + '.png';
            const altDesc = daily[day].weather[0].description;
            document.getElementById(`ficon${day+1}`).setAttribute('src', imgSrc);
            document.getElementById(`ficon${day+1}`).setAttribute('alt', altDesc);
        }

        //alerts
        const alertEvent = jsObject.alert.event;
        document.getElementById('alertevent').textContent = alertEvent;
        const alertText = jsObject.alert.description;
        document.getElementById('alertdesc').textContent = alertText;
    });

//collapsible alerts
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}