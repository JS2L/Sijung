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
  height: auto;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    height: auto;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    height: auto;
  }
`;

const TitleContainer = styled.p`
  font-family: "KoPubWorldDotumMedium";
  font-size: 25px;
  margin-top: 130px;
  margin-left: 200px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 20px;
    margin: 80px 20px 80px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 15px;
    margin: 40px 10px 40px;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JSImg = styled.img`
  margin-left: 200px;
  margin-bottom: 50px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 95%;
    margin: 0px 30px 50px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    width: 95%;
    margin-left: 0px;
  }
`;
