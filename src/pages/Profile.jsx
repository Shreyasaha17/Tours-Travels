import React from 'react'
import { Card, Container } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';


const Profile = () => {
    const user=useSelector(state=>state.auth.user)

  return (
    <>
     <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: '50%' }}>
        <Card.Body>
          <Card.Title>Profile Information</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Name:</strong> {user.firstname} {user.lastname}</ListGroup.Item>
            <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
            <ListGroup.Item><strong>Password:</strong> {user.password}</ListGroup.Item>
            <ListGroup.Item><strong>Phone no:</strong> {user.phno}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}

export default Profile