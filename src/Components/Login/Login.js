import React ,{useEffect, useState} from 'react';
import './Login.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight ,FaEye } from "react-icons/fa";



function Login() {
    // const [PhoneNum, setPhoneNum] =useState();
    const [Pass, setPass] = useState();
    const [Num, setNum] = useState('');
     let eyeicon=false;
        
    

    const ssetpassword = (e) => {
        
        if(e.target.value !== '' )
        {
            setPass( e.target.value)
        }
    }
 

    const setNums = (e) => {
        console.log("function is running")
        if(Num === ''){
            setNum('03')  
        }
        
    }

    const NumOnly = (e) =>{
        const useval = /^[0-9.\b]+$/ ;
        if (e.target.value ==='' || useval.test(e.target.value)) {
            setNum(e.target.value);
        } 
    } 


 
    const SignIN=(e)=>{

        if(!Num){
            alert('PLease Enter your Mobile Number');
            e.preventDefault();
            return
        }
        
        if(!Pass){
            alert('Kinldy fill out the password');
            e.preventDefault();
            return
        }

        // console.log( Num , Pass);
        

    }

    const removevalue = () =>{
        console.log("function is running so fast")
        if(Num === '03'){
            setNum('');
        }
    }

    const toggleeye = () => {
           if(eyeicon) {
               document.getElementById("password").setAttribute("type" , "password");
               eyeicon = false;
           } 
           else{
               document.getElementById("password").setAttribute("type" , "text");
               eyeicon = true;
           }
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
                                        <input type="text" placeholder="Enter Phone No" id="Number" maxLength="11" onBlur={removevalue} value={Num} onChange={NumOnly}  onClick={setNums} ></input>
                                        <input type="password" placeholder="Password" id="password" onChange={ssetpassword}></input><FaEye id="eye-icon" onClick={toggleeye} /> 
                                        <div className="inner-link"> 
                                            Do You have an account? <a href="#Home">SignUp</a>
                                        </div>

                                        <input type="submit" id="button-sigin" onClick={SignIN} value="Sing in"></input> <span><FaArrowRight id="right-icon" /></span> 

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
                </div>
            </div>
        </>
    )
}

export default Login;
