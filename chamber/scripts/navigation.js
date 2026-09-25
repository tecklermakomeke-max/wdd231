// Get the button and nav elements - check if they exist first
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

if (hamButton && navigation) {
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
}

// Close menu when clicking a link (if exists)
const navLinks = document.querySelectorAll('.navigation a');
if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navigation) navigation.classList.remove('open');
            if (hamButton) hamButton.classList.remove('open');
        });
    });
}