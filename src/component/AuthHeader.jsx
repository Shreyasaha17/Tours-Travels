/* eslint-disable react/prop-types */
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';

const AuthHeader = ({logout}) => {
  // const user = useSelector(state => state.auth.user)
  const user = JSON.parse(localStorage.getItem('user')); 
  
  
  
  return (
   <>
   <Navbar expand="lg" className="bg-dark">
    <Container className='bg-transparency  m-0 '>
      <Navbar.Brand className='text-white'>Tour & Travels</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggler'/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  id='auth-navbar-menu'>
                <Link to="/home">Home &nbsp; </Link>
                <Link to="/tour" > Tour &nbsp; </Link>
                <Link to="/dashboard" > Dashboard &nbsp; </Link>
                <Link to="/Cart" > Cart &nbsp; </Link>
                <Link to="/aboutus" >About &nbsp; </Link>
          </Nav>
          <Nav  id='auth-navbar-button'>
          <span className='text-white mt-1'></span> 
          <NavDropdown title={<span className="text-white">{user?.name}</span>}  id="basic-nav-dropdown"
          menuVariant="dark"  className="custom-dropdown">
               <Link to="/profile"> Profile &nbsp; </Link>
              <NavDropdown.Item href="#action/3.2">Bookings</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          <Button variant="outline-light mx-2" onClick={logout}> Logout </Button>
  
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   </>
  )
}

export default AuthHeader



