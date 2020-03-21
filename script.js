const NAVIGATION = document.getElementById('navigation');
const SLIDER = document.getElementById('slider');

/* MENU */

NAVIGATION.querySelectorAll('li>a');

NAVIGATION.addEventListener('click', (event) => {
  NAVIGATION.querySelectorAll('li>a').forEach(element => element.classList.remove('header__link_selected'));
  event.target.classList.add('header__link_selected');
});

/* SLIDER */

// массив из слайдов
let sliderBlocks = document.querySelectorAll('.slider__container, .slider__iphones');
let currentBlock = 0; // текущий слайд
let sliderBackground = ['bg-red', 'bg-blue'];

// функция для перебора слайдов
function slider() {
  for (let i = 0; i < sliderBlocks.length; i++) { // работает некорректно
    sliderBlocks[i].classList.add('hidden');
    if (sliderBlocks[i].classList.contains('hidden')) {
      document.querySelector('.slider').classList.toggle(sliderBackground[i]);
    }
  };
  sliderBlocks[currentBlock].classList.remove('hidden');  
}

document.querySelector('.slider__chev-left').onclick = function() {
  if (currentBlock - 1 == -1) {
    currentBlock = sliderBlocks.length - 1;
  } else {
    currentBlock--;
  }
  slider();
};

document.querySelector('.slider__chev-right').onclick = function() {
  if (currentBlock + 1 == sliderBlocks.length) {
    currentBlock = 0;
  } else {
    currentBlock++;
  }
  slider();
};

// вкл/выкл экран