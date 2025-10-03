
const slides = document.querySelectorAll('.hero-slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000); // muda a cada 5 segundos

const loadBtn = document.getElementById('loadMore');
const hideBtn = document.getElementById('hideExtras');
const extraCards = document.querySelectorAll('.card.extra');

loadBtn.addEventListener('click', () => {
  extraCards.forEach(card => card.style.display = 'block');
  loadBtn.style.display = 'none';
  hideBtn.style.display = 'inline-block';
});

hideBtn.addEventListener('click', () => {
  extraCards.forEach(card => card.style.display = 'none');
  loadBtn.style.display = 'inline-block';
  hideBtn.style.display = 'none';
});
