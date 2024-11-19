import React from 'react';

import { Link, Routes, Route} from "react-router-dom";

import MainSub1 from './MainSub1';
import MainSub2 from './MainSub2';

const Main = () => {
  return (
    <div>
      <h1>Main</h1>

      {/* ------- 링크 구성 부분 --------*/}
      <nav>
        <Link to="sub1">[MainSub1]</Link>
        <Link to="sub2">[MainSub2]</Link>
      </nav>

       {/* ------- 페이지 역할을 할 컴포넌트를 명시하기 --------*/}
       <Routes>
        <Route path="sub1" element={<MainSub1/>}></Route>
        <Route path="sub2" element={<MainSub2/>}></Route>
       </Routes>
    </div>
  );
};

export default Main;