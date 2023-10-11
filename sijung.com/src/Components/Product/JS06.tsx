import React from "react";
import styled from "styled-components";

function JS06() {
  return (
    <TitleContainer>
      고화질 파노라마 카메라로 촬영한 영상을 서버로 분석하여 가시거리를
      판단합니다.
      <br />
      정확한 가시거리 측정 및 미세먼지 농도를 측정 가능 하며,
      <br />
      데이터 분석과 인공지능(CNN 딥 러닝 접근 방법)을 이용하여
      <br />
      가시거리를 정확히 분석하는 인공지능 시정계 입니다.
    </TitleContainer>
  );
}

export default JS06;

const TitleContainer = styled.div`
  height: 420px;
`;
