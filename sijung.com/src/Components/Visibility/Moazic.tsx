import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Fonts/Font.css";

// 모자익 메인 내용 ! aos ! 제일 하단에 바로가기 버튼
function Mozaic() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <PageContainer>
        <ImgLeft data-aos="fade-up" data-aos-duration="1000">
          <img src="./Img/Mozaic1.png" alt="MozaicImage1" />
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
            <br />
            누구나 가능한 모자익 체험
          </ContentTitleRight>
          <ContentRight data-aos="fade-up" data-aos-duration="1000">
            (주)시정의 최신 AI 기술로
            <br />
            간단하게 파일을 선택해
            <br />
            모자익을 체험할 수 있습니다
          </ContentRight>
        </ContentContainer>
      </PageContainer>
      <PageContainer>
        <ContentContainer>
          <ContentTitleRight
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{
              color: "#0072ff",
            }}
          >
            02.
            <br />
            간단한 모자이크 & 블러
          </ContentTitleRight>
          <ContentRight data-aos="fade-up" data-aos-duration="1000">
            내용내용내용내용내용내용
            <br />
            내용내용내용내용내용
            <br />
            내용내용내용내용내용
          </ContentRight>
        </ContentContainer>
        <ImgLeft data-aos="fade-up" data-aos-duration="1000">
          <img src="./Img/Mozaic2.png" alt="MozaicImage2" />
        </ImgLeft>
      </PageContainer>
      <PageContainer>
        <ImgLeft data-aos="fade-up" data-aos-duration="1000">
          <img src="./Img/Mozaic3.png" alt="MozaicImage3" />
        </ImgLeft>
        <ContentContainer>
          <ContentTitleRight
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{
              color: "#0072ff",
            }}
          >
            03.
            <br />
            구체적인 비식별화
          </ContentTitleRight>
          <ContentRight data-aos="fade-up" data-aos-duration="1000">
            사람의 몸, 얼굴, 차량 번호판
            <br />
            구제척으로 나눠 어쩌구
            <br />
          </ContentRight>
        </ContentContainer>
      </PageContainer>
    </Container>
  );
}

export default Mozaic;

const Container = styled.div`
  padding: 160px 60px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 30px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    padding: 0px;
  }
`;

const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 100px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 50px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    margin-bottom: 10px;
    padding: 0px;
  }
`;

const ImgLeft = styled.div`
  flex: 1.5;
  margin: 10px;
  img {
    max-width: 100%;
  }
`;

const ContentContainer = styled.div`
  padding: 10px;
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
    font-size: 10px;
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
    font-size: 10px;
    margin: 12px;
  }
`;
