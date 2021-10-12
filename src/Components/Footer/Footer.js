import React, { useState } from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import WebLogo from '../../assets/logo-black.png';
import fb from '../../assets/social/fb.png';
import ins from '../../assets/social/ins.png';
import call from '../../assets/social/call.png';
import loc from '../../assets/social/location.png';
import mail from '../../assets/social/mail.png';
import {Container, Row , Image, Col} from 'react-bootstrap'

function Footer() {
    const [active, setactive] = useState('Home');
    return (
        <>
            <div className="Conatiner-fluid py-5">
                <div className="container">
                    <Row>
                        <Col sm={12} md={3} className="pt-3 pb-5" id="first-div" data-aos="fade-right">
                            <img src={WebLogo} style={{ cursor: 'pointer' }} className="web-logo-pic" alt="website logo" />
                            <br></br><br></br>
                            <p> <strong>At Maahir,</strong>  we provide you with a variety of services that simplify your everyday living. All you have to do is, Place request, Sit back and relax. It is a  marketplace for home and professional services where you can find and get every type of service right at your doorstep on a single platform. </p>

                            <Container className="social-links">
                                <Row>
                                    <Col sm={6} lg={2} id="fb-logo">
                                        <a href="https://www.facebook.com/maahirofficial/" target="blank"> <img src={fb} alt="fb-page-link" ></img></a>
                                    </Col>

                                    <Col sm={6} lg={2} id="insta-logo">
                                        <a href="https://www.instagram.com/maahirproofficial/" target="blank"> <img src={ins} alt="insta-page-link"></img></a>
                                    </Col>

                                </Row>

                            </Container>
                        </Col>

                        <Col sm={12} md={3} className="scnd-div pt-3 pb-5 " data-aos="fade-right">
                            <div><h5>Quick Links</h5></div>
                            <br></br>
                            <ul>
                                <li className={active === 'Home' ? 'footer-menu-active' : ' footer-menu '} onClick={() => setactive('Home')} >
                                    <Link to='/' className="footer-nav" >
                                        Home
                                    </Link>
                                </li>
                                <li className={active === 'Services' ? 'footer-menu-active' : ' footer-menu '} onClick={() => setactive('Services')}>
                                    <Link to='/services' className="footer-nav">
                                        Services
                                    </Link>
                                </li>
                                <li className={active === 'About Us' ? 'footer-menu-active' : ' footer-menu '} onClick={() => setactive('About Us')}>
                                    <Link to='/about-us' className="footer-nav">
                                        About Us
                                    </Link>
                                </li>
                                <li className={active === 'Contact Us' ? 'footer-menu-active' : 'footer-menu  '} onClick={() => setactive('Contact Us')}>
                                    <Link to='/contact-us' className="footer-nav">
                                        Contact Us
                                    </Link>
                                </li>

                            </ul>
                        </Col>

                        <Col sm={12} md={3} className="pt-3 pb-3" data-aos="fade-right">
                                <div>
                                    <h5 className="px-4">Contact Us</h5>
                                </div>
                            <br></br>
                            <p style={{ cursor: 'pointer' }}>
                                ‎<i class="fas fa-phone-volume " /> (+92) 51 2305301<br></br><br></br>
                                <i class="fas fa-envelope-open-text" />info@maahirpro.com<br></br><br></br>
                                Get Access to Unlimited
                                Resources. Everywhere,Everytime!<br></br>
                            </p>
                        </Col>
                        <Col sm={12} md={3} className="pb-3" data-aos="fade-right">
                            <br></br><br></br>
                            <ul className="extra-nav">
                                <li>
                                    <Link to='/privacy-policy' id="extra-men">
                                        Privacy Policy
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to='/pricing-policy' id="extra-men">
                                        Pricing Policy
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to='/refund-policy' id="extra-men">
                                        Refund Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/terms-and-conditions' id="extra-men">
                                        Terms and Conditons
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/faq' id="extra-men">
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    <div>
                        <hr style={{ color: "white" }}></hr>
                    </div>

                    <Container >
                        <Row id="lower-footer-sec" >
                            <Col sm={12} md={4}  className="d-flex text-center mb-4 " data-aos="fade-right">
                                <Image src={loc} alt="loctaion logo" id="loct-logo" />
                                <h2 style={{ color: "white", paddingTop: ".9em", fontFamily: "sanserif", paddingLeft: ".8em" }} id="isl-head">Islamabad</h2>
                            </Col>

                            <Col sm={12} md={4} className="d-flex text-center mb-4" data-aos="fade-right">
                                <Image src={call} alt="call logo " id="call-logo" />
                                <h5 style={{ color: "white", paddingTop: "2em", fontFamily: "sanserif" }} id="phone-heading">(+92) 51 2305301</h5>
                            </Col>

                            <Col sm={12} md={4} className="d-flex text-center mt-3" data-aos="fade-right">
                                <Image src={mail} alt="mail logo" id="mail-logo" />
                                <h5 style={{ color: "white", paddingTop: "1.3em", fontFamily: "sanserif" }} id="mail-heading">info@maahirpro.com</h5>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <Col lg={12} id="reserved-col">
                <h6 style={{ paddingTop: ".6em" }}>All Right Reserved | MAAHIR 2021</h6>
            </Col>


        </>
    )
}

export default Footer;
