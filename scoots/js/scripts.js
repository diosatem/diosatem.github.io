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

//web font loader
WebFont.load({
    google: {
        families: ['Syne']
    }
});

//last modified date
let updated = document.lastModified;
document.getElementById("lastmod").innerHTML = updated;

//current year
let dates = new Date();
let year = dates.getFullYear();
document.getElementById("currentYear").innerHTML = year;






