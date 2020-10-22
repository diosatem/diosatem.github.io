//current date
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const date = new Date().getFullYear();
const d = new Date();
const monthDay = d.getDate();

document.getElementById('currentDate').innerHTML = days[d.getDay()] + ', ' + monthDay + ' ' + monthNames[d.getMonth()] + ' ' + date;

//toggle
function toggleMenu() {
    document
        .getElementById("primaryNav").classList.toggle("hide");
}

//site-wide notice
var daydate = new Date();
var x = daydate.getDay();

if (x == 5) {
    document.getElementById("notice").style.display = "block";

} else {
    document.getElementById("notice").style.display = "none";
    document.getElementsByTagName("header")[0].style.marginTop = "0";
}

//web font loader
WebFont.load({
    google: {
        families: [
            'Pacific'
        ]
    }
});

//wind chill

let temperature = parseFloat(document.getElementById("temp").value);
let windSpeed = parseFloat(document.getElementById("speed").value);
let chillResult = windChill(temperature, windSpeed);

document.getElementById("chill").innerHTML = chillResult.toFixed(2);

function windChill(tempF, speedF) {
    let factor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedF, 0.16) + 0.4275 * tempF * Math.pow(speedF, 0.16);
    return factor;
}