import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// 보유기술 - Retro Reflector ! 설명 추가
function Retro() {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("RETRO REFLECTOR")}</Title>
      <Content
        dangerouslySetInnerHTML={{
          __html: t("RetroContent"),
        }}
      ></Content>
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
            {t("RETRO REFLECTOR")}
          </Title>
          <Content
            dangerouslySetInnerHTML={{
              __html: t("RetroContent2"),
            }}
          ></Content>
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

  @media all and (max-width: 359px) {
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

  @media all and (max-width: 359px) {
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

  @media all and (max-width: 359px) {
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

  @media all and (max-width: 359px) {
    font-size: 14px;
  }
`;
