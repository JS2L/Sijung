import React from "react";
import styled from "styled-components";
import "../Assets/Fonts/Font.css";

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
      <ImgRight
        className="d-block w-100"
        src="/img/Prediction_1.png"
        alt="First slide"
      />
    </PredictionContainer>
  );
}

export default PredictionSection;

const PredictionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 1000px;
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
  position: absolute; /* 절대 위치로 설정 */
  top: 0; /* 맨 위로 위치 */
  left: 0;
  z-index: 1; /* 다른 요소 위에 렌더링 */
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
  width: 643px !important;
  height: 732px;
  z-index: 1; /* 박스 아래에 렌더링 */
`;
