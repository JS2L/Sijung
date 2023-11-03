import React from "react";
import styled from "styled-components";

// 보유기술 - Retro Reflector ! 설명 추가
function Retro() {
  return (
    <Container>
      <Title>RETRO REFLECTOR</Title>
      <Content>
        LED 빛을 조사하는 광원체와 조사된 빛을 수신하여 빛의 세기를 검지하는
        <br />
        검지기가 Long Path Open Cell 방식이 적용되도록 마련된 시정계가 개시된다.
        <br />
        본 LED 광원과 Long Path Open Cell 방식을 적용한 시정계는 하우징상
        <br />
        기하우징의 내부에 수용되도록 마련되어, 빛을 조사하는 광원체,
        <br /> 상기 조사된 빛의 광경로가 변경되도록, 상기조사된 빛을 반사하는
        <br />
        근거리 반사경 및 상기 반사된 빛을 수신하여 검지하는 검지기를 포함하고,
        <br />
        이때, 상기 광원체 및 상기 검지기는 상기 하우징의 내부에 수용되도록
        마련될 수 있다.
      </Content>
      <ContentContainer>
        <ImagesContainer>
          <img
            src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/Visi1.png?raw=true"
            alt="Retro"
          />
        </ImagesContainer>
        <TextContainer>
          <Title>- 대표도</Title>
          <Content>
            이에 의해, Long Path Open Cell 방 식이 적용되어, 광원체와 반사경을
            멀리 분리해서 설치하지 않고도, 정확하게 시정거리를 측정할 수 있으며,
            미 세먼지 또는 초미세먼지로 인하여 시정 악화가 발생되는 경우,
            시정거리를 산출하여, 시정 악화로 인한 경제적 손실을 예방할 수 있다.
            또한, 빛을 조사하는 광원체와 조사된 빛을 수신하는 검지기가
            일체형으로 마련되어, 광 원체와 검지기를 관리하기 위한 인적, 물적
            비용을 절감시킬 수 있다.
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
