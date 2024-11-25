import React, { memo } from "react";

import styled from "styled-components";

// 미디어 쿼리 기능 참조
import mq from "../components/MediaQuery";

const HeaderContainer = styled.div`
  /* background-color: #ff00ff55; */

  // 그림자
  box-shadow: 0 1px 3px #000200;

  // 상단고정
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999;

  // 다른 영역위에 떠 있으므로 아래쪽에 스크롤 되는 내용을 가리기 위해 배경색상 흰색처리
  background-color: #fff;

  .container {
    /* 컨텐츠 영역의 가로 폭 제한 및 정렬 */
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    /* 양쪽의 아이콘 버튼 공통속성 */
    .icon-button {
      font-size: 24px;
      font-weight: 900;
      padding: 16px;

      &:hover {
        background-color: #dddddd;
        color: #ffffff;
      }
    }

    /* 사이트제목 */
    .logo {
      font-size: 26px;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
  }
`;

const Header = memo(() => {
  return (
    <HeaderContainer>
      <div className="container">
        {/* 좌측 햄버거 버튼 */}
        <a href="#" className="icon-button left">
          <i className="fa-solid fa-bars"></i>
        </a>

        {/* 중앙로고 */}
        <h1 className="logo">My Food</h1>

        {/* 우측 메일 버튼 */}
        <a href="#" className="icon-button right">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </HeaderContainer>
  );
});

export default Header;
