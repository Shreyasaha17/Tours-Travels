//import React from 'react'

import { useState } from "react"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate,useOutletContext} from "react-router-dom";
import storageHandler from "../helper/storageHandler";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate()
  const { setUser } = useOutletContext();
  
  const HandleChange = (event) => {

    const { id, value } = event.target

    if (id === 'email') {
      setEmail(value)
    }
    else if (id === 'password') {
      setPassword(value)
    }
  }
 
  const doLogin = (event) => {
    event.preventDefault();
    console.log('Login Data:', { email, password })
    storageHandler.setLocalData({ email });
    setUser({email})
     navigate(`/dashboard`);
  
  }

  


  return (
    <>
      <h3>Login</h3>
      <Card body>
        <Form className='Login-Form' onSubmit={doLogin}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
              value={email} onChange={HandleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password"
             value={password} onChange={HandleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Card>;

    </>
  )
}

export default Login




