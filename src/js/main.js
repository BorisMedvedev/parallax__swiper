import '../scss/style.scss';
import '../../node_modules/swiper/swiper-bundle.css'

import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';


const swiper = new Swiper('.slider-parallax', {
  modules: [Navigation, Pagination, Scrollbar],
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });