let date = new Date();
let todaydate = date.getDate();

document.getElementById("update").innerHTML = date.toDateString();








// Banner for Fridays
let d = new Date();
const banner = document.getElementById("alert");
if (d.getDate() == 5) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}