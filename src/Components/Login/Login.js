import React from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';
import useAuth from "../../hooks/useAuth";

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const {googleLogIn, LogIn, isLoading, error } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const LoginUserData = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newField = { ...loginData };
        newField[field] = value;
        setLoginData(newField);
    }

    const LoginFromData = (e) => {
        LogIn(loginData.email, loginData.password,location,navigate)
        e.preventDefault();
    }
    const handelGoogleSignIn = () => {
        googleLogIn(location,navigate);
    }


    return (
        <div>
            <div className="container mt-5">
                {isLoading && <Spinner className="mx-auto" animation="grow" />}
                <div className="row my-5">
                    <div className="col-md-6">
                        <h2 className="my-4"> Log-In </h2>
                        {!isLoading &&
                            <Form onSubmit={LoginFromData} className=" shadow-lg   bg-white rounded   py-5">
                                <Form.Group className="mb-4 " controlId="formBasicEmail">
                                    <Form.Control className="  w-75 mx-auto"
                                        name="email"
                                        type="email"
                                        onBlur={LoginUserData}
                                        placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3 " controlId="formBasicPassword">
                                    <Form.Control className="mb-4 w-75 mx-auto"
                                        type="password"
                                        name="password"
                                        onBlur={LoginUserData}
                                        placeholder="Password" />
                                </Form.Group>

                                <Button className="w-75" style={{ backgroundColor: '#53c28b', color: '#fff' }} variant="" type="submit">
                                    LogIn
                                </Button>
                                
                                <br />
                                <br />
                                <p>If you are new please <Link className="ms-3" to="/register">Register Here </Link></p>

                                {error &&
                                    <Alert.Link className="text-danger" ><p>{error}</p></Alert.Link>
                                }
                            </Form>

                        }
                    </div>
                    <div className="col-md-6">
                        <img className="w-100 mt-5" src="https://i.ibb.co/X7HbLJL/green-white-digital-marketing-class-website-1.png" alt="" />
                        <Button onClick={handelGoogleSignIn} className="w-75 mt-3" style={{ backgroundColor: '#198754', color: '#fff' }} variant="" type="submit">
    
                            <i className="fab text-warning fa-google"></i> Login With Google
                        </Button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;
