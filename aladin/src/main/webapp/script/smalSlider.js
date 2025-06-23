$(function (){
    $(".editorPick").mouseover(function(){
        $(".smallSliderContent > div").hide();
        $(".smallSliderContentOne").show(); 
    })
})


$(function (){
    $(".smallSliderEbook").mouseover(function(){
        $(".smallSliderContent > div").hide();
        $(".smallSliderContentTwo").show(); 
        
    })
})

$(function (){
    $(".forignBook").mouseover(function(){
        $(".smallSliderContent > div").hide();
        $(".smallSliderContentThree").show(); 
        
    })
})

$(function (){
    $(".smallSliderNewbook").mouseover(function(){
        $(".smallSliderContent > div").hide(); 
        $(".smallSliderContentFour").show(); 
        
    })
})

$(function (){
    $(".aladinGoods").mouseover(function(){
        $(".smallSliderContent > div").hide();
        $(".smallSliderContentFive").show(); 
        
    })
})

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
        .done(function (smallSliderOne) {
            if (smallSliderOne.documents.length > 0) {
                let book = smallSliderOne.documents[0]; // 첫 번째 책 데이터만 사용

                let $bookItem = $("<div class='slideBook_item'></div>"); // 책 정보를 담을 박스
                let $cover = $('<a href="#"><img src=' + book.thumbnail + "' alt='" + book.title + "' /></a>"); // 썸네일 이미지
                let $title = $('<a href="#"><div class="slideTitle">' + book.title + "</div></a>"); // 책 제목 텍스트
                let $comment = $("<div></div>");

                if (book.title === "고독한 용의자") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "<13.67> 찬호께이 신작 미스터리" + "</div></a>");
                }
                else if (book.title === "필 스터츠의 내면강화") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "마음 힘든 모든 이들을 위한 책" + "</div></a>");
                }
                else if (book.title === "외우지 않는 공부법") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "공부가 쉬워지는 유일한 방법" + "</div></a>");
                }
                else if (book.title === "방구석 미술관 3") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "현대미술 거장들이 내 방구석으로?" + "</div></a>");
                }
                $bookItem.append($cover);
                $bookItem.append($title);
                $bookItem.append($comment);

                $(".smallSliderContentOne").eq(0).append($bookItem); // 첫 번째 .test 요소에만 추가
            }
        });
});
});



$(function () {
    var bookTitles = [
        "지리의 힘 3",
        "나는 빠리의 택시운전사",
        "매미 돌아오다",
        "화가들의 꽃"
    ];

bookTitles.forEach(function (title) {
    $.ajax({
        method: "GET", // GET 방식으로 요청
        url: "https://dapi.kakao.com/v3/search/book?target=title", // 제목 기준 검색
        data: $.param({ query: title, size: 1 }), // 검색어, size=1로 한 권만 가져옴
        headers: {
            Authorization: "KakaoAK adab4e27bc72ae59404196848542ac48" // 내 카카오 REST API 키
        }
    })
        .done(function (smallSliderTwo) {
            if (smallSliderTwo.documents.length > 0) {
                let book = smallSliderTwo.documents[0]; // 첫 번째 책 데이터만 사용

                let $bookItem = $("<div class='slideBook_item'></div>"); // 책 정보를 담을 박스
                let $cover = $('<a href="#"><img src=' + book.thumbnail + "' alt='" + book.title + "' /></a>"); // 썸네일 이미지
                let $title = $('<a href="#"><div class="slideTitle">' + book.title + "</div></a>"); // 책 제목 텍스트
                let $comment = $("<div></div>");

                if (book.title === "지리의 힘 3") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "우주라는 새로운 지정학적 격전장" + "</div></a>");
                }
                else if (book.title === "나는 빠리의 택시운전사") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "여전히 유효한 홍세화의 '똘레랑스'" + "</div></a>");
                }
                else if (book.title === "매미 돌아오다") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "제21회 일본 본격 미스터리 대상 수상작" + "</div></a>");
                }
                else if (book.title === "화가들의 꽃") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "현대미술 거장들이 내 방구석으로?" + "</div></a>");
                }
                else {
                    $comment = $('<a href="#"><div class="slidedComment">'+ "</div></a>");
                }
                
                $bookItem.append($cover);
                $bookItem.append($title);
                $bookItem.append($comment);

                $(".smallSliderContentTwo").eq(0).append($bookItem); // 첫 번째 .test 요소에만 추가
            }
        });
});
});

$(function () {
    var bookTitles = [
        "Source Code: My Beginnings",
        "The Art of Amphibia",
        "Conclave",
        "Mickey7"
    ];

bookTitles.forEach(function (title) {
    $.ajax({
        method: "GET", // GET 방식으로 요청
        url: "https://dapi.kakao.com/v3/search/book?target=title", // 제목 기준 검색
        data: $.param({ query: title, size: 1 }), // 검색어, size=1로 한 권만 가져옴
        headers: {
            Authorization: "KakaoAK adab4e27bc72ae59404196848542ac48" // 내 카카오 REST API 키
        }
    })
        .done(function (smallSliderTwo) {
            if (smallSliderTwo.documents.length > 0) {
                let book = smallSliderTwo.documents[0]; // 첫 번째 책 데이터만 사용

                let $bookItem = $("<div class='slideBook_item'></div>"); // 책 정보를 담을 박스
                let $cover = $('<a href="#"><img src=' + book.thumbnail + "' alt='" + book.title + "' /></a>"); // 썸네일 이미지
                let $title = $('<a href="#"><div class="slideTitle">' + book.title + "</div></a>"); // 책 제목 텍스트
                let $comment = $("<div></div>");

                if (book.title === "콘클라베(영화 특별판)") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "영화 <콘클라베> 원작 소설" + "</div></a>");
                }
                else if (book.title === "Source Code: My Beginnings") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "빌게이츠 자서전 <소스코드:더 비기닝> 원서" + "</div></a>");
                }
                else if (book.title === "미키 7") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "영화 <미키17> 원작" + "</div></a>");
                }
                else if (book.title === "The Art of Amphibia") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "디즈니 <앰피비아> 아트북" + "</div></a>");
                }
                else {
                    $comment = $('<a href="#"><div class="slidedComment">'+ "</div></a>");
                }
                
                $bookItem.append($cover);
                $bookItem.append($title);
                $bookItem.append($comment);

                $(".smallSliderContentThree").eq(0).append($bookItem);
            }
        });
});
});

