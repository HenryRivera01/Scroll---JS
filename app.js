/* Set a dynamic date */
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

/* Close links */

const navToggleBtn = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggleBtn.addEventListener('click', ()=> {
    linksContainer.classList.toggle('show-links')
});
