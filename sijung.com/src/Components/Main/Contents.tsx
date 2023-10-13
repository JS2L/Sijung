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
          <Detail>시정 내용</Detail>
        </Link>
      </ContentItem>
      <ContentItem>
        <Link to="/Mozaic">
          <Title>AI De-identification</Title>
          <Detail>비식별화 내용</Detail>
        </Link>
      </ContentItem>
      <ContentItem>
        <Link to="/Technology">
          <Title>AI Vision</Title>
          <Detail>비전 내용</Detail>
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
  transition: background 0.3s ease;
  color: black;
  &:hover {
    background: url("/img/Transmittance_1.jpg") center/cover no-repeat;
    color: white;
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
  margin-bottom: 10px;
`;

const Detail = styled.p`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
