import React,{useState} from 'react';
import Footer from '../../Footer/Footer';
import HeaderHeading from '../../Header/HeaderHeading';
import './ContactUs.css';
import plumb from '../../../assets/plumb.png';
import tl from '../../../assets/tl.png';
// import tld from '../../../assets/tld.png';
import { Col , Container, Image, Row } from 'react-bootstrap';


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
              <Col lg={12} style={{backgroundColor:"#fff7df"}}>
                    <Image src={tl} className="img-style img-fluid" data-aos="fade-right" alt="Yellow pic"/>
              </Col>
                <section className="get_in_touch">
                    <Container fluid >
                      <Row>

                        <Col md={6} className="ms-auto order-2 no-gutters" style={{background:"#F76300"}}>
                            <Col className=" rightside"> 
                                <Image src={plumb} data-aos="fade-right" id="plumber"  alt="Pic of worker" />
                            </Col>
                        </Col>

                        <Col md={6} className="mb-5 mb-md-0 no-gutters" >
                              <h1 className="title" data-aos="fade-right" data-aos-delay="">
                                    Get In Touch
                              </h1>
                        <form>
                          <Row className="contact-form"  >
                              
                              <Col md={6} className="form-field">
                                  <input type="text" name="" id="name" className="input-text" value={alpha} onChange={AlphaOnly}  required />
                                  <label for="name" className="label">Name</label> 
                              </Col>

                              <Col md={6} className="form-field">
                                  <input type="email" name="" id="email" className="input-text"  required />
                                  <label for="email" className="label">Email</label> 
                              </Col>

                              <Col md={6} className="form-field">
                                  <input type="subject" name="" id="subject" className="input-text"  />
                                  <label for="subject" className="label">Subject</label> 
                              </Col>

                              <Col md={12}  className="form-field">
                                  <input type="message" name="" id="message" className="input-text" required />
                                  <label for="message" className="label">Message</label> 
                              </Col>

                              <Col md className="form-field d-flex justify-content-center"  >
                                <input type="Submit-btn" className="btn btn-primary d-block "  value="Submit" />
                              </Col>  
                        </Row>
                        
                      </form>
                    </Col>
                  </Row>
                </Container>
              </section>

                  

    <Footer />
    </>
  );
}

export default ContactUs;