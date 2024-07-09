import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()

  const goTo=(page)=>{
    navigate(page)
 
  }

  return (
    <Navbar expand="lg p-0" className="bg-dark">
    <Container className='bg-transparency  m-0'>
      <Navbar.Brand className='text-white'>Tour & Travels</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav  id='navbar-menu'>
                <Link to="/home">Home &nbsp; </Link>
                <Link to="/aboutus" >About &nbsp; </Link>
                <Link to="/login" >Login &nbsp; </Link>
                <Link to="/signup" > Sign Up &nbsp; </Link>
                {/* <Link to="/dashboard" > Dashboard &nbsp; </Link>
                <Link to="/tour" > Tour &nbsp; </Link> */}
          </Nav>
          <Nav  id='navbar-button'>
          <Button variant="outline-light" className='header-button'><span onClick={()=>goTo("/login")}>Login</span></Button>
          <Button variant="outline-light" className='header-button'><span onClick={()=>goTo("/signup")}>Sign Up</span></Button>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header



