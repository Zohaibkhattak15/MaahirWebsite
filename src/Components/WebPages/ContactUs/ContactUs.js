import React,{useState} from 'react';
import Footer from '../../Footer/Footer';
import HeaderHeading from '../../Header/HeaderHeading';
import { Col , Container, Row } from 'react-bootstrap';
import './ContactUs.css';
import TextField from '@mui/material/TextField';
import Maps from './Maps'



const ContactUs = () => {

    const [alpha, setAlpha] = useState();

   const AlphaOnly = (e) =>{
    const useval = /^[a-zA-Z]*$/ ;
    if (e.target.value ==='' || useval.test(e.target.value)) {
        setAlpha(e.target.value);
    } 
} 

  return( 
    <>
              <HeaderHeading heading="Contact US" />
                <section className="get_in_touch">
                  <Container fluid>
                      <Row   data-aos="fade-right">
                        <Col md={6} sm={12} className='pt-5' style={{cursor :'pointer'}}>
                            <Row className='pb-4'>
                              <Col lg={5} className='d-flex justify-content-end'>
                                <i style={{backgroundColor:'#f76300' , borderRadius :'100px', width :'80px' , display: 'flex' , justifyContent:'center' , alignItems : 'center' }} class="fa fa-2x fa-map-marker" aria-hidden="true"></i>
                              </Col>
                              <Col lg={7} className='justify-content-start'>
                                    <h3  style={{fontSize:'30px' , lineHeight: '39px' , fontWeight:'700' ,}}>Address</h3>
                                    <p>info@maahirpro.com</p>
                              </Col>
                            </Row>
                            <Row className='pb-4'>
                              <Col lg={5} className='d-flex justify-content-end'>
                              <i style={{backgroundColor:'#f76300' , borderRadius :'100px', width :'80px' , display: 'flex' , justifyContent:'center' , alignItems : 'center' }} class="fa fa-2x fa-phone" aria-hidden="true"></i>

                              </Col>
                              <Col lg={7} className='justify-content-start'>
                                    <h3  style={{fontSize:'30px' , lineHeight: '39px' , fontWeight:'700' ,}}>Contact Number</h3>
                                    <p>(+92) 51 2305301</p>
                              </Col>
                            </Row>
                            <Row className='pb-4'>
                              <Col lg={5} className='d-flex justify-content-end'>
                              <i style={{backgroundColor:'#f76300' , borderRadius :'100px', width :'80px' , display: 'flex' , justifyContent:'center' , alignItems : 'center' }} class="fa fa-2x fa-whatsapp" aria-hidden="true"></i>
                              </Col>
                              <Col lg={7} className='justify-content-start'>
                                    <h3  style={{fontSize:'30px' , lineHeight: '39px' , fontWeight:'700' ,}}>WhatsApp Number</h3>
                                    <p>info@maahirpro.com</p>
                              </Col>
                            </Row>
                            <Row className='pb-4'>
                              <Col lg={5} className='d-flex justify-content-end '>
                                <i style={{backgroundColor:'#f76300' , borderRadius :'100px', width :'80px' , display: 'flex' , justifyContent:'center' , alignItems : 'center' }} class="fa fa-2x fa-envelope" aria-hidden="true"></i>
                              </Col>
                              <Col lg={7} className='justify-content-start'>
                                    <h3  style={{fontSize:'30px' , lineHeight: '39px' , fontWeight:'700' ,}}>Email Address</h3>
                                    <p>info@maahirpro.com</p>
                              </Col>
                            </Row>
                        </Col>

                        {/* This is the form section */}
                        <Col md={6} sm={12}>
                            <Row>
                              <Col  className='pt-5 d-flex justify-content-center' >
                                  <TextField  
                                  label="Enter Your Full Name" 
                                  variant="filled" 
                                  style={{width:'500px'}}
                                  onChange={AlphaOnly} 
                                  value={alpha}

                                  />
                              </Col>
                            </Row>
                            <Row>
                              <Col  className='pt-5 d-flex justify-content-center' >
                                  <TextField  
                                  label="0340 1123456" 
                                  variant="filled" 
                                  style={{width:'500px'}} 

                                  />
                              </Col>
                            </Row>
                            <Row>
                              <Col  className='pt-5 d-flex justify-content-center' >
                                <TextField
                                  variant="filled"
                                  style={{width:'500px'}}
                                  multiline
                                  rows={4}
                                  label="Your Message"
                                  />
                              </Col>
                            </Row>
                              <Row>
                                <Col  className='pt-5 d-flex justify-content-center'>
                                    <input type="submit" id="sendMessage"  value="Send Message" />
                                </Col>
                              </Row>    
                        </Col>    
                      </Row>
                      <Row>
                          <Col>
                            <Maps />
                          </Col>
                      </Row>
                  </Container>
              </section>

                  

    <Footer />
    </>
  );
}

export default ContactUs;