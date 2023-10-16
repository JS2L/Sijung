import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../Fonts/Font.css";

// 3단 이미지 슬라이드 ! 부트스트랩 활용
function SlideImg() {
  return (
    <div>
      {/* bootstrap Carousels */}
      <Carousel style={{ marginTop: "70px", marginBottom: "50px" }}>
        <Carousel.Item>
          <Link to="/Product/tab1">
            <SlideStyle
              className="d-block w-100"
              src="/img/JS-02P.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <Title>JS-02P</Title>
              <Content>인공지능 자동 기상 관측 장비</Content>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/Product/tab2">
            <SlideStyle
              className="d-block w-100"
              src="/img/JS-06.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <Title>JS-06</Title>
              <Content>인공지능 영상 분석 시정계</Content>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/Product/tab3">
            <SlideStyle
              className="d-block w-100"
              src="/img/JS-08.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <Title>JS-08</Title>
              <Content>인공지능 파노라마 영상 분석 시정계</Content>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SlideImg;

const Title = styled.div`
  font-size: 1.25rem;
  color: Black;
  font-weight: 500;
  line-height: 1.2;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 24px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 22px;
  }
`;

const Content = styled.p`
  margin-bottom: 5px;
  margin-top: 5px;
  color: black;
  font-family: "PretendardVairable";

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 20px;
    margin-bottom: -40px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 14px;
    margin-bottom: -40px;
  }
`;

const SlideStyle = styled.img`
  max-height: 450px;
  object-fit: cover;
`;
