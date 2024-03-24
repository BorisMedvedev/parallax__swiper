import '../scss/style.scss';
import '/node_modules/swiper/swiper-bundle.css';

import Swiper from 'swiper';
import {
  Navigation,
  // Pagination,
  // Scrollbar,
  Parallax,
  Mousewheel,
  Controller,
} from 'swiper/modules';
Swiper.use([Parallax, Mousewheel, Controller, Navigation]);

const swiperIMG = new Swiper('.slider-parallax', {
  slidesPerView: 1,
  loop: false,
  speed: 1800,
  parallax: true,
});

const swiperText = new Swiper('.slider-text', {
  slidesPerView: 1,
  loop: false,
  speed: 1800,
  mousewheel: {
    invert: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiperText.controller.control = swiperIMG;
