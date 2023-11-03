import React from "react";
import styled from "styled-components";

// 기상서비스 메인 내용 ! aos ! 제일 하단에 바로가기 버튼
function Uithree() {
  return (
    <Container>
      <PageContainer>
        <ImgLeft>
          <picture>
            <source
              srcSet={
                "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Nalgaem3.avif?raw=true"
              }
              type="image/avif"
            />
            <source
              srcSet={
                "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Nalgaem3.webp?raw=true"
              }
              type="image/webp"
            />
            <img
              loading="lazy"
              src={
                "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Nalgaem3.png?raw=true"
              }
              alt={"NalgaemImage3"}
            />
          </picture>
        </ImgLeft>
        <ContentContainer>
          <ContentTitleRight
            style={{
              color: "#0072ff",
            }}
          >
            03.
            <br />
            날씨 확인도 날갬에서
          </ContentTitleRight>
          <ContentRight>
            여행뿐만 아니라
            <br />
            일상생활에 필요한 날씨
            <br />
            어플 하나로 확인
          </ContentRight>
        </ContentContainer>
      </PageContainer>
    </Container>
  );
}

export default Uithree;

const Container = styled.section`
  padding-top: 200px;
  padding-bottom: 150px;
  position: relative;
  max-width: 98vw;
  max-height: 100vh;
  display: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding-top: 150px;
    padding-bottom: 100px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    padding-top: 120px;
    padding-bottom: 70px;
  }
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
  margin-left: 50px;
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
