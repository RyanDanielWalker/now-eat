import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from "react-redux";


const Header = () => {
  const currentUser = useSelector(state => state.account.signedIn)
  console.log(currentUser)
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >Now Eat</Navbar.Brand>
        {/* as={Link} to="/" */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {currentUser === false &&
              <Nav.Link as={Link} to="/signin">
                Sign In
              </Nav.Link>
            }
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
            {currentUser &&
              <Nav.Link as={Link} to="/signout">
                Sign Out
              </Nav.Link>
            }
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  currentUser: PropTypes.object
}



export default Header;