const body = document.querySelector('body');
const navPopup = document.querySelector('.nav-popup');
const hamBurger = document.querySelector('.menu-icon');

hamBurger.addEventListener('click', () => {
  if (window.getComputedStyle(navPopup).display === 'none') {
    navPopup.style.display = 'flex';
    body.style.overflow = 'hidden';
    hamBurger.classList.remove('fa-bars');
    hamBurger.classList.add('fa-xmark');
  } else {
    navPopup.style.display = 'none';
    body.style.overflow = 'auto';
    hamBurger.classList.remove('fa-xmark');
    hamBurger.classList.add('fa-bars');
  }
});