let temperature = document.getElementsByTagName("span")[0].innerText;
let windSpeed = document.getElementsByTagName("span")[2].innerText;
let chillResult = windChill(temperature, windSpeed);

function windChill(tempF, speedF) {
    let factor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedF, 0.16) + 0.4275 * tempF * Math.pow(speedF, 0.16);
    return factor;
}

if (temperature <= 50 & windSpeed > 3) {
    document.getElementById("chill").textContent = chillResult.toFixed(2) + " °F";
} else {
    document.getElementById("chill").textContent = "N/A";
}