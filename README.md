# TODO APP

## 준비
1. npm install => `npm install`

## 실행
1. android 기기 연결
2. `npm run android` 실행

## 폴더구조
1. app-navigator: navigator 연결
2. component: 공통 컴포넌트
3. constants: 공통 상수
4. images: 이미지 파일 모음
5. interfaces: 타입스크립트 interface 모음
6. pages: 앱 화면
 - 로그인 페이지
 - TODO 앱 페이지 
7. redux: 페이지간의 데이터 연동을 위한 redux.
  - toolkit 사용
8. strings: globalization을 위한 문자열 상수
8. styles: 스타일 관련
  - Colors: 컬러 모음
  - CommonStyles: 자주 사용하는 스타일 모음
  - Fonts: 폰트 정의
  - Images: 아이콘 이미지를 통한 이미지 컴포넌트 모음
  - Scaling: 디자인을 여러 resolution에 적용하기 위한 scaling 함수
  - Styles: 화면의 스타일들
9. util: util 함수들

## 프로그램 기능 정의
1. 로그인
  - email validation
  - email password check
   - 계정: test@test.com / 1234
  - 로그인 성공시 TODO APP 메인화면 이동
2. TODO APP
  - 탭 버튼 클릭시 InBox / Done 화면간 이동
  - check box 클릭시 InBox <-> Done으로 아이템 이동
  - InBox에 Todo Item 생성
  - Todo Item 수정
  - Todo Item 삭제
  - 앱 종료시에도 마지막으로 저장된 내용 보유
  - 로고 클릭시 로그인 화면으로 이동
