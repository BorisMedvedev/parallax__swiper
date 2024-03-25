import '../scss/style.scss';
import '/node_modules/swiper/swiper-bundle.css';

import Swiper from 'swiper';
import { gsap, Power2 } from 'gsap';
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
  speed: 1500,
  parallax: true,
});

const swiperText = new Swiper('.slider-text', {
  loop: false,
  speed: 1500,
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
  gsap.to(gear, 2, {
    rotate: '+=40',
    ease: Power2.easeOut
  });
});
swiperText.on('slidePrevTransitionStart', () => {
  gsap.to(gear, 2, {
    rotate: '-=40',
    ease: Power2.easeOut
  });
});
