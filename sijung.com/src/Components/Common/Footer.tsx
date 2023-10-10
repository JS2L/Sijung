import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterAddress>
        대전광역시 유성구 테크노4로 17 대덕비즈센터 B동 101호
      </FooterAddress>
      <FooterTel>TEL : 042-933-5520 / E-MAIL : steve17@sijung.com.</FooterTel>
      <WhiteLogo
        src="/img/SIJUNG_white.png"
        alt="SIJUNG_White_logo"
      ></WhiteLogo>
      <FooterCP> COPYRIGHT (C) 2023 SIJUNG. ALL RIGHTS RESERVED.</FooterCP>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  height: 280px;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 200px;
  font-family: "Pretendard-Bold";
  width: 90%;
  border-top: 1px solid #c4c4c4;
  margin: 0 auto;
`;

const FooterAddress = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FooterTel = styled.p`
  font-size: 18px;
  color: #0072ff;
`;

const FooterCP = styled.p`
  font-size: 18px;
`;

const WhiteLogo = styled.img`
  padding-right: 200px;
  align-self: flex-end;
`;