$(function () {
    var bookTitles = [
        "C. S. 루이스의 글쓰기에 관하여",
        "당신은 언제나 괜찮다",
        "빛과 실",
        "듀얼 브레인"
    ];

bookTitles.forEach(function (title) {
    $.ajax({
        method: "GET", // GET 방식으로 요청
        url: "https://dapi.kakao.com/v3/search/book?target=title", // 제목 기준 검색
        data: $.param({ query: title, size: 1 }), // 검색어, size=1로 한 권만 가져옴
        headers: {
            Authorization: "KakaoAK adab4e27bc72ae59404196848542ac48" // 내 카카오 REST API 키
        }
    })
        .done(function (smallSliderTwo) {
            if (smallSliderTwo.documents.length > 0) {
                let book = smallSliderTwo.documents[0]; // 첫 번째 책 데이터만 사용

                let $bookItem = $("<div class='slideBook_item'></div>"); // 책 정보를 담을 박스
                let $cover = $('<a href="#"><img src=' + book.thumbnail + "' alt='" + book.title + "' /></a>"); // 썸네일 이미지
                let $title = $('<a href="#"><div class="slideTitle">' + book.title + "</div></a>"); // 책 제목 텍스트
                let $comment = $("<div></div>");

                if (book.title === "C.S. 루이스의 글쓰기에 관하여") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "우리는 평생 글쓰기를 한다." + "</div></a>");
                }
                else if (book.title === "당신은 언제나 괜찮다") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "흔들리는 시간을 넘어 단단히 나를 세우는 법" + "</div></a>");
                }
                else if (book.title === "빛과 실") {
                    $comment = $('<a href="#"><div class="slidedComment">' + " 2024 노벨문학상 수상 강연문 수록, 2024 노벨문학상 수상작가 ㅣ 문지 에크리" + "</div></a>");
                }
                else if (book.title === "듀얼 브레인") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "AI 시대의 실용적 생존 가이드" + "</div></a>");
                }
                else {
                    $comment = $('<a href="#"><div class="slidedComment">'+ "</div></a>");
                }
                
                $bookItem.append($cover);
                $bookItem.append($title);
                $bookItem.append($comment);

                $(".smallSliderContentFour").eq(0).append($bookItem);
            }
        });
});
});

$(function () {
    var bookTitles = [
        "나는 메트로폴리탄 미술관의 경비원입니다",
        "당신은 언제나 괜찮다",
        "빛과 실",
        "듀얼 브레인"
    ];

bookTitles.forEach(function (title) {
    $.ajax({
        method: "GET", // GET 방식으로 요청
        url: "https://dapi.kakao.com/v3/search/book?target=title", // 제목 기준 검색
        data: $.param({ query: title, size: 1 }), // 검색어, size=1로 한 권만 가져옴
        headers: {
            Authorization: "KakaoAK adab4e27bc72ae59404196848542ac48" // 내 카카오 REST API 키
        }
    })
        .done(function (smallSliderTwo) {
            if (smallSliderTwo.documents.length > 0) {
                let book = smallSliderTwo.documents[0]; // 첫 번째 책 데이터만 사용

                let $bookItem = $("<div class='slideBook_item'></div>"); // 책 정보를 담을 박스
                let $cover = $('<a href="#"><img src=' + book.thumbnail + "' alt='" + book.title + "' /></a>"); // 썸네일 이미지
                let $title = $('<a href="#"><div class="slideTitle">' + book.title + "</div></a>"); // 책 제목 텍스트
                let $comment = $("<div></div>");

                if (book.title === "나는 메트로폴리탄 미술관의 경비원입니다(20만 부 기념 양장 에디션)") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "경이로운 세계 속으로 숨어버린 한 남자의 이야기" + "</div></a>");
                }
                else if (book.title === "당신은 언제나 괜찮다") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "흔들리는 시간을 넘어 단단히 나를 세우는 법" + "</div></a>");
                }
                else if (book.title === "빛과 실") {
                    $comment = $('<a href="#"><div class="slidedComment">' + " 2024 노벨문학상 수상 강연문 수록, 2024 노벨문학상 수상작가 ㅣ 문지 에크리" + "</div></a>");
                }
                else if (book.title === "듀얼 브레인") {
                    $comment = $('<a href="#"><div class="slidedComment">' + "AI 시대의 실용적 생존 가이드" + "</div></a>");
                }
                else {
                    $comment = $('<a href="#"><div class="slidedComment">'+ "</div></a>");
                }
                
                $bookItem.append($cover);
                $bookItem.append($title);
                $bookItem.append($comment);

                $(".smallSliderContentFive").eq(0).append($bookItem);
            }
        });
});
});