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

$('.modal-menu').hide();

    

$("#header-modal").click(function () { // проверка на активное разрешение экрана пользователя = если меньше или равно 768px, то модальное окно с работает, если нет то нет
    const pageWidth = document.documentElement.scrollWidth
    if (pageWidth <= 768) {
        $('.modal-menu').show();
    }
    
});




$("#exit, #benefit-btn, #ourwork-btn, #price-btn, #pattern-btn, #reviews-btn, #contacts-btn").click(function () {
    $('.modal-menu').hide();
});
