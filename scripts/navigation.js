const menuBtn = document.getElementById('menu');
const nav = document.getElementById('nav-menu');
const navList = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('open');
  menuBtn.classList.toggle('open');
  nav.classList.toggle('open');
});