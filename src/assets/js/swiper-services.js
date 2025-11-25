function initSwiperServices() {
  if ('.client-slider-active') {
    var client_slider_active = new Swiper(".client-slider-active", {
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 130,
      speed: 3000,
      autoplay: {
        delay: 1,
      },
    });
  }
}