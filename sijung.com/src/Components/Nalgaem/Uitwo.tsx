import React, { useEffect } from "react";
import styled from "styled-components";

// 기상서비스 메인 내용 ! aos ! 제일 하단에 바로가기 버튼
function Uitwo() {
  return (
    <Container>
      <PageContainer>
        <ContentContainer>
          <ContentTitleRight
            style={{
              color: "#0072ff",
            }}
          >
            02.
            <br />
            제목을 뭘로할까
          </ContentTitleRight>
          <ContentRight>
            내용내용내용내용내용내용
            <br />
            내용내용내용내용내용
            <br />
            내용내용내용내용내용
          </ContentRight>
        </ContentContainer>
        <ImgLeft>
          <img
            src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Nalgaem2.png?raw=true"
            alt="NalgaemImage2"
          />
        </ImgLeft>
      </PageContainer>
    </Container>
  );
}

export default Uitwo;

const Container = styled.section`
  padding-top: 200px;
  position: relative;
  max-width: 98vw;
  max-height: 100vh;
  display: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const PageContainer = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding-top: 10px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    flex-direction: column;
    padding-top: 5px;
  }
`;

const ImgLeft = styled.div`
  flex: 1.5;
  margin-right: 50px;
  img {
    max-width: 100%;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    flex-direction: column;
    padding-top: 5px;
    margin: 10px;
  }
`;

const ContentContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const ContentTitleRight = styled.p`
  font-family: "KoPubWorldDotumBold";
  font-size: 30px;
  margin-bottom: 30px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 20px;
    margin: 20px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 25px;
    margin: 10px;
  }
`;

const ContentRight = styled.p`
  font-family: "KoPubWorldDotumMedium";
  font-size: 25px;
  margin: 30px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 15px;
    margin: 30px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 18px;
    margin: 12px;
  }
`;
