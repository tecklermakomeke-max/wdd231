// 1. Hamburger menu
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.textContent = nav.classList.contains('open') ? '✕' : '☰';
});

// 2. Close menu when clicking a link (mobile)
document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn.textContent = '☰';
    });
});