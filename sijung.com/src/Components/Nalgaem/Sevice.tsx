import React from "react";
import styled from "styled-components";

// 기상서비스 메인 내용
function Service() {
  return (
    <Container>
      <Title>기상서비스 타이틀 내용</Title>
      <Page1Container>
        <ImgLeft>
          <img src="./Img/Nalgaem1.png" alt="MozaicImage1" />
        </ImgLeft>
        <ContentRight>첫 내용</ContentRight>
      </Page1Container>
    </Container>
  );
}

export default Service;

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-family: "KoPubWorldDotumMedium";
  font-size: 25px;
  margin: 50px;
`;

const Page1Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;

const ImgLeft = styled.div`
  flex: 1;
  img {
    max-width: 100%;
  }
`;

const ContentRight = styled.p`
  font-family: "KoPubWorldDotumMedium";
  font-size: 25px;
  margin: 50px;
  flex: 1;
`;
