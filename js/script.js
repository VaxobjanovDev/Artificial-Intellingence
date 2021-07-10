// -------------------Navbar section---------------------//

window.addEventListener("scroll", function () {
  var navScroll = document.getElementById("nav");
  navScroll.classList.toggle("fixed", window.scrollY > 8);
});

function navBack() {
  let nav = document.getElementById("nav").classList.toggle("change");
}

//------------------Onclick navbar hide-----------------//
$(".nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

//--------------Carousel items---------------------- //
$(".about_carousel").owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    350: {
      items: 2,
    },
    600: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});
