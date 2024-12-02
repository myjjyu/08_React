import React, {useState} from "react";
import {Link, Routes, Route} from 'react-router-dom';
import NewsCard from './NewsCard';
import NewsList from './NewsList';

// import NewsData from '../../data/NewsData';


const News = () => {
 const[newsData, setNewsData] = useState([]);

  return (
    <div>
      
    <h1>News</h1>

    <nav>
      <Link to='/news/card'>카드형</Link>&nbsp;|&nbsp;
      <Link to='/news/list'>리스트형</Link>
    </nav>

    <Routes>
      {/* Route에 연결된 컴포넌트에 props 전달 */}
      <Route path='/news/card' element={<NewsCard news={newsData}></NewsCard>}></Route>
      <Route path='/news/list' element={<NewsList news={newsData}></NewsList>}></Route>

    </Routes>
    </div>
  )
}

export default News;