import React from "react";
import styled from "styled-components";
import "../../Fonts/Font.css";

// 푸터 ! Footer ! F00t3r ! 푸ㅌr
function Footer() {
  return (
    <FooterContainer>
      <FooterAddress>
        대전광역시 유성구 테크노4로 17 대덕비즈센터 B동 101호
      </FooterAddress>
      <FooterTel>TEL : 042-933-5520 / E-MAIL : steve17@sijung.com.</FooterTel>
      <FooterCP> COPYRIGHT (C) 2023 SIJUNG. ALL RIGHTS RESERVED.</FooterCP>
      <WhiteLogo
        src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/SIJUNG_white.png?raw=true"
        alt="SIJUNG_White_logo"
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
`;

const FooterCP = styled.p`
  font-size: 18px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: 14px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    font-size: 10px;
  }
`;

const WhiteLogo = styled.img`
  padding-right: 200px;
  align-self: flex-end;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 30%;
    padding-right: 30px;
  }

  @media all and (min-width: 360px) and (max-width: 767px) {
    width: 30%;
    padding-right: 30px;
  }
`;
