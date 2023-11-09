import React from "react";
import styled from "styled-components";

interface TitleBarProps {
  backgroundImage: string;
  title: string;
  content: string;
}

// 보유기술 TecTabs에 걸쳐져 있는 타이틀바 ! 탭이 바뀌면 내용도 바뀜
function TitleBar({ backgroundImage, title, content }: TitleBarProps) {
  return (
    <TitleBarContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
      <TitleAndContent>
        <TitleText>{title}</TitleText>
        <ContentText>{content}</ContentText>
      </TitleAndContent>
    </TitleBarContainer>
  );
}

export default TitleBar;

const TitleBarContainer = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: -100px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    height: 300px;
    margin-top: -80px;
  }

  @media all and (max-width: 767px) {
    height: 200px;
  }
`;

const TitleAndContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-right: 50px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    margin-left: 100px;
  }

  @media all and (max-width: 767px) {
    margin-left: 50px;
  }
`;

const TitleText = styled.h1`
  font-size: 55px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: "Pretendard-Bold";

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 45px;
  }

  @media all and (max-width: 767px) {
    font-size: 35px;
  }
`;

const ContentText = styled.p`
  font-size: 40px;
  margin-top: 10px;
  font-family: "Pretendard-Bold";

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 30px;
  }

  @media all and (max-width: 767px) {
    font-size: 20px;
  }
`;
