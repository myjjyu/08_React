/**
 * React 프로그램의 시작점
 * --> "/src/App.js"의 실행 결과를 "/public/index.html" 파일의 #root에 렌더링 한다.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// URL에 의한 페이지 분할(Routing) 처리를 위해 참조하는 컴포넌트
import { BrowserRouter } from 'react-router-dom';

// 리덕스 구성을 위한 참조
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 리덕스 스토어 연결
    <Provider store={store}>
        {/* Routing처리를 <App>에 전파한다. */}
        {/* 버전이 17로 업그레이드될 예정이라는 경고안나게 하는 고드?! 업그레이드 코드 */}
        <BrowserRouter basename={process.env.PUBLIC_URL} future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
            <App />
        </BrowserRouter>
    </Provider>
);
