import React from 'react';
import Footer from '../../Footer/Footer';
import './AboutUs.css';
import HeaderHeading from '../../Header/HeaderHeading';
import plumb from '../../../assets/plumb.png';
import graphics from '../../../assets/graphics9.png';
import { Col, Container, Row ,Image } from 'react-bootstrap';


const AboutUs = () => {
  return(
    <>
        <HeaderHeading heading="About US" />

        <Container fluid className="about-section">
        <Container>
            <Row>
              <Col md={6} className="ms-auto ">
                <p className="para"  data-aos="fade-right">We established Cutting Edge Group towards the end of 2009, to fill the gap in the region's communications industry. We have expanded our services so that we are better equipped to reach the consumers, enabling us to offer an array of solutions that will actively connect with them through strategic communication channels. Now we offer specialized services in Interactive Digital Marketing, Branding, Public Relations, Marketing, Events, Business Development and Information Technology.</p>
              </Col>
              

              <Col md={6} className="img-container " >
                  <Row className="img-section">
                      <Col lg={6} >
                        <Image src={plumb} alt="Plumber pic" height="200px" data-aos="fade-up"/>
                      </Col>

                      <Col lg={6} >
                        <Image src={plumb}  alt="Plumber pic" height="200px" data-aos="fade-up"/>
                      </Col>

                       <Col lg={6} >
                        <Image src={graphics}  alt="Plumber pic"  height="200px" data-aos="fade-up" />
                      </Col>

                       <Col lg={6} >
                        <Image src={graphics}  alt="Plumber pic" height="200px" data-aos="fade-up" />
                      </Col>
                  </Row>      
              </Col>

            <div className="lower-para">
              <div className="row">
                  <div className="col-md-12">
                      <p  data-aos="fade-right">
                        We have developed an integrated marketing communications network to fill in the gap in the communication industry.

                        To keep up with the business dynamics of the media industry, Cutting Edge Group offer specialized services in Interactive Digital Marketing, Branding, Public Relations, Marketing, Events, Business Development and Information Technology.

                        Over the past few years, we have expanded our services so that we are better equipped to reach the consumers, enabling us to offer an array of solutions that will actively connect with them through strategic communication and utilize marketing campaigns to expand our market base.
                      </p>
                  </div>
              </div>
          </div>
      </Row>
      </Container>
      </Container>
   <Footer />

    </>
  );
}

export default AboutUs;