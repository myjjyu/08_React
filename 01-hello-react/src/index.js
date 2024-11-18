/**
 * 프로그램 시작점
 * - 향후 Redux 라는 패키지를 사용하기 전까지는 특별한 작업은 안함
 */


// 리액트 기본을 구성하는 피키지 참조
import React from 'react';

// 리액트가 DOM을 구성하기 위한 기능을 참조
import ReactDOM from 'react-dom/client';

// 이 소스파일 (index.js과 동일한 위치의 App.js("./App")을 App이라는 이름으로 가져온다
import App from './App';


/**
 * 컴포넌트를 페이지에 랜더링한다
 * 
 * App.js에서 정의한 'App' 이라는 이름의 컴포넌트를 html 태그처럼 사용한다
 * -> <React.StrictMode> 이 적용되어 있는경우,
 *    선언만 하고 사용되지 않는 변수드렝 대한 경고 메시지가 브라우저 콘솔에 표시된다
 *    하지만 console.log()를 통한 출력문이 2중으로 표시된다는 단점이 있기 때문에
 *    "삭제 하는것을 권장" 한다
 * -> 개발용이므로 최종 빌드시에는 반드시 제거하는것이 좋다
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);