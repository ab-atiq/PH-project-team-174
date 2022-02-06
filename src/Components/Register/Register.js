import { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/AuthProvider/useAuth';

const Register = () => {


    const [registerData, setRegisterData] = useState({});
    const { registerUser, isLoading, error } = useAuth();

    const RegisterUserData = (e) => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        setRegisterData(newLoginData);
        console.log(field, value);

    }

    const RegisterFromData = (e) => {

        registerUser(registerData.email, registerData.password, registerData.name);

        e.preventDefault();
    }



    const [show, setShow] = useState(true);




    return (
        <div>
            <div className="container mt-5">
                {isLoading && <Spinner className="mx-auto" animation="grow" />}
                <div className="row my-5">
                    <div className="col-md-6">
                        <h2 className="my-4"> Register </h2>
                        {
                            !isLoading &&
                            <Form onSubmit={RegisterFromData} className=" shadow-lg   bg-white rounded   py-5">

                                <Form.Group className="mb-4 " controlId="formBasicEmail">
                                    <Form.Control className="  w-75 mx-auto"
                                        type="text"
                                        name="name"
                                        onBlur={RegisterUserData}

                                        placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group className="mb-4 " controlId="formBasicEmail">
                                    <Form.Control className="  w-75 mx-auto"
                                        type="email"
                                        name="email"
                                        onBlur={RegisterUserData}
                                        placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3 " controlId="formBasicPassword">
                                    <Form.Control className="mb-4 w-75 mx-auto"
                                        type="password"
                                        name="password"
                                        onBlur={RegisterUserData}

                                        placeholder="Password" />
                                </Form.Group>

                                <Button className="w-75" style={{ backgroundColor: '#53c28b', color: '#fff' }} variant="" type="submit">
                                    Register
                                </Button>
                                <br />
                                <br />
                                <p>Already Register <Link className="ms-3" to="/login">Log-In Here </Link></p>

                                {error &&
                                    <Alert.Link className="text-danger" ><p>{error}</p></Alert.Link>
                                }

                            </Form>
                        }


                    </div>
                    <div className="col-md-6">
                        <img className="w-100 mt-5" src="https://i.ibb.co/X7HbLJL/green-white-digital-marketing-class-website-1.png" alt="" />
                        <Button className="w-75 mt-3" style={{ backgroundColor: '#198754', color: '#fff' }} variant="" type="submit">
                            <i className="fab text-warning fa-google"></i> Login With Google
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;