<<<<<<< HEAD
const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];


const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear();
const currentdate = dayName + ", " + todaysdate.getDate() + monthName + ", " + todaysdate.getFullYear();

=======
const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];


const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear();
const currentdate = dayName + ", " + todaysdate.getDate() + monthName + ", " + todaysdate.getFullYear();

>>>>>>> f13efbfa150f223e968d93036d542e92e5fb5f8c
document.getElementById('currentdate').textContent = currentdate;