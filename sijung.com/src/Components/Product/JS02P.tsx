import React from "react";
import styled from "styled-components";
import "../../Fonts/Font.css";
import ImgSlide from "./ImgSlide";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function JS02P() {
  return (
    <Container>
      <Title>
        인공지능 영상 분석 기술로 시정을 측정하는 자동 기상 관측장비 입니다.
        <br />
        이미지와 시정을 함께 제공하고 누구나 쉽고, 객관적인 기상정보를 알 수
        있습니다.
        <br />
        또한, 실제 이미지와 함께 시정 정보를 데이터화 할 수 있으며,
        <br />
        빅데이터 구축으로 학술 연구 및 사고 시 증빙자료로 활용할 수 있습니다.
      </Title>
      <Characteristic>JS-02P 특징</Characteristic>
      <FeatureSection>
        {features.map((feature, index) => (
          <Feature key={index}>
            <FeatureImage src={feature.image} alt={feature.alt} />
            <FeatureText>{feature.text}</FeatureText>
          </Feature>
        ))}
      </FeatureSection>
      <OutSection>
        {outContents.map((content, index) => (
          <OutContent key={index}>ㆍ{content}</OutContent>
        ))}
      </OutSection>
      <ImageContainer>
        <ImageContent>설치 이미지</ImageContent>
        <ImgSlide />
      </ImageContainer>
    </Container>
  );
}

export default JS02P;

const Container = styled.div`
  padding: 100px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    height: auto;
    padding: 50px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    height: auto;
    padding: 10px;
  }
`;

const Title = styled.p`
  font-family: "KoPubWorldDotumMedium";
  font-size: 25px;
  margin-bottom: 50px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 20px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 15px;
  }
`;

const Characteristic = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 29px;
`;

const FeatureSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 80px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 30px 20px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    padding: 30px 20px;
  }
`;

const Feature = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  border: 2px solid #dddddd;
  border-radius: 8px;
  width: 450px;
  height: auto;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    min-width: 160px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    min-width: 100px;
    margin: 5px;
  }
`;

const FeatureImage = styled.img`
  width: 60px;
  height: auto;
  margin: 50px;
  margin-bottom: 60px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 60px;
    margin-bottom: 40px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    width: 50px;
    margin: 20px;
    margin-bottom: 10px;
  }
`;

const FeatureText = styled.p`
  font-family: "KoPubWorldDotumMedium";
  font-size: 18px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 16px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 12px;
  }
`;

const OutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 80px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 20px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    padding: 0px 20px;
  }
`;

const OutContent = styled.p`
  display: flex;
  font-family: "KoPubWorldDotumMedium";
  font-size: 20px;
  justify-content: center;
  margin: 0px 20px;
  width: 450px;
  margin-bottom: 80px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    min-width: 160px;
    font-size: 16px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    min-width: 100px;
    font-size: 12px;
    margin: 0px;
    margin-bottom: 40px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  height: auto;
`;

const ImageContent = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 30px;
  margin-bottom: 50px;
`;

const features = [
  {
    image: "/Img/Characteristic1.png",
    alt: "Characteristic 1",
    text: "인공지능 영상분석 기술 시정측정",
  },
  {
    image: "/Img/Characteristic3.png",
    alt: "Characteristic 3",
    text: "외부 설치용 카메라 보유",
  },
  {
    image: "/Img/Characteristic2.png",
    alt: "Characteristic 2",
    text: "웨더 스테이션 센서 장착",
  },
];

const outContents = [
  <span>
    목측을 모사한 시정거리 측정
    <br />
    전체화면 및 화면 전환 기능 제공
  </span>,
  <span>
    장기 관측을 위해 외부 설치용 하우징은 부식이
    <br />잘 되지 않는 재질로 구성 되어 있습니다.
  </span>,
  <span>
    온도, 습도, 풍향, 풍속, 기압 등을 측정,
    <br />
    웨더스테이션 센서 장착
  </span>,
];
