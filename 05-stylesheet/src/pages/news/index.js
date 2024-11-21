import React from "react";
import {Link, Routes, Route} from 'react-router-dom';
import NewsCard from './NewsCard';
import NewsList from './NewsList';

import NewsData from '../../data/NewsData';

// 직접 정의한 컴포넌트 참조
import Meta from '../../components/Meta';

const News = () => {
  return (
    <div>
    <Meta title="stylesheet.js" description="여기는 stylesheet.js 파일 입니다"></Meta>

    <h2>News</h2>

    <nav>
      <Link to='news_card'>카드형</Link>&nbsp;|&nbsp;
      <Link to='news_list'>리스트형</Link>
    </nav>

    <Routes>
      
      <Route path='news_card' element={<NewsCard news={NewsData}></NewsCard>}></Route>
      <Route path='news_list' element={<NewsList news={NewsData}></NewsList>}></Route>

    </Routes>
    </div>
  )
}

export default News;