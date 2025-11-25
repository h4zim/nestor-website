function initSwiper() {
    console.log('ccccc');
    if (('.testimonial-slider').length) {
      console.log('cccdd');
        var testimonial_slider = new Swiper(".testimonial-slider", {
          loop: false,
          slidesPerView: 1,
          spaceBetween: 105,
          speed: 1800,
          watchSlidesProgress: true,
          navigation: {
            prevEl: ".testimonial-button-prev",
            nextEl: ".testimonial-button-next",
          },
          scrollbar: {
            el: ".testimonial-scrollbar",
            hide: false,
          },
          breakpoints: {
            // when window width is >= px
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
            1201: {
              slidesPerView: 3,
            },
            1367: {
              slidesPerView: 3,
            },
          }
        });
      }
}

function initPinSpacer() {
  let mm = gsap.matchMedia();
  console.log('mm', mm);
  mm.add("(min-width: 1024px)", () => {

    var pin_list = document.querySelectorAll(".section-item")
    console.log('pin_list', pin_list);
    pin_list.forEach((item) => {
        console.log(item)
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                markers: false,
                pin: true,
                pinSpacing: false,
                start: "bottom bottom",
                end: "bottom -=500"
            },
        });
    })

  });
}

function sliderClients() {
  if ('.client-slider-active') {
    var client_slider_active = new Swiper(".client-slider-active", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 130,
      speed: 3000,
      autoplay: {
        delay: 1,
      },
    });
  }
}