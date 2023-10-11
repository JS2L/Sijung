import React from "react";
import styled from "styled-components";
import "../../Fonts/Font.css";

function PredictionSection() {
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
      <ImgRight src="/img/Prediction_1.png" alt="1st Prediction Img" />
      <ImgRightTxt>A.I Weather System</ImgRightTxt>
      <ImgLeft src="/img/Prediction_2.png" alt="2nd Prediction Img" />
      <ImgLeftTxt>
        AIR POLLUTION
        <br />
        MONITERING SYSTEM
      </ImgLeftTxt>
      <ImgRightLow src="/img/Prediction_3.png" alt="3rd Prediction Img" />
      <ImgRightTxtLow>SURVEILLANCE SOLUTION</ImgRightTxtLow>
      <ImgLeftLow src="/img/Prediction_4.png" alt="4th Prediction Img" />
      <ImgLeftTxtLow>
        Big Data Business &<br />
        System Integration
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
`;

const BlueBoxTitle = styled.p`
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 100px;
  font-family: "Pretendard-Bold";
  font-size: 35px;
  color: #5ceaff;
`;

const BlueBoxtxt = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 100px;
  font-family: "Pretendard-Black";
  font-size: 25px;
`;

const ImgRight = styled.img`
  position: absolute;
  width: 505px !important;
  height: 593px;
  z-index: 1;
  margin-left: 600px;
  margin-top: 200px;
`;

const ImgRightTxt = styled.p`
  position: absolute;
  font-family: "Pretendard-Bold";
  font-size: 35px;
  margin-top: 700px;
  margin-right: 400px;
`;

const ImgLeft = styled.img`
  position: absolute;
  width: 505px !important;
  height: 593px;
  z-index: 1;
  margin-top: 850px;
  margin-right: 600px;
`;

const ImgLeftTxt = styled.p`
  position: absolute;
  font-family: "Pretendard-Bold";
  font-size: 35px;
  margin-top: 1300px;
  margin-left: 400px;
`;

const ImgRightLow = styled.img`
  position: absolute;
  width: 505px !important;
  height: 593px;
  z-index: 1;
  margin-left: 600px;
  margin-top: 1500px;
`;

const ImgRightTxtLow = styled.p`
  position: absolute;
  font-family: "Pretendard-Bold";
  font-size: 35px;
  margin-top: 2000px;
  margin-right: 550px;
`;

const ImgLeftLow = styled.img`
  position: absolute;
  width: 505px !important;
  height: 593px;
  z-index: 1;
  margin-top: 2160px;
  margin-right: 600px;
`;

const ImgLeftTxtLow = styled.p`
  position: absolute;
  font-family: "Pretendard-Bold";
  font-size: 35px;
  margin-top: 2600px;
  margin-left: 400px;
`;