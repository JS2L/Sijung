import React from "react";
import styled from "styled-components";

function JS08() {
  return (
    <div>
      <Container>
        <TitleContainer>
          비행장의 활주로 가시거리 및 우세시정을 측정할 수 있는 인공지능 기반
          첨단 시정계.
          <br />
          180˚파노라마 카메라 2대를 사용하며 1분 마다 우세시정을 측정합니다.
        </TitleContainer>
      </Container>
      <ImgContainer>
        <JSImg src="/Img/ProductJS08.png" alt="JS08" />
      </ImgContainer>
    </div>
  );
}

export default JS08;

const Container = styled.div`
  height: 350px;
`;

const TitleContainer = styled.p`
  font-family: "KoPubWorldDotumMedium";
  font-size: 25px;
  margin-top: 130px;
  margin-left: 200px;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`;

const JSImg = styled.img`
  margin-left: 200px;
`;
