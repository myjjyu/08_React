import React, { memo, useRef } from "react";

import styled from "styled-components";

const StyleExContainer = styled.div`
  .box1 {
    border: 10px solid black;
    margin: 10px auto;
    padding: 30px;
    text-align: center;
    width: auto;
  }

  .box2 {
    border: 10px dotted red;
    margin: 10px auto;
    padding: 50px;
    text-align: left;
    width: 50%;
  }

  .btn {
    margin: 0 5px;
  }
`;

const StyleEx = memo(() => {
  //<box> 를 제어하기 위한 참조변수
  const mybox = useRef();
  return (
    <StyleExContainer>
      <h2>StyleEx</h2>
      <div className="box1" id="myBox" ref={mybox}>
        <h1>Hello React</h1>
      </div>

      <input
        type="button"
        value="(폰트) orange"
        className="btn"
        onClick={(e) => {
          // 기존의 자바스크립트로 해도 적용은됨 ▼
          // document.querySelector("#myBox").style.color = "#f60";
          mybox.current.style.color = "#f60";
        }}
      ></input>

      <input
        type="button"
        value="(폰트) sky"
        className="btn"
        onClick={(e) => {
          // setProperty 메서드를 사용하여 css 속성 설정하기
          mybox.current.style.setProperty("color", "#06f");
        }}
      ></input>

      <input
        type="button"
        value="(배경) yellow"
        className="btn"
        onClick={(e) => {
          // 직접 css 속성을 설정할 경우 javascript property 명으로 접근해야 한다
          mybox.current.style.backgroundColor = "#ff0";
        }}
      ></input>

      <input
        type="button"
        value="(배경) pink"
        className="btn"
        onClick={(e) => {
          // setProperty 메서드를 사용할 경우 원래의 css속성명을 사용할수 있다
          mybox.current.style.setProperty("background-color", "#f0f");
        }}
      ></input>

      <input
        type="button"
        value="box1 클래스 적용"
        className="btn"
        onClick={(e) => {
          mybox.current.classList.add("box1");
          mybox.current.classList.remove("box2");
        }}
      ></input>

      <input
        type="button"
        value="box2 클래스 적용"
        className="btn"
        onClick={(e) => {
          mybox.current.classList.add("box2");
          mybox.current.classList.remove("box1");
        }}
      ></input>
    </StyleExContainer>
  );
});

export default StyleEx;
