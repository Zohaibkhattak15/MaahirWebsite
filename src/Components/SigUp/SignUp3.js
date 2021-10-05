import React,{useEffect} from 'react';
import './SignUp3.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Container , Row , Image, Col } from 'react-bootstrap';

const SignUp3 = () => {

    /* This state is basically initilizing the animation on scroll */
    useEffect(() => {
       Aos.init({duration : 2000})
    }, []);

    return (
        <>           
            <Container fluid className="g-0">
                <Row className="g-0">
                    {/* div container for left side  */}
                    <Col md={6}>
                        <Col className="leftside" >
                                <Image src="./images/tl.png" data-aos="fade-right" alt="left uper pic" id="upper-img" />
                                     <form className="form-div" data-aos="fade-right">
                                        <Image src="./images/logo-black.png" id="web-logo" alt="logo pic of png" />
                                        <p id="logo-below-text">Please Enter Your Verification Number</p>
                                        <Col className="verfication-boxes">
                                            <input maxlength="1" ></input>
                                            <input maxlength="1"></input>
                                            <input maxlength="1"></input>
                                            <input maxlength="1"></input>
                                            <input maxlength="1"></input>
                                            <input maxlength="1"></input>
                                        </Col>
                                        <p >Didn’t receive a verification code?</p>
                                        <input type="submit" className="button-procede"  value="Resend Code" ></input>  
                                </form>
                            </Col>
                    </Col>
                {/* Div container for right side    */}
                    <Col lg={6} >
                            <Col className="rightside" >
                                <Image src="./images/plumb.png" id="right-side-img" data-aos="fade-left" height="450px" alt="plumber png pic" />
                            </Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SignUp3;
