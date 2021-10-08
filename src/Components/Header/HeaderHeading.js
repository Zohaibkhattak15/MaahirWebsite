import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './HeaderHeading.css';

const HeaderHeading = (props) => {
    return (
        <>
          <Container fluid id="main-div">
           <Container>
            <Row>
                {/* this section for Rectangle div design */}
                <div className="inner-section" data-aos="fade-right">  
                    <h1>{props.heading}</h1>
                </div>
              </Row>
            </Container>
          </Container>  
        </>
    )
}

export default HeaderHeading;
