import React, { memo } from "react";

import styled from "styled-components";

/** 리덕스 관련 */
import { useSelector, useDispatch } from "react-redux";

const Graph4Container = styled.div`
  background-color: #f055;
  flex: 1 0 50%;

  .container {
    background-color: #f06eff;
    margin: 10px;
    height: 50px;
  }
`;

const Graph4 = memo(() => {
  /** 기본데이터 처리 */
  const { item } = useSelector((state) => state.TitanicSlice);

  return (
    <Graph4Container>
      <div className="container"></div>

      {/* {item && <p>{JSON.stringify(item).substring(0, 50)}</p>} */}
    </Graph4Container>
  );
});

export default Graph4;
