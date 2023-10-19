import React from "react";
import styled from "styled-components";

// 보유기술 - Retro Reflector ! 설명 추가
function Retro() {
  return (
    <Container>
      <Title>RETRO REFLECTOR</Title>
      <Content>
        역반사체는 광원으로부터 온 빛이 물체의 표면에서 반사되어 다시 광원으로
        되돌아가는 반사체이며,
        <br />
        역반사는 어떠한 각도로 재귀반사소재에 빛을 비추어도 그 광원의 방향으로
        반사되는 것이 특징입니다.
        <br />
        자동차의 헤드라이트나 후레쉬 빛을 역반사체에 비추면 빛을 비춘 방향으로
        되돌아가 광원에 있는 사람이 쉽게 볼 수 있습니다.
      </Content>
      <ContentContainer>
        <ImagesContainer>
          <img
            src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Retro.png?raw=true"
            alt="Retro"
          />
        </ImagesContainer>
        <TextContainer>
          <Title>
            SIJUNG
            <br />
            RETRO REFLECTOR
          </Title>
          <Content>
            기존의 RETRO REFLECTOR는
            <br />
            유리 표면에 금,은,알루미늄으로 증착, 수작업으로
            <br />
            제작을 하여 매우 고가의 제품 이었습니다.
            <br />
            (주)시정은 ABS 소재로 사출, 알루미늄 진공증착을 하는
            <br />
            방식의 기술을 보유하고 있습니다.
          </Content>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
}

export default Retro;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.p`
  font-size: 25px;
  font-family: "KoPubWorldDotumBold";
  margin-top: 50px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 22px;
    margin-top: 20px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 18px;
    margin-top: 0px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    flex-direction: column;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

const ImagesContainer = styled.div`
  flex: 1.7;
  padding-top: 20px;
  padding-right: 30px;

  img {
    max-width: 100%;
    height: auto;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    max-width: 700px;
    padding-right: 0px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    padding-right: 0px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  margin-bottom: 50px;
`;

const Content = styled.p`
  font-size: 20px;
  font-family: "KoPubWorldDotumMedium";
  margin-top: 30px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 17px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 14px;
  }
`;
