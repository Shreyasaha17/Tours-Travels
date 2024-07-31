import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams} from 'react-router-dom';
import tourData from '../data/tourData';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../reduxstore/authSlice';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    member: 1,
    address: '',
    phone: '',
    pin:''
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
      const { tourId } = useParams();
    const tour = tourData.find(t => t.id === parseInt(tourId));
  
    if (!tour) {
      return <div>No Reservation Found</div>
      
    }
   
  

    const HandleChange = (event) => {
      setFormData({ ...formData, [event.target.id]: event.target.value });
    };

  
    const doReservation = (event) => {
      event.preventDefault();
      const reservationData = { ...formData, title: tour.title, time: tour.time,image:tour.image1};
      const action = addReservation(reservationData);
      console.log('Reservation :', action); // Log the action object
      dispatch(action); // Dispatch the action to Redux
    
      // Other logic such as navigation and clearing form
      navigate(`/tourBooking`);
      clearForm();
    };

    const clearForm=()=>{
      setFormData({
        name: '',
        surname: '',
        address: '',
        phone: '',
        pin: '',
        member: 1,
      });

    }


    const handleIncrement = () => {
      setFormData({ ...formData, member: formData.member + 1 });
    };
  
    const handleDecrement = () => {
      if (formData.member > 1) {
        setFormData({ ...formData, member: formData.member - 1 });
      }
    };


  return (
   <>
   <div className='reservation-block'>
    <Card xl={7} lg={9} md={12} sm={12} style={{backgroundColor:'rgba(0, 0, 0, 0.6)',border:'3px solid white'}}>
      <Card.Body className='text-white'>
        <Card.Title style={{textAlign:'center'}}><h3>Reservation Form for {tour.title} tour</h3></Card.Title><br/>
    <Form onSubmit={doReservation}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="name">
          <Form.Label style={{fontWeight:'bold'}} >First Name</Form.Label>
          <Form.Control type="text" style={{backgroundColor:'transparent',border:'2px solid white'}} 
          value={formData.name} onChange={HandleChange}/>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="surname">
          <Form.Label style={{fontWeight:'bold'}}>Last Name</Form.Label>
          <Form.Control type="text" style={{backgroundColor:'transparent',border:'2px solid white'}}
          value={formData.surname} onChange={HandleChange}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
                <Form.Group className="mb-3" controlId="member">
                  <Form.Label style={{ fontWeight: 'bold' }}>Number of Members</Form.Label>
                  <div className="d-flex align-items-center">
                    <Button variant="secondary" onClick={handleDecrement}>-</Button>
                    <Form.Control type="number" 
                    style={{ backgroundColor: 'transparent', border: '2px solid white', textAlign: 'center',width:'70px',marginLeft:'10px',marginRight:'10px'}}
                      value={formData.member} readOnly />
                    <Button variant="secondary" onClick={handleIncrement}>+</Button>
                  </div>
                </Form.Group>
              </Row>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="address">
        <Form.Label style={{fontWeight:'bold'}}>Address</Form.Label>
        <Form.Control style={{backgroundColor:'transparent',border:'2px solid white'}}
        value={formData.address} onChange={HandleChange}/>
      </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="phone">
          <Form.Label style={{fontWeight:'bold'}}>Phone No</Form.Label>
          <Form.Control type='number'style={{backgroundColor:'transparent',border:'2px solid white'}}
          value={formData.phone} onChange={HandleChange}/>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="pin">
          <Form.Label style={{fontWeight:'bold'}}>Pincode</Form.Label>
          <Form.Control style={{backgroundColor:'transparent',border:'2px solid white'}}
          value={formData.pin} onChange={HandleChange}/>
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



