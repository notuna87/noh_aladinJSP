$(function () {
    const bookTitles = [
        "마음의 짐을 안고 있는 당신에게",
        "불평등은 어떻게 몸을 갉아먹는가",
        "배스커빌 가의 개",
        "니가 오지 비가 오냐",
        "15초 영단어",
        "어느 중년의 일상 탈출 고백서",
        "부를 끌어당기는 행동 습관",
        "나의 MBTI가 궁금하단 마리몽",
        "따뜻한 세상은 언제나 곁에 있어",
        "책 낸 자",
        "에밀리, 파리에 가다"
    ];

    let ajaxCount = 0;
    const totalBooks = bookTitles.length;

    function initSlickIfReady() {
        ajaxCount++;
        if (ajaxCount === totalBooks) {
            $(".weekSaleBook").slick({
                slidesToShow: 5,
                slidesToScroll: 5,
                arrows: true,
                infinite: true,
                prevArrow: '<button type="button" class="weekSalePrev"><</button>',
                nextArrow: '<button type="button" class="weekSaleNext">></button>'
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

                let priceComma = (book.price/2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

                const $bookItem = $("<div class='weekSaleitem'></div>");
                const $cover = $('<a href="#"><img src="' + book.thumbnail + '" alt="' + book.title + '"/></a>');
                const $title = $('<a href="#"><div class="weekSaleTitle">' + book.title + "</div></a>");
                const $authors = $('<a href="#"><p class="weekSaleAuthors">' + book.authors.join(", ") + "</p></a>");
                const $price = $('<a href="#"><p class="weekSalePrice">' + (priceComma) + "원</p></a>");


                $bookItem.append($cover, $title, $authors, $price);
                $(".weekSaleBook").append($bookItem);

                initSlickIfReady();
            }
        });
    });
});