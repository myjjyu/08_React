import React from "react";
import { useParams } from "react-router-dom";

// 요일별 날씨 데이터
const weather = {
  mon: ["맑음", "맑음"],
  tue: ["비", "맑음"],
  wed: ["맑음", "흐림"],
  thu: ["맑음", "흐림"],
  fri: ["흐림", "흐림"],
  sat: ["비", "맑음"],
  sun: ["맑음", "맑음"]
};

const Weather = () => {
  const { day } = useParams(); // URL에서 day 값을 가져옴

  // 해당 요일의 날씨 정보를 가져옴
  const weatherData = weather[day] || ["정보 없음", "정보 없음"];

  return (
    <div>
      <h2>오전</h2>
      <p>{weatherData[0]}</p>
      <h2>오후</h2>
      <p>{weatherData[1]}</p>
    </div>
  );
};

export default Weather; 
