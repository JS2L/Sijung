import React, { useEffect } from "react";
import styled from "styled-components";
import "../../Fonts/Font.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function PredictionSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <PredictionContainer>
      <BlueBox>
        <BlueBoxTitle>PRECIDTION</BlueBoxTitle>
        <BlueBoxtxt>
          사람의 눈의 아닌 A.I. 영상 기반의 시정계로
          <br /> 관측 자료의 품질을 높이다.
        </BlueBoxtxt>
        <BlueBoxtxt>아이디어에 근거한 고유의 시정 측정 기술로 예측</BlueBoxtxt>
      </BlueBox>
      <ImgRight
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-offset="170"
        src="/img/Prediction_1.png"
        alt="1st Prediction Img"
      />
      <ImgRightTxt data-aos="fade-left" data-aos-duration="1500">
        <Link to="/introComp">A.I Visibility</Link>
      </ImgRightTxt>
      <ImgLeft
        data-aos="fade-right"
        data-aos-duration="1500"
        src="/img/Prediction_2.png"
        alt="2nd Prediction Img"
      />
      <ImgLeftTxt data-aos="fade-right" data-aos-duration="1500">
        <Link to="/mozaic">A.I De-identification</Link>
      </ImgLeftTxt>
      <ImgRightLow
        data-aos="fade-left"
        data-aos-duration="1500"
        src="/img/Prediction_3.png"
        alt="3rd Prediction Img"
      />
      <ImgRightTxtLow data-aos="fade-left" data-aos-duration="1500">
        <Link to="/technology">A.I Vision</Link>
      </ImgRightTxtLow>
      <ImgLeftLow
        data-aos="fade-right"
        data-aos-duration="1500"
        src="/img/Prediction_4.png"
        alt="4th Prediction Img"
      />
      <ImgLeftTxtLow data-aos="fade-right" data-aos-duration="1500">
        <Link to="/nalgaem">Nalgaem Service</Link>
      </ImgLeftTxtLow>
    </PredictionContainer>
  );
}

export default PredictionSection;

const PredictionContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  height: 2900px;

  @media all and (min-width: 360px) and (max-width: 767px) {
    height: 1000px;
  }
`;

const BlueBox = styled.div`
  background-color: #0072ff;
  color: white;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-height: 100%;
  margin-bottom: 20px;
  padding-bottom: 50px;
  position: absolute;
  top: 0;
  left: 0;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding-top: 0px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    padding: 10px 30px 10px;
  }
`;

const BlueBoxTitle = styled.p`
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 100px;
  font-family: "Pretendard-Bold";
  font-size: 35px;
  color: #5ceaff;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 32px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 24px;
    margin: 10px;
  }
`;

const BlueBoxtxt = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 100px;
  font-family: "Pretendard-Black";
  font-size: 25px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 20px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 14px;
    margin: 10px;
  }
`;

const ImgRight = styled.img`
  position: absolute;
  width: 505px !important;
  height: 593px;
  z-index: 1;
  margin-left: 600px;
  margin-top: 200px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 300px;
    height: auto 0;
    margin-left: 250px;
    margin-top: 250px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    display: none;
  }
`;

const ImgRightTxt = styled.p`
  position: absolute;
  font-family: "Pretendard-Bold";
  font-size: 35px;
  margin-top: 700px;
  margin-right: 400px;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 25px;
    margin-top: 750px;
    margin-right: 400px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 35px;
    margin-top: 200px;
    margin-left: 500px;
  }
`;

const ImgLeft = styled.img`
  position: absolute;
  width: 505px !important;
  height: 593px;
  z-index: 1;
  margin-top: 850px;
  margin-right: 600px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 300px;
    height: auto 0;
    margin-right: 250px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    display: none;
  }
`;

const ImgLeftTxt = styled.p`
  position: absolute;
  font-family: "Pretendard-Bold";
  font-size: 35px;
  margin-top: 1350px;
  margin-left: 400px;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 25px;
    margin-left: 500px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 35px;
    margin-top: 400px;
    margin-right: 450px;
  }
`;

const ImgRightLow = styled.img`
  position: absolute;
  width: 505px !important;
  height: 593px;
  z-index: 1;
  margin-left: 600px;
  margin-top: 1500px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 300px;
    height: auto 0;
    margin-left: 250px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    display: none;
  }
`;

const ImgRightTxtLow = styled.p`
  position: absolute;
  font-family: "Pretendard-Bold";
  font-size: 35px;
  margin-top: 2000px;
  margin-right: 550px;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 25px;
    margin-right: 380px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 35px;
    margin-top: 600px;
    margin-left: 700px;
  }
`;

const ImgLeftLow = styled.img`
  position: absolute;
  width: 505px !important;
  height: 593px;
  z-index: 1;
  margin-top: 2160px;
  margin-right: 600px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 300px;
    height: auto 0;
    margin-right: 250px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    display: none;
  }
`;

const ImgLeftTxtLow = styled.p`
  position: absolute;
  font-family: "Pretendard-Bold";
  font-size: 35px;
  margin-top: 2650px;
  margin-left: 400px;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 25px;
    margin-left: 450px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 35px;
    margin-top: 800px;
    margin-right: 500px;
  }
`;
