import React from "react";
import styled from "styled-components";

// 모자익 내용 ! 추가예정
function Mozaic() {
  return (
    <Container>
      <Title>비식별화 타이틀 내용</Title>
      <Page1Container>
        <ImgLeft>
          <img src="./Img/Mozaic1.png" alt="MozaicImage1" />
        </ImgLeft>
        <ContentRight>첫 내용</ContentRight>
      </Page1Container>
    </Container>
  );
}

export default Mozaic;

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
