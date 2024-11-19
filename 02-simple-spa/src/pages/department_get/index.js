/**
 * HTTP GET 파라미터를 전달받는 페이지 
 */
import React from 'react';

//Get 파라미터 추출 기능을 갖는 useLocation() 함수를 react-router-dom 패키지로부터 참조함
import { useLocation } from 'react-router-dom';

import utilHelper from '../../UtilHelper';

const DepartmentGet = () => {

  // 요청 데이터 확인하기
  const location = useLocation();
  console.group("useLocation()의 리턴값 확인");
  console.debug(location);
  console.groupEnd();

  /**
  //QueryString 객체 형태로 변환
  const {search} = location;
  const query = new URLSearchParams(search);
  console.group("QueryString 확인");
  console.debug(query);
  console.groupEnd();

  // 추출된 변수값과 데이터 타입 확인
  console.group("파라미터 처리 결과 확인");
  console.debug('요청된 학과번호 값 =%s (%s)', query.get('id'), typeof query.get('id'));
  console.debug('요청된 메세지 내용 =%s (%s)', query.get('msg'), typeof query.get('msg'));
  console.groupEnd();

  // 생성된 객체를 JSON으로 변환
  console.group("파라미터 JSON 변환 확인");
  const params = Object.fromEntries(query);
  console.debug(params);
  const { id, msg}= params;
  console.debug('요청된 학과번호 값 =%s (%s)', id, typeof id);
  console.debug('요청된 메세지 내용 =%s (%s)', msg, typeof msg);
  console.groupEnd();
  /*/

  //helper 객체 활용
  const {id, msg} = utilHelper.getQuery(location.search);
  console.debug('요청된 학과번호 값 =%s (%s)', id, typeof id);
  console.debug('요청된 메세지 내용 =%s (%s)', msg, typeof msg);

  /**/
  // 한페이지에서 get 파라미터에 따라 다르게 표현할 데이터준비
  // 실정에서는 이 값에 해당하는 json을 백엔드로부터 받아와야한다 => Ajax
  // 실습예제에서는 용량 이슈로 인하여 직접 백엔드 입력임!!!!
  const departmentList = {
    item: [
      { id: 101, dname: '컴퓨터공학과', loc: '1호관'},
      { id: 102, dname: '멀티미디어학과', loc: '2호관'}
    ]
  };

  const departmentItem = departmentList.item.find((v, i) => v.id === parseInt(id));

  // 조회 결과가 없는 경우 
  if (!departmentItem) {
    return (<h3>존재하지 않는 데이터에 대한 요청입니다</h3>);
  }

  return (
    <div>
      <h1>DepartmentGet</h1>
      <h2>{departmentItem.dname}</h2>
      <ul>
        <li>학과번호 : {departmentItem.id}</li>
        <li>학과위치 : {departmentItem.loc}</li>
      </ul>
    </div>
  );
};

export default DepartmentGet;