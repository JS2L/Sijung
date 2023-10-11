import React from "react";
import styled from "styled-components";

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
