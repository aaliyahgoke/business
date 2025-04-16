
const navbar = document.querySelector('.navbar');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

scrollLeftBtn.addEventListener('click', () => {
  navbar.scrollBy({ left: -200, behavior: 'smooth' });
});

scrollRightBtn.addEventListener('click', () => {
  navbar.scrollBy({ left: 200, behavior: 'smooth' });
});
function toggleMenu(icon) {
  icon.classList.toggle("change");
  document.querySelector(".navbar hidden").classList.toggle("show");
  document.querySelector(".navbar hidden").classList.toggle("hidden");
}
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {
    const itemName = item.querySelector('span').textContent;
    alert(`You selected: ${itemName}`);
  });
});