import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";
import axiosHelper from "../../helpers/AxiosHelper";
import Table from "../../components/Table";
import Spinner from "../../components/Spinner";
import { SexLabel, EmbarkedLabel, SurvivedLabel } from "./Labels";

const TitanicContainer = styled.div`
  .dropdown-container {
    padding: 10px 0;
    margin: 0;

    select {
      margin-right: 15px;
      font-size: 16px;
      padding: 5px 10px;
    }
  }
`;

const Titanic = memo(() => {
  // Ajax 결과를 저장할 상태변수
  const [titanicData, setTitanicData] = useState([]);

  // 로딩 상태를 처리할 상태변수
  const [loading, setLoading] = useState(false);

  // 드롭다운의 선택을 저장하기 위한 상태변수
  const [sex, setSex] = useState("");
  const [embarked, setEmbarked] = useState("");
  const [survived, setSurvived] = useState("");

  // 상태변수 변경에 따른 백엔드 요청 수정
  // 컴포넌트 렌더링과 동시에 실행되기 위한 Hook
  useEffect(() => {
    console.log(`성별: ${sex}, 탑승지: ${embarked}, 생존여부: ${survived}`);

    // 상태변수의 값이 존재할 경우에만 json에 추가 (json서버 특성상 값이 없으면 반환되는 데이터가 없다)
    const args = {};

    if (sex) {
      args["sex"] = sex;
    }

    if (embarked) {
      args["embarked"] = embarked;
    }

    if (survived) {
      args["survived"] = survived == "true";
    }

    console.group("백엔드에 전달할 파라미터");
    console.log(args);
    console.groupEnd();

    // Ajax 처리를 위한 비동기 구조
    (async () => {
      let data = null;

      setLoading(true);

      try {
        data = await axiosHelper.get("/titanic", args);
        console.log(data);
      } catch (e) {
        alert(e.message);
        setLoading(false);
        return;
      }

      setTitanicData(data.item);
      setLoading(false);
    })();
  }, [sex, embarked, survived]);

  // 드롭다운 박스 선택값 변경 이벤트 처리
  // 성별 선택에 대한 이벤트 --> 설명을 위해 자세히 코딩함▼

  const onSexSelectChange = useCallback((e) => {
    e.preventDefault();
    // 드롭다운의 입력값 취득(js 순정코드)
    // const currentTarget = e.currentTarget;
    // const choiceIndex = currentTarget.selectedIndex;
    // const choice = current[choiceIndex].value;
    // console.log(`선택된 값 : ${choice}`);

    // 리액트는 배열 없이 직접 접근도 가능
    const choice = e.currentTarget.value;
    console.log(`선택된 값 : ${choice}`);

    // 선택된 값을 상태 변수에 저장
    setSex(e.currentTarget.value);
  }, []);

  // 탑승자와 생존여부 선택에 대한 이벤트 --> 간략한 표현법 사용
  const onEmbarkedSelectChange = useCallback(
    (e) => setEmbarked(e.currentTarget.value),
    []
  );
  const onSurvivedSelectChange = useCallback(
    (e) => setSurvived(e.currentTarget.value),
    []
  );

  return (
    <TitanicContainer>
      <h2>Titanic</h2>
      <Spinner loading={loading}></Spinner>

      {/* 검색조건 드롭다운 박스 */}
      <div className="dropdown-container">
        <select name="sex" onChange={onSexSelectChange}>
          <option value="">-- 성별 선택 --</option>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>

        <select name="embarked" onChange={onEmbarkedSelectChange}>
          <option value="">-- 탑승지 선택 --</option>
          <option value="C">셰르부르</option>
          <option value="Q">퀸즈타운</option>
          <option value="S">사우샘프턴</option>
        </select>

        <select name="survived" onChange={onSurvivedSelectChange}>
          <option value="">-- 생존여부 선택 --</option>
          <option value="true">생존</option>
          <option value="false">사망</option>
        </select>
      </div>
      <Table>
        <thead>
          <tr>
            <th>승객번호</th>
            <th>승객이름</th>
            <th>성별</th>
            <th>나이</th>
            <th>동승자 수</th>
            <th>객실등급</th>
            <th>방 호수</th>
            <th>티켓번호</th>
            <th>요금</th>
            <th>탑승지</th>
            <th>생존여부</th>
          </tr>
        </thead>
        <tbody>
          {titanicData.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                {/* 성별을 표시하기 위한 텍스트 라벨을 사용해야한다 ▼ */}
                <td>
                  <SexLabel sex={v.sex} />
                </td>
                <td>{v.age}</td>
                <td>{v.sibsp + v.parch}</td>
                <td>{v.pclass}등급</td>
                <td>{v.cabin}</td>
                <td>{v.ticket}</td>
                <td>{v.fare}</td>
                {/* 탑승지를 표시하기 위한 텍스트 라벨을 사용해야한다 ▼ */}
                <td>
                  <EmbarkedLabel embarked={v.embarked} />
                </td>
                {/* 생존여부를 표시하기 위한 텍스트 라벨을 사용해야한다 (true & false) 라서 문자열 표시안되기 때문에.. ▼ */}
                <td>
                  <SurvivedLabel survived={v.survived} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TitanicContainer>
  );
});

export default Titanic;
