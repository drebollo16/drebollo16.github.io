const hambutton = document.querySelector('.menusign');
const mainnav = document.querySelector('.navlinks')

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);