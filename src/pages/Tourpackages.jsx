/* eslint-disable react/no-unescaped-entities */
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';


const Tour = () => {

  return (
    <>
    <p className='heading'>Explore the World</p>
      <Container>
        <Row className='mt-5 bg-dark'  >

          <Col lg={4} md={6} sm={12} className='bg-transparent p-4'>
           <Card className='bg-transparent text-white p-0'>
              <Card.Img variant="top" src="/images/kerala.jpg" className='card-images' />
              <Card.Body>
                <Card.Title>Kerala</Card.Title>
                <Card.Text>
                   Visit to Kerala will give you a gratifying experience and peace.</Card.Text>
                <Button variant="outline-light">Explore</Button>
                <span style={{color:'yellow',paddingLeft:'10px',fontSize:'20px'}}>₹ 24000<span style={{color:'white',fontSize:'16px'}}>/person</span></span>
              </Card.Body>
            </Card>
          </Col>

          
          <Col lg={4} md={6} sm={12} className='bg-dark p-4'>
           <Card className='bg-transparent text-white p-0'>
              <Card.Img variant="top" src="/images/bali.jpg" className='card-images'/>
              <Card.Body>
                <Card.Title>Bali</Card.Title>
                <Card.Text>
                   Visit to Kerala will give you a gratifying experience and peace.</Card.Text>
                <Button variant="outline-light">Explore</Button>
                <span style={{color:'yellow',paddingLeft:'10px',fontSize:'20px'}}>₹ 72000<span style={{color:'white',fontSize:'16px'}}>/person</span></span>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4} md={6} sm={12} className='bg-dark p-4'>
           <Card className='bg-transparent text-white p-0'>
              <Card.Img variant="top" src="/images/dubai.jpg" className='card-images'/>
              <Card.Body>
                <Card.Title>Dubai</Card.Title>
                <Card.Text>
                   Visit to Kerala will give you a gratifying experience and peace.</Card.Text>
                <Button variant="outline-light">Explore</Button>
                <span style={{color:'yellow',paddingLeft:'10px',fontSize:'20px'}}>₹ 134000<span style={{color:'white',fontSize:'16px'}}>/person</span></span>
              </Card.Body>
            </Card>
          </Col>




          <Col lg={4} md={6} sm={12} className='bg-transparent p-4'>
           <Card className='bg-transparent text-white p-0'>
              <Card.Img variant="top" src="/images/maldives.jpg" className='card-images' />
              <Card.Body>
                <Card.Title>Maldives</Card.Title>
                <Card.Text>
                   Visit to Kerala will give you a gratifying experience and peace.</Card.Text>
                <Button variant="outline-light">Explore</Button>
                <span style={{color:'yellow',paddingLeft:'10px',fontSize:'20px'}}>₹ 120000<span style={{color:'white',fontSize:'16px'}}>/person</span></span>
              </Card.Body>
            </Card>
          </Col>

          
          <Col lg={4} md={6} sm={12} className='bg-dark p-4'>
           <Card className='bg-transparent text-white p-0'>
              <Card.Img variant="top" src="/images/kashmir.jpg"className='card-images'/>
              <Card.Body>
                <Card.Title>Kashmir</Card.Title>
                <Card.Text>
                   Visit to Kerala will give you a gratifying experience and peace.</Card.Text>
                <Button variant="outline-light">Explore</Button>
                <span style={{color:'yellow',paddingLeft:'10px',fontSize:'20px'}}>₹ 58000<span style={{color:'white',fontSize:'16px'}}>/person</span></span>
              </Card.Body>
            </Card>
          </Col>

          
          <Col lg={4} md={6} sm={12} className='bg-transparent p-4'>
           <Card className='bg-transparent text-white p-0'>
              <Card.Img variant="top" src="/images/ladakh.jpg" className='card-images' />
              <Card.Body>
                <Card.Title>Ladakh</Card.Title>
                <Card.Text>
                   Visit to Kerala will give you a gratifying experience and peace.</Card.Text>
                <Button variant="outline-light">Explore</Button>
                <span style={{color:'yellow',paddingLeft:'10px',fontSize:'20px'}}>₹ 68000<span style={{color:'white',fontSize:'16px'}}>/person</span></span>
              </Card.Body>
            </Card>
          </Col>



          
          <Col lg={4} md={6} sm={12} className='bg-dark p-4'>
           <Card className='bg-transparent text-white p-0'>
              <Card.Img variant="top" src="/images/goa.jpg" className='card-images'/>
              <Card.Body>
                <Card.Title>Goa</Card.Title>
                <Card.Text>
                   Visit to Kerala will give you a gratifying experience and peace.</Card.Text>
                <Button variant="outline-light">Explore</Button>
                <span style={{color:'yellow',paddingLeft:'10px',fontSize:'20px'}}>₹ 51000<span style={{color:'white',fontSize:'16px'}}>/person</span></span>
              </Card.Body>
            </Card>
          </Col>



          
          <Col lg={4} md={6} sm={12} className='bg-dark p-4'>
           <Card className='bg-transparent text-white p-0'>
              <Card.Img variant="top" src="/images/paris.jpg"className='card-images'/>
              <Card.Body>
                <Card.Title>Paris,France</Card.Title>
                <Card.Text>
                   Visit to Kerala will give you a gratifying experience and peace.</Card.Text>
                <Button variant="outline-light">Explore</Button>
                <span style={{color:'yellow',paddingLeft:'10px',fontSize:'20px'}}>₹ 233000<span style={{color:'white',fontSize:'16px'}}>/person</span></span>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4} md={6} sm={12} className='bg-dark p-4'>
           <Card className='bg-transparent text-white p-0'>
              <Card.Img variant="top" src="/images/venice.jpg" className='card-images'/>
              <Card.Body>
                <Card.Title>Venice,Italy</Card.Title>
                <Card.Text>
                   Visit to Kerala will give you a gratifying experience and peace.</Card.Text>
                <Button variant="outline-light">Explore</Button>
                <span style={{color:'yellow',paddingLeft:'10px',fontSize:'20px'}}>₹ 218000<span style={{color:'white',fontSize:'16px'}}>/person</span></span>
              </Card.Body>
            </Card>
          </Col>

          
        </Row>

      </Container>

    </>
  )
}

export default Tour


