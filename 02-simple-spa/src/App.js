/**
 * 리액트의 전체 페이지를 구성하는 컴포넌트
 */

/** 1) 리액트 기본패키지 참조(모든 파일에서 무조건 참조한다) */
import React from "react";

/** 2) 링크와 페이지 구성에 필요한 컴포넌트 참조 */
import { Link, Routes, Route } from "react-router-dom";

/** 3) 하위 페이지를 담당하는 컴포넌트(직접 제작)들 참조 */
// import 경로가 폴더를 의미할 경우 그 안의 index.js를 참조한다
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <div>
      <h1>02-simple-spa</h1>
      <hr />

      {/* ----- 링크 구성 부분 ----- */}
      {/* nav로 한거는 아무 의미없음 div 로 감싸도됨 */}
      <nav>
        {/* 4-1) 기본 라우팅 구성 */}
        <Link to="/">[Home]</Link>
        <Link to="about">[About]</Link>
      </nav>

      <a href="/about">일반 링크</a>

      {/* ----- 페이지 역할을 할 컴포넌트를 명시하기 ----- */}
      <Routes>
        {/* 4-2) 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다 */}
        {/* 첫 페이지로 사용되는 컴포넌트는 path에 "/"를 권장 */}
        <Route path="/" element={<Home />} exact={true}></Route>
        <Route path="/about" element={<About />} exact={true}></Route>
      </Routes>
    </div>
  );
}

export default App;
