/**
 * 기본 표현식 연습
 */

import React from "react";

const If3 = () => {
  const articleList = false;

  return(
    <div>
      <h1>If3</h1>

      {articleList || <p>조회된 게시글이 없습니다</p>}
    </div>
  )
};

export default If3;
