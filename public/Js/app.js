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

const navMenu = document.querySelectorAll('.navMenu p');
const nameTheMenu = document.querySelector('.nameTheMenu');
const listMenu = document.querySelectorAll('.listMenu section');
let list = document.querySelector('.listMenu');



let clearMenu = () => {
  let start = Math.floor((listMenu.length * Math.random()) / 2);
  for (start; start < listMenu.length; start++) {
    list.innerHTML += listMenu[start].outerHTML
  }

}

let chnageName = (e) => {
  nameTheMenu.textContent = e.textContent;
}

let check = (elemnet) => {
  if (!elemnet.classList.contains('border-colorBtns')) {
    elemnet.classList.add('border-colorBtns');
    navMenu.forEach((e) => {
      if (e != elemnet && e.classList.contains('border-colorBtns')) e.classList.remove('border-colorBtns');
    })
  }
};

navMenu.forEach((e) => {
  e.addEventListener('click', () => {
    chnageName(e);
    check(e);

    list.innerHTML = '';
    if (e.textContent.toLowerCase() == 'starters') {
      listMenu.forEach((e) => {
        list.innerHTML += e.outerHTML;
      })
    }
    else if (e.textContent.toLowerCase() == 'breakfast'
      || e.textContent.toLowerCase() == 'dinner'
      || e.textContent.toLowerCase() == 'lunch') clearMenu();

  })
})



