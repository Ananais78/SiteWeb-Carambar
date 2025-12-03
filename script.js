var TrandingSlider = new Swiper('.tranding-slider', {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  speed: 500,             // transition fluide
  autoplay: {
    delay: 1000,          // défilement automatique rapide
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {          // responsive
    320: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 10 },
    1024: { slidesPerView: 3, spaceBetween: 15 },
    1200: { slidesPerView: 4, spaceBetween: 15 }
  }
});
