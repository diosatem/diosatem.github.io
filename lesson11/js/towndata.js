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