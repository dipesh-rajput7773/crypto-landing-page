import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#"><img src="../img/Group 216 1.png"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Prices</Nav.Link>
            <Nav.Link href="#action2">Learn</Nav.Link>
            <Nav.Link href="#action2">Products</Nav.Link>
            <Nav.Link href="#action2">Help Center</Nav.Link>
            <Nav.Link href="#action2">Community</Nav.Link>

            
          </Nav>
          <Nav className="d-flex">
          <Nav.Link href="#action2"> Launch App <img src="../img/Vector 9.png"></img></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary">Get Started</Button>
      </Container>
    </Navbar>
   
  )
}

export default Header