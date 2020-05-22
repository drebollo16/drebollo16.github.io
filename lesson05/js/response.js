const hambutton = document.querySelector('.menusign');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);



// Banner for Fridays
let d = new Date();
const banner = document.getElementById("banner");
if (d.getDate() == 3) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}