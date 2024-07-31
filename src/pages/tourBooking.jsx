/* eslint-disable react/prop-types */
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cancelReservation } from "../reduxstore/authSlice";
import { useNavigate } from "react-router-dom";


const TourBooking = () => {

  const booking=useSelector(state=>state.auth.reservation)
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleCancelReservation = (title) => {
        dispatch(cancelReservation(title));
    };

    const handleAddToCart = (booking) => {
      dispatch(addToCart(booking))
      navigate('/cart',{ state: { booking } });
    };
  if (booking.length===0) {
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
    <Container>
        <Row xl={12} className="justify-content-center "  style={{flexDirection:'row'}}>
          {booking.map((booking, index) => (
            <Col xl={4} md={8} sm={12} className="p-3 bg-primary" key={index}>
            <Card className="p-0 mt-3">
            <Card.Img variant="top" src={booking.image}/>
              
            </Card>
          </Col>
          ))}
           {booking.map((booking, index) => (
            <Col xl={6} md={8} sm={12} className="p-3 bg-primary" key={index}>
              <Card className="p-0 m-0">
                <Card.Body>
                  <Card.Title style={{ textAlign:"center" }}>
                    {booking.title} Tour Details
                  </Card.Title>
                  <ul>
                    <li>Name: {booking.name} {booking.surname}</li>
                    <li>Destination: {booking.title}</li>
                    <li>Time: {booking.time}</li>
                    {/* <li>Number of Members: {booking.member}</li> */}
                    <li>Address: {booking.address}</li>
                    <li>Phone Number: {booking.phone}</li>
                    <li>Pincode: {booking.pin}</li>
                    <li>Total Member: {booking.member}</li>
                    <br />
                    <li>
                      <Button variant="primary" onClick={() => handleCancelReservation(booking.title)}>
                        Cancel Booking
                      </Button>
                      <Button variant="primary"  style={{marginLeft:'20px'}}onClick={() => handleAddToCart(booking)}>

                        Add to Cart
                      </Button>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
         
        </Row>
      </Container>
    </div>
    </>
  )
}

export default TourBooking

