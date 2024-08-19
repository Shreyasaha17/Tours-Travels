// import Image from 'react-bootstrap/Image';
// import tourData from '../data/tourData';
// import { useParams } from 'react-router-dom';
// import { Col, Row } from 'react-bootstrap';

//   const TourDetails = () => {
//     const { tourId } = useParams();
//     const tour = tourData.find(t => t.id === parseInt(tourId));

//     if (!tour) {
//       return <div>Tour not found</div>;
//     }
//   return (
//    <>
//   <Row className='lg={12} md={12} sm={12}'>
//     <Col className='lg={6} md={12} sm={12} custom-col1 gallery-1'> <Image src={tour.image1} alt="Gallery Image 1" className="img-fluid" /></Col>
//     <Col className='lg={6} md={12} sm={12} custom-col1 gallery-1'>
//     <Col className='lg={6} md={12} sm={12} gallery-2'><Image src={tour.image1} alt="Gallery Image 1" className="img-fluid" /> </Col>
//     <Col className='lg={6} md={12} sm={12} gallery-2'><Image src={tour.image1} alt="Gallery Image 1" className="img-fluid" /> </Col>
//     <Col className='lg={6} md={12} sm={12} gallery-2'><Image src={tour.image1} alt="Gallery Image 1" className="img-fluid" /> </Col>
//     <Col className='lg={6} md={12} sm={12} gallery-2'><Image src={tour.image1} alt="Gallery Image 1" className="img-fluid" /> </Col>

//     </Col>
//   </Row>
//    </>
//   )
// }

// export default TourDetails
import Image from 'react-bootstrap/Image';
import tourData from '../data/tourData';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import '../Custom-css/Tourdetails.css';
import { useSelector } from 'react-redux';
import { faCalendarDays, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TourDetails = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin); // Access authentication state

  // Find the tour by ID
  const tour = tourData.find(t => t.id === parseInt(tourId));

  if (!tour) {
    return <div>Tour not found</div>;
  }

  // Handle reservation and navigation
  const handleReservation = () => {
    if (isLogin) {
      navigate(`/reservationForm/${tour.id}`);
    } else {
      navigate('/signup');
    }
  };

  return (
    <>
      <Row className='bg-dark lg-12 md-12 sm-12 p-5 row1'>
        <p className='tourdetails-heading'>{tour.description2}</p>
        <p className='tourdetails-duration'>{tour.duration}</p>
        <Col lg={6} md={12} sm={12} className='gallery-1'>
          <Image src={tour.image1} alt="Gallery Image 1" className="img-fluid gallery1-image" />
        </Col>
        <Col lg={6} md={12} sm={12} className='gallery-2'>
          <Row>
            <Col lg={6} md={6} sm={12} className='gallery-2'>
              <Image src={tour.image2} alt="Gallery Image 2" className="img-fluid gallery2-image" />
            </Col>
            <Col lg={6} md={6} sm={12} className='gallery-2'>
              <Image src={tour.image3} alt="Gallery Image 3" className="img-fluid gallery2-image" />
            </Col>
          </Row>
          <Row className='mt-2'>
            <Col lg={6} md={6} sm={22} className='gallery-2'>
              <Image src={tour.image4} alt="Gallery Image 4" className="img-fluid gallery2-image" />
            </Col>
            <Col lg={6} md={6} sm={12} className='gallery-2'>
              <Image src={tour.image5} alt="Gallery Image 5" className="img-fluid gallery2-image" />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className='bg-dark p-5'>
      <span className='overview-heading mb-5'>Quick Tour Overview</span>

        <Col lg={8} md={12} sm={12} className='p-3'>

          {tour.plan.map((day, index) => (
            <li key={index} className='tour-plan'>
              <strong>Day {index + 1}</strong>: {day}
            </li>
          ))}
        </Col>
        <Col lg={4} md={12} sm={12} style={{border:'2px solid white',borderRadius:'15px'}}>
        <Card className='bg-dark' >
          <ul className="list-unstyled">
            <li className='tour-time pb-3'>
              <FontAwesomeIcon icon={faCalendarDays} /> : {tour.time}
            </li>
            <li className='tour-time '>
              <FontAwesomeIcon icon={faTag} rotation={90} /> : Price: {tour.price}
            </li>
          
              <Button variant="outline-light" className='Book w-100 m-0 mt-3' onClick={handleReservation}>Book Now</Button>
           
          </ul>
          </Card>

        </Col>
      </Row>
    </>
  );
};

export default TourDetails;
