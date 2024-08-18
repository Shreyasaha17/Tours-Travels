import React from 'react';
import { Button, Container, Row, Col, Card,Image, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const navigate = useNavigate();

  const goTo = (page) => {
    navigate(page);
  };
 

  return (
    <>
      <div className="homepage">
        <div className="home-heading">
          <span className="home-title">Travel Beyond Boundaries</span>
          <br />
          <p className="home-description">
            Embark on Epic Journeys and Explore Hidden Gems Across the Globe
          </p>
          <Button variant="danger">
            <span onClick={() => goTo('/tour')}>Explore</span>
          </Button>
        </div>
      </div>
      <div>
  <Container className="my-5 ">
    <h2 className="text-center mb-4 jouneymoments pb-5">Explore Our Travel Moments</h2>
    
    <Row>
      <Col md={6} className="mb-4 p-0 m-0">
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://indotoursadventures.com/public/tinymce_images/6660be21f21b1a72c6a36a0b66017ffa.jpg"
        alt="First slide"
      />
       <Carousel.Caption><h4>Paragliding in Kashmir</h4> </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100"
        src="https://www.todaystraveller.net/wp-content/uploads/2023/10/Emirati-Foods-Culture-in-Dubai-1024x570.jpg"
        alt="Second slide"
      />
       <Carousel.Caption><h4>Culinary Journey </h4> </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100"
        src="https://endurobikeadvanture.com/wp-content/uploads/2024/01/quadbike-rental-dubai.png"
        alt="Third slide"
      />
      <Carousel.Caption><h4>Quad Bike Ride </h4> </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
      </Col>
      <Col md={6} className="mb-4 p-5 m-0">
      <h5 className='jouneymoments'>
      Discover some of the most unforgettable moments captured during our travels. Each destination offers unique experiences that leave lasting impressions. Whether it’s the vibrant culture, stunning landscapes, or hidden treasures, these memories are just a glimpse of the adventures that await you.
    </h5>
    <Button variant="secondary" className='mt-3'>
            <span onClick={() => goTo('/aboutus')}>Read More</span>
          </Button>
    </Col>
    </Row>
  </Container>
</div>

      <div>
        <Container>
          <h2 className='testimonial'><span>Testimonial</span></h2>
          <h4 className='testimonial1'>"Read about the memorable experiences our clients have had with us."</h4>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center" style={{borderRadius:'30px',border:'2px solid black'}}>
                <Card.Body>
                  <div className="d-flex justify-content-center">
                  <Image style={{width:'100px',height:'100px'}} src="https://www.wovlene.com/cm-admin/uploads/image/testimonial-1.jpg" roundedCircle/>
                    </div>
                    <div className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="mb-3 mt-2" />
                  </div>
                  <Card.Title className="text-center">John Doe</Card.Title>
                  <Card.Text className='testmonial-text text-center'>
                    "This was the most amazing travel experience I’ve ever had! The destinations were breathtaking, and the entire journey was well organized. I would highly recommend it to anyone looking for an unforgettable adventure."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center" style={{borderRadius:'30px',border:'2px solid black'}}>
                <Card.Body>
                 
                  <div className="d-flex justify-content-center">
                  <Image style={{width:'100px',height:'100px'}} src="https://www.wovlene.com/cm-admin/uploads/image/testimonial-3.jpg" roundedCircle/>

                  </div>
                  <div className="d-flex justify-content-center">
                  <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="mb-3 mt-2" />
                  </div>
                  <Card.Title className="text-center">Jane Smith</Card.Title>
                  <Card.Text className='testmonial-text text-center'>
                    "The hidden gems we discovered were absolutely breathtaking! I never imagined such beauty existed in these off-the-beaten-path locations. The trip was both exciting and rejuvenating."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center" style={{borderRadius:'30px',border:'2px solid black'}}>
                <Card.Body>
                 <div className="d-flex justify-content-center">
                 <Image style={{width:'100px',height:'100px'}} src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://myrecrutement.eu/storage/2018/10/Capture-d%E2%80%99e%CC%81cran-2019-03-26-a%CC%80-06.51.50.png" roundedCircle/>

                  </div>
                  <div className="d-flex justify-content-center">
                  <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="mb-3 mt-2" />
                  </div>
                  <Card.Title className="text-center">Alex Johnson</Card.Title>
                  <Card.Text className='testmonial-text  text-center'>
                    "An unforgettable journey that exceeded all expectations! From start to finish, everything was perfect. The itinerary was well-planned, and the experiences were once-in-a-lifetime. Highly recommend!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
