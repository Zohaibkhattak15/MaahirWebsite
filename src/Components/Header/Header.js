import React from 'react';
import './Header.css';
import APS from '../../assets/social/APS.png';
import GPS from '../../assets/social/GPS.png' 

const Header = () => {
    return (
        <>
          <div className="Container-fluid main-div">
           <div className="container">
            
            <div className="row">
                {/* this section for Rectangle div design */}
                <div className="inner-section" data-aos="fade-right">
                      <h1 className="div-title">
                      Need a hand with your services?<br></br> Don't worry <br></br> we've got you!
                      </h1>
                      {/* <p>Variety of services. <strong>Thousands of MAAHIRs.</strong> </p> */}

                      <div id="app-store-sec"> 
                        <a href="https://apps.apple.com/pk/app/maahir/id1561312598" target="_blank"> <img src={APS} height="176px" alt="App store Link" ></img> </a>
                      </div>
                      <div id="google-store-sec">
                        <a href="https://play.google.com/store/apps/details?id=com.maahir" target="_blank"> <img src={GPS} height="115px" alt="App store Link" ></img> </a>
                      </div>
                 

                </div>

              </div>

            </div>
          </div>  
        </>
    )
}

export default Header;
