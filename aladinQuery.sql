-- UTF-8mb4 문자 세트와 utf8mb4_unicode_ci 콜레이션을 사용하는 것이 일반적으로 가장 권장되는 방법  (다양한 언어와 이모티콘 등의 문자를 지원)
CREATE DATABASE aladin CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 확인
show databases;

show tables;

-- estore DB를 사용하겠다.
USE aladin;

-- member table이 있다면 삭제해라 
DROP TABLE IF EXISTS member;
DROP TABLE IF EXISTS board;

-- member 테이블을 ~~이런이런 조건(데이터 타입)으로 만들어라
CREATE TABLE member (
  username VARCHAR(10),
  userid VARCHAR(10),
  pwd VARCHAR(20),
  email VARCHAR(20),
  phone CHAR(13),
  admin TINYINT DEFAULT 0, -- 0: 사용자, 1: 관리자
  PRIMARY KEY (userid)
);

-- board 테이블 만들기
CREATE TABLE board (
  num INT AUTO_INCREMENT PRIMARY KEY,
  pass VARCHAR(30),
  userid VARCHAR(10),
  title VARCHAR(50),
  content VARCHAR(1000),
  pictureurl VARCHAR(50),
  readcount INT DEFAULT 0,
  writedate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 테이블의 구조를 확인 
SHOW COLUMNS FROM member;
SHOW COLUMNS FROM board;
-- 테이블의 구조를 확인 
DESC member;

-- 테이블 확인
show tables;

-- insert문    
-- 1 레코드 삽입
INSERT INTO member (username, userid, pwd, email, phone, admin)
VALUES ('유비', 'yoobi', '1234', 'gmd@naver.com', '010-1111-2222', 0);

-- 2 레코드 삽입
INSERT INTO member (username, userid, pwd, email, phone, admin)
VALUES ('관우', 'guanyu', '1234', 'ha12@naver.com', '010-2222-8888', 0);

-- 3 레코드 삽입
INSERT INTO member (username, userid, pwd, email, phone, admin)
VALUES ('알라딘', '123', '123', 'notuna74@naver.com', '010-3333-6666', 1);

-- 4 레코드 삽입
INSERT INTO member (username, userid, pwd, email, phone, admin)
VALUES ('노참치', 'notuna', '1234', 'notuna74@gmail.com', '010-4444-9999', 0);

-- board 레코드 삽입
INSERT INTO board(userid, pass, title, content)
VALUES('성윤정', '1234', '첫방문', '반갑습니다.');

INSERT INTO board(userid, email, pass, title, content)
VALUES('홍길동', '1234', '강원도', '눈이 많이 와요.');

INSERT INTO board(userid, email, pass, title, content)
VALUES('임꺽정', '1234', '경기도', '숲속공원이요');

INSERT INTO board(userid, email, pass, title, content)
VALUES('장보고', '1234', '제주도', '바다가 보여요.');

commit; -- 영구 저장

select * from member;  

select * from board;

-- 검색
SELECT * FROM member WHERE userid = 'notuna';


-- update
UPDATE member SET pwd = '123' WHERE userid = '123';
UPDATE member SET username = '알라딘' WHERE userid = '123';

-- 정렬
SELECT * FROM member ORDER BY email;
SELECT * FROM member ORDER BY username;

-- 이름역순 정렬
SELECT * FROM member ORDER BY username DESC;

-- 삭제
DELETE FROM member WHERE userid = 'ogong';

--  테이블 삭제 
drop table member;

show tables;

-- estore DB 삭제해라 
DROP DATABASE IF EXISTS aladin;