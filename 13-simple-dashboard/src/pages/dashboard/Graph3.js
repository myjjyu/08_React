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

const Graph3Container = styled.div`
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

const Graph3 = memo(() => {
  /** 기본데이터 처리 */
  const { item } = useSelector((state) => state.TitanicSlice);

  // 성별 탑승객 현황(남,여 명수)
  const sex = useMemo(() => {
    if (!item) {
      return [0, 0];
    }
    const maleData = item.reduce(
      (acc, cur) => {
        acc[cur.sex == "male" ? 0 : 1]++;
        return acc;
      },
      [0, 0]
    );

    console.group("Graph3");
    console.log(maleData);
    console.groupEnd();

    return maleData;
  }, [item]);

  return (
    <Graph3Container>
      <div className="container">
        {sex && (
          <Bar
            data={{
              labels: ["male", "female"], //x축
              datasets: [
                {
                  label: "명",
                  data: sex,
                  backgroundColor: ["#29ab3688", "#e74c3c88"],
                  borderColor: ["#29ab36", "#e74c3c"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              // 반응형 기능 사용
              responsive: true,
              // 세로 높이를 스스로 설정 (false인 경우 부모에게 맞춤)
              maintainAspectRatio: false,
              indexAxis: "y", // 기본값인 x축 에서 => y축 으로 변경
              plugins: {
                // 범주의 위치
                legend: {
                  position: "bottom", // 범주의 위치
                },
                // 제목설정
                title: {
                  display: true,
                  text: "성별 탑승객 집계",
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
    </Graph3Container>
  );
});

export default Graph3;
