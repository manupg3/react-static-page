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
        <NavDropdown.Item > <Link  className="nav-link" to="/management">Management</Link>
     </NavDropdown.Item>
        <NavDropdown.Item > <Link className="nav-link" to="/invest">Invest</Link>
     </NavDropdown.Item>
        <NavDropdown.Item > <Link className="nav-link" to="/advisor">Advisor</Link>
     </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item > <Link className="nav-link" to="/how-it-works">How it works?</Link>
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