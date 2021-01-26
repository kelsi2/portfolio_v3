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
    photo: 'https://media-exp1.licdn.com/dms/image/C5603AQEtBgxmeugLsw/profile-displayphoto-shrink_400_400/0/1525125439221?e=1617235200&v=beta&t=0c3ZLu3gvL-hHK5YN0RIjtqz4P45BAeGWpD_e80Jd10',
    text: 'Like most people, the idea of designing my company\'s website is intimidating and somewhat overwhelming, I recognized the need for Scopic Consulting to be better positioned in the competitive world of investigative workplace harassment investigation, and proactive conflict resolution training. However, I had no idea where to start. My LinkedIn account would receive "visits" but had never generate any real interest or follow up enquiries for my service. Kelsi was able to quickly identified the gaps in my marketing strategies. She created my Web landing page, drawing attention to the investigation services my company provides. Kelsi\'s straightforward approach to my landing page development was simple for me to understand and exciting for me to observe Kelsi\'s creative mind at work! The visits to my LinkedIn account and newly created landing page has increased drastically and has generated positive and exciting enquiries into my company services. Thank you Kelsi for making an otherwise intimidating process easy to understand and fun to learn!'
  }
];

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