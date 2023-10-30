import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Mousewheel, Autoplay } from "swiper/modules";
import styled from "styled-components";

const images = [
  "Caro1",
  "Caro2",
  "Caro3",
  "Caro4",
  "Caro5",
  "Caro6",
  "Caro8",
  "Caro9",
  "Caro10",
  "Caro11",
  "Caro12",
];

const basePath =
  "https://github.com/JS2L/Sijung/raw/main/sijung.com/public/img/";

const ImageSlide = () => {
  return (
    <SlideContainer>
      <Swiper
        effect={"coverflow"}
        autoplay={{ delay: 2500 }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        spaceBetween={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        mousewheel={false}
        loop={true}
        loopedSlides={4}
        modules={[EffectCoverflow, Mousewheel, Autoplay]}
        className="mySwiper"
      >
        {images.map((imageName, index) => (
          <SwiperSlide key={index}>
            <ImageContainer>
              <picture>
                <source
                  srcSet={`${basePath}${imageName}.avif?raw=true`}
                  type="image/avif"
                />
                <source
                  srcSet={`${basePath}${imageName}.web?praw=true`}
                  type="image/webp"
                />
                <img
                  src={`${basePath}${imageName}.jpg?raw=true`}
                  alt={`Slide ${index + 1}`}
                />
              </picture>
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
    height: auto;
    display: flex;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 30px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    margin-top: 9px;
    padding-right: 0px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85%;
  overflow: hidden;
  img {
    object-fit: cover;
    max-width: 100%;
    height: 100%;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default ImageSlide;
