import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import './GlanceNavbar.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { useAuth0 } from '@auth0/auth0-react';

function GlanceNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0();


  const handleLogin = () => {
    setIsLoggedIn(!isAuthenticated); // Toggle login state
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="lg" className={isOpen ? 'bg-body-tertiary open' : 'bg-body-tertiary'}>
      <Container className='continNav'>
        <Navbar.Brand href="/" className="navbar-brand">Glance <FontAwesomeIcon icon={faCodeMerge} /> DEV</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#services" className="nav-link">Courses</Nav.Link>
            {/* <Nav.Link href="#about" className="nav-link">About</Nav.Link> */}
            <Nav.Link href="/About" className="nav-link">Contact</Nav.Link>
          </Nav>
          <Nav.Link onClick={()=>{handleLogin();loginWithPopup()}} className="nav-link">
            <div className={isLoggedIn ? 'loginButton loggedIn' : 'loginButton'}>
              {isLoggedIn ? 'Logout' : 'Login'}
            </div>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default GlanceNavbar;
