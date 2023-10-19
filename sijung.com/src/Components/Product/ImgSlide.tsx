import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Mousewheel, Autoplay } from "swiper/modules";
import styled from "styled-components";

const images = [
  "../Img/Caro1.jpg",
  "../Img/Caro2.jpg",
  "../Img/Caro3.jpg",
  "../Img/Caro4.jpg",
  "../Img/Caro5.jpg",
  "../Img/Caro6.jpg",
  "../Img/Caro7.jpg",
  "../Img/Caro8.png",
  "../Img/Caro9.png",
  "../Img/Caro10.png",
  "../Img/Caro11.png",
  "../Img/Caro12.png",
];

const ImageSlide = () => {
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
  margin-top: 30px;
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
      transform: scale(1.1);
    }
  }
`;

export default ImageSlide;
