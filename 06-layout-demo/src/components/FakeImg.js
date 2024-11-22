/**
 * 가상의 이미지 박스
 */

import React from "react";
import styled from "styled-components";

/** 가상 이미지 컴포넌트 스타일 정의 */
const FakeImgContainer = styled.div`
  background-color: #aaa;
  width: auto;
  padding: 20px;
  margin: 10px auto;
  height: ${(props) => `${props.height}px`};
`;

const FakeImg = ({height, children}) => {
  return (
    <FakeImgContainer height={height}>
      {children}
    </FakeImgContainer>
  );
};

export default FakeImg;
