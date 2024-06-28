/* eslint-disable react/prop-types */
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const AuthHeader = ({user,logout}) => {
  
  return (
   <>
   <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand >React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  id='navbar-menu'>
                <Link to="/home">Home &nbsp; </Link>
                <Link to="/aboutus" >About &nbsp; </Link>
                {/* <Link to="/login" >Login &nbsp; </Link>
                <Link to="/signup" > Sign Up &nbsp; </Link> */}
                <Link to="/dashboard" > Dashboard &nbsp; </Link>
          </Nav>
          <Nav  id='navbar-button'>
          <span >{user.email}</span> 
          <Button variant="primary" onClick={logout}> Logout </Button>
  
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   </>
  )
}

export default AuthHeader
