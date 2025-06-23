$(function () {
    const bookTitles = [
        "소년이 온다",
        "작별하지 않는다",
        "희랍어 시간",
        "여수의 사랑",
        "흰",
        "채식주의자",
        "디 에센셜 한강",
        "한강 스페셜 에디션",
        "서랍에 저녁을 넣어 두었다"
    ];

    let ajaxCount = 0;
    const totalBooks = bookTitles.length;

    function initSlickIfReady() {
        ajaxCount++;
        if (ajaxCount === totalBooks) {
            $(".hangangNewBook").slick({
                slidesToShow: 5,
                slidesToScroll: 4,
                arrows: true,
                infinite: true,
                prevArrow: '<button type="button" class="hangangPrev"><</button>',
                nextArrow: '<button type="button" class="hangangNext">></button>'
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

                const $bookItem = $("<div class='hangangBookitem'></div>");
                const $cover = $('<a href="#"><img src="' + book.thumbnail + '" alt="' + book.title + '"/></a>');
                const $title = $('<a href="#"><div class="hangangTitle">' + book.title + "</div></a>");
                const $authors = $('<a href="#"><p class="hangangAuthors">' + book.authors.join(", ") + "</p></a>");

                $bookItem.append($cover, $title, $authors);
                $(".hangangNewBook").append($bookItem);

                initSlickIfReady();
            }
        });
    });
});