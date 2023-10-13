import React from "react";
import styled from "styled-components";

// 3가지 페이지(회사소개, 제품소개, 보유기술 에서 쓰이는 공용 헤드타이틀) background 느낌
function HeadTitle() {
  return (
    <div>
      <IntroEn>A.I VIDEO ANALYSIS COMPANY</IntroEn>
      <IntroKo>인공지능 시스템 기술 선도 기업</IntroKo>
      <ShadowEn>SIJUNG</ShadowEn>
    </div>
  );
}

export default HeadTitle;

const IntroEn = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 40px;
  color: #0072ff;
  margin-top: 100px;
  margin-left: 100px;
`;

const IntroKo = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 30px;
  margin-left: 100px;
`;

const ShadowEn = styled.p`
  color: white;
  font-size: 230px;
  font-family: "NEXONLv2GothicBold";
  text-align: right;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
  margin-right: 100px;
`;
