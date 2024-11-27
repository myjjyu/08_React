import React, { memo, useCallback, useState } from "react";

import styled from "styled-components";

import img01 from "../../assets/img/img01.jpg";
import img02 from "../../assets/img/img02.jpg";
import img03 from "../../assets/img/img03.jpg";
import img04 from "../../assets/img/img04.jpg";
import img05 from "../../assets/img/img05.jpg";

const ImageEXContainer = styled.div`
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 640px;
    margin: auto;
    display: flex;

    li {
      width: 20%;

      a {
        display: block;
        margin: 10px;

        img {
          width: 100%;
        }
      }
    }
  }

  .viewer {
    width: 640px;
    margin: auto;
    padding: 0 10px;

    img {
      object-fit: cover;
      width: 100%;
    }
  }
`;
// 썸네일로 표시할 이미지와 제목에 대한 json 배열
const imgList = [
  { img: img01, alt: "테스트 이미지 1" },
  { img: img02, alt: "테스트 이미지 2" },
  { img: img03, alt: "테스트 이미지 3" },
  { img: img04, alt: "테스트 이미지 4" },
  { img: img05, alt: "테스트 이미지 5" },
];

const ImageEX = memo(() => {
  //현재 표시중인 이미지의 인덱스 번호를 의미하는 상태값
  const [currentIndex, setCurrentIndex] = useState(0);

  //썸네일 이미지의 링크를 클릭했을 경우 동작할 이벤트 리스너
  const onThumbnailClick = useCallback((e) => {
    // 클릭된 링크릐 주소값 --> #0, #1, #2 ...
    const href = e.currentTarget.getAttribute("href");
    console.log(href);

    // 추출한 href 로 부터 #을 제거하고 숫자만 추출
    const idx = parseInt(href.substring(1));
    console.log(idx);
    console.log(imgList[idx].img);

    /** 기존의 javascript 방식 --> 직접 결과를 화면에 반영해야한다 */
    // document.querySelector(".viewer > img").setAttribute("src", imgList[idx].img);

    /** React방식 */
    // 상태값을 수정하면 해당 상태값이 관여하는 화면은 모두 자동 갱신된다
    setCurrentIndex(idx);
  });
  return (
    <ImageEXContainer>
      <h2>ImageEX</h2>

      {/* 썸네일 리스트 표시하기  */}
      <ul className="list">
        {imgList.map((v, i) => {
          return (
            <li key={i}>
              <a href={`#${i}`} onClick={onThumbnailClick}>
                <img src={v.img} alt={v.alt}></img>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="viewer">
        <img
          src={imgList[currentIndex].img}
          arl={imgList[currentIndex].alt}
        ></img>
      </div>
    </ImageEXContainer>
  );
});

export default ImageEX;
