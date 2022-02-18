import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navber = () => {
  return (
    <>
      <Navbar className='container ' style={{ marginBottom: '-2px', borderRadius: '20px' }} bg="light" variant="light">
        <Container>
          <Nav className="me-auto  mx-auto ">
            <Link style={{ color: 'green' }} className=' text-decoration-none py-2 fw-bolder' to="/home">Home</Link>
            <Link style={{ color: 'green' }} className='ms-3 text-decoration-none py-2 fw-bolder' to="/product">Product</Link>
            <Link style={{ color: 'green' }} className='ms-3 text-decoration-none py-2 fw-bolder' to="/about">About Us</Link>
            <Link style={{ color: 'green' }} className='ms-3 text-decoration-none py-2 fw-bolder' to="/contact">Contact Us</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navber;