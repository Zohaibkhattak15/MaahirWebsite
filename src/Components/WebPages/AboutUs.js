import React from 'react';
import Footer from '../Footer/Footer';
import './AboutUs.css';
import HeaderHeading from '../Header/HeaderHeading';
import plumb from '../../assets/plumb.png';
import graphics from '../../assets/graphics9.png';


const AboutUs = () => {
  return(
    <>
        <HeaderHeading heading="About US" />

        <div className="container-fluid about-section">
        <div className="container ">
            <div className="row " >


              <div className="col-md-6 ms-auto ">
               
                <p className="para"  data-aos="fade-right">We established Cutting Edge Group towards the end of 2009, to fill the gap in the region's communications industry. We have expanded our services so that we are better equipped to reach the consumers, enabling us to offer an array of solutions that will actively connect with them through strategic communication channels. Now we offer specialized services in Interactive Digital Marketing, Branding, Public Relations, Marketing, Events, Business Development and Information Technology.</p>
              </div>
              

              <div className="col-md-6 img-container " >
                  <div className="row img-section">
                      <div className="col-6" >
                        <img src={plumb} alt="Plumber pic" height="200px" data-aos="fade-up"/>
                      </div>

                      <div className="col-6" >
                        <img src={plumb}  alt="Plumber pic" height="200px" data-aos="fade-up"/>
                      </div>

                       <div className="col-6" >
                        <img src={graphics}  alt="Plumber pic"  height="200px" data-aos="fade-up" />
                      </div>

                       <div className="col-6" >
                        <img src={graphics}  alt="Plumber pic" height="200px" data-aos="fade-up" />
                      </div>
                  </div>      
              </div>

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



      </div>
      </div>
      </div>


      <Footer />

    </>
  );
}


export default AboutUs;