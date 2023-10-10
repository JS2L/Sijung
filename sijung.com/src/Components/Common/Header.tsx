import React from "react";
import styled from "styled-components";
import "../../Fonts/Font.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">
          <img src="/img/logo.png" alt="logo" />
        </Link>
      </Logo>
      <Navigation>
        <NavList>
          <NavItem>
            <Link to="/introComp">회사소개</Link>
          </NavItem>
          <NavItem>
            <Link to="/Product">제품소개</Link>
          </NavItem>
          <NavItem>보유기술</NavItem>
          <NavItem>기상서비스</NavItem>
          <NavItem>비식별화</NavItem>
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
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.div`
  margin-left: 70px;
  img {
    width: 150px;
    height: auto;
  }
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }
`;

const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 70px;
  color: black;
  font-family: "Pretendard-Bold";
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  a {
    color: inherit; /* Link 내부의 텍스트 색상을 상속합니다. */
    text-decoration: none; /* 링크의 기본 텍스트 밑줄을 제거합니다. */
  }
  &:hover {
    color: #00a0e4;
    cursor: pointer;
  }
`;
