import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../Fonts/Font.css";
import { useTranslation } from "react-i18next";

interface NavigationProps {
  $showitems: boolean;
}

function Header() {
  const { t } = useTranslation();
  const [showitems, setShowitems] = useState(false);

  /* const handleLinkClick = (path: string) => {
    if (window.location.pathname === path) {
      window.location.reload();
    }
  }; */

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <img
            loading="lazy"
            src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/logo.webp?raw=true"
            width="150"
            height="auto"
            alt="logo"
          />
        </Link>
        <ToggleButton onClick={() => setShowitems(!showitems)}>
          <ToggleImage
            loading="lazy"
            src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/ToggleSwitch.png?raw=true"
            width="30"
            height="30"
            alt="ToggleSwitch"
          />
        </ToggleButton>
      </LogoContainer>
      <Navigation $showitems={showitems}>
        <NavList>
          <NavItem>
            <Link to="/introComp/tab1">{t("회사소개")}</Link>
          </NavItem>
          <NavItem>
            <Link to="/Product/tab1">{t("제품소개")}</Link>
          </NavItem>
          <NavItem>
            <Link to="/Technology/tab1">{t("보유기술")}</Link>
          </NavItem>
          <NavItem>
            <Link to="/Nalgaem">{t("기상서비스")}</Link>
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoContainer = styled.div`
  display: flex; // 로고와 버튼을 같은선상에 두기 위함 !
  justify-content: space-between; // 로고와 버튼을 양 끝에 배치 !
  align-items: center;

  .img {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const ToggleButton = styled.button`
  border: none;
  display: none;
  background-color: white;

  @media (max-width: 950px) {
    display: block;
    margin-right: 10px;
  }
`;

const ToggleImage = styled.img`
  width: 30px;
  height: 30px;
`;

const Navigation = styled.nav<NavigationProps>`
  ul {
    list-style: none;
    display: flex;
    margin-left: 25px;
  }

  @media (max-width: 950px) {
    display: ${(props: { $showitems: boolean }) =>
      props.$showitems ? "block" : "none"};
  }
`;

const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 950px) {
    flex-direction: column;
    padding-top: 10px;
  }
`;

const NavItem = styled.li`
  margin-right: 70px;
  color: black;
  font-size: 18px;
  font-family: "Pretendard-Bold";
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    color: #00a0e4;
    cursor: pointer;
  }

  @media (max-width: 950px) {
    margin: 10px 0;
  }
`;
