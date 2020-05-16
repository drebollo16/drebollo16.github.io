let month = set.getMonth() + 1;
let date = set.getDate();
let year = set.getFullYear();
let hour = set.getHours();
let mintue = set.getMinutes();
let second = set.getSeconds();
let update = month + "/" + date + "/" + year + " " + hour + ":" + mintue + ":" + second;
document.getElementById("update").innerHTML = update;
console.log("date");