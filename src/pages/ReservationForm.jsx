import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

const ReservationForm = () => {
  const location = useLocation();
  const navigate = useNavigate(); // To navigate after successful booking
  const { tourId, tourTitle, tourPrice, tourTime } = location.state || { tourId: null, tourTitle: '', tourPrice: 0, tourTime: '' };

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    members: 1, // Default number of members
    address: '',
    phone: '',
    pin: '',
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle increment and decrement for the number of members
  const handleIncrement = () => {
    setFormData({ ...formData, members: formData.members + 1 });
  };

  const handleDecrement = () => {
    if (formData.members> 1) {
      setFormData({ ...formData, member: formData.members - 1 });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send to the backend
    const reservationData = {
      tourId,
      tourTitle,
      tourTime,
      ...formData,
      totalPrice: tourPrice * formData.members,
    };
    console.log(reservationData); // Log the reservation data for debugging

    try {
      // Send the data to the backend (adjust the URL based on your API endpoint)
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:7001/user/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        // Handle successful response
        const data = await response.json(); 
        alert('Booking added to cart successfully');
        navigate('/cart',{ state: { data } }); // Navigate to the cart page
      } else {
        // Handle server errors
        alert('Failed to add to cart');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding to the cart.');
    }
  };

  // Calculate the total price based on the number of members
  const totalPrice = tourPrice * formData.members;

  return (
    <div className='reservation-block'>
      <Card xl={7} lg={9} md={12} sm={12} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', border: '3px solid white' }}>
        <Card.Body className='text-white'>
          <Card.Title style={{ textAlign: 'center' }}>
            <h3>Reservation Form for {tourTitle} tour</h3>
          </Card.Title>
          <br />
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <h5 style={{ color: 'yellow' }}>Time: {tourTime}</h5>
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstname">
                <Form.Label style={{ fontWeight: 'bold' }}>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  style={{ backgroundColor: 'transparent', border: '2px solid white' }}
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="lastname">
                <Form.Label style={{ fontWeight: 'bold' }}>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  style={{ backgroundColor: 'transparent', border: '2px solid white' }}
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="member">
                <Form.Label style={{ fontWeight: 'bold' }}>Number of Members</Form.Label>
                <div className="d-flex align-items-center">
                  <Button variant="secondary" onClick={handleDecrement}>-</Button>
                  <Form.Control
                    type="number"
                    name="members"
                    style={{ backgroundColor: 'transparent', border: '2px solid white', textAlign: 'center', width: '70px', marginLeft: '10px', marginRight: '10px' }}
                    value={formData.members}
                    readOnly
                  />
                  <Button variant="secondary" onClick={handleIncrement}>+</Button>
                </div>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Col>
                <h5 style={{ color: 'yellow' }}>Total Price: ₹ {totalPrice}</h5>
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="address">
                <Form.Label style={{ fontWeight: 'bold' }}>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  style={{ backgroundColor: 'transparent', border: '2px solid white' }}
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="phone">
                <Form.Label style={{ fontWeight: 'bold' }}>Phone No</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  style={{ backgroundColor: 'transparent', border: '2px solid white' }}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="pin">
                <Form.Label style={{ fontWeight: 'bold' }}>Pincode</Form.Label>
                <Form.Control
                  type="text"
                  name="pin"
                  style={{ backgroundColor: 'transparent', border: '2px solid white' }}
                  value={formData.pin}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Button variant="danger" type="submit">Confirm Booking</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReservationForm;
