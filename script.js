
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
document.addEventListener('DOMContentLoaded', function() {

  /* ============================
     HERO CAROUSEL
  ============================ */
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  const slideInterval = 5000; // 5 segundos

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Inicia o carousel
  showSlide(currentSlide);
  setInterval(nextSlide, slideInterval);

  /* ============================
     BOTÕES DE EMPREENDIMENTOS
  ============================ */
  const loadMoreBtn = document.getElementById('loadMore');
  const hideExtrasBtn = document.getElementById('hideExtras');
  const extraCards = document.querySelectorAll('.cards-grid .extra');

  loadMoreBtn.addEventListener('click', () => {
    extraCards.forEach(card => card.style.display = 'flex'); // mostra extras
    loadMoreBtn.style.display = 'none';
    hideExtrasBtn.style.display = 'inline-block';
  });

  hideExtrasBtn.addEventListener('click', () => {
    extraCards.forEach(card => card.style.display = 'none'); // esconde extras
    hideExtrasBtn.style.display = 'none';
    loadMoreBtn.style.display = 'inline-block';
  });

});
