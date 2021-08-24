import React from 'react';
import './HeaderHeading.css';

const HeaderHeading = (props) => {
    return (
        <>
          <div className="Container-fluid " id="main-div">
           <div className="container">
            
            <div className="row">
                {/* this section for Rectangle div design */}
                <div className="inner-section" data-aos="fade-right">
                     
                    <h1>{props.heading}</h1>

                </div>

              </div>

            </div>
          </div>  
        </>
    )
}

export default HeaderHeading;
