import React, { memo, useCallback, useRef } from "react";

import styled from "styled-components";

const CreateElementExContainer = styled.div`
  input,
  button {
    margin-right: 10px;
  }

  .list {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding: 5px 10px;
      cursor: pointer;
      border-bottom: 1px dotted #d5d5d5;

      &:first-child {
        border-top: 1px dotted #d5d5d5;
      }

      &.blue {
        background-color: #06f2;
      }

      &.orange {
        background-color: #f602;
      }

      &.pink {
        background-color: #f0f2;
      }
    }
  }
`;

const CreateElementEx = memo(() => {
  // 텍스트 입력을 위한 <input>태그에 연결할 참조 변수
  const comment = useRef();

  // 목록을 출력할 <ul>태그의 styleComponent에 연결할 참조변수
  const list = useRef();

  const getItem = useCallback((className) => {
    // js에게 <li>태그를 코딩시킴
    const li = document.createElement("li");
    // css 클래스 추가시 add()함수에게 객수제한 없이 콤마로 구분하여 여러개 지정 가능함
    // .item은 디자인 적용을 위함이 아니라 복수의 클래스를 적용할수 있다는 것을 확인하기 위함
    li.classList.add("item", className);
    // 사용자가 입력한 내용을 <li>태그에 표시함
    li.innerHTML = comment.current.value;

    //<li>에 클릭 이벤트 적용
    li.addEventListener("click", (e) => {
      // 클릭된 자기 스스로를 제거함
      e.currentTarget.remove();
    });

    return li;
  }, []);

  // appendChild 기능을 위한 버튼의 이벤트 리스너
  const onAppendChildClick = useCallback((e) => {
    const li = getItem("blue");

    //<ul>태그에 js가 코딩한 <li> 를 자식요소로 추가함 --> 기존 항목을 유지하고 맨뒤에 추가함
    list.current.appendChild(li);
  }, []);

  // insertBefore1 기능을 위한 버튼의 이벤트 리스너
  const onInsertBefore1Click = useCallback((e) => {
    // <ul> 태그에 js가 코딩한 <li>를 자식요소로 추가함 --> 기존 항목을 유지하고 맨 뒤에 추가함
    list.current.insertBefore(getItem("orange"), null);
  });

  // insertBefore2 기능을 위한 버튼의 이벤트 리스너
  const onInsertBefore2Click = useCallback((e) => {
    list.current.insertBefore(
      getItem("pink"),
      list.current.querySelector("li:first-child")
    );
  }, []);

  return (
    <CreateElementExContainer>
      <h2>CreateElementEx</h2>

      <input type="text" ref={comment}></input>
      <button type="button" onClick={onAppendChildClick}>
        appendChild
      </button>
      <button type="button" onClick={onInsertBefore1Click}>
        onInsertBefore1Click
      </button>
      <button type="button" onClick={onInsertBefore2Click}>
        onInsertBefore2Click
      </button>

      <hr></hr>

      <ul className="list" ref={list}></ul>
    </CreateElementExContainer>
  );
});

export default CreateElementEx;
