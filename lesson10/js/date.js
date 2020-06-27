 let date = new Date();
 let todaydate = date.getDate();

 document.getElementById("update").innerHTML = date.toDateString();




 // Banner for Fridays
 let d = new Date();
 const banner = document.getElementById("alert");
 if (d.getDate() == 6) {
     banner.style.d = "none";
 } else {
     banner.style.d = "none";
 }




 const hambutton = document.querySelector('.menusign');
 const mainnav = document.querySelector('.navigation')

 hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);