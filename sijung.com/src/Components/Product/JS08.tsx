import React from "react";
import styled from "styled-components";
import "../../Fonts/Font.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageSlide from "./ImgSlide";
import { useTranslation } from "react-i18next";

function JS08() {
  const { t } = useTranslation();

  const features = [
    {
      image:
        "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Characteristic1.png?raw=true",
      alt: "Characteristic 1",
      text: t("인공지능 영상분석 기술 시정측정"),
    },
    {
      image:
        "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Characteristic3.png?raw=true",
      alt: "Characteristic 3",
      text: t("외부 설치용 카메라 보유"),
    },
    {
      image:
        "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Characteristic2.png?raw=true",
      alt: "Characteristic 2",
      text: t("웨더 스테이션 센서 장착"),
    },
  ];

  const outContents = [
    <span
      dangerouslySetInnerHTML={{
        __html: t("인공지능 영상분석 기술 시정측정"),
      }}
    ></span>,
    <span
      dangerouslySetInnerHTML={{
        __html: t("외부 설치용 카메라 보유"),
      }}
    ></span>,
    <span
      dangerouslySetInnerHTML={{
        __html: t("웨더 스테이션 센서 장착"),
      }}
    ></span>,
  ];

  return (
    <Container>
      <Title
        dangerouslySetInnerHTML={{
          __html: t("JS08Title"),
        }}
      ></Title>
      <Characteristic>{t("JS-08 특징")}</Characteristic>
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
        <ImageContent>{t("설치 사례")}</ImageContent>
        <ImageSlide />
      </ImageContainer>
    </Container>
  );
}

export default JS08;

const Container = styled.div`
  padding: 100px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    height: auto;
    padding: 50px;
  }

  @media all and (max-width: 767px) {
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

  @media all and (max-width: 767px) {
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

  @media all and (max-width: 767px) {
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

  @media all and (max-width: 767px) {
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

  @media all and (max-width: 767px) {
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

  @media all and (max-width: 767px) {
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

  @media all and (max-width: 767px) {
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

  @media all and (max-width: 767px) {
    min-width: 100px;
    font-size: 12px;
    margin: 0px;
    margin-bottom: 40px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: auto;
`;

const ImageContent = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 30px;
  text-align: center;
`;
