import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

function SlideImg() {
  return (
    <div>
      {/* bootstrap Carousels */}
      {/* 사진 바꾸고 p태그 설명 넣기 추가해야함 */}
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <SlideStyle
            className="d-block w-100"
            src="/img/JS-02P.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <Title>JS-02P</Title>
            <Content>인공지능 자동 기상 관측 장비</Content>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <SlideStyle
            className="d-block w-100"
            src="/img/JS-06.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <Title>JS-06</Title>
            <Content>인공지능 영상 분석 시정계</Content>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <SlideStyle
            className="d-block w-100"
            src="/img/JS-082.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <Title>JS-08</Title>
            <Content>인공지능 파노라마 영상 분석 시정계</Content>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SlideImg;

const Title = styled.div`
  font-size: 1.25rem;
  color: white;
  font-weight: 500;
  line-height: 1.2;
`;

const Content = styled.p`
  margin-bottom: 5px;
  color: white;
  font-family: "PretendardVairable";
`;

const SlideStyle = styled.img`
  max-height: 450px;
  object-fit: cover;
`;
