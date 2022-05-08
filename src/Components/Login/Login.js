import axios from "axios";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }


    const handleSignInUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)

    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handlepass = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('Email sent')
            })
    }


    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?t=st=1651934255~exp=1651934855~hmac=b88d8fb0c2685c499ad3d007b973820a3da4d985e4e64d81ed871f3110f24847&w=740" alt="" />

                </div>

                <div className="col-md-6">
                    <div className='shadow p-3 mb-5 bg-body rounded mt-5'>
                        <h1>Login </h1>
                        <Form onSubmit={handleSignInUser}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <p className='text-danger'>{error?.message}</p>
                            {
                                loading && <p>Loading...</p>
                            }
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <Button onClick={handlepass} variant="link"> Forgat password</Button>
                        <p>
                            Fruits Basket <Link to="/signup">Create a account</Link>
                        </p>
                        <hr />

                        <SocialLogin></SocialLogin>

                    </div>

                </div>

            </div>



        </div>

    );
};

export default Login;