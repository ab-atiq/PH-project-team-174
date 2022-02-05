import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import Navber from './Navber';
import {useSelector} from 'react-redux';


const Header = () => {
  const cart = useSelector(state => state.cart.cart);
    return (
        < >

<Navbar  bg="light" variant="light">
   <marquee> <span className='text-success'>UP TO 20% DISCOUNT  BLACK FRIDAY !!! HURRY UP !!! EASY SHOPPING  AND 🎈🎈🎈🎈 HAPPY SHOPPING 🎈🎈🎈🎈 </span></marquee>
  </Navbar>

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
        <Nav.Link as={Link} to="/cart" >
        <i class="fas  fa-all fa-cart-arrow-down"> </i>
        </Nav.Link>
        <Nav.Link style={{marginLeft:'-20px'}}> <span className='fw-bolder text-dark'>{cart.length}</span></Nav.Link>
        <Link to="/login" className="ms-2 my-2"> <span className='fw-bolder text-dark'> <Button variant="success"className=''>LogIn</Button></span></Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
        </Navbar>
        
<Navber></Navber>
        
        </>
    );
};

export default Header;