import React, {useState, useEffect} from "react";
import {Link, Routes, Route} from 'react-router-dom';
import NewsCard from './NewsCard';
import NewsList from './NewsList';

import axiosHelper from "../../helpers/AxiosHelper";  

const News = () => {
 const[newsData, setNewsData] = useState([]);

/** 페이지가 처음 열렸을때 실행할 hook */
// hook에 전달되는 콜백 함수에 직접적으로 async를 적용할 수 없다 
useEffect(() => {
  (async () => {
    //ajax 결과를 저장할 변수
    let data = null;

    try {
      data = await axiosHelper.get("/news");
    } catch(e) {
      alert(e.message);
      return;
    }

    console.log(data.item);

    // ajax의 결과에서 화면에 출력할 내용을 상태변수에 적용 --> 화면에 자동 갱신됨
    setNewsData(data.item);
  })();
}, []);

  return (
    <div>
      
    <h1>News</h1>

    <nav>
      <Link to='/news/card'>카드형</Link>&nbsp;|&nbsp;
      <Link to='/news/list'>리스트형</Link>
    </nav>

    <Routes>
      {/* Route에 연결된 컴포넌트에 props 전달 */}
      <Route path='card' element={<NewsCard news={newsData}></NewsCard>}></Route>
      <Route path='list' element={<NewsList news={newsData}></NewsList>}></Route>

      {/* 👆🏻 이렇게 걸면 데이터는 나오긴하지만 이미지가 나오지 않는다.
      이유는? 리액트로 구현시 백엔드와 프론트엔드 주소가 다르기때문이다 즉 주소가 다르면 절대 접근이 불가하다!!
      프론트엔드와 백엔드가 서로 분리됐을때는 특별한처리없으면 이미지가 안나온다는 것이다.
      해결방법은?
      1) 백엔드가 cors 허용을 해주거나 or 백엔드가 이미지를 절대경로로 주거나
      2) 프론트엔드에서  프록시를 설정하다 단!! 순수 html,css,js로만 구현된 프로젝트에서는 프록시 설정이 불가능하다.*/}

    </Routes>
    </div>
  )
}

export default News;