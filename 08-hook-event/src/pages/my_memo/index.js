/**
 * useMemo
 * 
 * 함수혀 컴포넌트 내에서의 연산 최적화
 * 
 * useMemo는 특정 상태변수가 변경되었을때 그 변경된 값을 가지고 처리할 후속 작업을 구현한다
 * 변경 여부를 감지하기 위한 상태변수는 useMemo()의 두 번째 파라미터 배열에 명시한다
 * useMemo의 콜백 함수에서 리턴하는 값은 useMemo 자체의 리턴값이 된다
 */


import React, { memo, useState, useEffect, useMemo } from "react";

import styled from "styled-components";

const MyMemoContainer = styled.div``;

/**
 * 상태변수 myNumber가 변경됨에 따라 영향을 받는 새로운 상태변수 만들기
 */

const MyMemo = memo(() => {
  // 사용자의 입력을 저장할 상태변수
  const [myNumber, setMyNumber] = useState(0);

  // 입력값에 따라 상태변수를 갱신할 이벤트 핸들러
  const onMyNumberChange = (e) => {
    const inputValue = e.currentTarget.value;
    const inputNumber = isNaN(inputValue) ? 0 : parseInt(inputValue);
    setMyNumber(inputNumber);
  };

  /** 
  // [CASE 1]
  // 새로운 상태값
  const [myResult, setMyResult] = useState(0);

  // myNumber값이 변경되었을때 실행되는 hook
  useEffect(()=>{
    // 이 처리를 onMyNumberChange 안에서 함께 하지 못하는 이유가 setMyNumber가 비동기 처리이기 때문에 
    // myNumber 값의 갱신이 완료되기 전에 다음 코드가 실행 할 수도 있기 때문
    setMyResult(myNumber * 234);
  }, [myNumber]);
/*/
  // [CASE 2]
  // 위의 코드를 간결하게 처리한 상태
  // --> useMemo 는 특정 상태값이 변경되었을때 그 상태값에 영향을 받는 새로운 상태값을 생성한다
  const myResult = useMemo(() => {
    return myNumber * 234;
  }, [myNumber]);
  /**/

  return (
    <MyMemoContainer>
      <h2>MyMemo</h2>
      <input type="number" value={myNumber} onChange={onMyNumberChange} /> X 234
      = {myResult}
    </MyMemoContainer>
  );
});

export default MyMemo;
