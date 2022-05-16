import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/css/styleheader.css';
import Button from 'react-bootstrap/Button';
import {Link, Route, Routes} from 'react-router-dom'




export default function Header(){

    return(

        <Navbar collapseOnSelect expand="lg" bg="white" className="navbar" variant="dark">
  <Container>
  <Navbar.Brand >React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

      <Link className="nav-link" to="/">Home</Link>
 
      <Link className="nav-link" to="/about" >About Us</Link>
      <NavDropdown className="nav-links" title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item > <Link className="nav-link" to="/management">Management</Link>
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
      <Link className="nav-link cmr"  to="/contact">Contact</Link>
      <Button className="btn-docs">Help Center
      </Button>
        
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    )
}