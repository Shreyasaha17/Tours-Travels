/* eslint-disable react-hooks/rules-of-hooks */
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from 'react-router-dom';
import tourData from '../data/tourData';
import {useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reduxstore/authSlice';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    member: 1,
    address: '',
    phone: '',
    pin: ''
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tourId } = useParams();
  const tour = tourData.find(t => t.id === parseInt(tourId));

  if (!tour) {
    return <div>No Reservation Found</div>

  }
  useEffect(() => {
    if (tour) {
      calculateTotalPrice(tour.price, formData.member);
    }
  }, [tour, formData.member]);


  const HandleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };


  const doReservation = (event) => {
    event.preventDefault();
    const reservationData = { ...formData, title: tour.title, time: tour.time, image: tour.image1, price: totalPrice };
    const action = addToCart(reservationData);
    console.log('Cart Details :', action); 
    dispatch(action); 

   
    navigate(`/cart`);
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      name: '',
      surname: '',
      address: '',
      phone: '',
      pin: '',
      member: 1,
    });
    setTotalPrice(tour.price); 
  }

  const handleIncrement = () => {
    const newMembers = formData.member + 1;
    setFormData({ ...formData, member: newMembers });
    calculateTotalPrice(tour.price, newMembers); // Update total price
  };

  const handleDecrement = () => {
    if (formData.member > 1) {
      const newMembers = formData.member - 1;
      setFormData({ ...formData, member: newMembers });
      calculateTotalPrice(tour.price, newMembers); // Update total price
    }
  };
  const calculateTotalPrice = (price, members) => {
    const total = price * members;
    setTotalPrice((total).toFixed(2));
  };


  return (
    <>
      <div className='reservation-block'>
        <Card xl={7} lg={9} md={12} sm={12} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', border: '3px solid white' }}>
          <Card.Body className='text-white'>
            <Card.Title style={{ textAlign: 'center' }}><h3>Reservation Form for {tour.title} tour</h3></Card.Title><br />
            <Form onSubmit={doReservation}>
            <Col>
                  <h5 style={{color:'yellow'}}>Time : {tour.time}</h5>
                </Col>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="name">
                  <Form.Label style={{ fontWeight: 'bold' }} >First Name</Form.Label>
                  <Form.Control type="text" style={{ backgroundColor: 'transparent', border: '2px solid white' }}
                    value={formData.name} onChange={HandleChange} />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="surname">
                  <Form.Label style={{ fontWeight: 'bold' }}>Last Name</Form.Label>
                  <Form.Control type="text" style={{ backgroundColor: 'transparent', border: '2px solid white' }}
                    value={formData.surname} onChange={HandleChange} />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group className="mb-3" controlId="member">
                  <Form.Label style={{ fontWeight: 'bold' }}>Number of Members</Form.Label>
                  <div className="d-flex align-items-center">
                    <Button variant="secondary" onClick={handleDecrement}>-</Button>
                    <Form.Control type="number"
                      style={{ backgroundColor: 'transparent', border: '2px solid white', textAlign: 'center', width: '70px', marginLeft: '10px', marginRight: '10px' }}
                      value={formData.member} readOnly />
                    <Button variant="secondary" onClick={handleIncrement}>+</Button>
                  </div>
                </Form.Group>
                
                <Col>
                  <h5 style={{color:'yellow'}}>Total Price: {totalPrice}</h5>
                </Col>
              </Row>

              <Row className="mb-3">
                <Form.Group className="mb-3" controlId="address">
                  <Form.Label style={{ fontWeight: 'bold' }}>Address</Form.Label>
                  <Form.Control style={{ backgroundColor: 'transparent', border: '2px solid white' }}
                    value={formData.address} onChange={HandleChange} />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="phone">
                  <Form.Label style={{ fontWeight: 'bold' }}>Phone No</Form.Label>
                  <Form.Control type='number' style={{ backgroundColor: 'transparent', border: '2px solid white' }}
                    value={formData.phone} onChange={HandleChange} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="pin">
                  <Form.Label style={{ fontWeight: 'bold' }}>Pincode</Form.Label>
                  <Form.Control style={{ backgroundColor: 'transparent', border: '2px solid white' }}
                    value={formData.pin} onChange={HandleChange} />
                </Form.Group>
              </Row>





              <Button variant="danger" type="submit">Confirm Booking</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default ReservationForm



