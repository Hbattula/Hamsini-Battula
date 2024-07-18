import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/logoish.png';
import '../App.css';

export const NavBar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="md" fixed="top" className="custom-navbar">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Your Logo"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginRight:'10px'}}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{paddingLeft:'10px'}}>
          <Nav.Link onClick={() => scrollToSection('banner')} style={{ color: 'white', fontWeight: 700, fontSize: '20px' }}>Home</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('about-me')} style={{ color: 'white', fontWeight: 700, fontSize: '20px' }}>About Me</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('skills')} style={{ color: 'white', fontWeight: 700, fontSize: '20px' }}>Skills</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('hobbies')} style={{ color: 'white', fontWeight: 700, fontSize: '20px' }}>Hobbies</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('projects')} style={{ color: 'white', fontWeight: 700, fontSize: '20px' }}>Projects</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('connect')} style={{ color: 'white', fontWeight: 700, fontSize: '20px' }}>Connect</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
