/* eslint-disable react/prop-types */
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { cancelReservation } from "../reduxstore/authSlice";


const TourBooking = () => {

  const booking=useSelector(state=>state.auth.reservation)
  const dispatch = useDispatch();

    const handleCancelReservation = () => {
        dispatch(cancelReservation());
    };

  if (!booking) {
    return (
    <>
            <Container fluid className="p-5">
          <Row className="justify-content-center bg-transparent">
            <Col xl={4} md={8} sm={12} className='empty-image bg-transparent'>
            </Col>
          </Row><br/>
          <Row><h4>Your list is <span style={{color:'red'}}>Empty !</span></h4>
          <br/><br/>
           <span><Button variant="danger">Return Tour Packages</Button></span>
           </Row>

          </Container>
    </>
    )
  }

  return (
    <>
    <div className='tour-booking'>
    <Col xl={9} md={10} sm={10} className="p-3">
      <Card>
        <Card.Body>
          <Card.Title style={{textAlign:'center'}}> Tour Booking Details</Card.Title>
          <ul>
            <li>Name: {booking.name} {booking.surname}</li>
            <li>Destination: {booking.title} </li>
            <li>Time: {booking.time} </li>
            <li>Number of Members: {booking.member}</li>
            <li>Address: {booking.address}</li>
            <li>Phone Number: {booking.phone}</li>
            <li>Pincode: {booking.pin}</li><br/>
            <li><Button variant="primary"onClick={handleCancelReservation}>Cancel Booking</Button></li>
          </ul>
      
        </Card.Body>
      </Card>
      </Col>
    </div>
    </>
  )
}

export default TourBooking