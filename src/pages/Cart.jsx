// import { useDispatch, useSelector } from "react-redux";
// import { Button, Col, Container, Row, Table } from "react-bootstrap";
// import { removeFromCart } from "../reduxstore/authSlice";
// import { useNavigate } from "react-router-dom";
// import Card from 'react-bootstrap/Card';

// const Cart = () => {
//   const cart = useSelector((state) => state.auth.cart);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleRemoveFromCart = (title) => {
//     dispatch(removeFromCart(title));
//     if(cart.length==0){
//       navigate('/tour');
//     }
    
//   };

//   const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);  

//   if (cart.length > 0) {
//     return (
//       <Container fluid className="m-1">
//         <Row >
//           <Col xl={8} md={8} sm={12}>
//           <Card>

//               <Card.Body>
//                 <Card.Title> <h2 className="text-center my-4 text-dark">Your Cart</h2></Card.Title>
//                 <div>
           
//             <Table striped bordered hover>
//               <thead>
//                 <tr className="p-0">
//                   <th>Image</th>
//                   <th>Tour Details</th>
//                   <th>Total Price</th>
//                   <th></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.map((item, index) => (
//                   <tr key={index}>
//                     <td>
//                       <img src={item.image} alt={item.title} style={{ width: '100px' }} />
//                     </td>
//                     <td style={{ textAlign: 'left', marginLeft: '15px' }}>
//                       <strong>
//                         {item.title} tour details:
//                         <br />Time: {item.time}
//                         <br />Member: {item.member}
//                       </strong>
//                     </td>
//                     <td><strong>{item.price}</strong></td>
//                     <td>
//                       <Button variant="danger" onClick={() => handleRemoveFromCart(item.title)}>
//                         Remove
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//             </div>
//             </Card.Body>
//             </Card>
//           </Col>
//           <Col xl={4} md={4} sm={12} >
//             <Card>

//             <Card.Body>
//                 <Card.Title>Booking Summary</Card.Title>
//                 <Card.Text>
//                   <Table striped bordered hover>
//                     <thead>
//                       <tr>
//                         <th>Tour</th>
//                         <th>Price</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cart.map((item, index) => (
//                         <tr key={index}>
//                           <td>{item.title}</td>
//                           <td>{item.price}</td>
//                         </tr>
//                       ))}
//                       <tr>
//                         <td><strong>Total Price:</strong></td>
//                         <td><strong>{totalPrice.toFixed(2)}</strong></td>
//                       </tr>
//                     </tbody>
//                   </Table>
//                 </Card.Text>
//                 <Row>
//                   <Button variant="success">Proceed to Payment</Button>
//                 </Row>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }

//   return (
//     <Container fluid className="p-4">
//       <Row className="justify-content-center bg-transparent">
//         <Col xl={4} md={8} sm={12} className='empty-image bg-transparent'>
//           {/* Placeholder for empty cart image or design */}
//         </Col>
//       </Row>
//       <Row className="justify-content-center">
//         <Col xl={6} md={8} sm={12} className="text-center">
//           <h4>Your cart is <span style={{ color: 'red' }}>Empty!</span></h4>
//           <br />
//           <Button variant="danger" onClick={() => navigate('/tour')}>Return to Tour Packages</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Cart;
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row, Card, Table } from "react-bootstrap";
import { removeFromCart } from "../reduxstore/authSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.auth.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (title) => {
    dispatch(removeFromCart(title));
    if (cart.length ===0) {
      navigate('/tour');
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  if (cart.length > 0) {
    return (
      <Container fluid className="m-1">
        <Row>
          <Col xl={8} md={12} sm={12} className="pt-0">
            <Card className="p-0">
              <Card.Body>
                <Card.Title>
                  <h2 className="text-center my-4 text-dark">Your Cart</h2>
                </Card.Title>
                {cart.map((item, index) => (
                  <div key={index} className="mb-3 p-3 border">
                    <Row className="g-0">
                      <Col md={4}>
                        <div className="d-flex align-items-center justify-content-center h-100">
                          <img src={item.image} alt={item.title} className="img-fluid" />
                        </div>
                      </Col>
                      <Col md={5} className="ps-4">
                        <div className="ps-4 pt-2 pt-md-3 pt-xl-4 pt-sm-5">
                          <h5>{item.title} tour details:</h5><br/>
                          <p>
                            <strong>Time:</strong> {item.time}
                            <br />
                            <strong>Member:</strong> {item.member}
                          </p>
                          <p>
                            <strong>Price:</strong> {item.price}
                          </p>
                        </div>
                      </Col>
                      <Col md={3} className="d-flex align-items-center justify-content-center">
                        <Button variant="danger" onClick={() => handleRemoveFromCart(item.title)}>
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={12} sm={12}>
            <Card>
              <Card.Body>
                <Card.Title>Booking Summary</Card.Title>
                <Card.Text>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Tour</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, index) => (
                        <tr key={index}>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                        </tr>
                      ))}
                      <tr>
                        <td><strong>Total Price:</strong></td>
                        <td><strong>{totalPrice.toFixed(2)}</strong></td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Text>
                <Row>
                  <Button variant="success">Proceed to Payment</Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid className="p-4">
      <Row className="justify-content-center bg-transparent">
        <Col xl={4} md={8} sm={12} className="empty-image bg-transparent">
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xl={6} md={8} sm={12} className="text-center">
          <h4>Your cart is <span style={{ color: 'red' }}>Empty!</span></h4>
          <br />
          <Button variant="danger" onClick={() => navigate('/tour')}>Return to Tour Packages</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
