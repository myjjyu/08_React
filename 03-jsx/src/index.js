/**
 * React 프로그램의 시작점
 * -->"/src/App.js"의 실행 결과를 "/Public/index.html"파일의 #root에 렌더링 한다
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// URL에 의한 페이지 분할(Routing 처리를 위해 참조하는 컴포넌트)
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
