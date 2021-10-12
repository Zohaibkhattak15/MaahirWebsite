import React from 'react';
import { Container, Row , Col, Button} from 'react-bootstrap';
import './about.css'

const AboutUs = () => {
    return (
        <>
        <Container fluid style={{  backgroundColor:'#fff7df'}}>
            <Container className='py-5' data-aos="fade-right">
                <Row>
                    <Col lg={12} className='d-flex justify-content-center'>
                        <h1 style={{fontSize:'40px' , lineHeight: '39px' , fontWeight:'700' ,}}>About MaahirPro</h1>
                    </Col>
                    <Col lg={12} className='d-flex justify-content-center'>
                        <hr style={{width:'100px' , color:'#fbb11d' , height:'4px'}}></hr>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <p style={{fontWeight:'520', lineHeight:'24px', fontFamily: "open sans , sans-serif" ,fontSize:'16px' , textAlign:'center'}}>
                            At Maahir, we provide you with a variety of services that simplify your everyday living. All you have to do is, Place request, Sit back and relax. It is a marketplace for home and professional services where you can find and get every type of service right at your doorstep on a single platform.
                        </p>
                        <Col  className='d-flex justify-content-center py-4'>
                            <Button id='customer'>Become A Customer</Button>
                        </Col>
                    </Col>
                </Row>
                
            </Container>
                <Row>
                    <Col className='py-4'>
                        <hr></hr>
                    </Col>
                </Row>
        </Container>    
        </>
    )
}

export default AboutUs
