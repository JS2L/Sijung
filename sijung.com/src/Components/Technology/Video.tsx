import React, { useEffect } from "react";
import styled from "styled-components";
// import videoData from "./VideoData";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Fonts/Font.css";

// 보유기술 - 영상시정계 ! 구조 망했음 ! AOS활용
function Video() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Img1Container>
        <Title data-aos="fade-right" data-aos-duration="1000">
          영상 시정계
        </Title>
        <Content data-aos="fade-right" data-aos-duration="1500">
          <BlackNum>01</BlackNum>
          <br />
          Refine data set
        </Content>
        <Content
          data-aos="fade-right"
          data-aos-duration="2000"
          style={{ color: "black", fontSize: "20px" }}
        >
          학습 셋(Learning)을 수정하고 변형과 라벨 오류를 제거하기 위해 검증,
          <br />
          보강된 100% 유효한 트레이닝 셋을 구성하여 검증
          <br />
          학습된 데이터 셋을 바탕으로 임의의 데이터에 대해
          <br />
          여러 다양한 환경에 대해 우수한 결과를 유도하기 위함
          <br />
          이는 fault tolerance 측정과 정확도에서 우수한 결과를 도출
        </Content>
        <VideoImg1
          data-aos="zoom-in"
          data-aos-duration="1000"
          src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/VideoImg1.png?raw=true"
          alt="Refine data set"
        />
        <SecContent data-aos="fade-up" data-aos-duration="1000">
          <BlackNum>02</BlackNum>
          <br />
          Redesign CNN training algorithm
        </SecContent>
        <SecContent
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{
            color: "black",
          }}
        >
          이미지 고도화를 통한 큐잉 및 데이터 셋 밸런싱 알고리즘 학습의 유연성과
          속도를 향상시킴
          <br />
          기존 CNN 학습 알고리즘의 입력복잡성을 단순화 시켜서 단순한 벡터 값을
          입력값으로 처리할 수 있는 알고리즘 개발
        </SecContent>
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
            Redesign CNN training algorithm
          </FirContent>
          <FirContent
            style={{
              color: "black",
              fontSize: "20px",
            }}
          >
            학습모델의 고도화 및 신뢰도 확보를 위한
            <br />
            모델 형식 최적화(적은 메모리 소비, 빠른 추론)
            <br />
            학습의 복잡도를 최소화, 빠른 학습과 추론 능력을 보유하기 위한
            <br />
            파라메타 설정 알고리즘을 개발하여 최적화
          </FirContent>
        </ContentContainer>
      </Img2Container>
      <Img2Container data-aos="fade-right" data-aos-duration="1000">
        <ContentContainer>
          <FirContent>
            <BlackNum>04</BlackNum>
            <br />
            Compare results, Optimize format
          </FirContent>
          <FirContent
            style={{
              color: "black",
              fontSize: "20px",
            }}
          >
            Native Tensorflow를 위해 서버를
            <br />
            인공지능 엔진(Tensorflow)웹서비스를 위한 최적 포맷 도출
            <br />
            Tensorflow의 다차원 입력값의 복잡도를 최소화하여
            <br />
            단일 변수만으로도 학습이 가능하도록 입력형식의 최적화 포맷을 개발
          </FirContent>
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
            Implement FT based version
          </FirContent>
          <FirContent
            style={{
              color: "black",
              fontSize: "20px",
            }}
          >
            분류기 중심의 CNN 대신 회귀 분석에 초점을 맞춘
            <br />
            주파수 기반 CNN 모델 구현 테스트를 하고자함
            <br />
            (분리된 클래스 대신 연속적인 가시성 값을 생성)
            <br />
            Regression 알고리즘을 CNN에 적용하여 Cost를
            <br />
            최적화 하는 단계에서 학습이 일어나도록 알고리즘 개발
          </FirContent>
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
          Implement DCP based verstion
        </SixContent>
        <SixContent
          data-aos="fade-in"
          data-aos-duration="3000"
          style={{
            color: "black",
          }}
        >
          주변환경의 어두움 정도 및 구성 픽셀간의 어두움 정보를 바탕으로
          데이터의 명암과 관계없이 일조량을 예측할 수 있는
          <br />
          Fourier transformation 기반 이미지 프로세싱 알고리즘을 적용하여 개발
        </SixContent>
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

  @media all and (min-width: 360px) and (max-width: 767px) {
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

  @media all and (min-width: 360px) and (max-width: 767px) {
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

  @media all and (min-width: 360px) and (max-width: 767px) {
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

  @media all and (min-width: 360px) and (max-width: 767px) {
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

  @media all and (min-width: 360px) and (max-width: 767px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media all and (min-width: 360px) and (max-width: 767px) {
    flex: 99;
    margin-left: 9px;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: auto 0;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 100px;

  @media all and (min-width: 360px) and (max-width: 767px) {
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

  @media all and (min-width: 360px) and (max-width: 767px) {
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

  @media all and (min-width: 360px) and (max-width: 767px) {
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

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 20px;
    justify-content: flex-start;
    margin-bottom: 40px;
    margin-left: 5px;
  }
`;
