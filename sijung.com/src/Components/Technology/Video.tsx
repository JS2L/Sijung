import React, { useEffect } from "react";
import styled from "styled-components";
// import videoData from "./VideoData";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Fonts/Font.css";
import { useTranslation } from "react-i18next";

// 보유기술 - 영상시정계 ! 구조 망했음 ! AOS활용
function Video() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Img1Container>
        <Title data-aos="fade-right" data-aos-duration="1000">
          {t("영상시정계")}
        </Title>
        <Content data-aos="fade-right" data-aos-duration="1500">
          <BlackNum>01</BlackNum>
          <br />
          {t("Refine data set")}
        </Content>
        <Content
          data-aos="fade-right"
          data-aos-duration="2000"
          style={{ color: "black", fontSize: "20px" }}
          dangerouslySetInnerHTML={{
            __html: t("Content1"),
          }}
        ></Content>
        <VideoImg1
          data-aos="zoom-in"
          data-aos-duration="1000"
          src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/VideoImg1.png?raw=true"
          alt="Refine data set"
        />
        <SecContent data-aos="fade-up" data-aos-duration="1000">
          <BlackNum>02</BlackNum>
          <br />
          {t("Redesign CNN training algorithm")}
        </SecContent>
        <SecContent
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{
            color: "black",
          }}
          dangerouslySetInnerHTML={{
            __html: t("Content2"),
          }}
        ></SecContent>
      </Img1Container>
      <Img2Container data-aos="fade-right" data-aos-duration="1000">
        <ImageContainer>
          <VideoImg2
            data-aos="fade-right"
            data-aos-duration="1000"
            src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/VideoImg2.png?raw=true"
            alt="Perform hyper parameter tweaking"
          />
        </ImageContainer>
        <ContentContainer>
          <FirContent>
            <BlackNum>03</BlackNum>
            <br />
            {t("Perform hyper parameter tweaking")}
          </FirContent>
          <FirContent
            style={{
              color: "black",
              fontSize: "20px",
            }}
            dangerouslySetInnerHTML={{
              __html: t("Content3"),
            }}
          ></FirContent>
        </ContentContainer>
      </Img2Container>
      <Img2Container data-aos="fade-right" data-aos-duration="1000">
        <ContentContainer>
          <FirContent>
            <BlackNum>04</BlackNum>
            <br />
            {t("Compare results, Optimize format")}
          </FirContent>
          <FirContent
            style={{
              color: "black",
              fontSize: "20px",
            }}
            dangerouslySetInnerHTML={{
              __html: t("Content4"),
            }}
          ></FirContent>
        </ContentContainer>
        <ImageContainer>
          <VideoImg2
            src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/VideoImg3.png?raw=true"
            alt="Compare results, Optimize format"
          />
        </ImageContainer>
      </Img2Container>
      <Img2Container data-aos="fade-right" data-aos-duration="1000">
        <ImageContainer>
          <VideoImg2
            src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/VideoImg4.png?raw=true"
            alt="Implement FT based version
            "
          />
        </ImageContainer>
        <ContentContainer>
          <FirContent>
            <BlackNum>05</BlackNum>
            <br />
            {t("Implement FT based version")}
          </FirContent>
          <FirContent
            style={{
              color: "black",
              fontSize: "20px",
            }}
            dangerouslySetInnerHTML={{
              __html: t("Content5"),
            }}
          ></FirContent>
        </ContentContainer>
      </Img2Container>
      <Img1Container data-aos="fade" data-aos-duration="3000">
        <ImgBox>
          <VideoImg1
            src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/VideoImg5.png?raw=true"
            alt="Implement DCP based verstion"
          />
        </ImgBox>
        <SixContent data-aos="fade-in" data-aos-duration="3000">
          <BlackNum>06</BlackNum>
          <br />
          {t("Implement DCP based verstion")}
        </SixContent>
        <SixContent
          data-aos="fade-in"
          data-aos-duration="3000"
          style={{
            color: "black",
          }}
          dangerouslySetInnerHTML={{
            __html: t("Content6"),
          }}
        ></SixContent>
      </Img1Container>
    </div>
  );
}

export default Video;

const Img1Container = styled.div`
  padding: 20px;
`;

const Title = styled.p`
  font-size: 40px;
  font-family: "KoPubWorldDotumBold";
  color: rgb(0, 114, 255);
  font-weight: bold;
  line-height: 1.017;
  margin-bottom: 100px;
  margin-top: 100px;
  margin-left: 50px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 30px;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media all and (max-width: 767px) {
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
  }
`;

const BlackNum = styled.span`
  color: black;
`;

const Content = styled.p`
  display: flex;
  font-size: 29px;
  font-family: "KoPubWorldDotumMedium";
  color: rgb(0, 114, 255);
  margin-bottom: 100px;
  margin-left: 50px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 24px;
    margin-bottom: 50px;
  }

  @media all and (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 40px;
    margin-left: 5px;
  }
`;

const VideoImg1 = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 50px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 30px;
  }

  @media all and (max-width: 767px) {
    display: none;
  }
`;

const Img2Container = styled.div`
  display: flex;
  align-items: center;
  padding: 80px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 30px;
  }

  @media all and (max-width: 767px) {
    padding: 5px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoImg2 = styled.img`
  max-width: 100%;

  @media all and (max-width: 767px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media all and (max-width: 767px) {
    flex: 99;
    margin-left: 9px;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: auto 0;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 100px;

  @media all and (max-width: 767px) {
    display: none;
  }
`;

const FirContent = styled.div`
  display: flex;
  font-size: 29px;
  font-family: "KoPubWorldDotumMedium";
  color: rgb(0, 114, 255);
  margin-left: 100px;
  margin-bottom: 50px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 24px;
    margin-bottom: 50px;
    margin-left: 30px;
  }

  @media all and (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 40px;
    margin-left: 0px;
  }
`;

const SecContent = styled.div`
  display: flex;
  font-size: 29px;
  font-family: "KoPubWorldDotumMedium";
  color: rgb(0, 114, 255);
  margin-bottom: 100px;
  margin-left: 200px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 22px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
  }

  @media all and (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 40px;
    margin-left: 5px;
  }
`;

const SixContent = styled.div`
  display: flex;
  flex-direction: flex-start;
  font-size: 29px;
  font-family: "KoPubWorldDotumMedium";
  justify-content: center;
  color: rgb(0, 114, 255);
  margin-bottom: 100px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 22px;
    margin-bottom: 50px;
  }

  @media all and (max-width: 767px) {
    font-size: 20px;
    justify-content: flex-start;
    margin-bottom: 40px;
    margin-left: 5px;
  }
`;
