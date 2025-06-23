$(function () {
    const bookTitles = [
        "아이가 공부를 처음 시작합니다",
        "어서 오시'개' 짬뽕 도장",
        "행동은 불안을 이긴다",
        "하루 하나 클래식 365",
        "국가는 어떻게 무너지는가",
        "이제 당신의 손을 놓겠습니다",
        "불평등은 어떻게 몸을 갉아 먹는가",
        "마중도 배웅도 없이",
        "외우지 않는 공부법",
        "똑똑한 말, 당당한 말",
        "고민 숏컷의 기술",
        "고독의 이야기들",
        "블루밍니트의 코바늘 플라워 & 키링",
        "귀화서, 마지막 꽃을 지킵니다",
        "난생처음 운전",
    ];

    let ajaxCount = 0;
    const totalBooks = bookTitles.length;

    function initSlickIfReady() {
        ajaxCount++;
        if (ajaxCount === totalBooks) {
            $(".thisMonthBook").slick({
                slidesToShow: 5,
                slidesToScroll: 5,
                arrows: true,
                infinite: true,
                prevArrow: '<button type="button" class="thisMonthPrev"><</button>',
                nextArrow: '<button type="button" class="thisMonthNext">></button>'
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

                const $bookItem = $("<div class='thisMonthitem'></div>");
                const $cover = $('<a href="#"><img src="' + book.thumbnail + '" alt="' + book.title + '"/></a>');
                const $title = $('<a href="#"><div class="thisMonthTitle">' + book.title + "</div></a>");
                const $authors = $('<a href="#"><p class="thisMonthAuthors">' + book.authors.join(", ") + "</p></a>");

                $bookItem.append($cover, $title, $authors);
                $(".thisMonthBook").append($bookItem);

                initSlickIfReady();
            }
        });
    });
});