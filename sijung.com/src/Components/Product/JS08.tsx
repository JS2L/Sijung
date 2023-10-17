import React from "react";
import styled from "styled-components";
import "../../Fonts/Font.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function JS02P() {
  return (
    <Container>
      <Title>
        비행장의 활주로 가시거리 및 우세시정을 측정할 수 있는 인공지능 기반 첨단
        시정계.
        <br />
        180˚파노라마 카메라 2대를 사용하며 1분 마다 우세시정을 측정합니다.
      </Title>
      <Characteristic>JS-08 특징</Characteristic>
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

        <Carousel showArrows={false} showThumbs={false} infiniteLoop autoPlay>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                style={{ objectFit: "cover", height: "600px" }}
              />
            </div>
          ))}
        </Carousel>
      </ImageContainer>
    </Container>
  );
}

export default JS02P;

const Container = styled.div`
  padding: 100px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    height: auto;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    height: auto;
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
  font-size: 30px;
`;

const FeatureSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 80px;
`;

const Feature = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  border: 2px solid #dddddd;
  border-radius: 8px;
  width: 450px;
  height: 280px;
`;

const FeatureImage = styled.img`
  width: 60px;
  height: auto;
  margin: 50px;
  margin-bottom: 60px;
`;

const FeatureText = styled.p`
  font-family: "KoPubWorldDotumMedium";
  font-size: 18px;
`;

const OutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 80px;
`;

const OutContent = styled.p`
  display: flex;
  font-family: "KoPubWorldDotumMedium";
  font-size: 20px;
  justify-content: center;
  margin: 0px 20px;
  width: 450px;
  margin-bottom: 80px;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const ImageContent = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 30px;
  margin-bottom: 50px;
`;

const carouselImages = [
  { src: "/Img/Caro1.jpg", alt: "Slide 1" },
  { src: "/Img/Caro2.jpg", alt: "Slide 2" },
  { src: "/Img/Caro3.jpg", alt: "Slide 3" },
];

const features = [
  {
    image: "/Img/Characteristic1.png",
    alt: "Characteristic 1",
    text: "인공지능 영상 분석 기술로 시정 측정",
  },
  {
    image: "/Img/Characteristic3.png",
    alt: "Characteristic 3",
    text: "외부 설치용 카메라",
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
  "장기 관측을 위해 외부 설치용 하우징은 부식이 잘 되지 않는 재질로 구성 되어 있습니다.",
  "온도, 습도, 풍향, 풍속, 기압 등을 측정, 웨더스테이션 센서 장착",
];
