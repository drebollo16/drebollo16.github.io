const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let date = new Date();
let day1 = date.getDay();
let todaydate = date.getDate();
let month1 = date.getMonth();
let year = date.getFullYear();

let datedisplay = `${days[day1]} , ${todaydate} ${months[month1]} ${year}`;
document.getElementById("update").innerHTML = datedisplay;



const newLocal = new Date();
// Banner for Fridays
let d = newLocal;
const banner = document.getElementById("alert");
if (d.getDay() == 5) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}