import React, { memo, useCallback } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import { menuData } from "../../dataset";

import btn from "../../assets/img/btn.png";
import btnOver from "../../assets/img/btn_over.png";

const SubmenuExContainer = styled.div`
  .menu-container {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    /* 2차 메뉴에 대한 처리 */
    .menu-item {
      /* 서브 메뉴의 기준점을 부모요소로 지정하기 위한 처리 */
      position: relative;

      .sub {
        list-style: none;
        padding: 0;
        margin: 0;

        height: 0;
        overflow: hidden;
        transition: height 180ms ease-out;

        /* 주변 요소 위에 떠 있기 위함 */
        position: absolute;
        z-index: 99999;
        left: 0px;
        top: 48px;
      }
    }

    /* link는 1depth, 2depth에 모두 있으므로 */
    .link {
      background: url(${btn});
      display: flex;
      width: 179px;
      height: 48px;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #cfdfb5;
      text-decoration: none;

      &:hover {
        background: url(${btnOver});
      }
    }
  }
`;

const SubmenuEx = memo(() => {
  const onMenuItemOver = useCallback((e) => {
    // 이벤트가 발생한 자신 --> 마우스가 올라간 1depth <li>
    const current = e.currentTarget;
    // 자신의 자식요소 중에서 .sub을 찾는다
    const sub = current.querySelector(".sub");
    // scrollHeight 는 overflow:hidden 에 의해 잘려진 높이를 의미함
    sub.style.height = `${sub.scrollHeight}px`;
  }, []);

  const onMenuItemOut = useCallback((e) => {
    e.currentTarget.querySelector(".sub").style.height = "0px";
  }, []);

  return (
    <SubmenuExContainer>
      <h2>SubmenuEx</h2>
      <ul className="menu-container">
        {/* 1depth에 대한 반복처리  */}
        {menuData.map((v, i) => {
          return (
            <li
              key={v.id}
              className="menu-item"
              onMouseOver={onMenuItemOver}
              onMouseOut={onMenuItemOut}
            >
              <Link to={v.url} className="link">
                {v.label}
              </Link>

              {/* 2depth에 대한 반복처리 */}
              {v.children && (
                <ul className="sub">
                  {v.children.map((vv, ii) => {
                    return (
                      <li key={vv.id}>
                        <Link to={vv.url} className="link">
                          {vv.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <h2>안녕하세요 리액트</h2>
    </SubmenuExContainer>
  );
});

export default SubmenuEx;
