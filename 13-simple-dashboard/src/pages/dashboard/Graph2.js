import React, { memo, useMemo } from "react";

import styled from "styled-components";
import mq from "../../components/MediaQuery";

/** 리덕스 관련 */
import { useSelector, useDispatch } from "react-redux";


/** chart.js 관련 */
import {
  // 공통항목
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  // 막대그래프
  BarElement,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// chart.js에서 import한 Chart클래스에 나머지 import 요소들을 등록한다
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);


const Graph2Container = styled.div`
  width: 50%;
  // 반응형 css
  ${mq.maxWidth("md")`
  width: 100%;
  `}

  .container {
    margin: 10px;
    height: 300px;
  }
`;

const Graph2 = memo(() => {
  /** 기본데이터 처리 */
  const { item } = useSelector((state) => state.TitanicSlice);

  /** 연령별 탑승객 현황 */
  // 일반프로그램에서 쓰는 자료구조임
  // 연령대, 인원수, 생존여부수
  const { keys, survived, dead } = useMemo(() => {
    if (!item) {
      return { keys: [], values: [], dead: [] };
    }

    console.group("Graph2");

    const ageData = item.reduce((acc, cur) => {
      const ageLevel = `${parseInt(cur.age / 10) * 10}대`;

      if (acc[ageLevel] == undefined) {
        acc[ageLevel] = { survived: 0, dead: 0 };
      }
      if (cur.survived) {
        acc[ageLevel].survived++;
      } else {
        acc[ageLevel].dead++;
      }
      return acc;
    }, {});

    console.log(ageData);

    const keys = Object.keys(ageData).sort();
    console.log(keys);

    const survived = keys.map((v, i) => ageData[v].survived);
    console.log(survived);

    const dead = keys.map((v, i) => ageData[v].dead);
    console.log(dead);

    const result = { keys, survived, dead };
    console.log(result);

    console.groupEnd();

    return result;
  }, [item]);

  return (
    <Graph2Container>
      <div className="container">
        {keys && survived && dead && (
          <Bar
            data={{
              labels: keys, //x축
              datasets: [
                {
                  label: "생존",
                  data: survived,
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  borderColor: "rgba(53,162, 235, 1)",
                  borderWidth: 1,
                },
                {
                  label: "사망",
                  data: survived,
                  backgroundColor: "rgba(258, 162, 235, 0.5)",
                  borderColor: "rgba(258,162, 235, 1)",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              // 반응형 기능 사용
              responsive: true,
              // 세로 높이를 스스로 설정 (false인 경우 부모에게 맞춤)
              maintainAspectRatio: false,
              plugins: {
                // 범주의 위치
                legend: {
                  position: "bottom",
                },
                // 제목설정
                title: {
                  display: true,
                  text: "연령별 생존 여부 집계",
                  font: {
                    size: 18,
                    color: "#000",
                  },
                },
              },
            }}
          ></Bar>
        )}
      </div>

      {/* {item && <p>{JSON.stringify(item).substring(0, 50)}</p>} */}
    </Graph2Container>
  );
});

export default Graph2;
