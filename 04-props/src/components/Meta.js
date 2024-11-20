/**
 * <head>태그 내의 seo 처리 및 기본 참조 리소스 명시
 */

/** 패키지 참조 */
// 기본참조 객체
import React from "react";

//seo 처리 기능 패키지
import { Helmet, HelmetProvider } from "react-helmet-async";

// 미리보기 이미지 샘플
import sample from "../assets/img/sample.jpeg";

const Meta = ({
  title = "React Example",
  description = "React.js 예제입니다",
  author = "길쥬",
  subject = "React.js Frontend Programming",
  copyright = "Song G.J",
  keywords = "React",
  url = window.location.href,
  image = sample,
  icon = null,
  shortcutIcon = null,
  appleTouchIcon = null,
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset="utf-8" />
        {/**seo 태그 */}
        {/* {<!-- 검색엔진용 -->} */}
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="subject" content={subject} />
        <meta name="copyright" content={copyright} />
        <meta name="content-language" content="ko" />

        {/* <!-- SNS용 --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description}/>
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image}/>
        <link rel="icon" href={icon} type="image/png" />
        <link rel="shortcut icon" href={shortcutIcon} type="image/png" />
        <link rel="apple-touch-icon" href={appleTouchIcon} type="image/png" />

        {/* 구글 웹 폰트 적용 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+KR&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" 
              rel="stylesheet" />
      </Helmet>
    </HelmetProvider>
  );
};

export default Meta;
