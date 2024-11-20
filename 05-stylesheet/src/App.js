import { Link, Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";


import InlineCss from './pages/inline_css';
import CssClass from './pages/css_class';
import CssModule from './pages/css_module';
import StyledComponent from './pages/styled_component';
import Responsive from './pages/responsive';
import News from './pages/news';


const App = () => {
  return (
    <div>
            {/* Route 처리를 수행하는 페이지에서 이 컴포넌트 사용시, 이 내용이 모든 페이지에 공통 적용된다 */}
            <Meta />

      <h1>05-sylesheet</h1>

      <nav>
        <Link to="/inline_css">InlineCss</Link>&nbsp;|&nbsp;
        <Link to="/css_class">CssClass</Link>&nbsp;|&nbsp;
        <Link to="/css_module">CssModule</Link>&nbsp;|&nbsp;
        <Link to="/styled_component">StyledComponent</Link>&nbsp;|&nbsp;
        <Link to="/responsive">Responsive</Link>&nbsp;|&nbsp;
        <Link to="/news">News(demo)</Link>
      </nav>

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
