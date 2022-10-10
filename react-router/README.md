# React와 History API 사용하여 SPA Router 기능 구현

## feat. react-router-dom 없이 라우팅 기능 만들어보기

<br>

### 구현 방법

1. 우선, react-router-dom로 어떻게 SPA상에서 라우팅을 했나 생각해보면, 최상위 App 컴포넌트에서 `BrowerRouter, Routes, Route`를 가져다 썼다.

2. Routes,Route 를 감싸고 있는 `BrowserRouter`를 생각해보면 history API를 사용해서 브라우저 상의 url과 ui를 동기화시켜줬다. 따라서, history API 에 대해서 공부해야만 했다.

3. `Context API` 를 사용해서 url을 전역 상태로 관리하여 브라우저가 이를 인지해 리렌더링할 수 있게끔 함

4. `history.pushState()` 를 활용하여 버튼 클릭 시 해당 url로 이동하여 화면을 새롭게 렌더하게끔 useRouter hook 구현

5. 전역상태로 담긴 url과 실제 브라우저의 위치 (`window.location.pathname`) 가 일치하는지 확인 후 일치할 경우 해당 컴포넌트 렌더하게끔 구현

6. `window.onpopstate` 이벤트 사용하여 뒤로가기 버튼 클릭 시 url 주소 변경

<br>

## 📓 history API

브라우저의 세션 기록을 컨트롤 할 수 있는 메소드를 담고 있는 객체 <br>
<br>
`hisotry.back()` 뒤로가기, `history.forward()` 앞으로 가기, `history.go(idx)` 지정 위치로 이동, 이 3가지 history 메소드는 알고 있었으나, 아래 두 메소드는 생소해서 정리해본다.

### `history.pushState(state, title, url)`

- 브라우저의 session history 스택에 상태를 추가해준다.
- 필요한 인자 3개

  1. 세번째 인자인 url과 함께 저장할 데이터 <br>
     -> `popstate` 이벤트 발생 시 (사용자가 뒤로 가기, 앞으로 가기 버튼 누를 때), 해당 이벤트 객체의 state 속성에 담길 상태 `event.state` <br>
     -> `history.state` 로도 접근 가능

  2. url 이동 시 변경할 페이지 제목 <br>
     -> 하지만 브라우저 상에 기능이 구현되지 않아서 우선은 빈 string 으로 넣어주는 게 좋다고 함

  3. 변경할 url주소

- 새로운 주소 목록을 추가하는 경우 쓰기 때문에 이전 url 이 남아있어 뒤로가기 버튼이 활성화되있음

<br>

### `history.replaceState(state, title, url)`

- 브라우저의 session history 스택의 현재 상태를 대체시킴

- 필요한 인자는 pushstate와 동일

- 이전 url을 없애고 바꿀 url로 대체해버리기 때문에 뒤로 가기 버튼

<br>

## ⚡️ vite 사용

`npm create vite@latest` <br>
project 이름 입력 -> install할 framework 및 언어 선택 <br>
`npm i` : CRA와 달리 패키지 설치가 필요하다.<br>
`npm run dev` : 실행
