import React from "react";
import styled from "styled-components";
import "../../Fonts/Font.css";
import { Link } from "react-router-dom";

// 중요한 내용 3가지 강조 (시각화) ! hover시 img ! 클릭시 각 페이지로 이동
function Contents() {
  return (
    <Container>
      <ContentItem>
        <Link to="/Nalgaem">
          <Title>AI Visibility</Title>
        </Link>
      </ContentItem>
      <ContentItem>
        <Link to="/Mozaic">
          <Title>AI De-identification</Title>
        </Link>
      </ContentItem>
      <ContentItem>
        <Link to="/Technology">
          <Title>AI Vision</Title>
        </Link>
      </ContentItem>
    </Container>
  );
}

export default Contents;

// 초기에는 배경 없음, 배경 이미지 전환 효과, 초기 텍스트 색상 설정
// 마우스 호버 시 배경 이미지 설정, 마우스 호버 시 텍스트 색상을 흰색으로 변경
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  background: none;
  transition: background 0.5s ease;
  color: black;

  &:hover {
    background: url("https://github.com/JS2L/Sijung/raw/main/sijung.com/public/img/transmittance_1.webp?raw=true")
        center/cover no-repeat,
      url("https://github.com/JS2L/Sijung/raw/main/sijung.com/public/img/transmittance_1.avif?raw=true")
        center/cover no-repeat,
      url("https://github.com/JS2L/Sijung/raw/main/sijung.com/public/img/transmittance_1.jpg?raw=true")
        center/cover no-repeat;
    color: white;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

// 애니메이션 적용, 마우스 호버 시 요소 확대, 그림자 효과 추가
const ContentItem = styled.div`
  flex: 1;
  padding: 20px;
  border: none;
  text-align: center;
  margin: 10px;
  transition: all 0.3s ease;
  z-index: 2;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Title = styled.div`
  font-family: "PretendardVariable";
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
