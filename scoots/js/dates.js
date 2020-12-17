//last modified date
let updated = document.lastModified;
document.getElementById("lastmod").innerHTML = updated;

//current year
let dates = new Date();
let year = dates.getFullYear();
document.getElementById("currentYear").innerHTML = year;