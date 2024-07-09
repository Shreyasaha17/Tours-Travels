/* eslint-disable react/no-unescaped-entities */

import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const Dashboard = () => {
  const user=useSelector(state=>state.auth.user)

  return (
    <>
    <Card style={{ width:'50%', margin: '20px auto', border:'4px solid black' }}>
    <Card.Body>
    <Card.Title><h2>User's Details</h2></Card.Title>
    <Card.Text>Email : {user.email}</Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Dashboard



