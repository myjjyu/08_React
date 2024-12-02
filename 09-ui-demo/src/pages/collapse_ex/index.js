import React, { memo, useCallback } from "react";

import styled from "styled-components";

import { collapseContent } from "../../dataset";

const CollapseExContainer = styled.div`
  .collapse-title {
    background-color: #777;
    color: white;
    cursor: pointer;
    padding: 22px;
    box-sizing: border-box;
    margin: 0;
    font-size: 16px;

    &:hover {
      background-color: #555;
    }

    /* 현재 열려있는 항목을 표시하기 위한 클래스 */
    &.active {
      background-color: #222;
    }
  }

  .collapse-content {
    background-color: #f1f1f1;

    p {
      padding: 20px 40px;
      margin: 0;
    }

    height: 0;
    overflow: hidden;
    transition: height 0.2s ease-out;
  }
`;

const CollapseEx = memo(() => {
  const onCollapseTitleClick = useCallback((e) => {
    // 클릭된 자기 자신
    const current = e.currentTarget;
    // 스스로에게 active 클래스에 대한 적용 여부 변경
    current.classList.toggle("active");

    // 제어할 대상을 탐색
    const content = current.parentElement.querySelector(".collapse-content");

    // 스스로가 active 클래스가 적용된 상태라면?
    if (current.classList.contains("active")) {
      content.style.height = `${content.scrollHeight}px`;
    } else {
      content.style.height = `0px`;
    }
  }, []);

  return (
    <CollapseExContainer>
      <h2>CollapseEx</h2>

      {collapseContent.map(({ title, content }, i) => {
        return (
          <div key={i}>
            <h1 className="collapse-title" onClick={onCollapseTitleClick}>
              {title}
            </h1>
            <div className="collapse-content">
              <p>{content}</p>
            </div>
          </div>
        );
      })}
    </CollapseExContainer>
  );
});

export default CollapseEx;
