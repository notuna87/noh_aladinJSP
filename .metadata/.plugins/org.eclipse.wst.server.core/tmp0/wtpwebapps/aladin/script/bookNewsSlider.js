$(function () {
    const bookTitles = [
        "숲을 읽는 사람",
        "문학의 쓸모",
        "연매장",
        "부모의 어휘력을 위한 66일 필사 노트",
        "내 말은 왜 오해를 부를까",
        "과자 사면 과학 드립니다",
        "반짝과 반짝 사이",
        "폭싹 속았수다 노랫말 필사집",
        "법의학자 유성호의 유언노트"
    ];

    let ajaxCount = 0;
    const totalBooks = bookTitles.length;

    function initSlickIfReady() {
        ajaxCount++;
        if (ajaxCount === totalBooks) {
            $(".bookNewsBook").slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true,
                infinite: true,
                prevArrow: '<button type="button" class="bookNewsPrev"><</button>',
                nextArrow: '<button type="button" class="bookNewsNext">></button>'
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

                const $bookItem = $("<div class='bookNewsitem'></div>");
                const $cover = $('<a href="#"><img src="' + book.thumbnail + '" alt="' + book.title + '"/></a>');
                const $title = $('<a href="#"><div class="bookNewsTitle">' + book.title + "</div></a>");

                const commentsMap = {
                    "숲을 읽는 사람": "사라져가는 초목을 수호하는 식물분류학자의 일과 삶",
                    "문학의 쓸모": "21세기 프랑스 대표적 지성의 문학을 대하는 현대적 방식",
                    "연매장": "2017 중국 루야오문학상 수상 즉시 금서로 지정된 문제작",
                    "부모의 어휘력을 위한 66일 필사 노트": "마음은 단단하게 지키고 아이는 더 사랑하는",
                    "내 말은 왜 오해를 부를까": "<말 그릇> 김윤나 X 인스타툰 '힐링곰 꽁달이' 콜라보",
                    "과자 사면 과학 드립니다" : "편의점 먹거리에 숨은 재밌는 과학 이야기",
                    "반짝과 반짝 사이" : "제23회 지훈상, 시인 김근 문학선",
                    "폭싹 속았수다 노랫말 필사집" : "산울림,김정미,김광석 등 드라마 속 명곡을 느껴보는 시간",
                    "법의학자 유성호의 유언노트" : "후회 없는 삶을 위한 지침서"
                };
                
                const commentText = commentsMap[book.title]; // 매핑된 텍스트 가져오기
                
                if (commentText) {
                    $comment = $('<div class="bookNewsComment"><a href="#">' + commentText + '</a></div>');
                }

                $bookItem.append($cover, $title, $comment);
                $(".bookNewsBook").append($bookItem);

                initSlickIfReady();
            }
        });
    });
});