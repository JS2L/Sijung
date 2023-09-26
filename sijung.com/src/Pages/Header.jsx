import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

function Header() {
  return (
    <div>
      {/* 시정로고 + bootstrap Navbar */}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Logo src="/img/logo.png" />
          <Navbar.Brand href="#home">SIJUNG</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

const Logo = styled.img`
  width: 53px;
  height: 38px;
  margin-right: 10px;
  padding-top: 3px;
`;