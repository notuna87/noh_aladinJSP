
$(function () {
    var bookTitles = [
        "고독한 용의자",
        "필 스터츠의 내면강화",
        "외우지 않는 공부법",
        "방구석 미술관3",
    ];

bookTitles.forEach(function (title) {
    $.ajax({
        method: "GET", // GET 방식으로 요청
        url: "https://dapi.kakao.com/v3/search/book?target=title", // 제목 기준 검색
        data: $.param({ query: title, size: 1 }), // 검색어, size=1로 한 권만 가져옴
        headers: {
            Authorization: "KakaoAK fd9b57a9a97cc88457e2ea26c4807fca" // 내 카카오 REST API 키
        }
    })
        .done(function (hangangNewbook) {
            if (hangangNewbook.documents.length > 0) {
                let book = hangangNewbook.documents[0]; // 첫 번째 책 데이터만 사용

                let $bookItem = $("<div class='slideBook_item'></div>"); // 책 정보를 담을 박스
                let $cover = $('<a href="#"><img src=' + book.thumbnail + "' alt='" + book.title + "' /></a>"); // 썸네일 이미지
                let $title = $('<a href="#"><div class="slideTitle">' + book.title + "</div></a>"); // 책 제목 텍스트

                $bookItem.append($cover);
                $bookItem.append($title);
                $bookItem.append($comment);

                $(".smallSliderContentTwo").eq(0).append($bookItem); // 첫 번째 .test 요소에만 추가
            }
        });
});
});


