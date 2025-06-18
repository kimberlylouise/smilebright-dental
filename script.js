const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

// Optional: Animate CTA button on click
const ctaBtn = document.getElementById('cta-btn');
ctaBtn.addEventListener('click', () => {
  ctaBtn.classList.add('clicked');
  setTimeout(() => ctaBtn.classList.remove('clicked'), 400);
});