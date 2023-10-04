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
            <Content>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Content>
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
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Content>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/transmittance_2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <Title>JS-08</Title>
            <Content>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </Content>
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
  margin-bottom: 1rem;
  color: white;
`;

const SlideStyle = styled.img`
  max-height: 450px;
  object-fit: cover;
`;
