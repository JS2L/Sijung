import React from "react";
import styled from "styled-components";

function JS08() {
  return (
    <TitleContainer>
      비행장의 활주로 가시거리 및 우세시정을 측정할 수 있는 인공지능 기반 첨단
      시정계.
      <br />
      180˚파노라마 카메라 2대를 사용하며 1분 마다 우세시정을 측정합니다.
    </TitleContainer>
  );
}

export default JS08;

const TitleContainer = styled.div`
  height: 420px;
`;
