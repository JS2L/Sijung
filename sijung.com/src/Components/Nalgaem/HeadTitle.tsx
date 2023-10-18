import React from "react";
import styled from "styled-components";

// 기상서비스 전용 헤드타이틀 ! 날갬 설명
function HeadTitle() {
  return (
    <div>
      <IntroEn>LIVE Nalgaem</IntroEn>
      <IntroKo>실시간 LIVE로 현장 그대로 영상을 확인하는 관광APP</IntroKo>
      <ShadowEn>NALGAEM</ShadowEn>
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
