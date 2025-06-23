$(document).ready(function () {
    $('.advertiseImgBox').on('init reInit afterChange', function (event, slick, currentSlide) {
        let i = (typeof currentSlide === 'undefined' ? 0 : currentSlide) + 1;
        $('.smallAdvertiseCounter').text(i + ' / ' + slick.slideCount);
    });

    $('.advertiseImgBox').slick({
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><</button>',
        nextArrow: '<button type="button" class="slick-next">></button>',
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $(function () {
        $('.slick-prev, .slick-next, .smallAdvertiseCounter').css("opacity", "0");
    });
    $('.smallAdvertise').hover(function () {
        $('.slick-prev, .slick-next, .smallAdvertiseCounter').stop().fadeTo(300, 1);

    }, function () {
        $('.slick-prev, .slick-next, .smallAdvertiseCounter').stop().fadeOut(300, 0);
    });
})