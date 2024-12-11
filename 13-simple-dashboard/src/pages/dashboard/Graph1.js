/**
 * chartjs 2
 * - Chartjs2는 기본 javacript에서 그래프를 표시해 주는 기능을 하는 라이브러리
 * - reactChartjs2는 wrapper 라이브러리를 통해 리액트에서 사용가능하다
 */
import React, { memo, useMemo } from "react";

import styled from "styled-components";

/** 리덕스 관련 */
import { useSelector } from "react-redux";

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

const Graph1Container = styled.div`
  /* background-color: #06f2; */
  flex: 1 0 50%;

  .container {
    /* background-color: #06f6; */
    margin: 10px;
    height: 300px;
  }
`;

const Graph1 = memo(() => {
  /** 기본데이터 처리 */
  const { item } = useSelector((state) => state.TitanicSlice);

  /** 연령별 탑승객 현황 */
  // 일반프로그램에서 쓰는 자료구조임
  const { keys, values } = useMemo(() => {
    if (!item) {
      return { keys: null, values: null };
    }

    const ageData = item.reduce((acc, cur) => {
      const ageLevel = `${parseInt(cur.age / 10) * 10}대`;

      if (acc[ageLevel] == undefined) {
          acc[ageLevel] = 1;
      } else {
          acc[ageLevel]++;
      }

      return acc;
    }, {});

    console.log(ageData);

    const keys = Object.keys(ageData).sort();
    console.log(keys);

    const values = keys.map((v, i) => ageData[v]);
    console.log(values);

    const result = { keys, values };
    console.log(result);

    return result;
  }, [item]);

  return (
    <Graph1Container>
      <div className="container">

      {/* {item && <p>{JSON.stringify(item).substring(0, 50)}</p>} */}
      {/* {keys && JSON.stringify(keys)}
      <br />
      {values && JSON.stringify(values)} */}

      <Bar
        data={{
          labels: keys, //x축
          datasets: [
            {
              label: "명",
              data: values,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              borderColor: "rgba(255, 99, 132, 1)",
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
            title: {
              display: true,
              text: "연령별 탑승객 집계",
              font: {
                size: 18,
                color: "#000",
              },
            },
          },
        }}
      ></Bar>
      </div>
    </Graph1Container>
  );
});

export default Graph1;
