$(document).ready(function () {
    $('.miniEventImgBox').on('init reInit afterChange', function (event, slick, currentSlide) {
        let i = (typeof currentSlide === 'undefined' ? 0 : currentSlide) + 1;
        $('.miniEventCounter').text(i + ' / ' + slick.slideCount);
    });

    $('.miniEventImgBox').slick({
        infinite: true,
        prevArrow: '<button type="button" class="miniEventprev"><</button>',
        nextArrow: '<button type="button" class="miniEventnext">></button>',
        autoplaySpeed: 3000, // 3초마다
        slidesToShow: 1,
        autoplay: true,
        speed : 300
    });

})