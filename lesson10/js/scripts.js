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
    document.getElementsByTagName("header")[0].style.marginTop = "35px";

} else {
    document.getElementById("notice").style.display = "none";
    document.getElementsByTagName("header")[0].style.marginTop = "0";
}

//web font loader
WebFont.load({
    google: {
        families: ['Poppins']
    }
});

//lazy loading
let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}



    