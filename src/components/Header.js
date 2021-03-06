import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from "react-redux";


const Header = () => {
  const account = useSelector(state => state.account)
  const headerStyles = {
    margin: 'auto',
    width: '80%',
    marginTop: '11px',
    backgroundColor: '#CD4834',
  }
  return (
    <Navbar style={headerStyles} expand="lg" variant="dark">
      <Container>
        {account.signedIn &&
          <Navbar.Brand >
            <h4 style={{ color: "white", marginLeft: '8px' }} className="ui header">
              {account.username}
              <div style={{ color: 'lightgray', marginLeft: '5px' }} className="sub header">Signed In</div>
            </h4>
            {/* Welcome, {account.username} */}
            {/* <i className="user secret icon">{account.username}</i> */}
          </Navbar.Brand>
        }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
            {account.signedIn === false &&
              <Nav.Link as={Link} to="/signin">
                Sign In
              </Nav.Link>
            }
            {account.signedIn &&
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