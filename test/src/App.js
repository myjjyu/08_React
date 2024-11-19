import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Weather from "./weather/weather";

function App() {
  return (
    <div>
      <h1>주간 날씨</h1>
      <hr />

      <nav>
        <Link to="/mon">월</Link>&nbsp;|&nbsp;
        <Link to="/tue">화</Link>&nbsp;|&nbsp;
        <Link to="/wed">수</Link>&nbsp;|&nbsp;
        <Link to="/thu">목</Link>&nbsp;|&nbsp;
        <Link to="/fri">금</Link>&nbsp;|&nbsp;
        <Link to="/sat">토</Link>&nbsp;|&nbsp;
        <Link to="/sun">일</Link>
      </nav>

      <Routes>
        <Route path="/:day" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
