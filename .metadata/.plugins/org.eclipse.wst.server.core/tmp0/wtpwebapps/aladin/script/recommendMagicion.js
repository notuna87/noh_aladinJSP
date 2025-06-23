$(function () {
    const bookTitles = [
        "단 한 번의 삶",
        "행동은 불안을 이긴다",
        "2025 제 16회 젊은작가상 수상작품집",
        "3817219",
        "인생 녹음 중",
        "홀리의 코바늘 키링",
        "바움가트너",
        "마중도 배웅도 없이",
        "혼모노",
        "인생의 파도를 넘는 법",
        "첫 여름, 완주",
        "레클리스",
        "타인에게 기대하지 않는 삶을 위한 안내서",
        "행복은 언제나 당신의 편",
        "손실은 짧게 수익은 길게",
        "법의학자 유성호의 유언노트",
        "고독한 용의자"
    ];

    let ajaxCount = 0;
    const totalBooks = bookTitles.length;

    function initSlickIfReady() {
        ajaxCount++;
        if (ajaxCount === totalBooks) {
            $(".recommendMagicionBook").slick({
                slidesToShow: 5,
                slidesToScroll: 4,
                arrows: true,
                infinite: true,
                prevArrow: '<button type="button" class="recommendMagicionPrev"><</button>',
                nextArrow: '<button type="button" class="recommendMagicionNext">></button>'
            });
        }
    }

    bookTitles.forEach(function (title) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: $.param({ query: title, size: 1 }),
            headers: {
                Authorization: "KakaoAK fd9b57a9a97cc88457e2ea26c4807fca"
            }
        })
        .done(function (response) {
            if (response.documents.length > 0) {
                const book = response.documents[0];

                const $bookItem = $("<div class='recommendMagicionitem'></div>");
                const $cover = $('<a href="#"><img src="' + book.thumbnail + '" alt="' + book.title + '"/></a>');
                const $title = $('<a href="#"><div class="recommendMagicionTitle">' + book.title + "</div></a>");
                const $authors = $('<a href="#"><p class="recommendMagicionAuthors">' + book.authors.join(", ") + "</p></a>");

                $bookItem.append($cover, $title, $authors);
                $(".recommendMagicionBook").append($bookItem);

                initSlickIfReady();
            }
        });
    });
});