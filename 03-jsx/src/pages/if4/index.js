/**
 * 기본 표현식 연습
 */

import React from "react";

const If4 = () => {
  const isLogin = false;

  return (
    <div>
      <h1>If4</h1>

      {isLogin === true ? (
        <button type="button">로그아웃</button>
      ) : (
        <button type="button">로그인</button>
      )}
    </div>
  );
};

export default If4;
