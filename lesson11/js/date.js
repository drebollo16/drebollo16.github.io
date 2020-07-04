let dayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthName = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];
let date = new Date();
let weeks = dayWeek[date.getDay()];
let months = monthName[date.getMonth()];
document.getElementById("update").innerHTML = weeks + "," + " " + date.getDate() + " " + months + " " + date.getFullYear();



// Banner for Fridays

const banner = document.getElementById("alert");
if (weeks == 'Friday') {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}