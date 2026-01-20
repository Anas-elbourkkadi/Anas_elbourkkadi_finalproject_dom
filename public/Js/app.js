const overlay = document.querySelector('.carousel-overlay');
const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const closeBtn = document.querySelector('.bi-x');
const openBtn = document.querySelector('.icon1');

let index = 0;

// open
openBtn.addEventListener('click', () => {
  overlay.classList.remove('d-none');
});

// close
closeBtn.addEventListener('click', () => {
  overlay.classList.add('d-none');
});

// update slide
function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

// next
next.addEventListener('click', () => {
  index++;
  if (index >= slides.length) index = 0;
  updateSlide();
});

// prev
prev.addEventListener('click', () => {
  index--;
  if (index < 0) index = slides.length - 1;
  updateSlide();
});
