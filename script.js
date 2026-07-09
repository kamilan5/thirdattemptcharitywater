// Mobile nav toggler
const navToggler = document.getElementById('navToggler');
const navLinks = document.getElementById('primary-nav');

navToggler.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggler.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a link is tapped
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggler.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-triggered reveal animation for sections
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));