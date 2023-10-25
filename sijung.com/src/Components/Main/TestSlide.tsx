import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Mousewheel, Autoplay } from "swiper/modules";
import styled from "styled-components";

const images = [
  "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Caro1.jpg?raw=true",
  "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Caro2.jpg?raw=true",
  "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Caro3.jpg?raw=true",
  "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Caro4.jpg?raw=true",
  "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Caro5.jpg?raw=true",
  "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Caro6.jpg?raw=true",
  "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Caro8.png?raw=true",
  "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Caro9.png?raw=true",
  "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Caro10.png?raw=true",
  "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Caro11.png?raw=true",
  "https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Caro12.png?raw=true",
];

const ImageSlide = () => {
  return (
    <SlideContainer>
      <Swiper
        effect={"coverflow"}
        autoplay={{ delay: 2500 }}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        breakpoints={{
          360: {
            slidesPerView: 2, // 브라우저가 768보다 클 때
          },
          768: {
            slidesPerView: 3, // 브라우저가 1024보다 클 때
          },
          1200: {
            slidesPerView: 5, // 브라우저가 1024보다 클 때
          },
        }}
        mousewheel={false}
        loop={true}
        loopedSlides={4}
        modules={[EffectCoverflow, Mousewheel, Autoplay]}
        className="mySwiper"
      >
        {images.map((imagePath, index) => (
          <SwiperSlide key={index}>
            <ImageContainer>
              <img src={imagePath} alt={`Slide ${index + 1}`} />
            </ImageContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 30px;
  padding-right: 10px;

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

  @media all and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 30px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    margin-top: 10px;
    padding-right: 0px;
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
      transform: scale(1.1);
    }
  }
`;

export default ImageSlide;
