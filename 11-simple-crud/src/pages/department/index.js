import React, { memo, useState, useEffect, useCallback } from "react";

import styled from "styled-components";

import Spinner from "../../components/Spinner";
import Table from "../../components/Table";

import axiosHelper from "../../helpers/AxiosHelper";
import utilHelper from "../../helpers/UtilHelper";

// useNavigate => 페이지 이동을 위한 hook
// useLocation => 현재 페이지의 경로를 알기 위한 hook(현재 페이지의 url 정보를 제공하는 hook:queryString 취득 용도)
import { useNavigate, useLocation } from "react-router-dom";

const DepartmentContainer = styled.div`
  // 검색폼 css
  .form-container {
    padding: 10px 0;
    margin: 0;

    input-security,
    button {
      margin-right: 15px;
      font-size: 16px;
      padding: 5px 10px;
    }
  }
`;

const Department = memo(() => {
  // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  // ajax 처리는 비동기이므로 데이터를 받아오는 처리의 완료 여부와 상관없이 화면 출력이 먼저 수행된다
  // 그러므로 ajax의 결과를 상태값에 저장하여 데이터를 받아온 후 화면이 자동 갱신 되도록 처리한다
  const [department, setDepartment] = useState([]); // 데이터저장관리

  // 현재 ajax가 데이터를 로딩중인지 여부를 저장하는(의미하는) 상태값
  const [loading, setLoading] = useState(false); // 로딩관리

  // 페이지 강제 이동을 위한 객체 생성
  const navigate = useNavigate();

  // 검색기능 type (1)
  // 검색어를 저장하기 위한 상태변수
  //const [keyword, setKeyword] = useState(""); // 검색바에서 검색어 저장관리

  // 검색기능 type (2)
  // queryString에 포함된 keyword값을 취득하기 위한 객체 생성
  const { search } = useLocation();
  const { keyword } = utilHelper.getQuery(search);

  // 페이지가 최초 로딩될 때(열렸을때) 실행할 hook
  // hook에 전달되는 콜백함수에 직접적으로 async 키워드를 사용할 수 없다
  useEffect(() => {
    (async () => {
      // ajax 처리를 시작했음을 알림 --> 함수형 업데이트
      setLoading(true);

      // ajax의 결과를 저장할 변수 준비
      let data = null;

      // 검색어가 존재하는 경우
      const args = {};
      if (keyword) {
        args["dname_like"] = keyword;
      }

      try {
        // react router에 정의되지 않고, public폴더에도 맵핑되는 경로가 없을 경우,
        // package.json에 proxy 설정을 추가하여, 프록시 서버를 사용하여 ajax요청을 보낸다
        // 즉 --> 프록시 서버를 사용하여, 프록시 서버가 ajax요청을 받아서, 해당 요청을 다시 서버로 보내고, 서버로부터 받은 응답을 다시 클라이언트로 보내준다
        data = await axiosHelper.get("/department", args);
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
  }, [keyword]); // 검색어가 변경될 때마다 재실행

  // 검색폼에서의 전송(submit) 이벤트 처리 함수
  const onSearchSubmit = useCallback((e) => {
    e.preventDefault();

    // 이벤트가 발생한 폼 자신
    const form = e.currentTarget;

    // 폼안의 input태그에 name 속성으로 접근하여 입력값 취득
    const keyword = form.keyword.value;
    console.log(`검색어 : ${keyword}`);

    //setKeyword(keyword);

    // 검색어를QueryString으로 지정하여 페이지를 이동한다
    // 실제로는 페이지 이동이 아니라 url 변조만 이루어진다
    // 하지만 웹 브라우저는 주소가 변경되었으므로 페이지 이동으로 인식한다
    // --> 페이지 이동으로 인식되면 리액트는 화면상의 모든 컴포넌트를 다시 렌더링한다
    // --> 즉, Url 이 변조되면 화면에 표시되는 컴포넌트가 처음부터 재실행 된다는 뜻이당
    navigate(`/department?keyword=${keyword}`);
  }, []);

  return (
    <DepartmentContainer>
      <h2>Department</h2>
      <Spinner loading={loading}></Spinner>

      {/* 검색폼 */}
      {/* url이 바뀌었기 때문에 히스토리는 남는다 단, 검색바에 입력한 값은 바뀌지않는다
        그래서? 상태변수의 키워드를 벨류속성에 넣어주면되는데
        벨류속성에 넣어주면 검색바에 입력한 값을 못바꾸기 때문에
        벨류속성을 defaultValue 속성으로 바꿔주면 된다 */}
      <form className="form-container" onSubmit={onSearchSubmit}>
        <input type="text" name="keyword" defaultValue={keyword}></input>
        <button type="submit">검색</button>
      </form>

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
                {keyword ? (
                  <td
                    dangerouslySetInnerHTML={{
                      __html: v.dname.replaceAll(
                        keyword,
                        `<mark>${keyword}</mark>`
                      ),
                    }}
                  ></td>
                ) : (
                  <td>{v.dname}</td>
                )}
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
