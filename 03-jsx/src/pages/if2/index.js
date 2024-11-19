/**
 * 기본 표현식 연습
 */

import React from "react";

const If2 = () => {
  /** 조건ㄴ에 따라 다른 jsx를 반환하는 함수 정의 */
  const isLogin = true;

  return(
    <div>
      <h1>If2</h1>

      {isLogin && <p>로그인 되셨습니다</p>}
    </div>
  )
};

export default If2;
