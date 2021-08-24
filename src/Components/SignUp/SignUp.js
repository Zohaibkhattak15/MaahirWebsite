import React ,{useEffect, useState} from 'react';
import './SignUp.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


function SignUp() {
    // const [PhoneNum, setPhoneNum] =useState();
    const [Pass, setPass] = useState();
    const [Num, setNum] = useState('');
        
    

    const ssetpassword = (e) => {
        
        if(e.target.value !== '' )
        {
            setPass( e.target.value)
        }
    }
 

    const checkFn = (e) => {
        console.log("function is running")
        if(Num === ''){
            setNum('03')  
        }
        
    }

    const NumOnly = (e) =>{
        const useval = /^[0-9.\b]+$/ ;
        if ( useval.test(e.target.value)) {
            setNum(e.target.value);
        } 
    } 

    const clsinput = (e) =>{
        e.target.value = "" ;
    }
 
    const SignIN=(e)=>{

        if(!Num){
            alert('PLease Enter your Mobile Number');
            return
        }
        
        if(!Pass){
            alert('Kinldy fill out the password');
            return
        }

        // console.log( Num , Pass);
        e.preventDefault();

    }
    
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
                                        <p>Sign in to your account to continue</p>
                                            <input type="text" placeholder="Enter Phone No" id="Number" maxLength="11" value={Num} onChange={NumOnly} onfocusout={clsinput}  onClick={checkFn} ></input>
                                        <input type="password" placeholder="Password" onChange={ssetpassword}></input>
                                        <div className="inner-link"> 
                                            Do You have an account? <a href="#Home">SignUp</a>
                                        </div>

                                        <input type="submit" id="button-sigin" onClick={SignIN} value="Sing in"></input>

                                        {/* <img src="./images/tld.png" data-aos="fade-right" alt="left lower pic" id="lower-img" /> */}
                                </form>
                            </div>
                    </div>
                {/* Div container for right side    */}
                    
                        <div className="col-6 " >
                                
                                <div className="rightside " >
                                    <img src="./images/plumb.png" data-aos="fade-left" height="450px" alt="plumber png pic" />
                                </div>
                        </div>
                        <div id="circle-1"></div>
                </div>
            </div>
        </>
    )
}

export default SignUp;
