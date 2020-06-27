let high = parseFloat(document.getElementById('high').textContent);
let windspeed = parseFloat(document.getElementById('windspeed').textContent);

//the formula to calculate the wind chill factor is LaTeX: 
// f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16}
let ws = Math.pow(windspeed, 0.16);

let windchill = 35.74 + 0.6215 * high - 35.75 * ws + 0.4275 * high * ws;

if (high <= 50 && windspeed > 3) {

    document.getElementById('windchill').innerHTML = Math.round(windchill);
} else {

    windchill = "N/A";
}