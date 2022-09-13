import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-scroll'
export default function Menu() {
  return (
    <div>
      <div className="header-menu" id="home">
      <Navbar bg="tranparent" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto me-auto my-2 my-lg-0">
            <Nav.Link><Link to="home" className="nav-link" spy={true} smooth={true} offset={50} duration={500}>Home</Link></Nav.Link>
            <Nav.Link><Link to="program" className="nav-link" spy={true} smooth={true} offset={50} duration={500}>Program</Link></Nav.Link>  
            <Nav.Link><Link to="reason" class="nav-link" spy={true} smooth={true} offset={50} duration={500} className="nav-link" >Why us</Link></Nav.Link> 
            <Nav.Link><Link to="plan" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Plan</Link></Nav.Link> 
            <Nav.Link><Link to="testimonials" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Testimonials</Link></Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</div>

    </div>
  )
}
