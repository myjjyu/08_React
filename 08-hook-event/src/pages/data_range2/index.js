import React, { memo, useReducer } from "react";

import styled from "styled-components";

import dayjs from "dayjs";

const DateRange2Container = styled.div``;

/**
 * useReduce() 기능을 사용하여 상황에 따라 state 값을 다르게 설정하는 함수
 * @param {object} state - 현재 화면에 표시되고 있는 상태값 
 * @param {string} action - 날짜 간격을 의미하는 문자열 
 * @returns - 화면을 갱신할 상태값을 담고 있는 json 객체
 */
const setDeteValue = (state, action) => {
  const day = dayjs();

  let sdate = null;

  switch (action) {
    case "DAY7":
      sdate = day.add(-7, "d").format("YYYY-MM-DD");
      break;
    case "DAY15":
      sdate = day.add(-15, "d").format("YYYY-MM-DD");
      break;
    case "MONTH1":
      sdate = day.add(-1, "M").format("YYYY-MM-DD");
      break;
    case "MONTH3":
      sdate = day.add(-3, "M").format("YYYY-MM-DD");
      break;
    case "MONTH6":
      sdate = day.add(-6, "M").format("YYYY-MM-DD");
      break;
    case "YEAR1":
      sdate = day.add(-1, "y").format("YYYY-MM-DD");
      break;
  }
  // 반드시 최초에 정의된 상태값과 동일한 데이터 구조를 갖추어야한다
  return { ...state, startDate: sdate };
};

const DateRange2 = memo(() => {
  const day = dayjs();

  /**
   * 화면에 출력할 상태값을 JSON 객체 myDate로 정의하고
   * 이 객체의 값을 갱신할 수 있는 함수를 setMyDate 로 선언
   */
  const [myDate, setMyDate] = useReducer(setDeteValue, {
    startDate: day.format("YYYY-MM-DD"),
    endtDate: day.format("YYYY-MM-DD"),
  });

  return (
    <DateRange2Container>
      <h2>DateRange2</h2>

      <h3>{myDate.startDate} ~ {myDate.endtDate}</h3>

      <div>
        <button type="button" onClick={ e => setMyDate('DAY7')}>7일</button>
        <button type="button" onClick={ e => setMyDate('DAY15')}>15일</button>
        <button type="button" onClick={ e => setMyDate('MONTH1')}>1개월</button>
        <button type="button" onClick={ e => setMyDate('MONTH3')}>3개월</button>
        <button type="button" onClick={ e => setMyDate('MONTH6')}>6개월</button>
        <button type="button" onClick={ e => setMyDate('YEAR1')}>1년</button>
      </div>
    </DateRange2Container>
  );
});

export default DateRange2;
