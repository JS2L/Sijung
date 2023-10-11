import React from "react";
import styled from "styled-components";

function JS02P() {
  return (
    <TitleContainer>
      인공지능 영상 분석 기술로 시정을 측정하는 자동 기상 관측장비 입니다.
      <br />
      이미지와 시정을 함께 제공하여 누구나 쉽고, 객간적인 기상정보를 알 수
      있습니다.
      <br />
      또한, 실제 이미지와 함께 시정 정보를 데이터화 할 수 있으며,
      <br />
      빅데이터 구축으로 학술 연구 및 사고 시 증빙자료로 활용할 수 있습니다.
    </TitleContainer>
  );
}

export default JS02P;

const TitleContainer = styled.div`
  height: 420px;
`;
