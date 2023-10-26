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
  const shadowKoRef = useRef(null);

  useEffect(() => {
    animateWithOpacity(introRef.current);
    animateWithOpacity(introKoRef.current);
    animateWithOpacity(shadowKoRef.current);
  }, []);

  return (
    <Container>
      <IntroEn ref={introRef}>A.I VIDEO ANALYSIS COMPANY</IntroEn>
      <IntroKo ref={introKoRef}>
        출자받은 기술을 통한 세계 최초의 인공지능 시정계 상용화
      </IntroKo>
      <ShadowKo ref={shadowKoRef}>
        (주)시정은 2016년 창립 이래 뛰어난 기술력과 우수한 품질을 바탕으로
        고객만족을 실현하고 있는 기업입니다
      </ShadowKo>
      <ShadowEn>SIJUNG</ShadowEn>
    </Container>
  );
};

export default HeadTitle;

const Container = styled.div`
  position: relative;
  padding: 10px;
  z-index: 1;
`;

const IntroEn = styled.p`
  text-align: center;
  font-family: "Pretendard-Bold";
  font-size: 40px;
  color: #0072ff;
  margin-top: 150px;
  opacity: 0;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 35px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 30px;
  }
`;

const IntroKo = styled.p`
  text-align: center;
  font-family: "Pretendard-Bold";
  font-size: 30px;
  opacity: 0;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 25px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 20px;
  }
`;

const ShadowKo = styled.p`
  text-align: center;
  font-family: "Pretendard-Bold";
  font-size: 25px;
  color: gray;
  opacity: 0;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 20px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 15px;
  }
`;

const ShadowEn = styled.p`
  color: #eeeeee;
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
`;
