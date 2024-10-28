import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/Row';
import { Container, Form } from "react-bootstrap"; // Importing Form from react-bootstrap

const AddTour = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    desc1: '',
    desc2: '',
    duration: '',
    plan: '',
    time: '',
    image: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {

      
      const admintoken = localStorage.getItem('admintoken');
      const planArray = formData.plan.split('\n').map(item => item.trim()).filter(item => item); // Split by new lines and remove empty entries
      const dataToSubmit = { ...formData, plan: planArray }; // Prepare the data for submission


      const response = await fetch('http://localhost:7001/admin/tours', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${admintoken}`

        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error('Failed to add tour');
      }

      const result = await response.json();
      console.log(result);
       alert(result.message);

      // Reset form data
      setFormData({
        title: '',
        price: '',
        desc1: '',
        desc2: '',
        duration: '',
        plan: '',
        time: '',
        image: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
      });
    } catch (error) {
      console.error(error);
      alert('Failed to add tour.');
    }
  };

  return (
    <>
    <Container>
    <Form onSubmit={handleSubmit} className="text-dark">
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Title
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="text-dark" type="text" name="title" value={formData.title} onChange={handleChange} required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Price
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="text-dark" type="number" name="price" value={formData.price} onChange={handleChange} required />
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Description 1
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="text-dark" as="textarea" rows={3} name="desc1" value={formData.desc1} onChange={handleChange} required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Description 2
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="text-dark" as="textarea" rows={3} name="desc2" value={formData.desc2} onChange={handleChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Duration
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="text-dark" type="text" name="duration" value={formData.duration} onChange={handleChange} required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Plan
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="text-dark" as="textarea" rows={20} name="plan" value={formData.plan} onChange={handleChange} required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Time
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="text-dark" type="text" name="time" value={formData.time} onChange={handleChange} required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Main Image URL
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="text-dark" type="text" name="image" value={formData.image} onChange={handleChange} required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Image 1 URL
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="text-dark" type="text" name="image1" value={formData.image1} onChange={handleChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Image 2 URL
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="text-dark" type="text" name="image2" value={formData.image2} onChange={handleChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Image 3 URL
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="text-dark" type="text" name="image3" value={formData.image3} onChange={handleChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Image 4 URL
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="text-dark" type="text" name="image4" value={formData.image4} onChange={handleChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Image 5 URL
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="text-dark" type="text" name="image5" value={formData.image5} onChange={handleChange} />
        </Col>
      </Form.Group>

      <button type="submit">Add Tour</button>
    </Form>
    </Container>
    </>
  );
};

export default AddTour;
