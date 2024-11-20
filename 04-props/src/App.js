import { Link, Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";

import MyProps from './pages/my_props';
import MyPropTypes from './pages/my_prop_types';
import MyChildren from './pages/my_children';
import GradeTable from './pages/grade_table';

const App = () => {
  return (
    <div>
      {/* Route 처리를 수행하는 페이지에서 이 컴포넌트 사용시, 이 내용이 모든 페이지에 공통 적용된다 */}
      <Meta />

      <h1>04-props</h1>


      {/** Route 처리를 수행하는 페이지에서 이 컴포넌트 사용시, 이 내용이 모든 페이지에 공통 적용된다 */}
      <nav>
        <Link to="/myprops">Myprops</Link>&nbsp;|&nbsp;
        <Link to="/myproptypes">Myproptypes</Link>&nbsp;|&nbsp;
        <Link to="/mychildren">MyChildren</Link>&nbsp;|&nbsp;
        <Link to="/grade_table">GradeTable(demo)</Link>
      </nav>
      <hr />


      {/** Route 처리할 컴포턴트 정의*/}
      <Routes>
        <Route path="/myprops" element={<MyProps></MyProps>}></Route>
        <Route path="/myproptypes" element={<MyPropTypes></MyPropTypes>}></Route>
        <Route path="/mychildren" element={<MyChildren></MyChildren>}></Route>
        <Route path="/grade_table" element={<GradeTable></GradeTable>}></Route>
      </Routes>
    </div>
  );
}

export default App;
