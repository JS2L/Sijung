import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 헤더 !
function Header() {
  const [showItems, setShowItems] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>
          <Link to="/">
            <img src="/Img/logo.png" alt="logo" />
          </Link>
        </Logo>
        <ToggleButton onClick={() => setShowItems(!showItems)}>
          <ToggleImage src="/Img/ToggleSwitch.png" alt="ToggleSwitch" />
        </ToggleButton>
      </LogoContainer>
      <Navigation showItems={showItems}>
        <NavList>
          <NavItem>
            <Link to="/introComp">회사소개</Link>
          </NavItem>
          <NavItem>
            <Link to="/Product/tab1">제품소개</Link>
          </NavItem>
          <NavItem>
            <Link to="/Technology">보유기술</Link>
          </NavItem>
          <NavItem>
            <Link to="/Nalgaem">기상서비스</Link>
          </NavItem>
          <NavItem>
            <Link to="/Mozaic">비식별화</Link>
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
  z-index: 2;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoContainer = styled.div`
  display: flex; // 로고와 버튼을 같은선상에 두기 위함 !
  justify-content: space-between; // 로고와 버튼을 양 끝에 배치 !
  align-items: center;

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
    display: block;
    margin-right: 10px;
  }
`;

const ToggleImage = styled.img`
  width: 30px;
  height: 30px;
`;

const Navigation = styled.nav<{ showItems: boolean }>`
  ul {
    list-style: none;
    display: flex;
    margin-left: 25px;
  }

  @media (max-width: 900px) {
    display: ${(props) => (props.showItems ? "block" : "none")};
  }
`;

const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 900px) {
    flex-direction: column;
    padding-top: 10px;
  }
`;

const NavItem = styled.li`
  margin-right: 70px;
  color: black;
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

  @media (max-width: 900px) {
    margin: 10px 0;
  }
`;
