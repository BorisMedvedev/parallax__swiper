import '../scss/vender/micromodal.css';
import '../scss/style.scss';
import '/node_modules/swiper/swiper-bundle.css';
import Swiper from 'swiper';
import { gsap, Power2 } from 'gsap';
import MicroModal from 'micromodal';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Parallax,
  Mousewheel,
  Controller,
} from 'swiper/modules';
Swiper.use([
  Parallax,
  Mousewheel,
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
]);

const swiperIMG = new Swiper('.slider-parallax', {
  loop: false,
  speed: 2000,
  parallax: true,
  pagination: {
    el: '.slider-pagination-count .total',
    type: 'custom',
    renderCustom: (swiper, current, total) => {
      let totalRes = total >= 10 ? total : `0${total}`;
      return totalRes;
    },
  },
});

const swiperText = new Swiper('.slider-text', {
  loop: false,
  speed: 2000,
  parallax: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.slider-scrollbar',
  },
});

swiperText.controller.control = swiperIMG;

const gear = document.querySelector('.slider-gear');
swiperText.on('slideNextTransitionStart', () => {
  gsap.to(gear, 1.8, {
    rotate: '+=40',
    ease: Power2.easeOut,
  });
});
swiperText.on('slidePrevTransitionStart', () => {
  gsap.to(gear, 1.8, {
    rotate: '-=40',
    ease: Power2.easeOut,
  });
});

const currentNum = document.querySelector('.slider-pagination-count .current');
const pageCurrent = document.querySelector('.slider-pagination-current__num');

swiperText.on('slideChange', () => {
  let index = swiperText.realIndex + 1;
  let indexRes = index >= 10 ? index : `0${index}`;
  gsap.to(currentNum, 0.2, {
    force3D: true,
    y: -10,
    opacity: 0,
    ease: Power2.easeOut,
    onComplete: () => {
      gsap.to(currentNum, 0.1, {
        force3D: true,
        y: 10,
      });
      currentNum.innerHTML = indexRes;
      pageCurrent.innerHTML = indexRes;
    },
  });
  gsap.to(currentNum, 0.2, {
    force3D: true,
    y: 0,
    opacity: 1,
    ease: Power2.easeOut,
    delay: 0.3,
  });
});

MicroModal.init({
  openTrigger: 'data-custom-open',
  disableFocus: true,
  disableScroll: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
});

// Cursor

const body = document.querySelector('body'),
  cursor = document.querySelector('.cursor'),
  links = document.querySelectorAll('a');

let mouseX = 0,
  mouseY = 0,
  posX = 0,
  posY = 0;

function mouseCoords(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
}

gsap.to({}, 0.01, {
  repeat: -1,
  onRepeat: () => {
    posX += (mouseX - posX) / 6;
    posY += (mouseY - posY) / 6;
    gsap.set(cursor, {
      css: {
        left: posX,
        top: posY,
      },
    });
  },
});

links.forEach((element) => {
  element.addEventListener('mouseover', () => {
    cursor.classList.add('active');
  });
  element.addEventListener('mouseout', () => {
    cursor.classList.remove('active');
  });
});

body.addEventListener('mousemove', (e) => {
  mouseCoords(e);
  cursor.classList.remove('hidden');
});

document.addEventListener('mousemove', (event) => {
  let margin = 30;
  if (
    event.clientX < margin ||
    event.clientX > window.innerWidth - margin ||
    event.clientY < margin ||
    event.clientY > window.innerHeight - margin
  ) {
    cursor.classList.add('hidden');
  } else {
    cursor.classList.remove('hidden');
  }
});
