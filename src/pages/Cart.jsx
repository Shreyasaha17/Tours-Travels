// import { Container,Table } from "react-bootstrap"
// //import { useSelector } from "react-redux";

// const Cart = () => {
//  const cart = useSelector((state) => state.auth.cart);

//   return (
//     <Container>
//       <h2 className="text-center my-4">Your Cart</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Tour Name</th>
//             <th>Members</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
            
//           </tr>
  

        
//         </tbody>
//         </Table>
//     </Container>
//   )
// }

// export default Cart


import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Table } from "react-bootstrap";
import { removeFromCart } from "../reduxstore/authSlice";

const Cart = () => {
  const cart = useSelector((state) => state.auth.cart )||[];
  const dispatch = useDispatch();

  const handleRemoveFromCart = (title) => {
    dispatch(removeFromCart(title));
  };
  

  return (
    <Container>
      <h2 className="text-center my-4">Your Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Tour Name</th>
            <th>Members</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.image} alt={item.title} style={{ width: '100px' }} />
              </td>
              <td>{item.title}</td>
              <td>{item.member}</td>
              <td>{item.price}</td>
              <td>
                <Button variant="danger" onClick={() => handleRemoveFromCart(item.title)}>
                  Remove
                </Button>
              </td>
            </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">Your cart is empty.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
