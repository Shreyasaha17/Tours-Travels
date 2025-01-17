// /* eslint-disable react/prop-types */
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// // import { useSelector } from 'react-redux';

// const AdminHeader = ({adminLogout}) => {
//   // const user = useSelector(state => state.auth.user)  
//   console.log('Admin logout prop received:', adminLogout); 
  
//   return (
//    <>
//    <Navbar expand="lg" className="bg-dark">
//     <Container className='bg-transparency  m-0 '>
//       <Navbar.Brand className='text-white'>Tour & Travels</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggler'/>
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav  id='auth-navbar-menu'>
//                 <Link to="/admin/addtour" > Add-Tour &nbsp; </Link>
//                 <Link to="/admin/admintour" >Admin-Tour &nbsp; </Link>
//                 <Link to="/admin/userlist" > User-List &nbsp; </Link>
//           </Nav>
//           <Nav  id='auth-navbar-button'>
//           <span className='text-white mt-1' style={{fontSize:'18px',fontWeight:'3px'}}>Admin-Panel</span> 
          
//           <Button variant="outline-light mx-2" onClick={adminLogout}> Logout </Button>
  
//           </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//    </>
//   )
// }

// export default AdminHeader


/* eslint-disable react/prop-types */
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const AdminHeader = ({ logout}) => {
  // const user = useSelector(state => state.auth.user)    
  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container className='bg-transparency m-0'>
          <Navbar.Brand className='text-white'>Tour & Travels</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggler' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id='auth-navbar-menu'>
              <Link to="/admin/addtour"> Add-Tour &nbsp; </Link>
              <Link to="/admin/admintour"> Admin-Tour &nbsp; </Link>
              <Link to="/admin/userlist"> User-List &nbsp; </Link>
            </Nav>
            <Nav id='auth-navbar-button'>
              <span className='text-white mt-1' style={{ fontSize: '18px', fontWeight: '3px' }}>Admin-Panel</span> 
              <Button variant="outline-light mx-2" onClick={logout}> Logout </Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AdminHeader;

