/* eslint-disable react/no-unescaped-entities */
//import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { register } from '../reduxstore/authSlice';
import Row from 'react-bootstrap/Row';




const Signup = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phno, setPhno] = useState("")

    const navigate = useNavigate()

    // const dispatch = useDispatch();

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
        else if (id === 'phno') {
            setPhno(value)
        }
    }
    const doRegister = async(event) => {
        event.preventDefault()
        // let data = dispatch(register({ firstname, lastname, email, password, phno }));
        // console.log("Signup Data :", data)
        if (!firstname || !lastname ||!email || !password || !phno) {
            alert("Please fill out all fields.");
            return;
        }
         try {
          const response=await fetch("http://localhost:7001/user/register",{
            method:'POST',
          headers: {
              'content-type':'application/json'
            },
            body:JSON.stringify({ firstname, lastname, email, password, phno })
    
          })
          const result= await response.json()
          if(result.ok){
            alert(result.message)
            navigate(`/login`);

          }
          else{
            alert(result.message)
          }
          
         } catch (error) {
          console.log(error)
         }
          
    }

    return (
        <>
            <div className="signup-card">
                <Card className="text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', marginTop: '40px' }}>
                    <Card.Body className="p-3 " >
                        <h3 className="pb-3"><strong>Signup</strong></h3>
                        <Form className='Login-Form' onSubmit={doRegister}>
                            <Form.Group className="mb-3" controlId="firstname">
                                <Form.Label style={{ fontWeight: 'bold' }}>First Name</Form.Label>
                                <Form.Control type="text" className="custom-input" value={firstname} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Label style={{ fontWeight: 'bold' }}>Last Name</Form.Label>
                                <Form.Control type="text" className="custom-input" value={lastname} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                                <Form.Control type="email" className="custom-input" value={email} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                                <Form.Control type="password" className="custom-input" value={password} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="phno">
                                <Form.Label style={{ fontWeight: 'bold' }}>Phone No</Form.Label>
                                <Form.Control type="number" className="custom-input" value={phno} onChange={handleChange} />
                            </Form.Group>

                            <Row className="d-flex justify-content-center p-0 "><Button variant="success" type='submit' style={{ width: '95%' }}>Submit</Button></Row>
                            <div className="mt-3 text-center">
                                <span className="text-white">Don't have an account? </span>
                                <Link to="/login" className="text-warning" style={{ textDecoration: 'none' }}>Login</Link>
                            </div>
                           
                            
                        </Form>
                    </Card.Body>
                </Card>
            </div >
        </>
    )
}

export default Signup


