/**
 * PATH 파라미터를 전달받는 페이지
 */
import React from 'react';


// PATH 파라미터 추출 기능을 갖는 useParams() 함수를 react-router-dom 패키지로 부터 참조함
import {useParams} from 'react-router-dom';

const DepartmentPath = () => {

  // 요청 데이터 확인하기
  const params = useParams();
  console.group("useParams()의 리턴값 확인");
  console.debug(params);
  console.groupEnd();


  // 필요한 변수값과 타입 확인
  console.debug('요청된 학과번호 값 =%s (%s)', params.id, typeof params.id);
  console.debug('요청된 메세지 내용 =%s (%s)', params.msg, typeof params.msg);
  console.groupEnd();

  // 한페이지에서 get 파라미터에 따라 다르게 표현할 데이터준비
  // 실정에서는 이 값에 해당하는 json을 백엔드로부터 받아와야한다 => Ajax
  // 실습예제에서는 용량 이슈로 인하여 직접 백엔드 입력임!!!!
  const departmentList = {
    item: [
      { id: 201, dname: '전자공학과', loc: '3호관'},
      { id: 202, dname: '기계공학과', loc: '4호관'}
    ]
  };

  const departmentItem = departmentList.item.find((v, i) => v.id === parseInt(params.id));

  // 조회 결과가 없는 경우 
  if (!departmentItem) {
    return (<h3>존재하지 않는 데이터에 대한 요청입니다</h3>);
  }

  return (
    <div>
      <h1>DepartmentPath</h1>
      <h2>{departmentItem.dname}</h2>
      <ul>
        <li>학과번호 : {departmentItem.id}</li>
        <li>학과위치 : {departmentItem.loc}</li>
      </ul>
    </div>
  );
};

export default DepartmentPath;
