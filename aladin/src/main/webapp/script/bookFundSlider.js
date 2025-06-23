$(document).ready(function () {
    $('.bookFundImgBox').on('init reInit afterChange', function (event, slick, currentSlide) {
        let i = (typeof currentSlide === 'undefined' ? 0 : currentSlide) + 1;
        $('.bookFundCounter').text(i + ' / ' + slick.slideCount);
    });
    

    $('.bookFundImgBox').slick({
        infinite: true,
        prevArrow: '<button type="button" class="bookFundprev"><</button>',
        nextArrow: '<button type="button" class="bookFundnext">></button>',
        autoplaySpeed: 3000,
        slidesToShow: 1,
        autoplay: true,
        speed: 300
    });
    $(function () {
        $('.bookFundprev, .bookFundnext').css("opacity", "0");
    });
    $('.bookFundSlider').hover(function () {
        $('.bookFundprev, .bookFundnext').stop().fadeTo(300, 0.3);

    }, function () {
        $('.bookFundprev, .bookFundnext').stop().fadeOut(300, 0);
    });
})