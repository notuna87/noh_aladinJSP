<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>

<head>
<link rel="stylesheet" type="text/css" href="css/common.css">
<link rel="stylesheet" type="text/css" href="css/reset.css">
<link rel="stylesheet" type="text/css" href="css/boardView.css">
<meta charset="UTF-8">
<title>알라딘 : 문의하기</title>
</head>

<body>
	<!-- 헤더 임포트 -->
	<jsp:include page="header.jsp" />

	<div id="boarderWrap">
		<h2>문의하기</h2>
		<div class="border">
			<div class="boardertitle">${board.title}</div>
			<div class="postmeta">
				<span style="float: left;">작성자 : ${board.userid} </span> <span
					style="font-size: 12px">&nbsp;<fmt:formatDate
						value="${board.writedate}" /></span> <span style="float: right;">조회수
					: ${board.readcount} </span>
			</div>
			<div class="boardeContentWrap">
				<div class="contentImg">
					<c:choose>
						<c:when test="${empty board.pictureUrl}">
							<img src="upload/Noimage.png" alt="noimage" />
						</c:when>
						<c:otherwise>
							<img src="upload/${board.pictureUrl}" alt="uploadImg" />
						</c:otherwise>
					</c:choose>
				</div>
				${board.content}

			</div>
		</div>
	</div>
	<div class="ButtonWrap">
		<input class="submitButton" type="button" value="수정하기"
			onclick="location.href='boarderupdate.do?num=${board.num}'"> <input
			class="submitButton" type="submit" value="목록으로"
			onclick="location.href='boarderlist.do'">
					<input class="submitButton" type="button" value="삭제"
			onclick="if(confirm('정말 삭제하시겠습니까?, 삭제된 내용은 복구되지 않습니다.')) location.href='boarderdelete.do?num=${board.num}'">
	</div>
	<!-- 푸터 임포트 -->
	<jsp:include page="footer.jsp" />
</body>
</html>