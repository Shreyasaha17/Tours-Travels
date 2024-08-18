/* eslint-disable react/no-unescaped-entities */

import { Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import upcomingTour from '../data/upcomingTourData';
import Image from 'react-bootstrap/Image';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Dashboard = () => {
  const user = useSelector(state => state.auth.user)

  return (
    <>
      <Card style={{ width: '50%', margin: '20px auto', border: '4px solid black' }}>
        <Card.Body>
          <Card.Title><h2>User's Details</h2></Card.Title>
          <Card.Text>Email : {user.email}</Card.Text>
        </Card.Body>
      </Card>
      <Container fluid>
        <h2 className='testimonial'><span>Upcoming Tour</span></h2>
        <p  className="px-5 px-md-4 px-lg-5 px-xl-6 pt-2 pb-2">"Get ready to embark on unforgettable journeys with our carefully curated upcoming tours. Whether you're seeking the serene beauty of nature, the thrill of adventure, or a deep dive into rich cultural experiences, our upcoming itineraries have something special for every traveler. From breathtaking landscapes to hidden gems, join us as we explore the world together, creating memories that will last a lifetime. Stay tuned for the exciting destinations we've planned, and let us guide you on your next great adventure."</p>
      
          <Row  className='mt-5 p-4 m-4 d-flex justify-content-center align-item-center gap-5' >

          {upcomingTour.map((tour) => (
            <Col key={tour.id} lg={3} md={6} sm={12} className= "justify-content-center align-item-center p-0 pb-2"style={{ height: 'auto',borderRadius:'10px',backgroundColor:'#2e4053 '}}>
            <Image src={tour.picture} rounded style={{height:'300px',width:'100%'}}/>
            <div className='tour-location' ><span ><FontAwesomeIcon icon={faLocationDot}/></span><span style={{marginLeft:'10px'}}>{tour.title}</span></div>
            </Col>
         ))}
         </Row>
       
      </Container>
    </>
  )
}

export default Dashboard



