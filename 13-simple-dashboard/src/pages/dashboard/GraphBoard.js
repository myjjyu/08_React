import React, { memo } from "react";

import styled from "styled-components";

/** 개별 그래프 가져오기 */
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import Graph3 from "./Graph3";
import Graph4 from "./Graph4";

/** 리덕스 관련 */
//import { useSelector, useDispatch } from "react-redux";

const GraphBoardContainer = styled.div`
  margin: 20px -10px;
  display: flex;
  flex-wrap: wrap;
`;

const GraphBoard = memo(() => {
  /** 기본데이터 처리 */
  // const { loading, status, message, item } = useSelector(
  //   (state) => state.TitanicSlice
  // );

  return (
    <GraphBoardContainer>
      <Graph1></Graph1>
      <Graph2></Graph2>
      <Graph3></Graph3>
      <Graph4></Graph4>

      {/* {item && <p>{JSON.stringify(item)}</p>} */}
    </GraphBoardContainer>
  );
});

export default GraphBoard;
