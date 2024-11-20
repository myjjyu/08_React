import React from "react";

// 직접 정의한 컴포넌트 참조
import Meta from "../../components/Meta";
import MypropsSub from "./MyPropsSub";

const MyProps = () => {
  return(

    <div>

      {/* Route 처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어쓰게 된다 */}
      <Meta title="Myprops.js" description="여기는 MyProps.js 파일 입니다"></Meta>
      <h2>MyProps</h2>

      <MypropsSub />
      <MypropsSub name="민호" age="19"></MypropsSub>
      <MypropsSub name="수영" age={20}></MypropsSub>
    </div>
  );
};

export default MyProps;