import React from 'react';
import './Header.css';
import APS from '../../assets/social/APS.png';
import GPS from '../../assets/social/GPS.png' 
import { Container, Row , Image, Col} from 'react-bootstrap';
import Form from './Form.js'

const Header = () => {
    return (
        <>
          <Container fluid className="main-div">
            <Row>
                {/* this section for Rectangle div design */}
                <Col className="inner-section" data-aos="fade-right">
                    <Col sm={12}>
                        <h1 className="div-title">
                        Need a hand with your services?<br></br> Don't worry <br></br> we've got you!
                        </h1>
                    </Col>  
                      {/* <p>Variety of services. <strong>Thousands of MAAHIRs.</strong> </p> */}
                    <Col>
                      <Col sm={12} id="app-store-sec"> 
                        <a href="https://apps.apple.com/pk/app/maahir/id1561312598" target="blank"> 
                          <Image src={APS} height="176px" alt="App store Link" ></Image> 
                        </a>
                      </Col>

                      <Col sm={12} id="google-store-sec">
                        <a href="https://play.google.com/store/apps/details?id=com.maahir" target="blank"> 
                          <Image src={GPS} height="115px" alt="App store Link" ></Image> 
                        </a>
                      </Col>
                    </Col>  
                </Col>
                <Col>
                        <Form />
                </Col>
            </Row>
          

          </Container>  

        </>
    )
}

export default Header;
