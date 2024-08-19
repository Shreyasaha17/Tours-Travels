/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Carousel,} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHiking, faSun, faGlobe, faCar } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  return (
    <Container fluid className="mt-5 p-0 px-2 px-sm-3 px-md-4 px-lg-5">
      <Row className="align-items-center mb-5 p-0 m-0">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://getwallpapers.com/wallpaper/full/3/7/e/1135692-most-popular-scuba-diving-wallpaper-1920x1080.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Unleash Your Inner Explorer</h3>
                <p>Join us for a breathtaking journey to hidden gems and pristine landscapes. Customers loved our guided tour through the untouched wilderness of Patagonia!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://www.salkantaytrekking.com/blog/wp-content/uploads/2023/11/cover-blog_plantilla_02-1.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Thrills of a Lifetime</h3>
                <p>Experience the adrenaline rush as you embark on our exhilarating white-water rafting adventure. Our customers can't stop raving about the rapids in Costa Rica!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://www.riugparagliding.com/wp-content/uploads/2021/04/Tandem-Flight-RIUG-Paragliding.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Serenity and Bliss</h3>
                <p>Relax and rejuvenate on our serene beach retreats. Customers have found peace and happiness on the beautiful shores of the Maldives.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col className='p-5 '>
          <h2 className='mb-5'>About Us</h2>
          <p>
            Welcome to our tour travel website! We are dedicated to providing you with the best travel experiences and unforgettable adventures. Our team of travel experts works tirelessly to curate unique and exciting tour packages that cater to all kinds of travelers.
          </p>
          <p>
            Whether you're looking for a relaxing beach vacation, an adventurous mountain trek, or a cultural city tour, we have something for everyone. Our goal is to make your travel dreams come true by offering personalized and high-quality services.
          </p>
          <p>Our mission is to transform your travel dreams into reality by delivering personalized and high-quality services. From the moment you book with us until the final leg of your journey, our dedicated team is here to support and guide you every step of the way.</p>
          <p>
          We are grateful for the opportunity to be a part of your travel adventures. Thank you for choosing us for your travel needs. We look forward to helping you explore the world, discover new horizons, and create lasting memories that you will cherish forever.
          </p>
          <p>
            Thank you for choosing us for your travel needs. We look forward to helping you explore the world and create lasting memories.
          </p>
        </Col>
      </Row>

      <h3 className="mb-4">Services Provided</h3>
      <Row>
        <Col md={3} className="text-center mb-4 pt-3" style={{border:'2px solid black',borderRadius:'5px '}}>
          <div className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faHiking} size="3x" className="mb-3" />
            <h5>Adventure</h5>
            <ul className="list-unstyled">
              <li>Thrilling treks</li>
              <li>Guided expeditions</li>
              <li>Exploration tours</li>
            </ul>
          </div>
        </Col>
        <Col md={3} className="text-center mb-4 pt-3"style={{border:'2px solid black',borderRadius:'5px '}}>
          <div className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faSun} size="3x" className="mb-3" />
            <h5>Beach</h5>
            <ul className="list-unstyled">
              <li>Coastal retreats</li>
              <li>Beachfront accommodations</li>
              <li>Relaxation packages</li>
            </ul>
          </div>
        </Col>
        <Col md={3} className="text-center mb-4 pt-3"style={{border:'2px solid black',borderRadius:'5px '}}>
          <div className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faGlobe} size="3x" className="mb-3" />
            <h5>Culture</h5>
            <ul className="list-unstyled">
              <li>City tours</li>
              <li>Cultural experiences</li>
              <li>Local cuisine</li>
            </ul>
          </div>
        </Col>
        <Col md={3} className="text-center mb-4 pt-3"style={{border:'2px solid black',borderRadius:'5px '}}>
          <div className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faCar} size="3x" className="mb-3" />
            <h5>Transport</h5>
            <ul className="list-unstyled">
              <li>Comfortable travel</li>
              <li>Private transfers</li>
              <li>Rental options</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
