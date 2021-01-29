const nav = document.querySelector('.nav');
const container = document.querySelector('.container');
const menuOpen = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const panels = document.querySelectorAll('.panel');
const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const form = document.getElementById('contact-form');

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

// Project panels
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

// Testimonial container
const testimonials = [
  {
    name: 'Al Proulx',
    position: 'President, Scopic Consulting',
    photo: 'docs/Alain.webp',
    text: 'Like most people, the idea of designing my company\'s website is intimidating and somewhat overwhelming...Kelsi was able to quickly identified the gaps in my marketing strategies. She created my Web landing page, drawing attention to the investigation services [Scopic Consulting] provides. Kelsi\'s straightforward approach to my landing page development was simple for me to understand and exciting for me to observe Kelsi\'s creative mind at work! The visits to my LinkedIn account and newly created landing page has increased drastically and has generated positive and exciting enquiries into my company services...'
  }
];

if (testimonials.length <= 1) {
  rightBtn.style.visibility = 'hidden';
  leftBtn.style.visibility = 'hidden';
}

let idx = 0;

let interval = setInterval(run, 10000);

function run() {
  idx++;

  updateTestimonial();
}

function updateTestimonial() {
  if (idx > testimonials.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = testimonials.length - 1;
  }
  
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

}


function resetInterval() {
  clearInterval(interval);
  interval = setInterval(updateTestimonial, 30000);
}

rightBtn.addEventListener('click', () => {
  idx++;

  updateTestimonial();
  resetInterval();
})

leftBtn.addEventListener('click', () => {
  idx--;

  updateTestimonial();
  resetInterval();
})

// Contact form

const formEvent = form.addEventListener('submit', (e) => {
  e.preventDefault();

  let mail = new FormData(form);

  sendMail(mail);
});
console.log(formEvent)
// console.log(mail)

const sendMail = (formEvent) => {
  const baseURL = 'http://localhost:5000' || 'https://kelsidev.net';
  fetch(`${baseURL}/send`, {
    method: 'post',
    body: formEvent,
  }).then((res) => {
    return res.json();
  })
}