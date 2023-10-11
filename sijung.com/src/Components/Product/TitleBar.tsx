import React from "react";
import styled from "styled-components";

interface TitleBarProps {
  backgroundImage: string;
  title: string;
  content: string;
}

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
`;

const TitleAndContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
`;

const TitleText = styled.h1`
  font-size: 55px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: "Pretendard-Bold";
`;

const ContentText = styled.p`
  font-size: 40px;
  margin-top: 10px;
  font-family: "Pretendard-Bold";
`;
