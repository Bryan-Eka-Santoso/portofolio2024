AOS.init();
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("nav-active");
      });
      navLinks[index].classList.add("nav-active");
    }
  });
});

$(".owl-carousel-left").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".owl-carousel-right").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayHoverPause: true,
  rtl: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
