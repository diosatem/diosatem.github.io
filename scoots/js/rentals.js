//price chart
const rentalURL = 'https://diosatem.github.io/scoots/data/rentals.json';
fetch(rentalURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(rentalURL);

        //honda metro
        // const max = jsObject.rental[0].maxPersons;
        // document.getElementById('max1').textContent = max;

        // const rhalf = jsObject.rental[0].reservation[0].half;
        // document.getElementById('half1').textContent = rhalf;
        // console.log(rhalf);

        // const rfull = jsObject.rental[0].reservation[0].full;
        // document.getElementById('full1').textContent = rfull;
        // console.log(rfull);
        const rental = jsObject.rental;
        for (let type = 0; type < rental.length; type++) {
            document.getElementById(`max${type+1}`).textContent = rental[type].maxPersons;
            document.getElementById(`half${type+1}`).textContent = rental[type].reservation[0].half;
            document.getElementById(`full${type+1}`).textContent = rental[type].reservation[0].full;
            document.getElementById(`whalf${type+1}`).textContent = rental[type].walkIn[0].half;
            document.getElementById(`wfull${type+1}`).textContent = rental[type].walkIn[0].full;
        }

    });