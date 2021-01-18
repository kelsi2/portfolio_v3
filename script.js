const nav = document.querySelector('.nav');
const container = document.querySelector('.container');
const menuOpen = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');

// Change nav on scroll
window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  };
};

// Hamburger menu toggle
menuOpen.addEventListener('click', () => {
  container.classList.add('hamburger-active');
})

menuClose.addEventListener('click', () => {
  container.classList.remove('hamburger-active')
})