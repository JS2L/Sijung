import React from "react";
import styled from "styled-components";

interface TitleBarProps {
  backgroundImage: string;
  title: string;
}

function TitleBar({ backgroundImage, title }: TitleBarProps) {
  return (
    <TitleBarContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
      <TitleText>{title}</TitleText>
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
`;

const TitleText = styled.h1`
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
