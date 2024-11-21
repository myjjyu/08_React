import React from "react";

//외부 CSS파일 참조 --> 참조변수 이름을 지정하지 않는다.
import '../../assets/css/mystyle.css';

// 직접 정의한 컴포넌트 참조
import Meta from '../../components/Meta';

const CssClass = () => {
  return (
    <div>
    <Meta title="stylesheet.js" description="여기는 stylesheet.js 파일 입니다"></Meta>

    <h2>CssClass</h2>

    <div className='my-css-box'></div>
    </div>
  )
}

export default CssClass;