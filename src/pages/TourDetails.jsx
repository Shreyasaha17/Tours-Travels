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
import { Button, Col, Row } from 'react-bootstrap';
import  '../Custom-css/Tourdetails.css'

const TourDetails = () => {
  const { tourId } = useParams();
  const navigate=useNavigate()
  const tour = tourData.find(t => t.id === parseInt(tourId));
  
  if (!tour) {
    return <div>Tour not found</div>;
  }
  
  const HandleReservation = () => {
    navigate(`/reservationForm/${tour.id}`);
  };
  return (
    <>
      <Row className='bg-dark lg-12 md-12 sm-12 p-5  row1' >
        <p className='tourdetails-heading'>{tour.description2}</p>
        <p className='tourdetails-duration'>{tour.duration}</p>
        <Col lg={6} md={12} sm={12} className=' gallery-1 ' >
          <Image src={tour.image1} alt="Gallery Image 1" className="img-fluid gallery1-image" />
        </Col>
        <Col lg={6} md={12} sm={12} className=' gallery-2 '>
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
      <span className='overview-heading'> Quick Tour Overview</span>
      <Row>
      <Row className='bg-dark p-4 m-3'>
        <span className='tour-time'>Time : {tour.time}</span>
      {tour.plan.map((day, index) => (
         <li key={index} className='tour-plan'>
         <strong>Day {index + 1}</strong>:{day}
       </li>
        ))}
         <Button variant="outline-light" className='Book'onClick={HandleReservation}> Book Now</Button>
        </Row>
      </Row>
    </>
  );
}

export default TourDetails;



