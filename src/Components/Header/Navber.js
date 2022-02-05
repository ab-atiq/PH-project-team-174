import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <>
          
<Navbar className='container ' style={{marginBottom:'-2px', borderRadius:'20px' }} bg="light" variant="light">
    <Container>
    <Nav className="me-auto ms-5 mx-auto ps-5">
      <Link style={{color:'green'}} className='ms-5 text-decoration-none py-2 fw-bolder' to="/home">Home</Link>
   
              <Link style={{ color: 'green' }} className='ms-5 text-decoration-none py-2 fw-bolder' to="/">Features</Link>
              
   
      <Link style={{color:'green'}} className='ms-5 text-decoration-none py-2 fw-bolder' to="/home">About Us</Link>
  
      <Link style={{color:'green'}} className='ms-5 text-decoration-none py-2 fw-bolder' to="/home">Contact Us</Link>
  
      <Link style={{color:'green'}} className='ms-5 text-decoration-none py-2 fw-bolder' to="/home">All Products</Link>
     
      <Link style={{color:'green'}} className='ms-5 text-decoration-none py-2 fw-bolder' to="/home">Support Team</Link>
     
      
    </Nav>
    </Container>
  </Navbar>  
        </>
    );
};

export default Navber;