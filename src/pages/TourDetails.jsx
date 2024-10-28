
import Image from 'react-bootstrap/Image';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { faCalendarDays, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import '../Custom-css/Tourdetails.css';

const TourDetails = () => {
  const { id } = useParams(); // Get the tour ID from the URL
  const [tour, setTour] = useState(null); // Store tour data
  const navigate = useNavigate(); // For navigating between pages

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await fetch(`http://localhost:7001/user/getTours/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTour(data.tourDetails);
        } else {
          const errorData = await response.json();
          console.error("Fetch error:", errorData);
          alert(`Failed to fetch tour: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        alert("Failed to fetch tour. Please try again later.");
      }
    };

    fetchTour();
  }, [id]);

  const handleBookNow = () => {
    const token = localStorage.getItem('token');
    if (token && tour) { // Ensure tour is available
      navigate(`/reservationForm/${tour._id}`, { // Use tour._id directly here
        state: {
          tourId: tour._id, // Pass the tour ID
          tourTitle: tour.title, // Pass the tour title
          tourPrice: tour.price,
          tourTime:tour.time // Pass the tour price
        },
      });
    } else {
      navigate('/login'); // Redirect to login if not authenticated
    }
  };

  return (
    <>
      {tour ? (
        <>
          <Row className='bg-dark lg-12 md-12 sm-12 p-5 row1'>
            <Col lg={12}>
              <p className='tourdetails-heading'>{tour.desc2}</p>
              <p className='tourdetails-duration'>{tour.duration}</p>
            </Col>
            {/* Display images */}
            <Col lg={6} md={12} sm={12} className='gallery-1'>
              <Image src={tour.image1} alt="Gallery Image 1" className="img-fluid gallery1-image" />
            </Col>
            <Col lg={6} md={12} sm={12} className='gallery-2'>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <Image src={tour.image2} alt="Gallery Image 2" className="img-fluid gallery2-image" />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <Image src={tour.image3} alt="Gallery Image 3" className="img-fluid gallery2-image" />
                </Col>
              </Row>
              <Row className='mt-2'>
                <Col lg={6} md={6} sm={12}>
                  <Image src={tour.image4} alt="Gallery Image 4" className="img-fluid gallery2-image" />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <Image src={tour.image5} alt="Gallery Image 5" className="img-fluid gallery2-image" />
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Overview Section */}
          <Row className='bg-dark p-5'>
            <span className='overview-heading mb-5'>Quick Tour Overview</span>
            <Col lg={8} md={12} sm={12}>
              <ul className='tour-plan px-4 ps-2'>
                {tour.plan && tour.plan.length > 0 ? (
                  tour.plan.map((item, index) => (
                    <li key={index}>
                      <strong>Day {index + 1}:</strong> {item}
                    </li>
                  ))
                ) : (
                  <li>No plans available</li>
                )}
              </ul>
            </Col>
            <Col lg={4} md={12} sm={12} style={{ border: '2px solid white', borderRadius: '15px' }}>
              <Card className='bg-dark'>
                <ul className="list-unstyled">
                  <li className='tour-time pb-3'>
                    <FontAwesomeIcon icon={faCalendarDays} /> : {tour.time}
                  </li>
                  <li className='tour-time'>
                    <FontAwesomeIcon icon={faTag} rotation={90} /> : Price: {tour.price}
                  </li>
                  <Button variant="outline-light" className='Book w-100 m-0 mt-3' onClick={handleBookNow}>Book Now</Button>
                </ul>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <p>No tour details available</p>
      )}
    </>
  );
};

export default TourDetails;
