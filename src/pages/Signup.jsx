//import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { register } from '../reduxstore/authSlice';
const Signup = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { id, value } = event.target
        if (id === 'firstname') {
            setFirstname(value)
        }
        else if (id === 'lastname') {
            setLastname(value)
        }
        else if (id === 'email') {
            setEmail(value)
        }
        else if (id === 'password') {
            setPassword(value)
        }
    }
    const doRegister = (event) => {
        event.preventDefault()
        let data=dispatch(register({ firstname, lastname, email, password }));
        console.log("Signup Data :",data)
        navigate(`/login`);
    }

    return (
        <>
            <h3>SignUp</h3>
            <Card body >
                <Form className='Login-Form' onSubmit={doRegister}>
                    <Form.Group className="mb-3" controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" value={firstname} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" value={lastname} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" value={password} onChange={handleChange} />
                    </Form.Group>

                    <Button variant="primary" type='submit'>Submit</Button>
                </Form>
            </Card>

        </>
    )
}

export default Signup


