/* eslint-disable react/no-unescaped-entities */
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import tourData from '../data/tourData';
import { useNavigate } from 'react-router-dom';


const Tour = () => {
  const navigate=useNavigate()

  const goTo=(tourId)=>{
    navigate(`/tourDetails/${tourId}`)
 
  }


  return (
    <>
    <p className='heading'>Explore the World</p>
      <Container fluid>
        <Row className='mt-5 p-4 m-1'  >
        {tourData.map((tour)=>(
          <Col key={tour.id} lg={4} md={6} sm={12} className='bg-transparent p-4'>
           <Card className='bg-dark text-white p-0'>
              <Card.Img variant="top" src={tour.image} className='card-images' />
              <Card.Body>
                <Card.Title>{tour.title}</Card.Title>
                <Card.Text>
                   {tour.description1}</Card.Text>
                <Button variant="outline-light"><span onClick={()=>goTo(tour.id)}>Explore</span></Button>
                <span style={{color:'yellow',paddingLeft:'10px',fontSize:'20px'}}>{tour.price}<span style={{color:'white',fontSize:'16px'}}>/person</span></span>
              </Card.Body>
            </Card>
          </Col>
        ))}

          

          
        </Row>

      </Container>

    </>
  )
}

export default Tour


