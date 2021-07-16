import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Now Eat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/signin">
              Account Options
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default Header;