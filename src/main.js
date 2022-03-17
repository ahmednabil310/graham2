var swiper = new Swiper("#main-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 34,
    },
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
    1536: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 60,
    },
  },
});

document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

var swiper = new Swiper("#popup-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
});
