/**
 * 리액트의 전체 페이지를 구성하는 컴포넌트
 */
/** 리액트 기본 패키지 참조 (모든 파일에서 무조건 참조한다.) */
import React, { memo } from "react";
/** 링크와 페이지 구성에 필요한 컴포넌트 참조 */
import { Routes, Route } from "react-router-dom";
import MenuLink from "./components/MenuLink";
/** SEO 설정 */
import Meta from "./components/Meta";
/** 전역 SCSS 적용을 위한 reset.css와 StyledComponent */
import { Reset } from "styled-reset";
import GlobalStyles from "./components/GlobalStyles";

/** 하위 페이지를 담당하는 컴포넌트(직접제작)들 참조 */
import MyState from "./pages/my_state";
import DateRange1 from "./pages/data_range1";
import MyReducer from "./pages/my_reducer";
import DateRange2 from "./pages/data_range2";
import MyEffect from "./pages/my_effect";
import MyRef from "./pages/my_ref";
import MyCollback from "./pages/my_callback";
import MyMemo from "./pages/my_memo";
import MyWidth from "./pages/my_width";

const App = memo(() => {
  return (
    <>
      <Meta />
      <GlobalStyles />
      <h1>08-hook-event</h1>
      <hr />

      <nav>
        {/* 1) useState 관련예제 */}
        <MenuLink to="/my_state">MyState</MenuLink>
        <MenuLink to="/data_range1">DateRange1</MenuLink>

        {/* 2) useEffecct 관련예제 */}
        <MenuLink to="/my_effect">MyEffect</MenuLink>

        {/* 3) useMeom 관련예제 */}
        <MenuLink to="/my_memo">MyMemo</MenuLink>

        {/* 4) useReducer 관련예제 */}
        <MenuLink to="/my_reducer">MyReducer</MenuLink>
        <MenuLink to="/data_range2">DateRange2</MenuLink>

        {/* 5) useRef 관련예제 */}
        <MenuLink to="/my_ref">MyRef</MenuLink>

        {/* 6) useCallback 관련예제 */}
        <MenuLink to="/my_callback">MyCollback</MenuLink>

        {/* 7) 커스텀 훅 관련예제 */}
        <MenuLink to="/my_width">MyWidth</MenuLink>
      </nav>

      <Routes>
        {/* 1) useState 관련예제 */}
        <Route path="/my_state" element={<MyState></MyState>}></Route>
        <Route path="/data_range1" element={<DateRange1></DateRange1>}></Route>

        {/* 2) useEffecct 관련예제 */}
        <Route path="/my_effect" element={<MyEffect></MyEffect>}></Route>

        {/* 3) useMeom 관련예제 */}
        <Route path="/my_memo" element={<MyMemo></MyMemo>}></Route>

        {/* 4) useReducer 관련예제 */}
        <Route path="/my_reducer" element={<MyReducer></MyReducer>}></Route>
        <Route path="/data_range2" element={<DateRange2></DateRange2>}></Route>

        {/* 5) useRef 관련예제 */}
        <Route path="/my_ref" element={<MyRef></MyRef>}></Route>

        {/* 6) useCallback 관련예제 */}
        <Route path="/my_callback" element={<MyCollback></MyCollback>}></Route>

        {/* 7) 커스텀 훅 관련예제 */}
        <Route path="/my_width" element={<MyWidth></MyWidth>}></Route>
      </Routes>
    </>
  );
});

export default App;
