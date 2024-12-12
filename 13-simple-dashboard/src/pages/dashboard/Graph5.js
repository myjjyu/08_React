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
  // 막대그래프 (BarElement)
  // 파이그래프
  ArcElement,
} from "chart.js";

import { Pie } from "react-chartjs-2";

// chart.js에서 import한 Chart클래스에 나머지 import 요소들을 등록한다
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement);

const Graph5Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .container {
    height: 500px;
    width: 33.3%;

    // 반응형(미디어쿼리)css
    ${mq.maxWidth('md')`
      width: 100%;
    `}
  }
`;

const Graph5 = memo(() => {
  /** 기본데이터 처리 */
  const { item } = useSelector((state) => state.TitanicSlice);

  /** 객실등급(1,2,3)별 탑승객, 생존, 사망집계 */
  // 전채탑승객수, 전체새존자수, 전체사망자수 
  const { passingers, survived, dead } = useMemo(() => {
    if (!item) {
      return { passingers: [0, 0, 0], survived: [0, 0, 0], dead: [0, 0, 0] };
    }

    const pclassData = item.reduce(
      (acc, cur) => {

        // 각각의 등급별 탑승객수를 증가시킨다
        const pclass = cur.pclass;
        acc.passingers[pclass - 1]++;

        // 생존자 또는 사망자에 따라서 각각의 배열에 값을 증가시킨다
        // 생존자인 경우 survived +1 그렇지않으면? dead +1
        if (cur.survived) {
          acc.survived[pclass - 1]++;
        } else {
          acc.dead[pclass - 1]++;
        }
        return acc;
      },
      { passingers: [0, 0, 0], survived: [0, 0, 0], dead: [0, 0, 0] }
    );

    console.group("Graph5)");
    console.log(pclassData);
    console.groupEnd();

    return pclassData;
  }, [item]);

  return (
    <Graph5Container>

      {/* 등급별 탑승객 비율 */}
      <div className="container">
        {passingers && (
          <Pie
            data={{
              labels: ["1등급", "2등급", "3등급"], //x축
              datasets: [
                {
                  label: "명",
                  data: passingers,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 132, 0.6)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 132, 1)",
                  ],
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
                  position: "left", // 범주의 위치
                },
                // 제목설정
                title: {
                  display: true,
                  text: "객실 등급별 탑승객 비율",
                  font: {
                    size: 18,
                    color: "#000",
                  },
                },
              },
            }}
          ></Pie>
        )}
      </div>


      {/* 등급별 생존비율 그래프 */}
      <div className="container">
        {survived && (
          <Pie
            data={{
              labels: ["1등급", "2등급", "3등급"], //x축
              datasets: [
                {
                  label: "명",
                  data: survived,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 99, 132, 0.6)",
                    "rgba(255, 206, 132, 0.6)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 99, 132, 1)",
                    "rgba(255, 206, 132, 1)",
                  ],
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
                  position: "left", // 범주의 위치
                },
                // 제목설정
                title: {
                  display: true,
                  text: "객실 등급별 생존 비율",
                  font: {
                    size: 18,
                    color: "#000",
                  },
                },
              },
            }}
          ></Pie>
        )}
      </div>

      {/* 등급별 사망비율 그래프 */}
      <div className="container">
        {dead && (
          <Pie
            data={{
              labels: ["1등급", "2등급", "3등급"], //x축
              datasets: [
                {
                  label: "명",
                  data: dead,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 99, 132, 0.6)",
                    "rgba(255, 206, 132, 0.6)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 99, 132, 1)",
                    "rgba(255, 206, 132, 1)",
                  ],
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
                  position: "left", // 범주의 위치
                },
                // 제목설정
                title: {
                  display: true,
                  text: "객실 등급별 사망 비율",
                  font: {
                    size: 18,
                    color: "#000",
                  },
                },
              },
            }}
          ></Pie>
        )}
      </div>
    </Graph5Container>
  );
});

export default Graph5;
