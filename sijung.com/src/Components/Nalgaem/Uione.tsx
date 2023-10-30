import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Fonts/Font.css";

import HeadTitle from "./HeadTitle";

// 기상서비스 메인 내용 ! aos ! 제일 하단에 바로가기 버튼
function Uione() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <HeadTitle />
      <PageContainer>
        <ImgLeft data-aos="fade-up" data-aos-duration="1000">
          <img
            src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Nalgaem1.png?raw=true"
            alt="NalgaemImage1"
          />
        </ImgLeft>
        <ContentContainer>
          <ContentTitleRight
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="190"
            style={{
              color: "#0072ff",
            }}
          >
            01.
            <br />한 눈에 보이는 UI
          </ContentTitleRight>
          <ContentRight data-aos="fade-up" data-aos-duration="1000">
            가독성이 좋은 디자인으로
            <br />
            쉽게 원하는 정보를
            <br />
            찾아 갈 수 있습니다
          </ContentRight>
        </ContentContainer>
      </PageContainer>
    </Container>
  );
}

export default Uione;

const Container = styled.section`
  position: relative;
  width: 100vw;
  min-height: 100vh;
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
