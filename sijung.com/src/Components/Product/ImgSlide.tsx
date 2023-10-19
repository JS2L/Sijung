import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Mousewheel, Autoplay } from "swiper/modules";
import styled from "styled-components";

export default function Slide() {
  return (
    <SlideContainer>
      <Swiper
        effect={"coverflow"}
        autoplay={{ delay: 2500 }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={5}
        coverflowEffect={{
          rotate: 0, // 회전각도
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        mousewheel={false} // 마우스 휠
        loop={true}
        loopedSlides={2}
        modules={[EffectCoverflow, Mousewheel, Autoplay]} // 모듈추가
        className="mySwiper"
      >
        <SwiperSlide>
          <ImageContainer>
            <img src="./Img/Caro1.jpg" alt="Slide 1" />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <img src="./Img/Caro2.jpg" alt="Slide 2" />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <img src="./Img/Caro3.jpg" alt="Slide 3" />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <img src="./Img/Caro4.jpg" alt="Slide 4" />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <img src="./Img/Caro5.jpg" alt="Slide 5" />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <img src="./Img/Caro5.jpg" alt="Slide 5" />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <img src="./Img/Caro5.jpg" alt="Slide 5" />
          </ImageContainer>
        </SwiperSlide>
      </Swiper>
    </SlideContainer>
  );
}

const SlideContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;

  .swiper-wrapper {
    padding: 30px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    height: auto;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1); // hover 상태에서 이미지 1.1배
    }
  }
`;
