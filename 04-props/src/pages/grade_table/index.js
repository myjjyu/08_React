import React from "react";

// 데이터 파일 참조 --> 추후 이 부분은 백엔드에서 데이터를 가져오는 형태로 변경되어야함
import GradeData from "../../data/GradeData";

// 직접 정의한 컴포넌트 참조
import Meta from '../../components/Meta';
import GradeItem from "./GradeItem";

const GradeTable = () => {
  return (
    <div>
      <Meta title="성적표(Demo)" description="성적표 구현 예제" />

      <h2>GradeTable</h2>

      <table border="1" cellPadding="7">
        <thead>
          <tr align="center">
            <th>이름</th>
            <th>학년</th>
            <th>성별</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
            <th>과학</th>
            <th>총점</th>
            <th>평균</th>
          </tr>
        </thead>
        <tbody>
          {GradeData.map((v, i) => {
            return (
              <GradeItem 
                key={i}
                name={v.이름}
                level={v.학년}
                sex={v.성별}
                kor={v.국어}
                eng={v.영어}
                maht={v.수학}
                sinc={v.과학}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GradeTable;
