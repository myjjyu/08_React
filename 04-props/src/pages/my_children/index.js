import React from "react";

// 직접 정의한 컴포넌트 참조
import Meta from "../../components/Meta";
import MyChildrenSub from "./MyChildrenSub";

const MyChildren = () => {
  return (
    
    <div>

      {/* Route 처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어쓰게 된다 */}
      <Meta title="Myprops.js" description="여기는 MyProps.js 파일 입니다"></Meta>

      <h2>MyChildren</h2>

      <MyChildrenSub width={400} height={100}><b>Hello World</b></MyChildrenSub>
      <MyChildrenSub width={300} height={80}><b>안녕 React</b></MyChildrenSub>
      <MyChildrenSub width={200} height={50} />
    </div>
  );
};

export default MyChildren;