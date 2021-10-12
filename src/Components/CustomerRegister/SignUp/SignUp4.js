import React,{useEffect, useState} from 'react';
import './SignUp4.css';
import Aos from 'aos';
import 'aos/dist/aos.css';



function SignUp4() {

    
    /* This state is basically initilizing the animation on scroll */
    
    useEffect(() => {
       Aos.init({duration : 2000})
    }, []);

    return (
        <>

           
            <div className="container-fluid g-0">
                <div className="row g-0">
                
                    {/* div container for left side  */}
                    <div className="col-6 ">
                    
                        <div className="leftside" >
                                        <img src="./images/tl.png" data-aos="fade-right" alt="left uper pic" id="upper-img"></img>
                                    
                                        
                                <form className="form-div" data-aos="fade-right">

                                        <img src="./images/logo-black.png" id="web-logo" alt="logo pic of png"></img>
                                        <p id="logo-below-text">Please Enter Your Verification Number</p>
                                        <div className="verfication-boxes">
                                            <input maxlength="1" ></input>
                                            <input maxlength="1"></input>
                                            <input maxlength="1"></input>
                                            <input maxlength="1"></input>
                                            <input maxlength="1"></input>
                                            <input maxlength="1"></input>
                                        </div>

                                        <div id="popverifyscreen" data-aos="fade-down">
                                                <h3>Verification Success</h3>
                                                <h4>Verification is successful now  <br></br>you can use the app.</h4>
                                                <img src="./images/Vector3.png" alt="its a vector ima"></img>
                                        </div>

                                        <a href="#">Didn’t receive a verification code?</a>
                                        <input type="submit" className="button-procede"  value="Resend Code" ></input>  
                                </form>
                            </div>
                        
          


                    </div>
                {/* Div container for right side    */}
                    
                    <div className="col-6 " >
                            
                            <div className="rightside" >
                                <img src="./images/plumb.png" id="right-side-img" data-aos="fade-left" height="450px" alt="plumber png pic" />
                            </div>

                                
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp4;
