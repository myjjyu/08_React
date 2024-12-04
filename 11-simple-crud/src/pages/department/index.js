import React, { memo, useState, useEffect} from "react";

import styled from "styled-components";

import Table from "../../components/Table";
import Spinner from "../../components/Spinner";

import axiosHelper from "../../helpers/AxiosHelper";

const DepartmentContainer = styled.div``;

const Department = memo(() => {
  // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  // ajax 처리는 비동기이므로 데이터를 받아오는 처리의 완료 여부와 상관없이 화면 출력이 먼저 수행된다
  // 그러므로 ajax의 결과를 상태값에 저장하여 데이터를 받아온 후 화면이 자동 갱신 되도록 처리한다
  const [department, setDepartment] = useState([]); // 저장관리

  // 현재 ajax가 데이터를 로딩중인지 여부를 저장하는(의미하는) 상태값
  const [loading, setLoading] = useState(false); // 로딩관리


  // 페이지가 최초 로딩될 때(열렸을때) 실행할 hook
  // hook에 전달되는 콜백함수에 직접적으로 async 키워드를 사용할 수 없다
  useEffect(() => {
    (async () => {
      // ajax 처리를 시작했음을 알림 --> 함수형 업데이트
      setLoading(true);

      // ajax의 결과를 저장할 변수 준비
      let data = null;

      try {
        // react router에 정의되지 않고, public폴더에도 맵핑되는 경로가 없을 경우,
        // package.json에 proxy 설정을 추가하여, 프록시 서버를 사용하여 ajax요청을 보낸다
        // 즉 --> 프록시 서버를 사용하여, 프록시 서버가 ajax요청을 받아서, 해당 요청을 다시 서버로 보내고, 서버로부터 받은 응답을 다시 클라이언트로 보내준다
        data = await axiosHelper.get("/department");
        console.log(data);
      } catch (e) {
        console.error(e);
        alert(e.message);
        return;
      } finally {
        // ajax 로딩 종료를 알림
        setLoading(false);
      }

      // ajax 결과를 상태값에 저장(반영한다)
      setDepartment(data.item);
    })();
  }, []);

  return (
    <DepartmentContainer>
      <h2>Department</h2>
      <Spinner loading={loading}></Spinner>

      <Table>
        <thead>
          <tr>
            <th>학과번호</th>
            <th>학과명</th>
            <th>학과위치</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {department.map((v, i) => {
            return (
              <tr key={i.id}>
                <td>{v.id}</td>
                <td>{v.dname}</td>
                <td>{v.loc}</td>
                <td>
                  <button>수정</button>
                </td>
                <td>
                  <button>삭제</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </DepartmentContainer>
  );
});

export default Department;
