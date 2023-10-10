import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

function Header() {
  return (
    <HeaderStyle>
      {/* 시정로고 + bootstrap Navbar */}
      {/* 갈아 엎어야 할거 같음 */}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link to="/">
            {/* Logo를 클릭하면 Main 페이지로 이동합니다. */}
            <Logo src="/img/logo.png" />
          </Link>
          <Navbar.Brand>SIJUNG</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>회사소개</Nav.Link>
            <Nav.Link>제품소개</Nav.Link>
            <Nav.Link>보유기술</Nav.Link>
            <Nav.Link>기상서비스</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.div``;

const Logo = styled.img`
  width: 53px;
  height: 38px;
  margin-right: 10px;
  padding-top: 3px;
`;
