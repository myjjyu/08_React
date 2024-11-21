import React from 'react';
import styled from 'styled-components';

/** Link대신 NavLink를 import 한다 */
import { NavLink, Routes, Route } from "react-router-dom";
import Meta from "./components/Meta";

/** reset.css 적용을 위한 import */
// import {Reset} from 'styled-reset';

/** 전역 scss 적용을 위한 styledComponents */
import GlobalSstyles from './components/GlobalStyles';

/** 페이지를 구성할 컴포넌트 준비 */
import InlineCss from './pages/inline_css';
import CssClass from './pages/css_class';
import CssModule from './pages/css_module';
import StyledComponent from './pages/styled_component';
import Responsive from './pages/responsive';
import News from './pages/news';

/** 메뉴링크 컨테이너용 */
const MenuBar = styled.nav`
.menu-item {
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 2px;
  color: #222;

  /** css 가상 클래스 hover */
  &:hover {
    color: #22b8cf;
  }

  &:after {
    content: '|';
    display: inline-block;
    padding: 0 7px;
    color: #ccc;
  }

  &:last-child{
    &:after{
      /** 글자색을 흰색으로 지정하여 화면에서 숨긴다 */
      color: #fff;
    }
  }


  /**
  url 이 현재 메뉴를 가르키느느 경우(콜런이 아닌점에 주의)
  활성 메뉴에 적용되는 기본 클래스 이름이 active 이다 */
  &.active {
    text-decoration: underline;
    color: #22b8cf;
  }
}
`


const App = () => {
  return (
    // Fragment 로 감싸기
    <div>
        {/* Route 처리를 수행하는 페이지에서 이 컴포넌트 사용시, 이 내용이 모든 페이지에 공통 적용된다 */}
        <Meta />
        <GlobalSstyles />

      <h1>05-sylesheet</h1>

      <MenuBar>
        <NavLink className='menu-item' to="/inline_css">InlineCss</NavLink>
        <NavLink className='menu-item' to="/css_class">CssClass</NavLink>
        <NavLink className='menu-item' to="/css_module">CssModule</NavLink>
        <NavLink className='menu-item' to="/styled_component">StyledComponent</NavLink>
        <NavLink className='menu-item' to="/responsive">Responsive</NavLink>
        <NavLink className='menu-item' to="/news">News(demo)</NavLink>
      </MenuBar>

      <hr />

        {/** Route 처리할 컴포턴트 정의*/}
        <Routes>
        <Route path="/inline_css" element={<InlineCss></InlineCss>}></Route>
        <Route path="/css_class" element={<CssClass></CssClass>}></Route>
        <Route path="/css_module" element={<CssModule></CssModule>}></Route>
        <Route path="/styled_component" element={<StyledComponent></StyledComponent>}></Route>
        <Route path="/responsive" element={<Responsive></Responsive>}></Route>
        <Route path="/news/*" element={<News></News>}></Route>
      </Routes>
    </div>
  );
}

export default App;
