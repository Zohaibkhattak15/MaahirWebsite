import React from 'react'
import { Container , Row , Col, Form, Button } from 'react-bootstrap';
import './form.scss';

const form = () =>  {
    return (
        <>
          <Container>
            <Form id="form-styling" >
                    <Form.Label className='mb-4' style={{color:'white' , fontSize:'1.5em' , display:'flex' , justifyContent:'center'}}>Book Your Service Now</Form.Label>
                    <Row>
                        <Col xs={12} md={12} className="mb-2">
                            <Form.Control placeholder="Enter Your name" />
                        </Col>
                        <Col xs={12} md={12} className="mb-2">
                            <Form.Control placeholder="0307 XXXXXXX" />
                        </Col>
                        <Col xs={12} md={12} className="mb-2">
                            <Form.Control placeholder="Select Service" />
                        </Col>
                        <Col xs={12} md={12} className="mb-2">
                            <Form.Control placeholder="Select City" />
                        </Col>
                        <Col xs={12} md={12} className="mb-2">
                            <Form.Control placeholder="Your Address" />
                        </Col>
                        <Col xs={12} md={12} className="mt-3">
                            <Button style={{width:'380px'}}>Book Now</Button>
                        </Col>
                    </Row>
                </Form>
          </Container>  
        </>
    )
}

export default form
