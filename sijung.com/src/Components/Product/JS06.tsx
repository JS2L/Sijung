import React from "react";
import styled from "styled-components";

// JS-06 내용
function JS06() {
  return (
    <div>
      <Container>
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
      </Container>
      <ImgContainer>
        <JSImg src="/Img/ProductJS06.png" alt="JS06" />
      </ImgContainer>
    </div>
  );
}

export default JS06;

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
