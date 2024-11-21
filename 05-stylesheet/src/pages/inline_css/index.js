import React from "react";

import sample from '../../assets/img/sample.png';

// 직접 정의한 컴포넌트 참조
import Meta from '../../components/Meta';

const InlineCss = () => {

  const myStyle = {
    backgroundColor: '#f60',
    fontSize: '20px',
    color: '#0f6',
    fontWeight: 'bold',
    padding: '10px 25px',
    marginBottom: '10px'
  };

  return (
    <div>
    <Meta title="stylesheet.js" description="여기는 stylesheet.js 파일 입니다"></Meta>

    <h2>InlineCss</h2>

    <h3>변수로 적의도니 css 참조하기</h3>

    <div style={myStyle}>Hello React Css (1)</div>

    <h3>직접 css 코딩하기</h3>

    <div style={{
    backgroundColor: '#f60',
    fontSize: '20px',
    color: '#0f6',
    fontWeight: 'bold',
    padding: '10px 25px',
    marginBottom: '10px'
  }}>Hello React Css (2)</div>

  <h3>이미지 참조하기</h3>

  <img src={sample} width='240' height='240' alt='샘플이미지'></img>

  <img src='/logo192.png' width='240' height='240' alt='react'></img>

    </div>
  )
}

export default InlineCss;