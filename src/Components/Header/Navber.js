import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navber = () => {
    return (
        <>
          
<Navbar className='container ' style={{marginBottom:'-5px', borderRadius:'20px' }} bg="light" variant="light">
    <Container>
    <Nav className="me-auto ms-5 mx-auto ps-5">
      <Nav.Link className='ms-5 fw-bolder' href="#home">Home</Nav.Link>
      <Nav.Link  className='ms-5 fw-bolder' href="#features">Features</Nav.Link>
      <Nav.Link  className='ms-5 fw-bolder' href="#about">About Us</Nav.Link>
      <Nav.Link className='ms-5 fw-bolder' href="#contact"> Contact Us </Nav.Link>
      <Nav.Link className='ms-5 fw-bolder' href="#product"> All Products</Nav.Link>
      <Nav.Link className='ms-5 fw-bolder' href="#support">Support Team</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>  
        </>
    );
};

export default Navber;