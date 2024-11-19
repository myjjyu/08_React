/**
 * React 프로그램의 시작점
 * --> "/src/App.js"의 실행 결과를 "/public/index.html" 파일의 #root에 렌더링 한다
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// URL에 의한 페이지 분할(Routing) 처리를 위해 참조하는 컴포넌트
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Routing 처리를 <App>에 전파한다
    // React Router에서 제공하는 컴포넌트로, SPA(Single Page Application)**에서 라우팅을 관리하는 역할
    // 이를 통해 URL을 기반으로 화면을 전환하거나 특정 컴포넌트를 보여줄수있다
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
