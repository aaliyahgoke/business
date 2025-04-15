function togglemenu() {
    const hiddenNav = document.getElementById('hiddenNav');
    hiddenNav.classList.toggle('show-nav');
}
const navbar = document.querySelector('.navbar');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

scrollLeftBtn.addEventListener('click', () => {
  navbar.scrollBy({ left: -200, behavior: 'smooth' });
});

scrollRightBtn.addEventListener('click', () => {
  navbar.scrollBy({ left: 200, behavior: 'smooth' });
});
