
import {Row, Col, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <>
      <Container fluid className="bg-dark text-white p-3 mt-2">
    <Row className='p-1 ps-4 px-4'>
    <Col lg={3} md={6} sm={12} className='bg-dark text-white p-4' style={{textAlign:'left'}} >
            <h5>About Us</h5><br/>
            <p>We are a travel company dedicated to helping you explore the world.</p>
    </Col>
    <Col lg={3} md={6} sm={12} className='bg-dark text-white  p-4' style={{textAlign:'left'}} >
            <h5>Contact Us</h5><br/>
            <ul className='p-2'>
                <li><FontAwesomeIcon icon={faLocationDot}  className='footer-icon'/>123 Travel Street, Adventure City</li>
                <li><FontAwesomeIcon icon={faEnvelope}  className='footer-icon'/>travelagency@gmail.com</li>
                <li><FontAwesomeIcon icon={faPhone} className='footer-icon'/>+9173534287</li>
                </ul>
    </Col>
    <Col lg={3} md={6} sm={12} className='bg-dark text-white p-4 ' style={{textAlign:'left'}}>
            <h5>Quick Link</h5><br/>
            <ul className="list-unstyled">
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
            </ul>
    </Col>
    <Col lg={3} md={6} sm={12} className='bg-dark text-white  p-4 ps-1 ' style={{textAlign:'left'}} >
            <h5>Social Media</h5><br/>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faInstagram} className='footer-icon'/>
                    <FontAwesomeIcon icon={faFacebook}  className='footer-icon'/>
                    <FontAwesomeIcon icon={faXTwitter} className='footer-icon'/>
              
            </li></ul>
    </Col>
    </Row>
    </Container>
    </>
  )
}

export default Footer


