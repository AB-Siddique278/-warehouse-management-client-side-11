import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";



const SignUp = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    const handleEmailBlur = event => {
        setEmail(event.target.value);

    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);

    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);

    }
    if (user) {
        navigate('/home');
    }

    const handleCreateUser = event => {

        event.preventDefault();
        if (password !== confirmpassword) {
            setError('your two password dosenot match');
            return;
        }
        if (password.length < 5) {
            setError('password must 6 characters')
        }
        createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;

            })
            .catch(error => {
                setError(error.message);
            })


    }



    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                <img className="img-fluid" src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1651934255~exp=1651934855~hmac=2d989e4232e4e6472509f12b8c15fa18e3d1f73ef9222734f7821b8cc0b42515&w=740" alt="" />


                </div>
                <div className="col-md-6">
                    <div className='shadow p-3 mb-5 bg-body rounded mt-5'>
                        <h1>Sign Up</h1>
                        <Form onSubmit={handleCreateUser}>
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

                            {/* this is for confarm pass */}

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label> Confirm Password</Form.Label>
                                <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder=" Confarm Password" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <p style={{ color: "red" }}>
                                {error}
                            </p>
                            <Button variant="primary" type="submit">
                                SignUp
                            </Button>
                        </Form>
                        <p>
                            Alrady have an account <Link to="/login"> Login Now</Link>
                        </p>
                        <hr />
                        <SocialLogin></SocialLogin>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default SignUp;