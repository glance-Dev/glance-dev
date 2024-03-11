import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import './GlanceNavbar.css';
import { useAuth0 } from '@auth0/auth0-react';

function GlanceNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const isLoggedIn = !isAuthenticated ? false : true;

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const loginButtonText = isLoggedIn ? 'Logout' : 'Login';
console.log(user);
  return (
    <Navbar expand="lg" className={isOpen ? 'bg-body-tertiary open' : 'bg-body-tertiary'}>
      <Container className="continNav">
        <Navbar.Brand href="/" className="navbar-brand">
          Glance <FontAwesomeIcon icon={faCodeMerge} /> DEV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="/Courses" className="nav-link">
              Courses
            </Nav.Link>
            {/* Optionally add the About link: */}
            <Nav.Link href="/About" className="nav-link">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            {/* Conditionally render login/logout button based on isLoggedIn */}
            {isLoggedIn ? (
              <Nav.Link onClick={handleLogout} className="nav-link">
                <div className={isLoggedIn ? 'loginButton loggedIn' : 'loginButton'}>
                  {loginButtonText}
                </div>
              </Nav.Link>
            ) : (
              <Nav.Link onClick={handleLogin} className="nav-link">
                <div className="loginButton">{loginButtonText}</div>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default GlanceNavbar;

// Wrap the component in Auth0Provider if needed for authentication:
