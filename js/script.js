document.addEventListener('DOMContentLoaded', function () {
  const galaxyFlip6CharSlider = new Swiper(
    '.galaxiFlip6-characteristics-slider__swiper',
    {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.galaxiFlip6-characteristics-slider__next',
        prevEl: '.galaxiFlip6-characteristics-slider__prev',
      },
      scrollbar: {
        el: '.galaxiFlip6-characteristics-slider__scrollbar',
        draggable: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 20,
        },
        600.98: {
          spaceBetween: 50,
        },
        767.98: {
          spaceBetween: 30,
        },
      },
    }
  );

  const galaxyFlip6ColorsTopSlider = new Swiper(
    '.top-galaxiFlip6-colors__slider',
    {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.top-galaxiFlip6-colors-pagination',
        type: 'bullets',
        clickable: true,
      },
      fadeEffect: {
        crossFade: true,
      },
    }
  );

  const galaxyFlip6AiSlider = new Swiper('.galaxiFlip6-ai-slider__swiper', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.galaxiFlip6-ai-slider__next',
      prevEl: '.galaxiFlip6-ai-slider__prev',
    },
    scrollbar: {
      el: '.galaxiFlip6-ai-slider__scrollbar',
      draggable: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      600.98: {
        spaceBetween: 50,
      },
      767.98: {
        spaceBetween: 30,
      },
    },
  });

  const galaxyFlip6AssistSlider = new Swiper(
    '.galaxiFlip6-photoAssist-slider__swiper',
    {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.galaxiFlip6-photoAssist-slider__next',
        prevEl: '.galaxiFlip6-photoAssist-slider__prev',
      },
      scrollbar: {
        el: '.galaxiFlip6-photoAssist-slider__scrollbar',
        draggable: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 20,
        },
        600.98: {
          spaceBetween: 50,
        },
        767.98: {
          spaceBetween: 30,
        },
      },
    }
  );
});
