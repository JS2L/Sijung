import React from "react";
import styled from "styled-components";
import "../../Fonts/Font.css";
import { useTranslation } from "react-i18next";

// 푸터 ! Footer ! F00t3r ! 푸ㅌr
function Footer() {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterAddress>{t("footerAddress")}</FooterAddress>
      <FooterTel>{t("footerTel")}</FooterTel>
      <FooterCP>{t("footerCP")}</FooterCP>
      <WhiteLogo
        loading="lazy"
        src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/SIJUNG_white.webp?raw=true"
        alt="SIJUNG_White_logo"
        width="auto"
        height="auto"
      ></WhiteLogo>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  position: relative;
  height: 280px;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 200px;
  font-family: "Pretendard-Bold";
  width: 90%;
  border-top: 1px solid #c4c4c4;
  margin: 0 auto;
  z-index: 3;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding-left: 30px;
    font-size: 14px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    padding-left: 30px;
    height: 180px;
  }

  @media all and (max-width: 359px) {
    padding-left: 10px;
    height: 160px;
  }
`;

const FooterAddress = styled.p`
  font-size: 18px;
  margin-bottom: 10px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 14px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 10px;
  }

  @media all and (max-width: 359px) {
    font-size: 9px;
  }
`;

const FooterTel = styled.p`
  font-size: 18px;
  color: #0072ff;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 14px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 10px;
  }

  @media all and (max-width: 359px) {
    font-size: 9px;
  }
`;

const FooterCP = styled.p`
  font-size: 18px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 14px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 10px;
  }

  @media all and (max-width: 359px) {
    font-size: 9px;
  }
`;

const WhiteLogo = styled.img`
  padding-right: 200px;
  align-self: flex-end;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 25%;
    padding-right: 30px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    width: 25%;
    padding-right: 30px;
  }

  @media all and (max-width: 359px) {
    width: 25%;
    padding-right: 30px;
  }
`;
