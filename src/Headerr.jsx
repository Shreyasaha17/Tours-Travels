//import React from 'react';
//import PropTypes from 'prop-types';//
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const goTo = (page) => {
    navigate(page)
}

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button variant="primary" > <span onClick={() => goTo("/home")}>Home</span>
            </Button>
          </Nav>
          <Nav>
          <Button variant="primary" > <span onClick={() => goTo("/login")}>Login</span>
          </Button>
          <Button variant="primary" > <span onClick={() => goTo("/Register")}>Register</span>
          </Button>
          <Button variant="primary" > <span onClick={() => goTo("/Aboutus")}>About Us</span>
          </Button>
          <Button variant="primary" > <span onClick={() => goTo("/dashboard")}>Dashboard</span>
          </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};



export default Header;


/*Header.propTypes = {
  onChangeForm: PropTypes.func.isRequired,
}; */
