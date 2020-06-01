let high = document.getElementById('high').innerHTML;
let windspeed = document.getElementById('windspeed').innerHTML;



//the formula to calculate the wind chill factor is LaTeX: 
// f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16}
let ws = Math.pow(windspeed, .16);
let first = 35.74 + (0.6215 * high);
let second = 35.75 * ws;
let third = 0.4275 * high * ws;


let windchill = first - second + third;
if (high <= 50 && windspeed > 3) {
    windchilld = Math.round(windchill);

} else {
    windchill = "N/A";
}
document.getElementById('windchill').innerHTML = windchill;