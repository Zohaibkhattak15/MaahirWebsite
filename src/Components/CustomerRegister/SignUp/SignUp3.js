import React,{useEffect} from 'react';
import './SignUp3.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Container , Row , Image, Col } from 'react-bootstrap';
import tl from '../../../assets/tl.png';
import logoblack from '../../../assets/logo-black.png';
import plumb from '../../../assets/plumb.png';
import Footer from '../../Footer/Footer';


const SignUp3 = () => {

    useEffect(() => {
       Aos.init({duration : 2000})
    }, []);

    return (
        <>           
            <Container fluid className="g-0">
                <Row className="g-0">
                    {/* div container for left side  */}
                    <Col md={6}>
                        <Col id="leftportion" >
                                <Image src={tl} data-aos="fade-right" alt="left uper pic" id="upper-img" />
                                     <form id="formdiv" data-aos="fade-right">
                                        <Image src={logoblack} id="web-logo" alt="logo pic of png" />
                                        <p id="logo-below-text">Please Enter Your Verification Number</p>
                                        <Col id="verficationboxes">
                                            <input className='OTP' maxlength="1" />
                                            <input className='OTP' maxlength="1" />
                                            <input className='OTP' maxlength="1" />
                                            <input className='OTP' maxlength="1" />
                                            <input className='OTP' maxlength="1" />
                                            <input className='OTP' maxlength="1" />
                                        </Col>
                                        
                                        <p id="logo-below-text">Didn’t receive a verification code?</p>
                                        <input type="submit" id="buttonprocede"  value="Resend Code" ></input>  
                                </form>
                            </Col>
                    </Col>
                {/* Div container for right side    */}
                    <Col lg={6} >
                            <Col id="rightportion" >
                                <Image src={plumb} id="right-side-img" data-aos="fade-left" height="450px" alt="plumber png pic" />
                            </Col>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default SignUp3;
