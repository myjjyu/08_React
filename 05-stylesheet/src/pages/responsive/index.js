import React from "react";
import styled from 'styled-components';
import breakpoints from 'styled-components-breakpoints';

// 반응형 웹 구현 기준 사이즈 정의
const sizes = {
  sm: 600,
  md: 768,
  lg: 992,
  xl: 1200,
};

// 기준 사이즈를 활용하여 media query 생성
const mq = breakpoints(sizes);

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Column = styled.div`
  box-sizing: border-box;
  padding: 20px;
  background-color: ${(props) => props.bgcolor || '#eee'};
  width: 100%; /* 기본값 */

  ${mq.minWidth('sm')`
    width: 50%;
  `}
  ${mq.minWidth('md')`
    width: 33.3%;
  `}
  ${mq.minWidth('lg')`
    width: 25%;
  `}
  ${mq.minWidth('xl')`
    width: 20%;
  `}
`;

// 직접 정의한 컴포넌트 참조
import Meta from '../../components/Meta';

const Responsive = () => {
  return (
    <div>
      <Meta title="stylesheet.js" description="여기는 stylesheet.js 파일입니다" />
      <h2>Responsive</h2>
      <h3>Flex를 사용한 반응형 5열 레이아웃</h3>

      <Container>
        <Column bgcolor="#aaa">
          <h2>Column1</h2>
          <p>Some text....</p>
        </Column>
        <Column bgcolor="#bbb">
          <h2>Column2</h2>
          <p>Some text....</p>
        </Column>
        <Column bgcolor="#ccc">
          <h2>Column3</h2>
          <p>Some text....</p>
        </Column>
        <Column bgcolor="#ddd">
          <h2>Column4</h2>
          <p>Some text....</p>
        </Column>
        <Column bgcolor="#eee">
          <h2>Column5</h2>
          <p>Some text....</p>
        </Column>
      </Container>
    </div>
  );
};

export default Responsive;
