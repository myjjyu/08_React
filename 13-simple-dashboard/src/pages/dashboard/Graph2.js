import React, { memo } from "react";

import styled from "styled-components";

/** 리덕스 관련 */
import { useSelector, useDispatch } from "react-redux";

const Graph2Container = styled.div`
  background-color: #f055;

  flex: 1 0 50%;

  .container {
    background-color: #0f0e;
    margin: 10px;
    height: 50px;
  }
`;

const Graph2 = memo(() => {
  /** 기본데이터 처리 */
  const { item } = useSelector((state) => state.TitanicSlice);

  return (
    <Graph2Container>
      <div className="container"></div>

      {/* {item && <p>{JSON.stringify(item).substring(0, 50)}</p>} */}
    </Graph2Container>
  );
});

export default Graph2;
