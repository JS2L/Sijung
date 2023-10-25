import React, { useState } from "react";
import styled from "styled-components";
import "../../Fonts/Font.css";

interface NavigationProps {
  $showitems: boolean;
}

function Header() {
  const [showitems, setShowitems] = useState(false);

  // 새로고침 작동되게 하는 함수
  const handleLinkClick = (path: string) => {
    if (window.location.pathname === path) {
      window.location.reload();
    }
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>
          <a href="/" onClick={() => handleLinkClick("/")}>
            <img
              src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/logo.png?raw=true"
              alt="logo"
            />
          </a>
        </Logo>
        <ToggleButton onClick={() => setShowitems(!showitems)}>
          <ToggleImage
            src="https://github.com/JS2L/Sijung/blob/main/sijung.com/public/img/ToggleSwitch.png?raw=true"
            alt="ToggleSwitch"
          />
        </ToggleButton>
      </LogoContainer>
      <Navigation $showitems={showitems}>
        <NavList>
          <NavItem>
            <a href="/introComp" onClick={() => handleLinkClick("/introComp")}>
              회사소개
            </a>
          </NavItem>
          <NavItem>
            <a
              href="/Product/tab1"
              onClick={() => handleLinkClick("/Product/tab1")}
            >
              제품소개
            </a>
          </NavItem>
          <NavItem>
            <a
              href="/Technology"
              onClick={() => handleLinkClick("/Technology")}
            >
              보유기술
            </a>
          </NavItem>
          <NavItem>
            <a href="/Nalgaem" onClick={() => handleLinkClick("/Nalgaem")}>
              기상서비스
            </a>
          </NavItem>
          {/*<NavItem>
            <a href="/Mozaic" onClick={() => handleLinkClick("/Mozaic")}>
              비식별화
            </a>
          </NavItem>*/}
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

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const Logo = styled.div`
  img {
    width: 150px;
    height: auto;
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
