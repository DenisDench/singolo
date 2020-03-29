/* SCROLL */

document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const currentPosition = window.scrollY;
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('main>section');
  const links = document.querySelectorAll('#navigation>li>a');

  sections.forEach((elem) => {
    if (elem.offsetTop - header.offsetHeight <= currentPosition
    && (elem.offsetTop + elem.offsetHeight) > 0) {
      links.forEach((link) => {
        link.classList.remove('header__link_selected');
        if (elem.getAttribute('id') == link.getAttribute('href').substring(1)) {
          link.classList.add('header__link_selected');
        }
      })
    }
  });
};


/* SLIDER */

const carousel = document.querySelector('.slider__carousel');
const slider = document.querySelector('.slider__layout');
const prev = document.querySelector('.slider__arrow-left');
const next = document.querySelector('.slider__arrow-right');

let direction = -1;

prev.addEventListener('click', () => {
  if (direction == -1) {
    slider.append(slider.firstElementChild);
  };
  direction = 1;
  carousel.style.justifyContent = 'flex-end';
  slider.style.transform = 'translate(50%)';
});

next.addEventListener('click', () => {
  if (direction == 1) {
    slider.prepend(slider.lastElementChild);
  }
  direction = -1;
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-50%)';
});

slider.addEventListener('transitionend', () => {
  if (direction == -1) {
    slider.append(slider.firstElementChild);
  } else if (direction == 1) {
    slider.prepend(slider.lastElementChild);
  };

  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all 0.5s';
  });
});

slider.addEventListener('transitionstart', () => { // етить, вот это костыль
  const sliderSection = document.querySelector('.slider');

  if (sliderSection.classList.contains('bg-blue')) {
    sliderSection.classList.remove('bg-blue');
    sliderSection.classList.add('bg-red');
  } else {
    sliderSection.classList.add('bg-blue');
    sliderSection.classList.remove('bg-red');
  };
});

// вкл/выкл экран

const iphoneVerticalHome = document.querySelector('.slider__iphone-vertical > .home-btn');
const iphoneVerticalScreen = document.querySelector('.slider__iphone-vertical > .black-screen');

iphoneVerticalHome.addEventListener('click', () => {
  iphoneVerticalScreen.classList.toggle('hidden');
});

const iphoneHorizontalHome = document.querySelector('.slider__iphone-horizontal > .home-btn');
const iphoneHorizontalScreen = document.querySelector('.slider__iphone-horizontal > .black-screen');

iphoneHorizontalHome.addEventListener('click', () => {
  iphoneHorizontalScreen.classList.toggle('hidden');
});


/* PORTFOLIO */

const TAGS = document.querySelector('.tags');
const IMAGES = document.querySelector('.portfolio__images');
const IMAGES_COLLECTION = document.querySelectorAll('.portfolio__image');

// переключение тегов

TAGS.addEventListener('click', (event) => {
  TAGS.querySelectorAll('.tag').forEach(tag => tag.classList.remove('tag-active'));
  event.target.classList.add('tag-active');

  IMAGES_COLLECTION.forEach(img => {
    img.style.order = Math.floor(Math.random() * IMAGES_COLLECTION.length + 1);
  });
});

// выделение изображения

IMAGES.addEventListener('click', (event) => {
  IMAGES_COLLECTION.forEach(img => img.classList.remove('image-active'));
  event.target.classList.add('image-active');
});