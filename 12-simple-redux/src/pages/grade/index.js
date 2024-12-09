import React, { memo, useEffect } from "react";

import styled from "styled-components";

import Spinner from "../../components/Spinner";

// 상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook 참조
import { useSelector, useDispatch } from "react-redux";

// Slice에 정의된 함수 참소
import { getList } from "../../slices/GradeSlice";

import Table from "../../components/Table";

const GradeContainer = styled.div`
  .error-info {
    border: 2px solid #f06;
    padding: 10px 30px;
    background-color: #fee;

    h1 {
      color: #f06;
      margin-top: 0;
      margin-bottom: 10px;
    }

    p {
      color: #f06;
      margin: 0;
      margin-bottom: 10px;
    }
  }
`;

const Grade = memo(() => {
  const { loading, status, message, item } = useSelector(
    (state) => state.GradeSlice
  );

  // dispatch 함수 생성
  const dispatch = useDispatch();

  // 컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디ㅅ패치한다.
  useEffect(() => {
    dispatch(getList());
  }, []);
  return (
    <GradeContainer>
      <h2>Grade</h2>
      <Spinner loading={loading}></Spinner>

      {status !== 200 && (
        <div className="error-info">
          <h1>{status} Error</h1>
          <p>{message}</p>
        </div>
      )}

      {item && (
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
              <th>학년</th>
              <th>성별</th>
              <th>국어</th>
              <th>영어</th>
              <th>수학</th>
              <th>과학</th>
            </tr>
          </thead>
          <tbody>
            {item.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.level}</td>
                  <td>{v.sex}</td>
                  <td>{v.kor}</td>
                  <td>{v.math}</td>
                  <td>{v.eng}</td>
                  <td>{v.sin}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </GradeContainer>
  );
});

export default Grade;
