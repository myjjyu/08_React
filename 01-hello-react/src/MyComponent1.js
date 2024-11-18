// react 기본패키지 참조(필수)
import React from 'react';

import MySubComponent from './MySubComponent';

/**
 * 함수형 컴포넌트 정의
 * - 함수이름은 혼선을 방지하기 위해 소스파일 이름과 동일하게 굿ㅇ하는것이 일반적
 */

const MyComponent1 = () => {
  // 리턴은 항상 html 구조를 의미하는 jsx 문법이어야 하고,
  // jsx 구조는 무조건 단 하나의 태그요소만 반환해야함
  // -> 복잡한 구조는 부모요소 하나에 모두 포함되어야 한다는 의미이다
  return (
    <div>
      <h2>안녕하세요 리액트</h2>
      <p>리액트 컴포넌트 구조 연습입니다</p>

      <MySubComponent />
      <MySubComponent />
      <MySubComponent />
    </div>
  );
};

export default MyComponent1;