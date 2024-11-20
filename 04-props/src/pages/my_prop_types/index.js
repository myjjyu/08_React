import React from "react";

// 직접 정의한 컴포넌트 참조
import Meta from "../../components/Meta";
import MyPropTypesSub from "./MyPropTypesSub";

const MyPropTypes = () => {
  return(

    <div>

      {/* Route 처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어쓰게 된다 */}
      <Meta title="Myprops.js" description="여기는 MyProps.js 파일 입니다"></Meta>


      <h2>MyPropTypes</h2>

      {/** 문자열이 아닌 형식은{} 로 감싸야한다 */}
      <MyPropTypesSub name="민호" age={19} hobby="사진찍기"></MyPropTypesSub>
      <MyPropTypesSub name="수영" age="스물한살" hobby="영화보기"></MyPropTypesSub>
      <MyPropTypesSub name="철민" age={22}></MyPropTypesSub>

    </div>
  );
};

export default MyPropTypes;