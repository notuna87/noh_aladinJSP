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
                url: "https://dapi.kakao.com/v3/search/book", // 제목 기준 검색
                data: $.param({ query: title, size: 1 }), // 검색어, size=1로 한 권만 가져옴
                headers: {
                    Authorization: "KakaoAK e094a363d6e629209211bd379bb0e21b" // 내 카카오 REST API 키
                }
            })
                .done(function (response) {
                    if (response.documents.length > 0) {
                        let book = response.documents[0]; // 첫 번째 책 데이터만 사용

                        let $bookItem = $("<div class='recommendBook_item'></div>"); // 책 정보를 담을 박스
                        let $cover = $('<a href="#"><img src=' + book.thumbnail + "' alt='" + book.title + "' /></a>"); // 썸네일 이미지
                        let $title = $('<a href="#"><div class="recommendTitle">' + book.title + "</div></a>"); // 책 제목 텍스트
                        let $comment = $("<div></div>");
                        const commentsMap = {
                            "고독한 용의자": "<13.67> 찬호께이 신작 미스터리",
                            "필 스터츠의 내면강화": "마음 힘든 모든 이들을 위한 책",
                            "외우지 않는 공부법": "공부가 쉬워지는 유일한 방법",
                            "방구석 미술관 3": "현대미술 거장들이 내 방구석으로?",
                        };
                        
                        const commentText = commentsMap[book.title]; // 매핑된 텍스트 가져오기
                        
                        if (commentText) {
                            $comment = $('<a href="#"><div class="recommendComment">' + commentText + '</div></a>');
                        }
                        
                        let $authors = $('<a href="#"><div class="recommendAuthors">' + book.authors + "&nbsp지음</div></a>"); // 작가
                        $bookItem.append($cover);
                        $bookItem.append($title);
                        $bookItem.append($comment);
                        $bookItem.append($authors);

                        $(".editorSlider").eq(0).append($bookItem); // 첫 번째 .test 요소에만 추가
                    }
                });
        });
    });

    $(function () {
        var bookTitles = [
            "왝왝이가 그곳에 있었다",
            "긴키 지방의 어느 장소에 대하여",
            "나쁘게 눈부시기",
            "용선생 추론독해"
        ];

        bookTitles.forEach(function (title) {
            $.ajax({
                method: "GET", // GET 방식으로 요청
                url: "https://dapi.kakao.com/v3/search/book?target=title", // 제목 기준 검색
                data: $.param({ query: title, size: 1 }), // 검색어, size=1로 한 권만 가져옴
                headers: {
                    Authorization: "KakaoAK e094a363d6e629209211bd379bb0e21b" // 내 카카오 REST API 키
                }
            })
                .done(function (response) {
                    if (response.documents.length > 0) {
                        let book = response.documents[0]; // 첫 번째 책 데이터만 사용

                        let $bookItem = $("<div class='recommendBook_item'></div>"); // 책 정보를 담을 박스
                        let $cover = $('<a href="#"><img src=' + book.thumbnail + "' alt='" + book.title + "' /></a>"); // 썸네일 이미지
                        let $title = $('<a href="#"><div class="recommendTitle">' + book.title + "</div></a>"); // 책 제목 텍스트
                        let $comment = $("<div></div>");
                        const commentsMap = {
                            "왝왝이가 그곳에 있었다": "<13.67> 찬호께이 신작 미스터리",
                            "긴키 지방의 어느 장소에 대하여": "마음 힘든 모든 이들을 위한 책",
                            "나쁘게 눈부시기": "공부가 쉬워지는 유일한 방법",
                            "용선생 추론독해 초등 국어 5단계": "풀어 보고 다음 단계까지 샀어요",
                        };
                        
                        const commentText = commentsMap[book.title]; // 매핑된 텍스트 가져오기
                        
                        if (commentText) {
                            $comment = $('<a href="#"><div class="recommendComment">' + commentText + '</div></a>');
                        }
                        
                        let $authors = $('<a href="#"><div class="recommendAuthors">' + book.authors + "&nbsp지음</div></a>"); // 작가
                        $bookItem.append($cover);
                        $bookItem.append($title);
                        $bookItem.append($comment);
                        $bookItem.append($authors);

                        $(".thisWeekSlider").eq(0).append($bookItem); // 첫 번째 .test 요소에만 추가
                    }
                });
        });
    });

    $(function () {
        var bookTitles = [
            "빛과 실",
            "세상은 라틴어로 가득하다",
            "백앤아",
            "처음 읽는 삼국지 2"
        ];

        bookTitles.forEach(function (title) {
            $.ajax({
                method: "GET", // GET 방식으로 요청
                url: "https://dapi.kakao.com/v3/search/book?target=title", // 제목 기준 검색
                data: $.param({ query: title, size: 1 }), // 검색어, size=1로 한 권만 가져옴
                headers: {
                    Authorization: "KakaoAK e094a363d6e629209211bd379bb0e21b" // 내 카카오 REST API 키
                }
            })
                .done(function (response) {
                    if (response.documents.length > 0) {
                        let book = response.documents[0]; // 첫 번째 책 데이터만 사용

                        let $bookItem = $("<div class='recommendBook_item'></div>"); // 책 정보를 담을 박스
                        let $cover = $('<a href="#"><img src=' + book.thumbnail + "' alt='" + book.title + "' /></a>"); // 썸네일 이미지
                        let $title = $('<a href="#"><div class="recommendTitle">' + book.title + "</div></a>"); // 책 제목 텍스트
                        let $comment = $("<div></div>");
                        const commentsMap = {
                            "빛과 실": "노벨문학상 한강 작가 신작 산문집",
                            "세상은 라틴어로 가득하다": "라틴어를 공부하면 세상이 다시 보인다",
                            "백앤아 1: 미스터리 100층 감옥": "4/30 예약판매 오픈, 도서 추첨",
                            "처음 읽는 삼국지 2: 혼돈에 맞선 자들": "삼국지 아크릴 스탠드",
                        };
                        
                        const commentText = commentsMap[book.title]; // 매핑된 텍스트 가져오기
                        
                        if (commentText) {
                            $comment = $('<a href="#"><div class="recommendComment">' + commentText + '</div></a>');
                        }
                        
                        let $authors = $('<a href="#"><div class="recommendAuthors">' + book.authors + "&nbsp지음</div></a>"); // 작가
                        $bookItem.append($cover);
                        $bookItem.append($title);
                        $bookItem.append($comment);
                        $bookItem.append($authors);

                        $(".newBookSlider").eq(0).append($bookItem); // 첫 번째 .test 요소에만 추가
                    }
                });
        });
    });

    $(function () {
        var bookTitles = [
            "비가 내리고 풀은 자란다",
            "책 요정 도도",
            "싸움",
            "생각 소스"
        ];

        bookTitles.forEach(function (title) {
            $.ajax({
                method: "GET", // GET 방식으로 요청
                url: "https://dapi.kakao.com/v3/search/book?target=title", // 제목 기준 검색
                data: $.param({ query: title, size: 1 }), // 검색어, size=1로 한 권만 가져옴
                headers: {
                    Authorization: "KakaoAK e094a363d6e629209211bd379bb0e21b" // 내 카카오 REST API 키
                }
            })
                .done(function (response) {
                    if (response.documents.length > 0) {
                        let book = response.documents[0]; // 첫 번째 책 데이터만 사용

                        let $bookItem = $("<div class='recommendBook_item'></div>"); // 책 정보를 담을 박스
                        let $cover = $('<a href="#"><img src=' + book.thumbnail + "' alt='" + book.title + "' /></a>"); // 썸네일 이미지
                        let $title = $('<a href="#"><div class="recommendTitle">' + book.title + "</div></a>"); // 책 제목 텍스트
                        let $comment = $("<div></div>");
                        const commentsMap = {
                            "비가 내리고 풀은 자란다": "숲을 닮은 아이들의 우정과 성장",
                            "책 요정 도도": "책 요정 도도 책갈피",
                            "생각 소스": "첫 감정, 관계 그림책+지비츠",
                            "싸움": "질문에 답하며 만들어 가는 나만의 책",
                        };
                        
                        const commentText = commentsMap[book.title]; // 매핑된 텍스트 가져오기
                        
                        if (commentText) {
                            $comment = $('<a href="#"><div class="recommendComment">' + commentText + '</div></a>');
                        }
                        
                        let $authors = $('<a href="#"><div class="recommendAuthors">' + book.authors + "&nbsp지음</div></a>"); // 작가
                        $bookItem.append($cover);
                        $bookItem.append($title);
                        $bookItem.append($comment);
                        $bookItem.append($authors);

                        $(".eyeBookSlider").eq(0).append($bookItem); // 첫 번째 .test 요소에만 추가
                    }
                });
        });
    });

    $(function () {
        var bookTitles = [
            "손자병법",
            "아인슈타인의 꿈",
            "괴수 8호 RELAX 1",
            "왜 좋은 일자리는 늘 부족한가"
        ];

        bookTitles.forEach(function (title) {
            $.ajax({
                method: "GET", // GET 방식으로 요청
                url: "https://dapi.kakao.com/v3/search/book?target=title", // 제목 기준 검색
                data: $.param({ query: title, size: 1 }), // 검색어, size=1로 한 권만 가져옴
                headers: {
                    Authorization: "KakaoAK e094a363d6e629209211bd379bb0e21b" // 내 카카오 REST API 키
                }
            })
                .done(function (response) {
                    if (response.documents.length > 0) {
                        let book = response.documents[0]; // 첫 번째 책 데이터만 사용

                        let $bookItem = $("<div class='recommendBook_item'></div>"); // 책 정보를 담을 박스
                        let $cover = $('<a href="#"><img src=' + book.thumbnail + "' alt='" + book.title + "' /></a>"); // 썸네일 이미지
                        let $title = $('<a href="#"><div class="recommendTitle">' + book.title + "</div></a>"); // 책 제목 텍스트
                        let $comment = $("<div></div>");
                        const commentsMap = {
                            "손자병법": "'재미있게 읽었다' 압도적 추천!",
                            "아인슈타인의 꿈": "구병모 추천 21세기 최고의 책",
                            "괴수 8호 RELAX 1": "홀로그램 포토카드 + 홀더 세트",
                            "왜 좋은 일자리는 늘 부족한가": "'삶의 의미로서의 일'을 재정의 한다",
                        };
                        
                        const commentText = commentsMap[book.title]; // 매핑된 텍스트 가져오기
                        
                        if (commentText) {
                            $comment = $('<a href="#"><div class="recommendComment">' + commentText + '</div></a>');
                        }
                        
                        let $authors = $('<a href="#"><div class="recommendAuthors">' + book.authors + "&nbsp지음</div></a>"); // 작가
                        $bookItem.append($cover);
                        $bookItem.append($title);
                        $bookItem.append($comment);
                        $bookItem.append($authors);

                        $(".popularBookSlider").eq(0).append($bookItem); // 첫 번째 .test 요소에만 추가
                    }
                });
        });
    });

    $(function () {
        var bookTitles = [
            "빛과 실",
            "도넛을 나누는 기분",
            "절대 진공 & 상상된 위대함",
            "첫차를 타는 사람들"
        ];

        bookTitles.forEach(function (title) {
            $.ajax({
                method: "GET", // GET 방식으로 요청
                url: "https://dapi.kakao.com/v3/search/book?target=title", // 제목 기준 검색
                data: $.param({ query: title, size: 1 }), // 검색어, size=1로 한 권만 가져옴
                headers: {
                    Authorization: "KakaoAK e094a363d6e629209211bd379bb0e21b" // 내 카카오 REST API 키
                }
            })
                .done(function (response) {
                    if (response.documents.length > 0) {
                        let book = response.documents[0]; // 첫 번째 책 데이터만 사용

                        let $bookItem = $("<div class='recommendBook_item'></div>"); // 책 정보를 담을 박스
                        let $cover = $('<a href="#"><img src=' + book.thumbnail + "' alt='" + book.title + "' /></a>"); // 썸네일 이미지
                        let $title = $('<a href="#"><div class="recommendTitle">' + book.title + "</div></a>"); // 책 제목 텍스트
                        let $comment = $("<div></div>");
                        const commentsMap = {
                            "빛과 실": "특별 북커버 증정",
                            "절대 진공 & 상상된 위대함": "스타니스와프 렘 티셔츠",
                            "첫차를 타는 사람들": "<도넛을 나누는 기분> nfc 키링",
                            "도넛을 나누는 기분(시절 시집 에디션)": "<도넛을 나누는 기분> nfc 키링",
                        };
                        
                        const commentText = commentsMap[book.title]; // 매핑된 텍스트 가져오기
                        
                        if (commentText) {
                            $comment = $('<a href="#"><div class="recommendComment">' + commentText + '</div></a>');
                        }
                        
                        let $authors = $('<a href="#"><div class="recommendAuthors">' + book.authors + "&nbsp지음</div></a>"); // 작가
                        $bookItem.append($cover);
                        $bookItem.append($title);
                        $bookItem.append($comment);
                        $bookItem.append($authors);

                        $(".eventGoodsSlider").eq(0).append($bookItem); // 첫 번째 .test 요소에만 추가
                    }
                });
        });
    });

    $(function () {
        var bookTitles = [
            "13.67",
            "시간은 흐르지 않는다",
            "중력과 은총",
            "시녀 이야기"
        ];

        bookTitles.forEach(function (title) {
            $.ajax({
                method: "GET", // GET 방식으로 요청
                url: "https://dapi.kakao.com/v3/search/book?target=title", // 제목 기준 검색
                data: $.param({ query: title, size: 1 }), // 검색어, size=1로 한 권만 가져옴
                headers: {
                    Authorization: "KakaoAK e094a363d6e629209211bd379bb0e21b" // 내 카카오 REST API 키
                }
            })
                .done(function (response) {
                    if (response.documents.length > 0) {
                        let book = response.documents[0]; // 첫 번째 책 데이터만 사용

                        let $bookItem = $("<div class='recommendBook_item'></div>"); // 책 정보를 담을 박스
                        let $cover = $('<a href="#"><img src=' + book.thumbnail + "' alt='" + book.title + "' /></a>"); // 썸네일 이미지
                        let $title = $('<a href="#"><div class="recommendTitle">' + book.title + "</div></a>"); // 책 제목 텍스트
                        let $comment = $("<div></div>");
                        const commentsMap = {
                            "시녀 이야기(리커버 일반판)": "정세랑 추천",
                            "중력과 은총": "진은영 추천",
                            "시간은 흐르지 않는다": "유지원, 하미나 추천",
                            "13.67": "김용언, 윤영천 추천",
                        };
                        
                        const commentText = commentsMap[book.title]; // 매핑된 텍스트 가져오기
                        
                        if (commentText) {
                            $comment = $('<a href="#"><div class="recommendComment">' + commentText + '</div></a>');
                        }
                        
                        let $authors = $('<a href="#"><div class="recommendAuthors">' + book.authors + "&nbsp지음</div></a>"); // 작가
                        $bookItem.append($cover);
                        $bookItem.append($title);
                        $bookItem.append($comment);
                        $bookItem.append($authors);

                        $(".bestBookSlider").eq(0).append($bookItem); // 첫 번째 .test 요소에만 추가
                    }
                });
        });
    });


    $(function () {
        $(function () {
            $(".editorSlider").css("right", "12px");
        });
    const sliders = [
        { id: "editorSelect", target: ".editorSlider" },
        { id: "event", target: ".eventSlider" },
        { id: "thisWeek", target: ".thisWeekSlider" },
        { id: "newBook", target: ".newBookSlider" },
        { id: "eyeBook", target: ".eyeBookSlider" },
        { id: "popularBook", target: ".popularBookSlider" },
        { id: "eventGoods", target: ".eventGoodsSlider" },
        { id: "bestBook", target: ".bestBookSlider" },
        { id: "elecBook", target: ".elecBookSlider" },
    ];

    sliders.forEach(slider => {
        $("#" + slider.id).mouseover(function () {
            sliders.forEach(s => {
                if (s.target === slider.target) {
                    // 활성화 대상
                    $(s.target).stop().animate({ right: "12" }, 400, function () {
                    });
                } else {
                    // 비활성화 대상
                    $(s.target).stop().animate({ right: "-150%" }, 400);
                }
            });
        });
    });
});