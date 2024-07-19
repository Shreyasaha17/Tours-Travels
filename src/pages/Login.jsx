import { useState } from "react"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
//import storageHandler from "../helper/storageHandler";
import { login } from "../reduxstore/authSlice";
import { useDispatch } from "react-redux";



const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch();

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
    
    // storageHandler.setLocalData({ email });
    let data= dispatch(login({ email, password }));
    console.log("Login Data :",data);
        navigate(`/dashboard`);
  }




  return (
    <>
    <div className="login-card">
    <Card className="text-white"style={{backgroundColor:'transparent',border:'2px solid white'}}>
        <Card.Body className="p-4 " >
        <h3 className="pb-3"><strong>Login</strong></h3>
        <Form className='Login-Form' onSubmit={doLogin}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label style={{fontWeight:'bold'}}>Email address</Form.Label>
            <Form.Control type="email" style={{backgroundColor:'transparent',border:'2px solid white'}}
              value={email} onChange={HandleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label style={{fontWeight:'bold'}}>Password</Form.Label>
            <Form.Control type="password" style={{backgroundColor:'transparent',border:'2px solid white'}}
              value={password} onChange={HandleChange} />
          </Form.Group>
          <Button variant="light" type="submit"><strong>Submit</strong></Button>
        </Form>
        </Card.Body>
      </Card>
      </div>
    </>
  )
}

export default Login

