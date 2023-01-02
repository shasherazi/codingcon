const body = document.querySelector('body');
const navPopup = document.querySelector('.nav-popup');
const hamBurger = document.querySelector('.fa-bars');

hamBurger.addEventListener('click', () => {
  if (navPopup.style.display === 'none') {
    navPopup.style.display = 'flex';
    body.style.overflow = 'hidden';
  } else {
    navPopup.style.display = 'none';
    body.style.overflow = 'auto';
  }
});