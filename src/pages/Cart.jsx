

import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Card, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [cart, setCart] = useState([]); // State to hold cart items
    const [totalPrice, setTotalPrice] = useState(0); // State to hold total price
    const navigate = useNavigate();

    // Use effect to fetch cart when the component loads
    useEffect(() => {
        const fetchCart = async () => {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:7001/user/cart", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const cartData = await response.json();
                setCart(cartData.items);
                setTotalPrice(cartData.totalAmount);
            } else {
                console.error("Failed to fetch cart.");
            }
        };

        fetchCart();
    }, []);


    const handleRemoveItem = async (tourId) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:7001/user/cart/item", { // Ensure the endpoint is correct
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ tourId }), // Send the tourId in the request body
            });
    
            if (response.ok) {
                const updatedCart = await response.json();
                setCart(updatedCart.cart.items); // Update the cart state
                setTotalPrice(updatedCart.cart.totalAmount); // Update total price
                alert("Item removed from cart");
                if (updatedCart.cart.items.length === 0) {
                    handleClearCart(); // Call the clear cart function
                }
            } else {
                console.error("Failed to remove item from cart:", await response.json());
            }
        } catch (error) {
            console.error("Error removing item:", error);
        }
    };
    

    const handleClearCart = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:7001/user/cart/clear", {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message); // Handle success response
                setCart([]); // Clear local cart state
                setTotalPrice(0); // Reset total price
                alert("Cart cleared");
            } else {
                console.error("Failed to clear the cart.");
            }
        } catch (error) {
            console.error("Error clearing cart:", error);
        }
    };
   
    // Render the cart with items and total price
    return (
        <Container fluid className="m-1">
            {cart.length > 0 ? (
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
                                                    <img src={item.image} alt={item.tourTitle} className="img-fluid" />
                                                </div>
                                            </Col>
                                            <Col md={5} className="ps-4">
                                                <div className="ps-4 pt-2 pt-md-3 pt-xl-4 pt-sm-5">
                                                    <h5>{item.tourTitle} tour details:</h5>
                                                    <br />
                                                    <p>
                                                        <strong>Time:</strong> {item.tourTime}
                                                        <br />
                                                        <strong>Member:</strong> {item.members}
                                                    </p>
                                                    <p>
                                                        <strong>Price:</strong> ₹{item.totalPrice}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col md={3} className="d-flex align-items-center justify-content-center">
                                                <Button 
                                                    variant="danger" onClick={() => handleRemoveItem(item.tourId)}
                                                >
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
                                <Card.Text as="div">
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
                                                    <td>{item.tourTitle}</td>
                                                    <td>₹{item.totalPrice}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td><strong>Total Price:</strong></td>
                                                <td><strong>₹{totalPrice.toFixed(2)}</strong></td>
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
            ) : (
                <Row>
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
                  </Row>
            )}
        </Container>
    );
};

export default Cart;
