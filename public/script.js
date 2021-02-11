const container = document.querySelector('.container');
const menuOpen = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const links = document.querySelectorAll('.link');

// Hamburger menu toggle
menuOpen.addEventListener('click', () => {
  container.classList.add('hamburger-active');
})

menuClose.addEventListener('click', () => {
  container.classList.remove('hamburger-active')
})

// Menu close on click
links.forEach(link => link.addEventListener('click', () => {
  container.classList.remove('hamburger-active')
}))