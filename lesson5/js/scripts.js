//toggle
function toggleMenu() {
    document
        .getElementById("primaryNav").classList.toggle("hide");
}

//site-wide notice
var d = new Date();
var x = d.getDay();


if (x == 5) {
    document.getElementById("notice").style.display = "block";

} else {
    document.getElementById("notice").style.display = "none";
    document.getElementsByTagName("header")[0].style.marginTop = "0";
}