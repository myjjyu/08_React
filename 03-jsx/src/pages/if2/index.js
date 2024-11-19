/**
 * JSX조건 분기(2) - 조건식과 `&&` 연산자 사용
 * 
 * {조건 && (조건이 참인 경우 출력할 내용)}
 * 
 * 조건이 거짓인 경우 표시되는 내용 없음
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
