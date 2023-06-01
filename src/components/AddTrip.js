import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';



function AddTrips() {
  return (
    <>
        <Container>
            <Form>
                <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title Trip</Form.Label>
                    <Form.Control className='bg-secondary'  type="email"  />
                </Form.Group>
                <Form.Label className='mt-3'>Country</Form.Label>
                <Form.Select className='bg-secondary' aria-label="Default select example">
                <Form.Label ></Form.Label>
                    <option>Country</option>
                    <option value="1">Indonesia</option>
                    <option value="2">Germany</option>
                    <option value="3">Thailand</option>
                </Form.Select>
                <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Accommodation</Form.Label>
                    <Form.Control className='bg-secondary' type="email"  />
                </Form.Group>
                <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Transportation</Form.Label>
                    <Form.Control className='bg-secondary' type="email"  />
                </Form.Group>
                <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Edit</Form.Label>
                    <Form.Control className='bg-secondary' type="text"  />
                </Form.Group>
                <Row className="g-2">
                <Form.Label className='mt-3'>Edit</Form.Label>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Email address">
                        <Form.Control type="email"  />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel
                        controlId="floatingSelectGrid"
                        label="Works with selects"
                        >
                        <Form.Select className='bg-secondary' aria-label="Floating label select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Date Trip</Form.Label>
                    <Form.Control className='bg-secondary' type="text"  />
                </Form.Group>
                <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control className='bg-secondary' type="text"  />
                </Form.Group>
                <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Quota</Form.Label>
                    <Form.Control className='bg-secondary' type="text"  />
                </Form.Group>
                <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control className='bg-secondary' as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mt-3 ">
                    <Form.Label >Default file input example</Form.Label>
                    <Form.Control className='bg-secondary' type="file" />
                </Form.Group>
                <Form.Group  controlId="formFile" className="mt-3">
                    <Link to={"/IncomeTrips"}>
                        <Button  className='mt=3'>Add Trip</Button>
                    </Link> 
                </Form.Group>
            </Form>
            
        </Container>
    
    </>
  )
}

export default AddTrips