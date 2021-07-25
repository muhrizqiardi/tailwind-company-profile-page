const nav = document.getElementById('nav');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');

let deviceMobile = window.innerWidth < 768;
let navOpened = !nav.classList.contains("-translate-y-full");

const toggleNav = () => {
  nav.classList.toggle("-translate-y-full")
  console.log('toggled');
}

navOpen.addEventListener("click", toggleNav)
navClose.addEventListener("click", toggleNav)

// // If window is resized, check if it's on mobile device
// window.addEventListener('resize', () => {
//   console.log('window resized')
//   if (!deviceMobile && !navOpened) {
//     console.log('its on desktop and nav is hidden')
//     toggleNav();
//   }
//   if (deviceMobile && navOpened) {
//     console.log('its on mobile and nav is opened')
//     toggleNav();
//   }
// });