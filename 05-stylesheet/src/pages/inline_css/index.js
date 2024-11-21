import React from "react";

// 3-1) /SRC 폴더 하위의 임의의 경로에 존재하는 이미지 파일을 참조
// --> 현재 소스 파일을 기준으로 하는 상대경로로 지정
// --> 실행시에는 React에 의해 다른 경로로 복사된다
import sample from "../../assets/img/sample.png";

// 직접 정의한 컴포넌트 참조
import Meta from "../../components/Meta";

/**
 * Inline css를 적용한 컴포넌트
 * EX) <div style='...'></div>
 */

const InlineCss = () => {
  /** 1-1) css로 사용될 json객체 정의 */
  // css 속성이름은 바닐라스크림트의 프로퍼티 이름으로 지정해야함
  // ex) document.getElementById("hello").style.backgroundColor = "#ff00ff";

  const myStyle = {
    backgroundColor: "#f60",
    fontSize: "20px",
    color: "#0f6",
    fontWeight: "bold",
    padding: "10px 25px",
    marginBottom: "10px",
  };

  return (
    <div>
      <Meta
        title="stylesheet.js"
        description="여기는 stylesheet.js 파일 입니다"
      ></Meta>

      <h2>InlineCss</h2>

      <h3>변수로 정의된 css 참조하기</h3>
      {/* 1-2) json 객체를 style 속성에 적용 */}
      <div style={myStyle}>Hello React Css (1)</div>

      <h3>직접 css 코딩하기</h3>
      {/* 2) css 직접 코딩 */}
      <div
        style={{
          backgroundColor: "#f60",
          fontSize: "20px",
          color: "#0f6",
          fontWeight: "bold",
          padding: "10px 25px",
          marginBottom: "10px",
        }}
      >
        Hello React Css (2)
      </div>

      <h3>이미지 참조하기</h3>
      {/* 3-2) 이미지 사용시 alt속성을 지정 안하면 경고발생함 */}
      <img src={sample} width="240" height="240" alt="샘플이미지"></img>

      {/* 3-3) public 폴더에 있는 파일들은 단순 절대 경로로 참조 가능함
      (public 폴더 하위에 임의의 폴더 생성 가능) */}
      <img src="/logo192.png" width="240" height="240" alt="react"></img>
    </div>
  );
};

export default InlineCss;
