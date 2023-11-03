import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

// 3가지 페이지(회사소개, 제품소개, 보유기술 에서 쓰이는 공용 헤드타이틀) background 느낌
const HeadTitle = () => {
  // gsap 애니메이션 모듈화
  const animateWithOpacity = (element: HTMLElement | null) => {
    gsap.from(element, {
      opacity: 0,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(element, {
          opacity: 1,
          ease: "power2.inOut",
        });
      },
    });
  };

  const introRef = useRef(null);
  const introKoRef = useRef(null);

  useEffect(() => {
    animateWithOpacity(introRef.current);
    animateWithOpacity(introKoRef.current);
  }, []);

  return (
    <div>
      <IntroEn ref={introRef}>A.I. VIDEO ANALYSIS COMPANY</IntroEn>
      <IntroKo ref={introKoRef}>인공지능 시스템 기술 선도 기업</IntroKo>
    </div>
  );
};

export default HeadTitle;

const IntroEn = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 40px;
  color: #0072ff;
  margin-top: 100px;
  margin-left: 100px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 35px;
    margin-left: 50px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 30px;
    margin-left: 30px;
  }
`;

const IntroKo = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 30px;
  margin-left: 100px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 25px;
    margin-left: 50px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 20px;
    margin-left: 30px;
  }
`;

/* const ShadowEn = styled.p`
  color: white;
  font-size: 230px;
  font-family: "NEXONLv2GothicBold";
  text-align: right;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
  margin-right: 100px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 150px;
    margin-right: 70px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 80px;
    margin-right: 30px;
  }
`; */
