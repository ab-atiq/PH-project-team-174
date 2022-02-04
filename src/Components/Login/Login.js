import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="my-5"> LogIn </h2>
                        <Form className=" shadow-lg p-3 mb-5 bg-white rounded   py-5">
                            <Form.Group className="mb-4 " controlId="formBasicEmail">
                                <Form.Control className="  w-75 mx-auto" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPassword">
                                <Form.Control className="mb-4 w-75 mx-auto" type="password" placeholder="Password" />
                            </Form.Group>

                            <Button className="w-50" style={{backgroundColor:'#53c28b', color:'#fff'}} variant="" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </div>
                    <div className="col-md-6">
                        <img className="w-100 mt-5" src="https://i.ibb.co/X7HbLJL/green-white-digital-marketing-class-website-1.png" alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;
