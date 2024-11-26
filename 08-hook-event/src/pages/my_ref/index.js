/**
 * useRef
 *
 * vanilla script 에서 `document.getElementById(...)`나 `documnet.querySelector(...)`로
 * DOM 객체를 취득하는 과정을 React 스타일로 표현한 것으로 이해할수 있따
 */
import React, { memo, useRef } from "react";

import styled from "styled-components";

import MyBox from "./MyBox";

const MyRefContainer = styled.div``;

const MyRef = memo(() => {
  // HTMl 태그를 React안에서 참조할 수 있는 참조 변수를 생성
  const myDname = useRef();
  const myLoc = useRef();
  const myResult = useRef();

  // 자식 컴포넌트에 설정하기 위한 참조변수를 생성
  const myBoxRef = useRef();

  return (
    <MyRefContainer>
      <h2>MyRef</h2>

      {/* 미리 준비한 컴포넌트 참조 변수와 HTML 태그를 연결 */}
      <div>
        <label htmlFor="dname">학과명 :</label>
        <input type="text" ref={myDname} id="dname"></input>
      </div>

      <div>
        <label htmlFor="dname">학과위치 :</label>
        <input type="text" ref={myLoc} id="loc"></input>
      </div>

      <p>
        입력값 확인 : <span ref={myResult} id="result"></span>
      </p>

      <button
        onClick={(e) => {
          // 기존의 javascript 방식
          // react의 spa 작동 원리 특성상 사이트 전체에서 id 값이 고유해야 한다
          // 이 방식은 사용하기가 매우 어렵다
          // const dname = documnet.querySelector("#dname").value;
          // const loc = documnet.querySelector("#loc").value;
          // document.querySelscetor("#result").innerHTML = dname = "," + loc;

          // 컴포넌트 참조변수를 사용해서 다른 html 태그에 접근 가능
          // --> "참조변수.curreent" 해당 html을 의미하는 javascript dom객체
          // --> myDname.current 와 document.querySelscetor("#dname") 이 동일한 dom 객체이다
          console.log(myDname);
          console.log(myLoc);
          console.log(myResult);

          const dname = myDname.current.value;
          const loc = myLoc.current.value;
          myResult.current.innerHTML = dname + "," + loc;
        }}
      >
        {" "}
        클릭{" "}
      </button>

      <hr />

      <h3>컴포넌트에 ref 적용하기</h3>
      <MyBox a={100} b={200} ref={myBoxRef}></MyBox>

      <button
        type="button"
        onClick={() => {
          // <MyBox> 를 통해 myBoxRef를 주입받은 DOM에 접근하여 제어함
          myBoxRef.current.style.backgroundColor = "#f00";
        }}
      >
        Red
      </button>

      <button
        type="button"
        onClick={() => {
          // <MyBox> 를 통해 myBoxRef를 주입받은 DOM에 접근하여 제어함
          myBoxRef.current.style.backgroundColor = "#00f";
        }}
      >
        Blue
      </button>
    </MyRefContainer>
  );
});

export default MyRef;
