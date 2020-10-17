//currentdate
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const date = new Date().getFullYear();
const d = new Date();
const monthDay = d.getDate();

document.getElementById('currentDate').innerHTML = days[d.getDay()] + ', ' + monthDay + ' ' + monthNames[d.getMonth()] + ' ' + date;

//menu
function toggleMenu() {
    document
        .getElementById("primaryNav").classList.toggle("hide");
}

//site-wide notice
var d = new Date();
var x = d.getDay();

if (x == 5) {
    document.getElementById('notice').style.display = "block";
}
else {
   document.getElementById("notice").style.display = "none";
}
