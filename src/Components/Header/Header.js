import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div >
            <Navbar className='me-5'  bg="" expand="lg">
  <Container fluid>
    <Nav.Link > <img className='mx-auto d-block ' width='30%' src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/logo.svg" alt="" /> </Nav.Link>
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        
    <Form className="d-flex w-75 ">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 "
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    
      <Nav
        className="ms-5 my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1"> <i class="fas fa-all fa-user"></i></Nav.Link>
        <Nav.Link href="#action2"> <span className='fw-bolder text-dark'>Hello,</span></Nav.Link>
        <Nav.Link href="#" >
        <i class="fas  fa-all fa-cart-arrow-down"> </i>
        </Nav.Link>
        <Nav.Link style={{marginLeft:'-20px'}}> <span className='fw-bolder text-dark'>0</span></Nav.Link>
        <Nav.Link className="ms-2"> <span className='fw-bolder text-dark'> <Button variant="success"className=''>LogIn</Button></span></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

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
  
        </div>
    );
};

export default Header;