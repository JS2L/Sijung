import React from "react";
import styled from "styled-components";

// 비식별화 헤드타이틀 ! MOZAIC
function HeadTitle() {
  return (
    <div>
      <IntroEn>AI Visibility</IntroEn>
      <IntroKo>AI를 활용한 빠르고 정확한 비식별화</IntroKo>
      <ShadowEn>MOZAIC</ShadowEn>
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

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 35px;
    margin-left: 50px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 30px;
    margin-left: 30px;
  }
`;

const IntroKo = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 30px;
  margin-left: 100px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 25px;
    margin-left: 50px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 20px;
    margin-left: 30px;
  }
`;

const ShadowEn = styled.p`
  color: white;
  font-size: 230px;
  font-family: "NEXONLv2GothicBold";
  text-align: right;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
  margin-right: 100px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 150px;
    margin-right: 70px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 80px;
    margin-right: 30px;
  }
`;
