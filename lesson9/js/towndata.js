const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {


            const towns = jsonObject['towns'];
            for (let i = 0; i < towns.length; i++) {
                if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                    let box = document.createElement('section');

                    let h2 = document.createElement('h2');
                    h2.textContent = towns[i].name;
                    box.appendChild(h2);

                    let h3 = document.createElement('h3');
                    h3.textContent = towns[i].motto;
                    box.appendChild(h3);

                    let year = document.createElement('p');
                    year.textContent = towns[i].yearFounded;
                    box.appendChild(year);

                    let pop = document.createElement('p');
                    pop.textContent = towns[i].currentPopulation;
                    box.appendChild(pop);

                    let rainfall = document.createElement('p');
                    rainfall.textContent = towns[i].averageRainfall;
                    box.appendChild(rainfall);

                    let image = document.createElement('img');
                    image.setAttribute('src', town[i].photo);
                    image.alt = town[i].name + ' ' + town[i].lastname + '-' + prophets[i].order;
                    box.appendChild(image);

                    document.querySelector('div.towndata').appendChild(box);
            }}
            });