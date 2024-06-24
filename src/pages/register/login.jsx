/*import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });//the value will change in to state 
  }

  doLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log('Login Data:', { email, password });
  }
  render(){
  return (
<>
<div id='login-box'>
    <Form onSubmit={this.doLogin}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
         value={this.state.email} onChange={this.handleChange}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
         value={this.state.password} onChange={this.handleChange}/>
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
}
}

export default Login;

*/


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const navigate = useNavigate();

//   const goTo = (page) => {
//     navigate(page)
// }

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  }

  const doLogin = (event) => {
    event.preventDefault();
    console.log('Login Data:', { email, password });
    // navigate("/dashboard", { state: { email } });
     navigate(`/dashboard?email=${email}`);
    //  navigate(`/dashboard/${email}`);

  }
  
  return (
    <>
      <div id='login-box'>
        <Form onSubmit={doLogin}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
              value={email} onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
              value={password} onChange={handleChange}/>
          </Form.Group>

          <Button variant="primary" type="submit">Submit
            
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
