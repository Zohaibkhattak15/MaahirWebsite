import React from 'react'
import { Container , Row , Col, Form, Button } from 'react-bootstrap';
import './form.scss';

const form = () =>  {
    return (
        <>
          <Container>
            <Form id="form-styling" className='my-5'>
                    <Form.Label className='mb-4' style={{color:'white' , fontSize:'1.5em' , display:'flex' , justifyContent:'center'}}>
                    <strong>Book Your Service Now</strong>
                    </Form.Label>
                    <Row>
                        <Col sm={12} xs={6} md={12} className="mb-2">
                            <Form.Control placeholder="Enter Your name" />
                        </Col>
                        <Col sm={12} xs={6} md={12} className="mb-2">
                            <Form.Control placeholder="0307 XXXXXXX" />
                        </Col>
                        <Col sm={12} xs={6} md={12} className="mb-2">
                            <Form.Control placeholder="Select Service" />
                        </Col>
                        <Col sm={12} xs={6} md={12} className="mb-2">
                            <Form.Control placeholder="Select City" />
                        </Col>
                        <Col sm={12} xs={6} md={12} className="mb-2">
                            <Form.Control placeholder="Your Address" />
                        </Col>
                        <Col sm={12} xs={6} md={12} className="mt-3">
                            <Button id='book-now'>Book Now</Button>
                        </Col>
                    </Row>
                </Form>
          </Container>  
        </>
    )
}

export default form
