/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";




const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  // const dispatch = useDispatch();

  const HandleChange = (event) => {

    const { id, value } = event.target

    if (id === 'email') {
      setEmail(value)
    }
    else if (id === 'password') {
      setPassword(value)
    }
  }
  

  const doLogin = async(event) => {
    event.preventDefault();
    
    // storageHandler.setLocalData({ email });
    // let data= dispatch(login({ email, password }));
    // console.log("Login Data :",data);
    if ( !email || !password ) {
      alert("Please fill out all fields.");
      return;
  }
   try {
    let response;

    if (email === "admin@gmail.com") {
      // Send admin login request
      response = await fetch("http://localhost:7001/admin/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
    } 
    
    else {
       response=await fetch("http://localhost:7001/user/login",{
        method:'POST',
      headers: {
          'content-type':'application/json'
        },
        body:JSON.stringify({email,password})
  
      })
    }
      const result= await response.json()
      console.log('Response:', result);
      if(result.ok){
      
       if (email === "admin@gmail.com") {
        localStorage.setItem("admintoken", result.token); 
        alert(result.message);
        navigate("/admin/addtour");
        
       } else {
        localStorage.setItem('token',result.token)
        localStorage.setItem('user', JSON.stringify({ email: result.email, name: result.name }));
  
  
        alert(result.message)
        navigate(`/dashboard`);
       }
      }
      else{
        alert(result.message || "Login failed. Please try again.");
      }
    
    
   } catch (error) {
    console.log(error)
   }
  }




  return (
    <>
    <div className="login-card">
    <Card className="text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Card.Body className="p-3 " >
        <h3 className="pb-3"><strong>Login</strong></h3>
        <Form className='Login-Form' onSubmit={doLogin}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label style={{fontWeight:'bold'}}>Email address</Form.Label>
            <Form.Control type="email" className="custom-input" value={email} onChange={HandleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label style={{fontWeight:'bold'}}>Password</Form.Label>
            <Form.Control type="password" className="custom-input"  value={password} onChange={HandleChange} />
          </Form.Group>
          <Button variant="success" type="submit" ><strong>Submit</strong></Button>

          <div className="mt-3 text-center">
              <Link to="/forgot-password" className="text-white" style={{ textDecoration: 'none' }}>
                Forgot Password?
              </Link>
            </div>
            <div className="mt-2 text-center">
              <span className="text-white">Don't have an account? </span>
              <Link to="/signup" className="text-warning" style={{ textDecoration: 'none' }}>
                Sign Up
              </Link>
            </div>
        </Form>
        </Card.Body>
      </Card>
      </div>
    </>
  )
}

export default Login

