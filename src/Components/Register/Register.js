import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="my-4"> Register </h2>
                    <Form className=" shadow-lg   bg-white rounded   py-5">
                        
                       <Form.Group className="mb-4 " controlId="formBasicEmail">
                            <Form.Control className="  w-75 mx-auto" type="email" placeholder="Your Name" />
                        </Form.Group>
                        
                        <Form.Group className="mb-4 " controlId="formBasicEmail">
                            <Form.Control className="  w-75 mx-auto" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicPassword">
                            <Form.Control className="mb-4 w-75 mx-auto" type="password" placeholder="Password" />
                        </Form.Group>

                        <Button className="w-75" style={{ backgroundColor: '#53c28b', color: '#fff' }} variant="" type="submit">
                            Register
                        </Button>
                        <br />
                        <br />
                       <p>Already Register <Link className="ms-3" to="/login">Log-In Here </Link></p> 
                    </Form>

                </div>
                <div className="col-md-6">
                        <img className="w-100 mt-5" src="https://i.ibb.co/X7HbLJL/green-white-digital-marketing-class-website-1.png" alt="" />
                        <Button className="w-75 mt-3" style={{ backgroundColor: '#198754', color: '#fff' }} variant="" type="submit">
                        <i  className="fab text-warning fa-google"></i> Login With Google
                        </Button>
                </div>
            </div>
        </div>


    </div>
    );
};

export default Register;