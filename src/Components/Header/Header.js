import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import Navber from './Navber';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';


const Header = () => {
  const cart = useSelector(state => state.cart.cart);
  const { user, logOut } = useAuth();
  return (
    < >

      <Navbar bg="light" variant="light">
        <marquee> <span className='text-success'>UP TO 20% DISCOUNT  BLACK FRIDAY !!! HURRY UP !!! EASY SHOPPING  AND 🎈🎈🎈🎈 HAPPY SHOPPING 🎈🎈🎈🎈 </span></marquee>
      </Navbar>

      <Navbar className='me-5' bg="" expand="lg">
        <Container fluid>
          <Nav.Link > <img className='mx-auto d-block ' width='75%' src="https://i.ibb.co/8xnxJnZ/DHAKA-2.png" alt="" /> </Nav.Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Form className="d-flex searchBox w-75  ">
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
              <Nav.Link href="#action1"> <i className="fas fa-all fa-user"></i></Nav.Link>

              <Nav.Link href="#action2"> <span className=' test fw-bolder text-dark'>Hello, <p style={{ fontSize: '10px' }}> {user?.displayName}</p> </span></Nav.Link>
              <Nav.Link as={Link} to="/cart" >
                
                <i  className= " fas  fa-all fa-cart-arrow-down">{cart.length}  </i>
              </Nav.Link>
             
              {
                user?.email ?

                  <Link to="" onClick={logOut} className="ms-2 my-2 mx-auto"> <span className='fw-bolder text-dark '> <Button variant="success" className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-3 py-2 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>LogOut</Button></span></Link>
                  :
                  <Link to="/login" className="ms-2 my-2 mx-auto"> <span className='fw-bolder  text-dark'> <Button variant="success" className='mx-auto'>LogIn</Button></span></Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navber></Navber>

    </>
  );
};

export default Header;