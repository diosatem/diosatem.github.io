//price chart
const rentalURL = 'https://diosatem.github.io/scoots/data/rentals.json';
fetch(rentalURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(rentalURL);

        //honda metro
        const max = jsObject.rental[0].maxPersons;
        document.getElementById('max1').textContent = max;
        const half = jsObject.rental[0].reservation[0];
        document.getElementById('half1').textContent = half;
        const full = jsObject.rental[0].reservation[1];
        document.getElementById('full1').textContent = full;
    });