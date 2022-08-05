// Custom Scripts
// Custom scripts
document.addEventListener('click', function (e) {
    var map = document.querySelector('#map-wrap iframe')
    if (e.target.id === 'map-wrap') {
        map.style.pointerEvents = 'all'
    } else {
        map.style.pointerEvents = 'none'
    }
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".feedback__swipper__button-next",
      prevEl: ".feedback__swipper__button-prev",
    },
  });
