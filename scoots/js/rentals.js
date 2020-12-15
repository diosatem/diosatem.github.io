//price chart
const rentalURL = 'http://www.diosatem.github.io/scoots/data/rentals.json';
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
        document.getElementById('description').textContent = desc;

        const humid = jsObject.current.humidity;
        document.getElementById('humidity').textContent = humid;
    });