window.addEventListener('keyup', e => {
  if (e.key == 'a') {
    document.body.classList.toggle('debug');
  }
});

// Navbar Toggle
const navbarToggle = document.querySelector('.navbar__toggle');
const navbar = document.querySelector('nav.navbar');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbar.classList.toggle('active');
});
