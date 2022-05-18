import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/css/styleheader.css';
import Button from 'react-bootstrap/Button';
import {Link, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'




export default function Header(){
  const [close, setClose] = useState(false);
  const closeNav = () => setClose(true);

  const handleClose = e =>{
  
    console.log("E TARGET", );
    
  }

  return(

        <Navbar collapseOnSelect expand="lg" bg="white" className="navbar" variant="dark">
  <Container>
  <Navbar.Brand >React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <LinkContainer to="/">
     <Nav.Link className="nav-link"  >Home</Nav.Link>
     </LinkContainer>
     <LinkContainer to="/about">
      <Nav.Link className="nav-link" >About Us</Nav.Link>
      </LinkContainer>
      <NavDropdown className="nav-links" title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item >
        <LinkContainer to="/management">
           <Nav.Link  className="nav-link" >Management</Nav.Link>
           </LinkContainer>
     </NavDropdown.Item>
        <NavDropdown.Item > 
          <LinkContainer to="/invest">
        <Nav.Link className="nav-link" >Invest</Nav.Link>
        </LinkContainer>
     </NavDropdown.Item>
        <NavDropdown.Item > 
        <LinkContainer to="/advisor">
          <Nav.Link className="nav-link" to="/advisor">Advisor</Nav.Link>
          </LinkContainer>
     </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item > 
        <LinkContainer to="/how-it-works">
          <Nav.Link className="nav-link" >How it works?</Nav.Link>
          </LinkContainer>
     </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <LinkContainer to="/contact">
      <Nav.Link className="nav-link cmr">Contact</Nav.Link>
    </LinkContainer>
      <Button className="btn-docs">Help Center
      </Button>
        
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
   

    )
}