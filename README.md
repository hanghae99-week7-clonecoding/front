## 1. 시연영상

---

**[http://faketube-clone.s3-website.ap-northeast-2.amazonaws.com/](http://faketube-clone.s3-website.ap-northeast-2.amazonaws.com/)**

[https://www.youtube.com/watch?v=gpe1IZ0HHr8](https://www.youtube.com/watch?v=gpe1IZ0HHr8)

## 2. 제작기간 & 팀원소개 🏃‍🏃‍♀️ 💨

---

- Front-end (React)
    - 김도우
    - 강나오미
    - 임주영
- Back-end (Node.js)
    - 김승남
    - 김승민
    - 신현호

## 3. 사용 기술 🔧 ⚙️

---

- View : **`React with JavaScript`, `React-Router`, `material-UI`, `Styled-components`**
- State Management : **`Redux`, `Redux-Thunk`, `Immer`, `Redux-actions`**
- Build Tool : **`Create React App`**
- Infrastructure **`AWS S3`, `Route 53`**
- Other Tools : **`Git`, `Github`, `notion`**

## 4. 구현 기능 📃

---

- 로그인(JWT Token 인증) & 회원가입 🔓
- 게시글 CR(UD)
- 댓글 CR(UD)

## 5. 컴포넌트구조 📃

---

## Pages

1. App.js
2. 로그인(SignIn) - Modal(이메일, 패스워드)
3. 회원가입(SignUp) - Modal(이메일, 채널명, 패스워드, 패스워드 확인)
4. 메인페이지(Main)
5. 게시물 상세페이지(Detail)
6. 게시물 등록/수정페이지(AddForm)
7. 댓글 등록/수정/삭제 (DetailPage>Comment)

+) 개인 정보 수정

*게시글 수정 화면은 어떻게 하지..?>>로그인 여부 확인해서 같은 컴포넌트 안에서 처리하기로함

## Component 파일 구조

- **components**
    1. **common**
        - Header
        - Layout
    2. **css_modules**
        - AddForom (등록)
        - Comments (댓글)
        - Detail (상세보기)
        - Login
        - Main
        - SignUp
    3. **elements**
        - Button
    4. **features**
        - AddForom (등록)
        - Comments (댓글)
        - Detail (상세보기)
        - DetailRight(상세보기-오른쪽 :무한스크롤 페이지)
        - Login
        - Main
        - SignUp
- **pages**
    - DetailPage
    - LoginPage
    - MainPage
    - SignUp
    - AddForm
- **res**
    - font
        - font.css
    - img
        - yt_logo(유튜브 로고)
        - base_img(기본프로필 로고)
    - instance (axios 환경 통일)
    - search ( 검색기능 환경 통일) > 아직 미생성(0822기준)
    - statusCode (서버 반환 메세지 통일) > 아직 미생성 (0822기준)
- **redux**
    1. configureStore
        - store
    2. modules
        - login
        - addForm
        - detail
        - main
        - signUp
- **shared**
    - Router
