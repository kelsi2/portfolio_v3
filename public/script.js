const nav = document.querySelector('.nav');
const container = document.querySelector('.container');
const menuOpen = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const projects = document.querySelectorAll('.project');
const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

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

// Projects
window.addEventListener('scroll', revealProjects);

revealProjects();

function revealProjects() {
  const triggerBottom = window.innerHeight / 5 * 4;

  projects.forEach(project => {
    const projectTop = project.getBoundingClientRect().top;

    if (projectTop < triggerBottom) {
      project.classList.add('show');
    } else {
      project.classList.remove('show');
    }
  })
}

// Testimonial container
const testimonials = [
  {
    name: 'Al Proulx',
    position: 'President, Scopic Consulting',
    photo: 'docs/Alain.webp',
    text: '"Like most people, the idea of designing my company\'s website is intimidating and somewhat overwhelming...Kelsi was able to quickly identified the gaps in my marketing strategies. She created my Web landing page, drawing attention to the investigation services [Scopic Consulting] provides. Kelsi\'s straightforward approach to my landing page development was simple for me to understand and exciting for me to observe Kelsi\'s creative mind at work! The visits to my LinkedIn account and newly created landing page has increased drastically and has generated positive and exciting enquiries into my company services..."'
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